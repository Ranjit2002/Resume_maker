/* ==========================================================================
   ResumeCraft — Editor Logic (Vanilla JS)
   Dynamic forms, repeaters, live real-time preview, debounced autosave
   ========================================================================== */

let currentResume = null;
let saveDebounceTimer = null;
let currentZoom = 1;

const ACCENT_COLORS = [
  '#3b82f6', // Electric Blue
  '#10b981', // Emerald Green
  '#6366f1', // Indigo
  '#8b5cf6', // Violet
  '#0f766e', // Teal
  '#1e3a8a', // Navy Corporate
  '#e11d48', // Crimson Rose
  '#d97706', // Amber Gold
  '#1e293b'  // Slate Dark
];

const Editor = {
  init(resumeId) {
    if (resumeId) {
      currentResume = StorageService.getResumeById(resumeId);
    }
    if (!currentResume) {
      const all = StorageService.getAllResumes();
      currentResume = all.length > 0 ? all[0] : StorageService.createNewResume('My Resume');
    }

    StorageService.setActiveResumeId(currentResume.id);
    this.ensureDataStructure();
    this.populateToolbar();
    this.populateForm();
    this.renderPreview();
    this.setupEventListeners();
    PreviewScaler.init();
  },

  // Ensure all necessary keys exist in currentResume
  ensureDataStructure() {
    if (!currentResume.settings) {
      currentResume.settings = {
        template: 'modern-minimal',
        accentColor: '#3b82f6',
        fontFamily: 'sans',
        spacing: 'normal'
      };
    }
    if (!currentResume.personalInfo) currentResume.personalInfo = {};
    if (!currentResume.experiences) currentResume.experiences = [];
    if (!currentResume.education) currentResume.education = [];
    if (!currentResume.skillCategories) currentResume.skillCategories = [{ id: 'cat-1', categoryName: 'Core Skills', skills: [] }];
    if (!currentResume.projects) currentResume.projects = [];
    if (!currentResume.certifications) currentResume.certifications = [];
  },

  // Populate Editor Toolbar controls
  populateToolbar() {
    const titleInput = document.getElementById('editor-resume-title');
    if (titleInput) {
      titleInput.value = currentResume.title || 'Untitled Resume';
    }

    // Populate Template Select Dropdown
    const tplSelect = document.getElementById('editor-template-select');
    if (tplSelect) {
      tplSelect.innerHTML = RESUME_TEMPLATES.map(t => `
        <option value="${t.id}" ${t.id === currentResume.settings.template ? 'selected' : ''}>
          ${t.name} (Free)
        </option>
      `).join('');
    }

    // Populate Accent Color Swatches
    const colorGroup = document.getElementById('editor-color-picker');
    if (colorGroup) {
      colorGroup.innerHTML = ACCENT_COLORS.map(c => `
        <div class="color-dot ${c === currentResume.settings.accentColor ? 'active' : ''}" 
             data-color="${c}" 
             style="background-color: ${c};" 
             title="Select color ${c}"></div>
      `).join('');
    }

    // Font select
    const fontSelect = document.getElementById('editor-font-select');
    if (fontSelect) {
      fontSelect.value = currentResume.settings.fontFamily || 'sans';
    }

    // Spacing select
    const spacingSelect = document.getElementById('editor-spacing-select');
    if (spacingSelect) {
      spacingSelect.value = currentResume.settings.spacing || 'normal';
    }
  },

  // Populate Form Fields
  populateForm() {
    const p = currentResume.personalInfo || {};
    this.setVal('field-fullName', p.fullName);
    this.setVal('field-jobTitle', p.jobTitle);
    this.setVal('field-email', p.email);
    this.setVal('field-phone', p.phone);
    this.setVal('field-location', p.location);
    this.setVal('field-linkedin', p.linkedin);
    this.setVal('field-github', p.github);
    this.setVal('field-website', p.website);

    this.setVal('field-summary', currentResume.summary);

    // Repeaters
    this.renderExperienceList();
    this.renderEducationList();
    this.renderSkillsList();
    this.renderProjectsList();
    this.renderCertificationsList();
  },

  setVal(id, val) {
    const el = document.getElementById(id);
    if (el) el.value = val || '';
  },

  // Real-time Preview Render
  renderPreview() {
    const previewContainer = document.getElementById('resume-paper-target');
    if (!previewContainer) return;

    previewContainer.innerHTML = TemplateRenderer.render(currentResume);
    if (window.PreviewScaler) {
      window.PreviewScaler.update();
    }
  },

  // Trigger Save with Debounce
  triggerAutoSave() {
    const indicator = document.getElementById('save-status-indicator');
    if (indicator) {
      indicator.textContent = 'Saving...';
      indicator.className = 'save-indicator';
    }

    clearTimeout(saveDebounceTimer);
    saveDebounceTimer = setTimeout(() => {
      StorageService.saveResume(currentResume);
      if (indicator) {
        indicator.textContent = 'Saved ✓';
        indicator.className = 'save-indicator saved';
      }
    }, 350);
  },

  // Event Listeners Setup
  setupEventListeners() {
    // Title Input
    const titleInput = document.getElementById('editor-resume-title');
    if (titleInput) {
      titleInput.oninput = (e) => {
        currentResume.title = e.target.value;
        this.triggerAutoSave();
      };
    }

    // Template Dropdown change
    const tplSelect = document.getElementById('editor-template-select');
    if (tplSelect) {
      tplSelect.onchange = (e) => {
        currentResume.settings.template = e.target.value;
        this.renderPreview();
        this.triggerAutoSave();
      };
    }

    // Color Swatches
    const colorGroup = document.getElementById('editor-color-picker');
    if (colorGroup) {
      colorGroup.onclick = (e) => {
        const dot = e.target.closest('.color-dot');
        if (!dot) return;
        const color = dot.getAttribute('data-color');
        currentResume.settings.accentColor = color;
        colorGroup.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
        this.renderPreview();
        this.triggerAutoSave();
      };
    }

    // Font select
    const fontSelect = document.getElementById('editor-font-select');
    if (fontSelect) {
      fontSelect.onchange = (e) => {
        currentResume.settings.fontFamily = e.target.value;
        this.renderPreview();
        this.triggerAutoSave();
      };
    }

    // Spacing select
    const spacingSelect = document.getElementById('editor-spacing-select');
    if (spacingSelect) {
      spacingSelect.onchange = (e) => {
        currentResume.settings.spacing = e.target.value;
        this.renderPreview();
        this.triggerAutoSave();
      };
    }

    // Personal Info inputs
    ['fullName', 'jobTitle', 'email', 'phone', 'location', 'linkedin', 'github', 'website'].forEach(key => {
      const el = document.getElementById(`field-${key}`);
      if (el) {
        el.oninput = (e) => {
          currentResume.personalInfo[key] = e.target.value;
          this.renderPreview();
          this.triggerAutoSave();
        };
      }
    });

    // Summary input
    const summaryEl = document.getElementById('field-summary');
    if (summaryEl) {
      summaryEl.oninput = (e) => {
        currentResume.summary = e.target.value;
        this.renderPreview();
        this.triggerAutoSave();
      };
    }

    // Accordion headers toggle
    document.querySelectorAll('.form-section-header').forEach(header => {
      header.onclick = () => {
        const card = header.closest('.form-section-card');
        card.classList.toggle('collapsed');
      };
    });

    // Mobile View Toggle Switch
    const btnEditView = document.getElementById('btn-mobile-edit');
    const btnPreviewView = document.getElementById('btn-mobile-preview');
    const formPanel = document.getElementById('editor-form-panel');
    const previewPanel = document.getElementById('editor-preview-panel');

    if (btnEditView && btnPreviewView) {
      btnEditView.onclick = () => {
        btnEditView.classList.add('active');
        btnPreviewView.classList.remove('active');
        formPanel.classList.remove('hidden-on-mobile');
        previewPanel.classList.add('hidden-on-mobile');
      };

      btnPreviewView.onclick = () => {
        btnPreviewView.classList.add('active');
        btnEditView.classList.remove('active');
        previewPanel.classList.remove('hidden-on-mobile');
        formPanel.classList.add('hidden-on-mobile');
        setTimeout(() => {
          if (window.PreviewScaler) window.PreviewScaler.update();
        }, 30);
      };
    }

    // Add buttons
    document.getElementById('btn-add-experience').onclick = () => this.addExperience();
    document.getElementById('btn-add-education').onclick = () => this.addEducation();
    document.getElementById('btn-add-skill-category').onclick = () => this.addSkillCategory();
    document.getElementById('btn-add-project').onclick = () => this.addProject();
    document.getElementById('btn-add-certification').onclick = () => this.addCertification();
  },

  // ------------------------------------------------------------------------
  // Experience Repeater
  // ------------------------------------------------------------------------
  renderExperienceList() {
    const container = document.getElementById('experience-list-container');
    if (!container) return;

    if (currentResume.experiences.length === 0) {
      container.innerHTML = '<div style="font-size: 0.8125rem; color: var(--text-muted); font-style: italic;">No work experience entries yet. Click "+ Add Position" to add.</div>';
      return;
    }

    container.innerHTML = currentResume.experiences.map((exp, index) => `
      <div class="repeater-item" data-index="${index}">
        <div class="repeater-item-header">
          <span class="repeater-item-title">${exp.jobTitle || 'Position #' + (index + 1)}</span>
          <button type="button" class="btn btn-sm btn-danger btn-remove-exp" data-index="${index}">Remove</button>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Job Title</label>
            <input type="text" class="form-input exp-field" data-key="jobTitle" value="${TemplateRenderer.escapeHTML(exp.jobTitle || '')}" placeholder="e.g. Senior Software Engineer">
          </div>
          <div class="form-group">
            <label class="form-label">Company / Employer</label>
            <input type="text" class="form-input exp-field" data-key="company" value="${TemplateRenderer.escapeHTML(exp.company || '')}" placeholder="e.g. Acme Corp">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Location</label>
            <input type="text" class="form-input exp-field" data-key="location" value="${TemplateRenderer.escapeHTML(exp.location || '')}" placeholder="e.g. San Francisco, CA / Remote">
          </div>
          <div class="form-group">
            <label class="form-label">Start Date</label>
            <input type="month" class="form-input exp-field" data-key="startDate" value="${exp.startDate || ''}">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="checkbox-label" style="margin-top: 1.5rem;">
              <input type="checkbox" class="exp-current-cb" data-index="${index}" ${exp.current ? 'checked' : ''}>
              I currently work here
            </label>
          </div>
          <div class="form-group ${exp.current ? 'disabled' : ''}">
            <label class="form-label">End Date</label>
            <input type="month" class="form-input exp-field" data-key="endDate" value="${exp.endDate || ''}" ${exp.current ? 'disabled' : ''}>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Key Responsibilities & Achievements (One per line)</label>
          <textarea class="form-textarea exp-highlights" data-index="${index}" placeholder="• Spearheaded development of...&#10;• Reduced latency by 35%...">${Array.isArray(exp.highlights) ? exp.highlights.join('\n') : (exp.highlights || '')}</textarea>
        </div>
      </div>
    `).join('');

    // Attach listeners
    container.querySelectorAll('.exp-field').forEach(input => {
      input.oninput = (e) => {
        const idx = parseInt(e.target.closest('.repeater-item').getAttribute('data-index'), 10);
        const key = e.target.getAttribute('data-key');
        currentResume.experiences[idx][key] = e.target.value;
        this.renderPreview();
        this.triggerAutoSave();
      };
    });

    container.querySelectorAll('.exp-current-cb').forEach(cb => {
      cb.onchange = (e) => {
        const idx = parseInt(e.target.getAttribute('data-index'), 10);
        currentResume.experiences[idx].current = e.target.checked;
        if (e.target.checked) currentResume.experiences[idx].endDate = '';
        this.renderExperienceList();
        this.renderPreview();
        this.triggerAutoSave();
      };
    });

    container.querySelectorAll('.exp-highlights').forEach(ta => {
      ta.oninput = (e) => {
        const idx = parseInt(e.target.getAttribute('data-index'), 10);
        currentResume.experiences[idx].highlights = e.target.value.split('\n').filter(s => s.trim().length > 0);
        this.renderPreview();
        this.triggerAutoSave();
      };
    });

    container.querySelectorAll('.btn-remove-exp').forEach(btn => {
      btn.onclick = (e) => {
        const idx = parseInt(e.target.getAttribute('data-index'), 10);
        currentResume.experiences.splice(idx, 1);
        this.renderExperienceList();
        this.renderPreview();
        this.triggerAutoSave();
      };
    });
  },

  addExperience() {
    currentResume.experiences.push({
      id: 'exp-' + Date.now(),
      jobTitle: '',
      company: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      highlights: []
    });
    this.renderExperienceList();
    this.renderPreview();
    this.triggerAutoSave();
  },

  // ------------------------------------------------------------------------
  // Education Repeater
  // ------------------------------------------------------------------------
  renderEducationList() {
    const container = document.getElementById('education-list-container');
    if (!container) return;

    if (currentResume.education.length === 0) {
      container.innerHTML = '<div style="font-size: 0.8125rem; color: var(--text-muted); font-style: italic;">No education entries yet. Click "+ Add Education" to add.</div>';
      return;
    }

    container.innerHTML = currentResume.education.map((edu, index) => `
      <div class="repeater-item" data-index="${index}">
        <div class="repeater-item-header">
          <span class="repeater-item-title">${edu.degree || 'Education #' + (index + 1)}</span>
          <button type="button" class="btn btn-sm btn-danger btn-remove-edu" data-index="${index}">Remove</button>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Degree / Certificate</label>
            <input type="text" class="form-input edu-field" data-key="degree" value="${TemplateRenderer.escapeHTML(edu.degree || '')}" placeholder="e.g. B.S. in Computer Science">
          </div>
          <div class="form-group">
            <label class="form-label">School / University</label>
            <input type="text" class="form-input edu-field" data-key="institution" value="${TemplateRenderer.escapeHTML(edu.institution || '')}" placeholder="e.g. University of California, Berkeley">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Location</label>
            <input type="text" class="form-input edu-field" data-key="location" value="${TemplateRenderer.escapeHTML(edu.location || '')}" placeholder="e.g. Berkeley, CA">
          </div>
          <div class="form-group">
            <label class="form-label">GPA / Honors</label>
            <input type="text" class="form-input edu-field" data-key="gpa" value="${TemplateRenderer.escapeHTML(edu.gpa || '')}" placeholder="e.g. 3.8 / 4.0, Magna Cum Laude">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Start Date</label>
            <input type="month" class="form-input edu-field" data-key="startDate" value="${edu.startDate || ''}">
          </div>
          <div class="form-group">
            <label class="form-label">End Date / Graduation</label>
            <input type="month" class="form-input edu-field" data-key="endDate" value="${edu.endDate || ''}">
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Academic Highlights / Coursework (One per line)</label>
          <textarea class="form-textarea edu-highlights" data-index="${index}" placeholder="• Relevant Coursework: Algorithms, Database Systems...&#10;• Dean's Honor List...">${Array.isArray(edu.highlights) ? edu.highlights.join('\n') : (edu.highlights || '')}</textarea>
        </div>
      </div>
    `).join('');

    container.querySelectorAll('.edu-field').forEach(input => {
      input.oninput = (e) => {
        const idx = parseInt(e.target.closest('.repeater-item').getAttribute('data-index'), 10);
        const key = e.target.getAttribute('data-key');
        currentResume.education[idx][key] = e.target.value;
        this.renderPreview();
        this.triggerAutoSave();
      };
    });

    container.querySelectorAll('.edu-highlights').forEach(ta => {
      ta.oninput = (e) => {
        const idx = parseInt(e.target.getAttribute('data-index'), 10);
        currentResume.education[idx].highlights = e.target.value.split('\n').filter(s => s.trim().length > 0);
        this.renderPreview();
        this.triggerAutoSave();
      };
    });

    container.querySelectorAll('.btn-remove-edu').forEach(btn => {
      btn.onclick = (e) => {
        const idx = parseInt(e.target.getAttribute('data-index'), 10);
        currentResume.education.splice(idx, 1);
        this.renderEducationList();
        this.renderPreview();
        this.triggerAutoSave();
      };
    });
  },

  addEducation() {
    currentResume.education.push({
      id: 'edu-' + Date.now(),
      degree: '',
      institution: '',
      location: '',
      startDate: '',
      endDate: '',
      gpa: '',
      highlights: []
    });
    this.renderEducationList();
    this.renderPreview();
    this.triggerAutoSave();
  },

  // ------------------------------------------------------------------------
  // Skills Repeater
  // ------------------------------------------------------------------------
  renderSkillsList() {
    const container = document.getElementById('skills-list-container');
    if (!container) return;

    if (currentResume.skillCategories.length === 0) {
      container.innerHTML = '<div style="font-size: 0.8125rem; color: var(--text-muted); font-style: italic;">No skill categories yet. Click "+ Add Skill Group" to add.</div>';
      return;
    }

    container.innerHTML = currentResume.skillCategories.map((cat, index) => {
      const skillsStr = Array.isArray(cat.skills) ? cat.skills.join(', ') : (cat.skills || '');
      return `
        <div class="repeater-item" data-index="${index}">
          <div class="repeater-item-header">
            <span class="repeater-item-title">${cat.categoryName || 'Skill Category #' + (index + 1)}</span>
            <button type="button" class="btn btn-sm btn-danger btn-remove-skill" data-index="${index}">Remove</button>
          </div>
          <div class="form-group">
            <label class="form-label">Category Name</label>
            <input type="text" class="form-input skill-cat-name" value="${TemplateRenderer.escapeHTML(cat.categoryName || '')}" placeholder="e.g. Programming Languages, Frameworks, Soft Skills">
          </div>
          <div class="form-group">
            <label class="form-label">Skills (Separate with commas)</label>
            <input type="text" class="form-input skill-cat-tags" value="${TemplateRenderer.escapeHTML(skillsStr)}" placeholder="e.g. JavaScript, Python, React, SQL, Docker">
          </div>
        </div>
      `;
    }).join('');

    container.querySelectorAll('.skill-cat-name').forEach(input => {
      input.oninput = (e) => {
        const idx = parseInt(e.target.closest('.repeater-item').getAttribute('data-index'), 10);
        currentResume.skillCategories[idx].categoryName = e.target.value;
        this.renderPreview();
        this.triggerAutoSave();
      };
    });

    container.querySelectorAll('.skill-cat-tags').forEach(input => {
      input.oninput = (e) => {
        const idx = parseInt(e.target.closest('.repeater-item').getAttribute('data-index'), 10);
        const tags = e.target.value.split(',').map(s => s.trim()).filter(s => s.length > 0);
        currentResume.skillCategories[idx].skills = tags;
        this.renderPreview();
        this.triggerAutoSave();
      };
    });

    container.querySelectorAll('.btn-remove-skill').forEach(btn => {
      btn.onclick = (e) => {
        const idx = parseInt(e.target.getAttribute('data-index'), 10);
        currentResume.skillCategories.splice(idx, 1);
        this.renderSkillsList();
        this.renderPreview();
        this.triggerAutoSave();
      };
    });
  },

  addSkillCategory() {
    currentResume.skillCategories.push({
      id: 'cat-' + Date.now(),
      categoryName: 'Technical Skills',
      skills: []
    });
    this.renderSkillsList();
    this.renderPreview();
    this.triggerAutoSave();
  },

  // ------------------------------------------------------------------------
  // Projects Repeater
  // ------------------------------------------------------------------------
  renderProjectsList() {
    const container = document.getElementById('projects-list-container');
    if (!container) return;

    if (currentResume.projects.length === 0) {
      container.innerHTML = '<div style="font-size: 0.8125rem; color: var(--text-muted); font-style: italic;">No projects yet. Click "+ Add Project" to add.</div>';
      return;
    }

    container.innerHTML = currentResume.projects.map((proj, index) => `
      <div class="repeater-item" data-index="${index}">
        <div class="repeater-item-header">
          <span class="repeater-item-title">${proj.title || 'Project #' + (index + 1)}</span>
          <button type="button" class="btn btn-sm btn-danger btn-remove-proj" data-index="${index}">Remove</button>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Project Title</label>
            <input type="text" class="form-input proj-field" data-key="title" value="${TemplateRenderer.escapeHTML(proj.title || '')}" placeholder="e.g. PulseMetrics SaaS">
          </div>
          <div class="form-group">
            <label class="form-label">Technologies Used</label>
            <input type="text" class="form-input proj-field" data-key="technologies" value="${TemplateRenderer.escapeHTML(proj.technologies || '')}" placeholder="e.g. Node.js, React, Docker">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Live Demo URL</label>
            <input type="url" class="form-input proj-field" data-key="liveUrl" value="${TemplateRenderer.escapeHTML(proj.liveUrl || '')}" placeholder="https://demo.example.com">
          </div>
          <div class="form-group">
            <label class="form-label">GitHub URL</label>
            <input type="url" class="form-input proj-field" data-key="githubUrl" value="${TemplateRenderer.escapeHTML(proj.githubUrl || '')}" placeholder="https://github.com/username/project">
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Project Description</label>
          <textarea class="form-textarea proj-field" data-key="description" placeholder="Brief summary of what the project does and key results achieved...">${TemplateRenderer.escapeHTML(proj.description || '')}</textarea>
        </div>
      </div>
    `).join('');

    container.querySelectorAll('.proj-field').forEach(input => {
      input.oninput = (e) => {
        const idx = parseInt(e.target.closest('.repeater-item').getAttribute('data-index'), 10);
        const key = e.target.getAttribute('data-key');
        currentResume.projects[idx][key] = e.target.value;
        this.renderPreview();
        this.triggerAutoSave();
      };
    });

    container.querySelectorAll('.btn-remove-proj').forEach(btn => {
      btn.onclick = (e) => {
        const idx = parseInt(e.target.getAttribute('data-index'), 10);
        currentResume.projects.splice(idx, 1);
        this.renderProjectsList();
        this.renderPreview();
        this.triggerAutoSave();
      };
    });
  },

  addProject() {
    currentResume.projects.push({
      id: 'proj-' + Date.now(),
      title: '',
      description: '',
      technologies: '',
      liveUrl: '',
      githubUrl: ''
    });
    this.renderProjectsList();
    this.renderPreview();
    this.triggerAutoSave();
  },

  // ------------------------------------------------------------------------
  // Certifications Repeater
  // ------------------------------------------------------------------------
  renderCertificationsList() {
    const container = document.getElementById('certifications-list-container');
    if (!container) return;

    if (currentResume.certifications.length === 0) {
      container.innerHTML = '<div style="font-size: 0.8125rem; color: var(--text-muted); font-style: italic;">No certifications yet. Click "+ Add Certification" to add.</div>';
      return;
    }

    container.innerHTML = currentResume.certifications.map((cert, index) => `
      <div class="repeater-item" data-index="${index}">
        <div class="repeater-item-header">
          <span class="repeater-item-title">${cert.name || 'Certification #' + (index + 1)}</span>
          <button type="button" class="btn btn-sm btn-danger btn-remove-cert" data-index="${index}">Remove</button>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Certification Name</label>
            <input type="text" class="form-input cert-field" data-key="name" value="${TemplateRenderer.escapeHTML(cert.name || '')}" placeholder="e.g. AWS Certified Solutions Architect">
          </div>
          <div class="form-group">
            <label class="form-label">Issuing Organization</label>
            <input type="text" class="form-input cert-field" data-key="issuer" value="${TemplateRenderer.escapeHTML(cert.issuer || '')}" placeholder="e.g. Amazon Web Services">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Issue Date</label>
            <input type="month" class="form-input cert-field" data-key="issueDate" value="${cert.issueDate || ''}">
          </div>
          <div class="form-group">
            <label class="form-label">Credential URL</label>
            <input type="url" class="form-input cert-field" data-key="credentialUrl" value="${TemplateRenderer.escapeHTML(cert.credentialUrl || '')}" placeholder="https://verification.example.com">
          </div>
        </div>
      </div>
    `).join('');

    container.querySelectorAll('.cert-field').forEach(input => {
      input.oninput = (e) => {
        const idx = parseInt(e.target.closest('.repeater-item').getAttribute('data-index'), 10);
        const key = e.target.getAttribute('data-key');
        currentResume.certifications[idx][key] = e.target.value;
        this.renderPreview();
        this.triggerAutoSave();
      };
    });

    container.querySelectorAll('.btn-remove-cert').forEach(btn => {
      btn.onclick = (e) => {
        const idx = parseInt(e.target.getAttribute('data-index'), 10);
        currentResume.certifications.splice(idx, 1);
        this.renderCertificationsList();
        this.renderPreview();
        this.triggerAutoSave();
      };
    });
  },

  addCertification() {
    currentResume.certifications.push({
      id: 'cert-' + Date.now(),
      name: '',
      issuer: '',
      issueDate: '',
      credentialUrl: ''
    });
    this.renderCertificationsList();
    this.renderPreview();
    this.triggerAutoSave();
  }
};

