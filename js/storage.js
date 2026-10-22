/* ==========================================================================
   ResumeCraft — Storage & State Management (Vanilla JS)
   Client-side localStorage persistence for resumes with Indian dummy profiles
   ========================================================================== */

const STORAGE_KEY = 'resumecraft_resumes';
const ACTIVE_RESUME_KEY = 'resumecraft_active_id';
const STORAGE_VERSION_KEY = 'resumecraft_data_v4';

const StorageService = {
  // Initialize storage with realistic Indian pre-populated resumes
  init() {
    const existing = localStorage.getItem(STORAGE_KEY);
    const ver = localStorage.getItem(STORAGE_VERSION_KEY);
    let shouldSeed = !existing || existing === '[]' || ver !== '4';

    if (existing && !shouldSeed) {
      try {
        const parsed = JSON.parse(existing);
        const oldNames = ['Alex Rivera', 'Jane Doe', 'John Doe', 'Sarah Jenkins', 'David Chen', 'Emily Watson'];
        if (Array.isArray(parsed) && parsed.some(r => oldNames.includes(r.personalInfo?.fullName) || r.experiences?.[0]?.company === 'Veloce Cloud Systems')) {
          shouldSeed = true;
        }
      } catch {
        shouldSeed = true;
      }
    }

    if (shouldSeed) {
      const initialList = [
        getDummyResumeForTemplate('modern-minimal', 'Senior Full Stack Engineer Resume'),
        getDummyResumeForTemplate('ats-classic', 'Senior Business & Financial Analyst Resume'),
        getDummyResumeForTemplate('academic-fresher', 'AI Researcher Graduate Resume')
      ];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialList));
      localStorage.setItem(STORAGE_VERSION_KEY, '4');
      localStorage.setItem(ACTIVE_RESUME_KEY, initialList[0].id);
    }
  },

  // Get all resumes from localStorage
  getAllResumes() {
    this.init();
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (err) {
      console.error('Error reading resumes from localStorage:', err);
      return [];
    }
  },

  // Get resume by ID
  getResumeById(id) {
    const list = this.getAllResumes();
    return list.find(r => r.id === id) || null;
  },

  // Save or update resume
  saveResume(resume) {
    const list = this.getAllResumes();
    const index = list.findIndex(r => r.id === resume.id);
    resume.updatedAt = new Date().toISOString();

    if (index >= 0) {
      list[index] = resume;
    } else {
      resume.createdAt = new Date().toISOString();
      list.unshift(resume);
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    return resume;
  },

  // Delete resume
  deleteResume(id) {
    const list = this.getAllResumes().filter(r => r.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    return true;
  },

  // Duplicate resume
  duplicateResume(id) {
    const original = this.getResumeById(id);
    if (!original) return null;

    const copy = JSON.parse(JSON.stringify(original));
    copy.id = 'resume-' + Date.now();
    copy.title = `${original.title} (Copy)`;
    copy.createdAt = new Date().toISOString();
    copy.updatedAt = new Date().toISOString();

    const list = this.getAllResumes();
    list.unshift(copy);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    return copy;
  },

  // Create new resume pre-populated with realistic Indian dummy data appropriate for selected template
  createNewResume(title = 'Untitled Resume', templateId = 'modern-minimal') {
    const newResume = getDummyResumeForTemplate(templateId, title);
    return this.saveResume(newResume);
  },

  // Active resume id tracker
  getActiveResumeId() {
    return localStorage.getItem(ACTIVE_RESUME_KEY);
  },

  setActiveResumeId(id) {
    localStorage.setItem(ACTIVE_RESUME_KEY, id);
  }
};

window.StorageService = StorageService;
