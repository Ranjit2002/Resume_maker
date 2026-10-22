/* ==========================================================================
   ResumeCraft — Main Application Controller (Vanilla JS)
   Routing, Dashboard CRUD, 3-Column Template Gallery, Modals, Search
   ========================================================================== */

const App = {
  activeView: 'dashboard',
  searchQuery: '',
  activeCategory: 'All',
  deleteTargetId: null,

  init() {
    StorageService.init();
    this.setupNavigation();
    this.setupDashboardEvents();
    this.setupTemplatesView();
    this.setupModals();
    this.handleRoute();

    window.addEventListener('hashchange', () => this.handleRoute());
  },

  // ------------------------------------------------------------------------
  // Navigation & Routing
  // ------------------------------------------------------------------------
  setupNavigation() {
    // Nav links
    document.querySelectorAll('[data-route]').forEach(link => {
      link.onclick = (e) => {
        e.preventDefault();
        const route = link.getAttribute('data-route');
        window.location.hash = route;
      };
    });

    // Mobile menu toggle
    const mobileBtn = document.getElementById('mobile-menu-toggle');
    const navLinks = document.getElementById('site-nav-links');
    if (mobileBtn && navLinks) {
      mobileBtn.onclick = () => {
        navLinks.classList.toggle('mobile-open');
      };
    }
  },

  handleRoute() {
    const hash = window.location.hash.slice(1) || 'my-resume';
    const [route, paramStr] = hash.split('?');
    const params = new URLSearchParams(paramStr || '');

    // Close mobile menu if open
    const navLinks = document.getElementById('site-nav-links');
    if (navLinks) navLinks.classList.remove('mobile-open');

    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-route') === route) {
        link.classList.add('active');
      }
    });

    // Switch view sections
    document.querySelectorAll('.view-section').forEach(view => {
      view.classList.remove('active-view');
    });

    if (route === 'templates') {
      this.activeView = 'templates';
      document.getElementById('view-templates').classList.add('active-view');
      this.renderTemplatesGrid();
      window.scrollTo(0, 0);
    } else if (route === 'editor') {
      this.activeView = 'editor';
      document.getElementById('view-editor').classList.add('active-view');
      const resumeId = params.get('id') || StorageService.getActiveResumeId();
      Editor.init(resumeId);
      window.scrollTo(0, 0);
    } else {
      // Default: My Resume / Dashboard
      this.activeView = 'dashboard';
      document.getElementById('view-dashboard').classList.add('active-view');
      this.renderDashboardResumes();
      window.scrollTo(0, 0);
    }
  },

  // ------------------------------------------------------------------------
  // Dashboard ("My Resume") View
  // ------------------------------------------------------------------------
  setupDashboardEvents() {
    // Search input
    const searchInput = document.getElementById('resume-search-input');
    if (searchInput) {
      searchInput.oninput = (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        this.renderDashboardResumes();
      };
    }

    // "Create Resume" buttons
    document.querySelectorAll('.btn-create-resume').forEach(btn => {
      btn.onclick = () => this.openNewResumeModal();
    });
  },

  renderDashboardResumes() {
    const container = document.getElementById('resumes-grid-container');
    if (!container) return;

    let resumes = StorageService.getAllResumes();

    // Filter by search query
    if (this.searchQuery) {
      resumes = resumes.filter(r => {
        const title = (r.title || '').toLowerCase();
        const name = (r.personalInfo && r.personalInfo.fullName ? r.personalInfo.fullName : '').toLowerCase();
        const role = (r.personalInfo && r.personalInfo.jobTitle ? r.personalInfo.jobTitle : '').toLowerCase();
        return title.includes(this.searchQuery) || name.includes(this.searchQuery) || role.includes(this.searchQuery);
      });
    }

    if (resumes.length === 0) {
      container.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1;">
          <div class="empty-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
            </svg>
          </div>
          <h3 class="empty-title">${this.searchQuery ? 'No matching resumes found' : 'No resumes yet'}</h3>
          <p class="empty-desc">
            ${this.searchQuery ? 'Try searching with another keyword.' : 'Start creating your professional, ATS-optimized resume in minutes.'}
          </p>
          ${!this.searchQuery ? `
            <button class="btn btn-primary btn-create-resume">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              Create Your First Resume
            </button>
          ` : ''}
        </div>
      `;
      const emptyBtn = container.querySelector('.btn-create-resume');
      if (emptyBtn) emptyBtn.onclick = () => this.openNewResumeModal();
      return;
    }

    container.innerHTML = resumes.map(r => {
      const p = r.personalInfo || {};
      const templateId = (r.settings && r.settings.template) || 'modern-minimal';
      const templateMeta = RESUME_TEMPLATES.find(t => t.id === templateId) || RESUME_TEMPLATES[0];
      const accent = r.settings?.accentColor || templateMeta.defaultAccent;
      const updatedDate = new Date(r.updatedAt || r.createdAt || Date.now()).toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });

      const firstExp = r.experiences && r.experiences[0] ? r.experiences[0] : null;
      const skillsSnippet = r.skillCategories && r.skillCategories[0] && r.skillCategories[0].skills
        ? (Array.isArray(r.skillCategories[0].skills) ? r.skillCategories[0].skills.slice(0, 3) : r.skillCategories[0].skills.split(',').slice(0, 3))
        : [];

      return `
        <div class="resume-card" data-id="${r.id}">
          <div class="resume-card-preview">
            <div class="mini-sheet-real" style="--mini-accent: ${accent};">
              <div class="mini-real-header">
                <div class="mini-real-name">${TemplateRenderer.escapeHTML(p.fullName || r.title || 'Resume')}</div>
                ${p.jobTitle ? `<div class="mini-real-role" style="color: ${accent};">${TemplateRenderer.escapeHTML(p.jobTitle)}</div>` : ''}
                ${(p.location || p.email) ? `<div class="mini-real-contact">${TemplateRenderer.escapeHTML(p.location || p.email)}</div>` : ''}
              </div>
              ${r.summary ? `
                <div class="mini-real-section">
                  <div class="mini-real-sectitle" style="border-color: ${accent};">Summary</div>
                  <div class="mini-real-text">${TemplateRenderer.escapeHTML(r.summary.slice(0, 85))}...</div>
                </div>
              ` : ''}
              ${firstExp ? `
                <div class="mini-real-section">
                  <div class="mini-real-sectitle" style="border-color: ${accent};">Experience</div>
                  <div class="mini-real-itemtitle">${TemplateRenderer.escapeHTML(firstExp.jobTitle || 'Role')}</div>
                  <div class="mini-real-itemsub">${TemplateRenderer.escapeHTML(firstExp.company || '')}</div>
                </div>
              ` : ''}
              ${skillsSnippet.length ? `
                <div class="mini-real-tags">
                  ${skillsSnippet.map(s => `<span class="mini-real-tag">${TemplateRenderer.escapeHTML(String(s).trim())}</span>`).join('')}
                </div>
              ` : ''}
            </div>
          </div>

          <div class="resume-card-body">
            <div class="resume-card-title-row">
              <div>
                <h3 class="resume-title">${TemplateRenderer.escapeHTML(r.title || 'Untitled Resume')}</h3>
                <div class="resume-role">${TemplateRenderer.escapeHTML(p.fullName || 'Candidate')} ${p.jobTitle ? '· ' + TemplateRenderer.escapeHTML(p.jobTitle) : ''}</div>
              </div>
              <span class="badge badge-primary">${templateMeta.name}</span>
            </div>

            <div class="resume-meta">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              Updated ${updatedDate}
            </div>
          </div>

          <div class="resume-card-actions">
            <button class="btn btn-primary btn-sm btn-edit-resume" data-id="${r.id}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
              Edit
            </button>
            <button class="btn btn-secondary btn-sm btn-duplicate-resume" data-id="${r.id}" title="Duplicate Resume">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              Copy
            </button>
            <button class="btn btn-danger btn-sm btn-delete-resume" data-id="${r.id}" title="Delete Resume">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
            </button>
          </div>
        </div>
      `;
    }).join('');

    // Attach card action listeners
    container.querySelectorAll('.btn-edit-resume').forEach(btn => {
      btn.onclick = () => {
        const id = btn.getAttribute('data-id');
        window.location.hash = `editor?id=${id}`;
      };
    });

    container.querySelectorAll('.btn-duplicate-resume').forEach(btn => {
      btn.onclick = () => {
        const id = btn.getAttribute('data-id');
        const copy = StorageService.duplicateResume(id);
        if (copy) {
          ExportService.showToast('Resume duplicated! ✓');
          this.renderDashboardResumes();
        }
      };
    });

    container.querySelectorAll('.btn-delete-resume').forEach(btn => {
      btn.onclick = () => {
        const id = btn.getAttribute('data-id');
        this.openDeleteModal(id);
      };
    });
  },

  // ------------------------------------------------------------------------
  // Templates View (Section 5: Three-Column Grid)
  // ------------------------------------------------------------------------
  setupTemplatesView() {
    const tabs = document.querySelectorAll('.cat-tab');
    tabs.forEach(tab => {
      tab.onclick = () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        this.activeCategory = tab.getAttribute('data-cat') || 'All';
        this.renderTemplatesGrid();
      };
    });
  },

  renderTemplatesGrid() {
    const grid = document.getElementById('templates-grid-container');
    if (!grid) return;

    let templates = RESUME_TEMPLATES;
    if (this.activeCategory && this.activeCategory !== 'All') {
      templates = templates.filter(t => t.category === this.activeCategory);
    }

    grid.innerHTML = templates.map(t => {
      const dummy = DUMMY_PROFILES[t.id] || DUMMY_PROFILES['modern-minimal'];
      const p = dummy.personalInfo;
      const isCentered = t.id === 'ats-classic' || t.id === 'academic-fresher' || t.id === 'executive-leader';
      const firstExp = dummy.experiences && dummy.experiences[0] ? dummy.experiences[0] : null;
      const firstEdu = dummy.education && dummy.education[0] ? dummy.education[0] : null;
      const skills = dummy.skillCategories && dummy.skillCategories[0] ? dummy.skillCategories[0].skills.slice(0, 3) : [];

      return `
        <div class="template-card" data-template-id="${t.id}">
          <div class="template-preview-wrapper">
            <div class="mini-sheet-real" style="--mini-accent: ${t.defaultAccent};">
              <div class="mini-real-header ${isCentered ? 'centered' : ''}">
                <div class="mini-real-name">${TemplateRenderer.escapeHTML(p.fullName)}</div>
                <div class="mini-real-role" style="color: ${t.defaultAccent};">${TemplateRenderer.escapeHTML(p.jobTitle)}</div>
                <div class="mini-real-contact">${TemplateRenderer.escapeHTML(p.location)} • ${TemplateRenderer.escapeHTML(p.email)}</div>
              </div>

              ${dummy.summary ? `
                <div class="mini-real-section">
                  <div class="mini-real-sectitle" style="border-color: ${t.defaultAccent};">
                    ${t.id === 'academic-fresher' ? 'Objective' : 'Summary'}
                  </div>
                  <div class="mini-real-text">${TemplateRenderer.escapeHTML(dummy.summary.slice(0, 85))}...</div>
                </div>
              ` : ''}

              ${t.id === 'academic-fresher' && firstEdu ? `
                <div class="mini-real-section">
                  <div class="mini-real-sectitle" style="border-color: ${t.defaultAccent};">Education</div>
                  <div class="mini-real-itemtitle">${TemplateRenderer.escapeHTML(firstEdu.degree)}</div>
                  <div class="mini-real-itemsub">${TemplateRenderer.escapeHTML(firstEdu.institution)}</div>
                </div>
              ` : (firstExp ? `
                <div class="mini-real-section">
                  <div class="mini-real-sectitle" style="border-color: ${t.defaultAccent};">Experience</div>
                  <div class="mini-real-itemtitle">${TemplateRenderer.escapeHTML(firstExp.jobTitle)}</div>
                  <div class="mini-real-itemsub">${TemplateRenderer.escapeHTML(firstExp.company)}</div>
                </div>
              ` : '')}

              ${skills.length ? `
                <div class="mini-real-tags">
                  ${skills.map(s => `<span class="mini-real-tag">${TemplateRenderer.escapeHTML(s)}</span>`).join('')}
                </div>
              ` : ''}
            </div>
          </div>

          <div class="template-card-body">
            <div class="template-header-row">
              <h3 class="template-name">${t.name}</h3>
              <span class="badge badge-free">100% Free</span>
            </div>
            <p class="template-desc">${t.description}</p>
            <div class="template-rec">
              <strong>Best for:</strong> ${t.recommendedFor}
            </div>
          </div>

          <div class="template-actions">
            <button class="btn btn-primary btn-sm btn-use-template" data-template-id="${t.id}">
              Use This Template
            </button>
            <button class="btn btn-outline btn-sm btn-preview-template" data-template-id="${t.id}">
              Preview
            </button>
          </div>
        </div>
      `;
    }).join('');

    // Attach listeners
    grid.querySelectorAll('.btn-use-template').forEach(btn => {
      btn.onclick = () => {
        const templateId = btn.getAttribute('data-template-id');
        this.useTemplate(templateId);
      };
    });

    grid.querySelectorAll('.btn-preview-template').forEach(btn => {
      btn.onclick = () => {
        const templateId = btn.getAttribute('data-template-id');
        this.openPreviewModal(templateId);
      };
    });
  },

  useTemplate(templateId) {
    const tpl = RESUME_TEMPLATES.find(t => t.id === templateId) || RESUME_TEMPLATES[0];
    const newResume = StorageService.createNewResume(`${tpl.name} Resume`, templateId);
    ExportService.showToast(`Selected "${tpl.name}". Loaded realistic sample profile ready to edit!`);
    window.location.hash = `editor?id=${newResume.id}`;
  },

  // ------------------------------------------------------------------------
  // Modals Management
  // ------------------------------------------------------------------------
  setupModals() {
    // Close modal on overlay click or close button
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
      overlay.onclick = (e) => {
        if (e.target === overlay) {
          overlay.classList.remove('open');
        }
      };
    });

    document.querySelectorAll('.modal-close-btn, .btn-modal-cancel').forEach(btn => {
      btn.onclick = () => {
        btn.closest('.modal-overlay').classList.remove('open');
      };
    });

    // Delete confirmation button
    const confirmDeleteBtn = document.getElementById('btn-confirm-delete');
    if (confirmDeleteBtn) {
      confirmDeleteBtn.onclick = () => {
        if (this.deleteTargetId) {
          StorageService.deleteResume(this.deleteTargetId);
          this.deleteTargetId = null;
          document.getElementById('modal-delete-confirm').classList.remove('open');
          ExportService.showToast('Resume deleted successfully.');
          this.renderDashboardResumes();
        }
      };
    }

    // New resume create submit
    const btnCreateSubmit = document.getElementById('btn-create-submit');
    if (btnCreateSubmit) {
      btnCreateSubmit.onclick = () => {
        const titleInput = document.getElementById('new-resume-title-input');
        const tplSelect = document.getElementById('new-resume-template-select');
        const title = (titleInput && titleInput.value.trim()) || 'Untitled Resume';
        const templateId = (tplSelect && tplSelect.value) || 'modern-minimal';

        const newResume = StorageService.createNewResume(title, templateId);
        document.getElementById('modal-new-resume').classList.remove('open');
        ExportService.showToast('New resume created with sample data! ✓');
        window.location.hash = `editor?id=${newResume.id}`;
      };
    }
  },

  openNewResumeModal() {
    const modal = document.getElementById('modal-new-resume');
    if (!modal) return;

    const tplSelect = document.getElementById('new-resume-template-select');
    if (tplSelect) {
      tplSelect.innerHTML = RESUME_TEMPLATES.map(t => `
        <option value="${t.id}">${t.name} (100% Free)</option>
      `).join('');
    }

    const titleInput = document.getElementById('new-resume-title-input');
    if (titleInput) titleInput.value = '';

    modal.classList.add('open');
    if (titleInput) titleInput.focus();
  },

  openDeleteModal(id) {
    this.deleteTargetId = id;
    const modal = document.getElementById('modal-delete-confirm');
    if (modal) modal.classList.add('open');
  },

  openPreviewModal(templateId) {
    const modal = document.getElementById('modal-template-preview');
    if (!modal) return;

    const tpl = RESUME_TEMPLATES.find(t => t.id === templateId) || RESUME_TEMPLATES[0];
    document.getElementById('modal-preview-title').textContent = `${tpl.name} Preview`;

    // Render complete full-resolution resume using tailored dummy data
    const sample = getDummyResumeForTemplate(templateId);

    const target = document.getElementById('modal-preview-paper');
    if (target) {
      target.innerHTML = TemplateRenderer.render(sample);
    }

    const useBtn = document.getElementById('modal-preview-use-btn');
    if (useBtn) {
      useBtn.onclick = () => {
        modal.classList.remove('open');
        this.useTemplate(templateId);
      };
    }

    modal.classList.add('open');
    this.scaleModalPreview();
  },

  scaleModalPreview() {
    const modalBody = document.getElementById('modal-preview-body');
    const viewport = document.getElementById('modal-preview-viewport');
    const wrapper = document.getElementById('modal-preview-scale-wrapper');
    const paper = document.getElementById('modal-preview-paper');
    if (!modalBody || !viewport || !wrapper || !paper) return;

    requestAnimationFrame(() => {
      const availWidth = Math.max(260, modalBody.clientWidth - 32);
      const availHeight = Math.max(300, window.innerHeight * 0.70);
      const paperHeight = Math.max(1123, paper.scrollHeight || 1123);
      const baseWidth = 794;

      const scaleX = availWidth / baseWidth;
      const scaleY = availHeight / paperHeight;
      const scale = Math.max(0.25, Math.min(1.0, Math.min(scaleX, scaleY)));

      wrapper.style.transform = `scale(${scale})`;
      wrapper.style.transformOrigin = 'top left';

      viewport.style.width = `${Math.ceil(baseWidth * scale)}px`;
      viewport.style.height = `${Math.ceil(paperHeight * scale)}px`;
    });
  }
};

// Initialize App when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});

window.App = App;