// --------------------------------------------------------------------------
// PreviewScaler — Responsive Proportional Resume Canvas Scaling Engine
// Automatically fits complete A4 resume into available desktop/mobile viewports
// --------------------------------------------------------------------------
const PreviewScaler = {
  currentMode: 'fit-page', // 'fit-page' | 'fit-width' | 'custom'
  currentScale: 1,
  resizeObserver: null,
  scrollDebounceTimer: null,

  init() {
    // Default mode: fit-page on desktop, fit-width on mobile
    if (window.innerWidth < 992) {
      this.currentMode = 'fit-width';
    } else {
      this.currentMode = 'fit-page';
    }

    this.bindControls();
    this.observeResize();
    this.update();
  },

  bindControls() {
    const btnFit = document.getElementById('btn-scale-fit');
    const btnWidth = document.getElementById('btn-scale-width');
    const btnZoomIn = document.getElementById('btn-zoom-in');
    const btnZoomOut = document.getElementById('btn-zoom-out');
    const btnZoomReset = document.getElementById('btn-zoom-reset');
    const btnPrev = document.getElementById('btn-prev-page');
    const btnNext = document.getElementById('btn-next-page');
    const panel = document.getElementById('editor-preview-panel');

    if (btnFit) {
      btnFit.onclick = () => {
        this.currentMode = 'fit-page';
        this.update();
      };
    }

    if (btnWidth) {
      btnWidth.onclick = () => {
        this.currentMode = 'fit-width';
        this.update();
      };
    }

    if (btnZoomIn) {
      btnZoomIn.onclick = () => {
        const next = Math.min(1.6, Math.round((this.currentScale + 0.1) * 10) / 10);
        this.setScale(next, 'custom');
      };
    }

    if (btnZoomOut) {
      btnZoomOut.onclick = () => {
        const next = Math.max(0.25, Math.round((this.currentScale - 0.1) * 10) / 10);
        this.setScale(next, 'custom');
      };
    }

    if (btnZoomReset) {
      btnZoomReset.onclick = () => {
        this.setScale(1.0, 'custom');
      };
    }

    if (btnPrev) {
      btnPrev.onclick = () => this.navigatePage(-1);
    }

    if (btnNext) {
      btnNext.onclick = () => this.navigatePage(1);
    }

    // Dynamic scroll tracking to update current page indicator
    if (panel) {
      panel.onscroll = () => {
        clearTimeout(this.scrollDebounceTimer);
        this.scrollDebounceTimer = setTimeout(() => {
          this.updatePageIndicator();
        }, 50);
      };
    }
  },

  setScale(scale, mode = 'custom') {
    this.currentMode = mode;
    this.currentScale = Math.max(0.25, Math.min(1.6, scale));
    this.apply();
  },

  update() {
    const panel = document.getElementById('editor-preview-panel');
    const paper = document.getElementById('resume-paper-target');
    if (!panel || !paper) return;

    // Check if panel is currently hidden (e.g. mobile form tab)
    if (panel.offsetWidth === 0 || panel.clientHeight === 0 || window.getComputedStyle(panel).display === 'none') {
      return;
    }

    if (this.currentMode === 'custom') {
      this.apply();
      return;
    }

    const controls = panel.querySelector('.preview-controls-bar');
    const controlsHeight = controls ? controls.offsetHeight + 16 : 56;

    const isDesktop = window.innerWidth >= 992;
    const toolbar = document.querySelector('.editor-toolbar');
    const header = document.querySelector('.site-header');
    const headerH = header ? header.offsetHeight : 64;
    const toolbarH = toolbar ? toolbar.offsetHeight : 54;
    const windowAvailH = window.innerHeight - headerH - toolbarH - controlsHeight - 36;

    // Available dimensions inside preview panel with safe padding
    const paddingX = window.innerWidth < 640 ? 16 : 40;
    const availWidth = Math.max(260, panel.clientWidth - paddingX);
    
    // On desktop, constrain height to available viewport height so entire page fits on screen
    const effectivePanelHeight = isDesktop 
      ? Math.min(panel.clientHeight || windowAvailH, windowAvailH) 
      : (panel.clientHeight - controlsHeight - 24);
    const availHeight = Math.max(260, effectivePanelHeight);

    const baseWidth = 794; // Standard A4 width at 96 DPI
    const singlePageHeight = 1123; // Standard A4 single page height
    const totalHeight = Math.max(singlePageHeight, paper.scrollHeight || singlePageHeight, paper.offsetHeight || singlePageHeight);

    let targetScale = 1;
    if (this.currentMode === 'fit-page') {
      const scaleX = availWidth / baseWidth;
      const scaleY = availHeight / totalHeight;
      targetScale = Math.min(scaleX, scaleY);
    } else {
      // fit-width
      targetScale = availWidth / baseWidth;
    }

    // Clamp between 0.25 and 1.45
    targetScale = Math.max(0.25, Math.min(1.45, Math.round(targetScale * 100) / 100));
    this.currentScale = targetScale;
    this.apply();
  },

  apply() {
    const wrapper = document.getElementById('preview-scale-wrapper');
    const viewport = document.getElementById('preview-viewport');
    const paper = document.getElementById('resume-paper-target');
    const zoomLabel = document.getElementById('preview-zoom-label');
    const btnFit = document.getElementById('btn-scale-fit');
    const btnWidth = document.getElementById('btn-scale-width');

    if (!wrapper || !viewport || !paper) return;

    const scale = this.currentScale;
    const baseWidth = 794;
    const singlePageHeight = 1123;
    const totalHeight = Math.max(singlePageHeight, paper.scrollHeight || singlePageHeight, paper.offsetHeight || singlePageHeight);

    // Apply scaling transform and size viewport to match visual bounding box exactly
    wrapper.style.transform = `scale(${scale})`;
    wrapper.style.transformOrigin = 'top left';

    viewport.style.width = `${Math.ceil(baseWidth * scale)}px`;
    viewport.style.height = `${Math.ceil(totalHeight * scale)}px`;

    // Update zoom label
    if (zoomLabel) {
      zoomLabel.textContent = `${Math.round(scale * 100)}%`;
    }

    // Update active button indicators
    if (btnFit) btnFit.classList.toggle('active', this.currentMode === 'fit-page');
    if (btnWidth) btnWidth.classList.toggle('active', this.currentMode === 'fit-width');

    this.updatePageIndicator();
  },

  updatePageIndicator() {
    const panel = document.getElementById('editor-preview-panel');
    const paper = document.getElementById('resume-paper-target');
    const pageCountEl = document.getElementById('preview-page-count');
    const btnPrev = document.getElementById('btn-prev-page');
    const btnNext = document.getElementById('btn-next-page');
    if (!panel || !paper || !pageCountEl) return;

    const paperHeight = Math.max(1123, paper.scrollHeight || 1123);
    const totalPages = Math.max(1, Math.ceil((paperHeight - 15) / 1123));

    const pageHeightScaled = 1123 * this.currentScale;
    const currentScroll = panel.scrollTop;
    const currentPage = Math.min(totalPages, Math.max(1, Math.floor((currentScroll + pageHeightScaled * 0.35) / pageHeightScaled) + 1));

    pageCountEl.textContent = `Page ${currentPage} of ${totalPages}`;

    if (btnPrev) btnPrev.disabled = currentPage <= 1;
    if (btnNext) btnNext.disabled = currentPage >= totalPages;
  },

  navigatePage(direction) {
    const panel = document.getElementById('editor-preview-panel');
    const paper = document.getElementById('resume-paper-target');
    if (!panel || !paper) return;

    const paperHeight = Math.max(1123, paper.scrollHeight || 1123);
    const totalPages = Math.max(1, Math.ceil((paperHeight - 15) / 1123));
    const pageHeightScaled = 1123 * this.currentScale;

    const currentScroll = panel.scrollTop;
    let currentPage = Math.min(totalPages, Math.max(1, Math.floor((currentScroll + pageHeightScaled * 0.35) / pageHeightScaled) + 1));

    const targetPage = Math.max(1, Math.min(totalPages, currentPage + direction));
    const targetScrollTop = (targetPage - 1) * pageHeightScaled;

    panel.scrollTo({
      top: targetScrollTop,
      behavior: 'smooth'
    });
  },

  observeResize() {
    const panel = document.getElementById('editor-preview-panel');
    if (!panel) return;

    if (window.ResizeObserver) {
      this.resizeObserver = new ResizeObserver(() => {
        window.requestAnimationFrame(() => {
          if (this.currentMode !== 'custom') {
            this.update();
          }
        });
      });
      this.resizeObserver.observe(panel);
    }

    window.addEventListener('resize', () => {
      if (this.currentMode !== 'custom') {
        if (window.innerWidth < 992 && this.currentMode === 'fit-page') {
          this.currentMode = 'fit-width';
        } else if (window.innerWidth >= 992 && this.currentMode === 'fit-width') {
          this.currentMode = 'fit-page';
        }
        this.update();
      }
    });

    window.addEventListener('orientationchange', () => {
      setTimeout(() => {
        if (this.currentMode !== 'custom') {
          this.currentMode = window.innerWidth < 992 ? 'fit-width' : 'fit-page';
        }
        this.update();
      }, 120);
    });
  }
};

window.PreviewScaler = PreviewScaler;
window.Editor = Editor;
