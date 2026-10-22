/* ==========================================================================
   ResumeCraft — PDF Export & Native Print Utilities (Vanilla JS)
   Client-side PDF generation & high-fidelity browser print dialog
   ========================================================================== */

const ExportService = {
  // Download as PDF using html2pdf.js or native fallback
  async downloadPDF() {
    const resumeEl = document.getElementById('resume-paper-target');
    if (!resumeEl) return;

    const title = (currentResume && currentResume.title ? currentResume.title : 'Resume')
      .replace(/[^a-zA-Z0-9_-]/g, '_');
    const filename = `${title}.pdf`;

    this.showToast('Generating high-resolution PDF...');

    // If html2pdf is available globally via script tag
    if (typeof html2pdf !== 'undefined') {
      try {
        const opt = {
          margin: 0,
          filename: filename,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true, logging: false },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        await html2pdf().set(opt).from(resumeEl).save();
        this.showToast('PDF downloaded successfully! ✓');
        return;
      } catch (err) {
        console.warn('html2pdf generation error, falling back to print dialog:', err);
      }
    }

    // High-fidelity fallback to browser print dialog
    this.printResume();
  },

  // Open browser native Print Dialog configured with @media print CSS
  printResume() {
    this.showToast('Opening print dialog. Select "Save as PDF"...');
    setTimeout(() => {
      window.print();
    }, 200);
  },

  // Toast Notification helper
  showToast(message) {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(8px)';
      toast.style.transition = 'all 0.2s ease-out';
      setTimeout(() => toast.remove(), 250);
    }, 3200);
  }
};

window.ExportService = ExportService;
