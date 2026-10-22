/* ==========================================================================
   ResumeCraft — 9 Free Professional Resume Templates & HTML Renderer
   Includes 100% realistic Indian dummy profiles and dynamic rendering
   ========================================================================== */

// --------------------------------------------------------------------------
// Realistic Professional Indian Dummy Profiles for all 9 Templates
// --------------------------------------------------------------------------
const DUMMY_PROFILES = {
  // Template 1: Modern Minimal (Software Engineer / Tech Lead)
  'modern-minimal': {
    personalInfo: {
      fullName: 'Rahul Sharma',
      jobTitle: 'Senior Full Stack Engineer',
      email: 'rahul.sharma@example.in',
      phone: '+91 98201 23456',
      location: 'Bengaluru, Karnataka',
      website: 'https://rahulsharma.dev',
      linkedin: 'linkedin.com/in/rahulsharma-tech',
      github: 'github.com/rahulsharma-dev'
    },
    summary: 'Full Stack Engineer with 6+ years of experience architecting high-scale web platforms and distributed microservices. Proven track record of scaling consumer SaaS products to 2M+ active users, optimizing latency by 42%, and mentoring engineering squads across modern TypeScript and React ecosystems.',
    experiences: [
      {
        id: 'exp-mm-1',
        jobTitle: 'Staff Software Engineer',
        company: 'Flipkart Internet Pvt. Ltd.',
        location: 'Bengaluru, Karnataka',
        startDate: '2022-04',
        endDate: '',
        current: true,
        highlights: [
          'Architected real-time catalogue indexing pipeline processing 15M+ daily SKU updates with sub-90ms p99 response times.',
          'Migrated 12 monolithic microservices to Kubernetes clusters on private cloud, cutting infrastructure spend by ₹48 Lakhs annually.',
          'Mentored 10+ junior and mid-level software engineers across modern React, Node.js, and high-throughput system design.'
        ]
      },
      {
        id: 'exp-mm-2',
        jobTitle: 'Software Development Engineer II',
        company: 'Swiggy',
        location: 'Bengaluru, Karnataka',
        startDate: '2019-06',
        endDate: '2022-03',
        current: false,
        highlights: [
          'Engineered delivery dispatch live-tracking widgets adopted by 400,000+ daily transacting users using WebSockets and Redis.',
          'Reduced web app bundle payload by 45% through tree-shaking, dynamic route splitting, and automated image optimization pipelines.',
          'Authored reusable internal UI component library adopted across 6 cross-functional product squads.'
        ]
      }
    ],
    education: [
      {
        id: 'edu-mm-1',
        degree: 'B.Tech in Computer Science & Engineering',
        institution: 'National Institute of Technology (NIT), Surathkal',
        location: 'Karnataka, India',
        startDate: '2015-08',
        endDate: '2019-05',
        current: false,
        gpa: '9.2 / 10.0',
        highlights: [
          "Dean's Merit List for Academic Excellence • President of Computer Society of India (CSI) Campus Chapter",
          'Senior Capstone: Distributed Consensus Engine in Go'
        ]
      }
    ],
    skillCategories: [
      {
        id: 'cat-mm-1',
        categoryName: 'Programming Languages',
        skills: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'Go', 'SQL', 'HTML5/CSS3']
      },
      {
        id: 'cat-mm-2',
        categoryName: 'Frameworks & Databases',
        skills: ['React', 'Next.js', 'Node.js', 'Express', 'PostgreSQL', 'Redis', 'MongoDB', 'Docker']
      },
      {
        id: 'cat-mm-3',
        categoryName: 'Cloud & Architecture',
        skills: ['AWS (ECS, S3, RDS)', 'Kubernetes', 'Git', 'CI/CD Pipelines', 'Microservices Architecture']
      }
    ],
    projects: [
      {
        id: 'proj-mm-1',
        title: 'PulseMetrics — Real-time Telemetry Dashboard',
        description: 'Open-source distributed telemetry monitoring platform with live WebSockets and timeseries graphs.',
        technologies: 'Node.js, PostgreSQL, Redis, Chart.js',
        liveUrl: 'https://pulsemetrics.demo',
        githubUrl: 'https://github.com/rahulsharma-dev/pulsemetrics'
      },
      {
        id: 'proj-mm-2',
        title: 'DevSync — Collaborative Code Scratchpad',
        description: 'Zero-latency collaborative code editor featuring AST syntax parsing and real-time operational transformation.',
        technologies: 'TypeScript, WebSockets, IndexedDB, Web Workers',
        liveUrl: 'https://devsync.demo',
        githubUrl: 'https://github.com/rahulsharma-dev/devsync'
      }
    ],
    certifications: [
      {
        id: 'cert-mm-1',
        name: 'AWS Certified Solutions Architect – Associate',
        issuer: 'Amazon Web Services',
        issueDate: '2023-05',
        credentialUrl: 'https://aws.amazon.com/verification'
      }
    ]
  },

  // Template 2: ATS Classic (Business & Financial Analyst)
  'ats-classic': {
    personalInfo: {
      fullName: 'Amit Verma',
      jobTitle: 'Senior Business & Financial Analyst',
      email: 'amit.verma@example.in',
      phone: '+91 98112 34567',
      location: 'Mumbai, Maharashtra',
      website: 'https://amitverma-analytics.in',
      linkedin: 'linkedin.com/in/amitverma-analyst',
      github: 'github.com/amitverma-data'
    },
    summary: 'Results-driven Business Analyst with 7+ years of experience in corporate banking, financial modeling, and regulatory reporting. Skilled in translating complex business requirements into high-impact analytics dashboards, delivering ₹3.6 Crore in operational cost efficiencies.',
    experiences: [
      {
        id: 'exp-ats-1',
        jobTitle: 'Senior Business Analyst',
        company: 'HDFC Bank Ltd.',
        location: 'Mumbai, Maharashtra',
        startDate: '2021-07',
        endDate: '',
        current: true,
        highlights: [
          'Led business requirements analysis for a ₹25 Crore core digital lending transformation initiative across 320 branches.',
          'Engineered automated SQL and Power BI financial reporting dashboards, saving 35 weekly analyst hours.',
          'Authored comprehensive BRD, FRD, and agile user story documentation with 99.4% sprint delivery compliance.'
        ]
      },
      {
        id: 'exp-ats-2',
        jobTitle: 'Financial Analyst',
        company: 'Tata Consultancy Services (TCS)',
        location: 'Pune, Maharashtra',
        startDate: '2018-05',
        endDate: '2021-06',
        current: false,
        highlights: [
          'Constructed discounted cash flow (DCF) models and variance scenario analyses for enterprise BFSI clients.',
          'Standardized quarterly financial KPI presentations for executive leadership and corporate audit boards.',
          'Identified billing and invoice reconciliation discrepancies, recovering ₹1.2 Crore in outstanding client receivables.'
        ]
      }
    ],
    education: [
      {
        id: 'edu-ats-1',
        degree: 'MBA in Finance',
        institution: 'Jamnalal Bajaj Institute of Management Studies (JBIMS)',
        location: 'Mumbai, Maharashtra',
        startDate: '2016-08',
        endDate: '2018-05',
        current: false,
        gpa: '8.8 / 10.0',
        highlights: [
          'Concentration: Quantitative Financial Modeling & Risk Management',
          'Academic Merit Scholarship Winner'
        ]
      },
      {
        id: 'edu-ats-2',
        degree: 'B.Com (Hons) in Accounting & Economics',
        institution: "St. Xavier's College",
        location: 'Mumbai, Maharashtra',
        startDate: '2013-07',
        endDate: '2016-05',
        current: false,
        gpa: 'First Class with Distinction'
      }
    ],
    skillCategories: [
      {
        id: 'cat-ats-1',
        categoryName: 'Financial & Business Analysis',
        skills: ['Financial Modeling', 'DCF Valuation', 'BRD & FRD Documentation', 'Gap Analysis', 'Variance Modeling']
      },
      {
        id: 'cat-ats-2',
        categoryName: 'Technical & Analytics Tools',
        skills: ['Advanced Excel (VBA/Macros)', 'SQL', 'Power BI', 'Tableau', 'Python (Pandas)', 'SAP ERP']
      },
      {
        id: 'cat-ats-3',
        categoryName: 'Delivery & Methodologies',
        skills: ['Agile / Scrum', 'JIRA', 'Confluence', 'Six Sigma Green Belt', 'Stakeholder Alignment']
      }
    ],
    projects: [
      {
        id: 'proj-ats-1',
        title: 'Commercial Credit Risk Assessment Model',
        description: 'Built automated credit scoring framework in Python evaluating liquidity and debt-service ratios for MSME underwriting.',
        technologies: 'Python, Pandas, SQL Server, Power BI',
        liveUrl: 'https://demo.example.in/credit-risk'
      }
    ],
    certifications: [
      {
        id: 'cert-ats-1',
        name: 'Certified Business Analysis Professional (CBAP)',
        issuer: 'IIBA',
        issueDate: '2022-04'
      },
      {
        id: 'cert-ats-2',
        name: 'Financial Modeling & Valuation Analyst (FMVA)',
        issuer: 'Corporate Finance Institute',
        issueDate: '2020-09'
      }
    ]
  },

  // Template 3: Tech & Developer (DevOps & Cloud Systems Engineer)
  'tech-developer': {
    personalInfo: {
      fullName: 'Vikram Malhotra',
      jobTitle: 'Lead Cloud & DevOps Infrastructure Engineer',
      email: 'vikram.malhotra@example.in',
      phone: '+91 97234 56789',
      location: 'Hyderabad, Telangana',
      website: 'https://vikram-cloud.dev',
      linkedin: 'linkedin.com/in/vikram-devops-in',
      github: 'github.com/vikram-cloud'
    },
    summary: 'Cloud Infrastructure Architect specializing in multi-region Kubernetes deployments, Terraform Infrastructure as Code (IaC), and resilient CI/CD release automation. Managed 300+ containerized nodes across AWS and hybrid enterprise environments maintaining 99.99% SLA.',
    experiences: [
      {
        id: 'exp-td-1',
        jobTitle: 'Lead DevOps Engineer',
        company: 'Zomato Ltd.',
        location: 'Hyderabad, Telangana',
        startDate: '2022-01',
        endDate: '',
        current: true,
        highlights: [
          'Architected multi-region AWS EKS Kubernetes infrastructure handling 35M+ daily requests during peak food delivery hours.',
          'Automated cloud provisioning via Terraform and Ansible, slashing environment onboarding duration from 2 weeks to 45 minutes.',
          'Implemented Prometheus, Grafana, and OpenTelemetry observability stacks, driving Mean Time to Detect (MTTD) down by 65%.'
        ]
      },
      {
        id: 'exp-td-2',
        jobTitle: 'Cloud Systems Engineer',
        company: 'Infosys Ltd.',
        location: 'Hyderabad, Telangana',
        startDate: '2018-07',
        endDate: '2021-12',
        current: false,
        highlights: [
          'Built enterprise GitLab CI/CD release pipelines with SonarQube quality gates and Trivy container security scanning.',
          'Automated AWS EC2 reserved instance purchasing and S3 lifecycle storage tiering, yielding ₹52 Lakhs in annual cost savings.'
        ]
      }
    ],
    education: [
      {
        id: 'edu-td-1',
        degree: 'B.Tech in Information Technology',
        institution: 'Indian Institute of Technology (IIT), Hyderabad',
        location: 'Telangana, India',
        startDate: '2014-08',
        endDate: '2018-05',
        current: false,
        gpa: '9.0 / 10.0',
        highlights: [
          'Capstone Project: High-Throughput Distributed Key-Value Store with Raft Consensus'
        ]
      }
    ],
    skillCategories: [
      {
        id: 'cat-td-1',
        categoryName: 'Cloud Platforms & Containers',
        skills: ['AWS (EKS, ECS, S3, RDS)', 'Google Cloud (GKE)', 'Docker', 'Kubernetes', 'Helm']
      },
      {
        id: 'cat-td-2',
        categoryName: 'IaC & Automation',
        skills: ['Terraform', 'Ansible', 'CloudFormation', 'Shell Scripting', 'Python']
      },
      {
        id: 'cat-td-3',
        categoryName: 'CI/CD & Observability',
        skills: ['GitHub Actions', 'GitLab CI', 'Prometheus', 'Grafana', 'ELK Stack', 'Datadog']
      }
    ],
    projects: [
      {
        id: 'proj-td-1',
        title: 'KubeScale Controller',
        description: 'Open-source custom Kubernetes HPA controller scaling pods based on real-time Apache Kafka topic lag.',
        technologies: 'Go, Kubernetes Client-Go, Kafka, Helm',
        githubUrl: 'https://github.com/vikram-cloud/kubescale'
      },
      {
        id: 'proj-td-2',
        title: 'ZeroTrust Cloud Gateway',
        description: 'Automated identity-aware SSH bastion access using HashiCorp Vault one-time credentials.',
        technologies: 'Terraform, HashiCorp Vault, AWS EC2, WireGuard',
        githubUrl: 'https://github.com/vikram-cloud/zerotrust-gateway'
      }
    ],
    certifications: [
      {
        id: 'cert-td-1',
        name: 'Certified Kubernetes Administrator (CKA)',
        issuer: 'Cloud Native Computing Foundation (CNCF)',
        issueDate: '2023-03',
        credentialUrl: 'https://www.cncf.io/certification/cka'
      },
      {
        id: 'cert-td-2',
        name: 'AWS Certified DevOps Engineer – Professional',
        issuer: 'Amazon Web Services',
        issueDate: '2022-10'
      }
    ]
  },

  // Template 4: Executive Leader (Vice President / Operations Director)
  'executive-leader': {
    personalInfo: {
      fullName: 'Arjun Mehta',
      jobTitle: 'Vice President of Operations & Strategy',
      email: 'arjun.mehta@enterprise.in',
      phone: '+91 98450 12340',
      location: 'Pune, Maharashtra',
      website: 'https://arjunmehta.in',
      linkedin: 'linkedin.com/in/arjun-mehta-exec',
      github: ''
    },
    summary: 'Transformational C-suite operational leader with 14+ years of experience directing ₹250+ Crore P&L operations, managing multi-tier manufacturing and logistics supply chains, and leading cross-functional divisions of 350+ personnel across India and APAC.',
    experiences: [
      {
        id: 'exp-el-1',
        jobTitle: 'Vice President, Operations',
        company: 'Tata Motors Commercial Vehicles',
        location: 'Pune, Maharashtra',
        startDate: '2020-03',
        endDate: '',
        current: true,
        highlights: [
          'Stewarded ₹220 Crore annual manufacturing operating budget, increasing EBITDA operating margins by 16.5% over 3 years.',
          'Pioneered Industry 4.0 IoT assembly automation across 3 production plants, lifting assembly throughput by 38%.',
          'Directed strategic procurement vendor consolidation, achieving ₹18.5 Crore in recurring supplier cost avoidance.'
        ]
      },
      {
        id: 'exp-el-2',
        jobTitle: 'Senior Director of Operations',
        company: 'Mahindra & Mahindra Ltd.',
        location: 'Mumbai, Maharashtra',
        startDate: '2015-06',
        endDate: '2020-02',
        current: false,
        highlights: [
          'Built and led 280-member multi-regional plant operations division maintaining 99.7% on-time dealer dispatch compliance.',
          'Instituted company-wide Lean Kaizen initiatives, eliminating 420 hours of annual assembly line bottleneck downtime.'
        ]
      }
    ],
    education: [
      {
        id: 'edu-el-1',
        degree: 'Post Graduate Diploma in Management (MBA)',
        institution: 'Indian Institute of Management (IIM), Ahmedabad',
        location: 'Ahmedabad, Gujarat',
        startDate: '2013-06',
        endDate: '2015-04',
        current: false,
        highlights: ['Graduated in Top 10% of Batch • Director’s Merit List']
      },
      {
        id: 'edu-el-2',
        degree: 'B.Tech in Mechanical Engineering',
        institution: 'College of Engineering Pune (COEP)',
        location: 'Pune, Maharashtra',
        startDate: '2007-08',
        endDate: '2011-05',
        current: false,
        gpa: 'First Class with Honors'
      }
    ],
    skillCategories: [
      {
        id: 'cat-el-1',
        categoryName: 'Strategic Leadership',
        skills: ['P&L Management (₹250+ Crore)', 'Board & Stakeholder Relations', 'Strategic Capital Allocation', 'M&A Due Diligence']
      },
      {
        id: 'cat-el-2',
        categoryName: 'Operational Excellence',
        skills: ['Supply Chain Modernization', 'Lean Manufacturing', 'Kaizen', 'Six Sigma Master Black Belt', 'Vendor Negotiations']
      },
      {
        id: 'cat-el-3',
        categoryName: 'Team & Governance',
        skills: ['Organizational Restructuring', 'Executive Leadership Mentorship', 'Industrial Safety (EHS)', 'Corporate Governance']
      }
    ],
    projects: [
      {
        id: 'proj-el-1',
        title: 'EV Manufacturing Line Greenfield Commissioning',
        description: 'Led end-to-end commissioning of commercial electric vehicle assembly facility 2 months ahead of schedule.',
        technologies: 'Industry 4.0 IoT, SAP S/4HANA, Automated Guided Vehicles (AGV)'
      }
    ],
    certifications: [
      {
        id: 'cert-el-1',
        name: 'Lean Six Sigma Master Black Belt',
        issuer: 'American Society for Quality (ASQ)',
        issueDate: '2018-05'
      },
      {
        id: 'cert-el-2',
        name: 'Executive Strategic Leadership Program',
        issuer: 'IIM Ahmedabad',
        issueDate: '2017-11'
      }
    ]
  },

  // Template 5: Creative Designer (UI/UX & Design Systems Lead)
  'creative-designer': {
    personalInfo: {
      fullName: 'Priya Patel',
      jobTitle: 'Lead UI/UX & Design Systems Architect',
      email: 'priya.patel@designstudio.in',
      phone: '+91 98790 12345',
      location: 'Ahmedabad, Gujarat',
      website: 'https://priyapatel.design',
      linkedin: 'linkedin.com/in/priyapatel-design',
      github: 'github.com/priyapatel-design'
    },
    summary: 'Human-centered Lead Product Designer with 7+ years of experience architecting accessible design systems and consumer mobile experiences for 6M+ users. Passionate about typography hierarchy, micro-interactions, and high-conversion UX flows.',
    experiences: [
      {
        id: 'exp-cd-1',
        jobTitle: 'Lead UI/UX Designer',
        company: 'Nykaa E-Retail',
        location: 'Mumbai / Ahmedabad',
        startDate: '2021-05',
        endDate: '',
        current: true,
        highlights: [
          'Spearheaded unified cross-platform design system overhaul, accelerating mobile & web developer delivery velocity by 40%.',
          'Conducted 60+ qualitative customer usability interviews and heat-map analyses, lifting cart checkout conversion by 26%.',
          'Mentored 7 product and visual designers in interaction design standards, micro-animations, and WCAG AA accessibility.'
        ]
      },
      {
        id: 'exp-cd-2',
        jobTitle: 'Senior Product Designer',
        company: 'BookMyShow',
        location: 'Mumbai, Maharashtra',
        startDate: '2018-02',
        endDate: '2021-04',
        current: false,
        highlights: [
          'Redesigned native mobile seat-selection booking flow (4.8/5.0 App Store rating across 180,000+ verified customer reviews).',
          'Partnered with mobile engineering squads to craft interactive motion prototypes in Figma, Principle, and Lottie.'
        ]
      }
    ],
    education: [
      {
        id: 'edu-cd-1',
        degree: 'Master of Design (M.Des) in New Media Design',
        institution: 'National Institute of Design (NID)',
        location: 'Ahmedabad, Gujarat',
        startDate: '2016-07',
        endDate: '2018-05',
        current: false,
        highlights: ['Excellence in Human-Centered Design Award']
      },
      {
        id: 'edu-cd-2',
        degree: 'B.Des in Visual Communication',
        institution: 'Industrial Design Centre (IDC), IIT Bombay',
        location: 'Mumbai, Maharashtra',
        startDate: '2012-07',
        endDate: '2016-05',
        current: false,
        gpa: 'First Class with Distinction'
      }
    ],
    skillCategories: [
      {
        id: 'cat-cd-1',
        categoryName: 'UI/UX & Prototyping',
        skills: ['Figma', 'FigJam', 'Adobe Creative Cloud', 'Framer', 'Principle', 'Wireframing', 'Rapid Prototyping']
      },
      {
        id: 'cat-cd-2',
        categoryName: 'Research & Strategy',
        skills: ['Usability Testing', 'Heuristic Evaluation', 'User Journey Mapping', 'Information Architecture', 'A/B Testing']
      },
      {
        id: 'cat-cd-3',
        categoryName: 'Design Systems & Standards',
        skills: ['Design Tokens', 'WCAG 2.1 AA Accessibility', 'Responsive Grid Layouts', 'HTML5/CSS3 Literacy']
      }
    ],
    projects: [
      {
        id: 'proj-cd-1',
        title: 'Canvas Multi-Brand Design System',
        description: 'Multi-brand UI component library with 250+ Figma components, documentation, and accessible token specifications.',
        technologies: 'Figma, Storybook, Design Tokens, Zeroheight',
        liveUrl: 'https://priyapatel.design/canvas'
      },
      {
        id: 'proj-cd-2',
        title: 'PaySwift Mobile Checkout',
        description: 'Zero-friction 2-step UPI payments checkout flow reducing mobile transaction abandonment by 31%.',
        technologies: 'Figma, Principle, UserTesting',
        liveUrl: 'https://priyapatel.design/payswift'
      }
    ],
    certifications: [
      {
        id: 'cert-cd-1',
        name: 'Nielsen Norman Group UX Master Certified',
        issuer: 'Nielsen Norman Group (NN/g)',
        issueDate: '2022-06'
      }
    ]
  },

  // Template 6: Academic & Fresher (Student & AI Researcher)
  'academic-fresher': {
    personalInfo: {
      fullName: 'Sneha Singh',
      jobTitle: 'Computer Science Graduate & AI Researcher',
      email: 'sneha.singh@university.edu.in',
      phone: '+91 98330 45678',
      location: 'New Delhi, Delhi',
      website: 'https://snehasingh-ai.in',
      linkedin: 'linkedin.com/in/snehasingh-ai',
      github: 'github.com/snehasingh-research'
    },
    summary: 'Recent B.Tech in Computer Science & AI graduate with a 9.5 GPA and published research in Computer Vision and Natural Language Processing. Co-authored an IEEE workshop paper and seeking an entry-level Software / Machine Learning Engineering role.',
    education: [
      {
        id: 'edu-af-1',
        degree: 'B.Tech in Computer Science and Engineering',
        institution: 'Delhi Technological University (DTU)',
        location: 'New Delhi, Delhi',
        startDate: '2022-08',
        endDate: '2026-05',
        current: false,
        gpa: '9.5 / 10.0',
        highlights: [
          'Academic Distinction: Gold Medalist (Top 1% of department across all 7 completed semesters)',
          'Relevant Coursework: Machine Learning, Deep Learning, Natural Language Processing, Algorithms, Computer Vision, Operating Systems',
          'B.Tech Capstone Thesis: Lightweight Vision Transformers for Edge Agricultural Pest Detection'
        ]
      }
    ],
    experiences: [
      {
        id: 'exp-af-1',
        jobTitle: 'Machine Learning Research Intern',
        company: 'Wadhwani Institute for AI',
        location: 'New Delhi, Delhi',
        startDate: '2025-05',
        endDate: '2025-08',
        current: false,
        highlights: [
          'Developed lightweight Vision Transformer (ViT) classification models for plant pathology, achieving 94.8% test accuracy.',
          'Co-authored research paper published in IEEE Computer Vision for Agriculture Workshop 2025 proceedings.',
          'Optimized PyTorch inference latency by 2.6x on edge microcontrollers utilizing post-training int8 quantization.'
        ]
      },
      {
        id: 'exp-af-2',
        jobTitle: 'Undergraduate Teaching Assistant',
        company: 'Department of Computer Science, DTU',
        location: 'New Delhi, Delhi',
        startDate: '2024-08',
        endDate: '2025-04',
        current: false,
        highlights: [
          'Mentored 75+ sophomore undergraduates in C++ Object-Oriented Programming and Data Structures lab assignments.'
        ]
      }
    ],
    skillCategories: [
      {
        id: 'cat-af-1',
        categoryName: 'Core Languages',
        skills: ['Python', 'C++', 'Java', 'SQL', 'HTML5/CSS3', 'JavaScript']
      },
      {
        id: 'cat-af-2',
        categoryName: 'Machine Learning & Deep Learning',
        skills: ['PyTorch', 'TensorFlow', 'Hugging Face Transformers', 'OpenCV', 'Scikit-learn', 'NumPy', 'Pandas']
      },
      {
        id: 'cat-af-3',
        categoryName: 'Developer Tools',
        skills: ['Git / GitHub', 'Linux', 'Docker', 'Google Colab Pro', 'Weights & Biases', 'LaTeX']
      }
    ],
    projects: [
      {
        id: 'proj-af-1',
        title: 'EdgeVisionNLP — Edge Transformer Pipeline',
        description: 'Quantized multi-modal model for real-time document text detection on Raspberry Pi 4 with zero accuracy loss.',
        technologies: 'Python, PyTorch, ONNX, Hugging Face',
        githubUrl: 'https://github.com/snehasingh-research/edgevision-nlp'
      },
      {
        id: 'proj-af-2',
        title: 'CampusAid Portal — Peer Tutoring Platform',
        description: 'Full-stack university academic repository and tutoring exchange portal used by 2,500+ active students.',
        technologies: 'FastAPI, PostgreSQL, React, WebRTC',
        githubUrl: 'https://github.com/snehasingh-research/campusaid'
      }
    ],
    certifications: [
      {
        id: 'cert-af-1',
        name: 'Deep Learning Specialization',
        issuer: 'DeepLearning.AI / Andrew Ng',
        issueDate: '2024-11',
        credentialUrl: 'https://coursera.org/verify/specialization'
      },
      {
        id: 'cert-af-2',
        name: 'AWS Certified Cloud Practitioner',
        issuer: 'Amazon Web Services',
        issueDate: '2024-07'
      }
    ]
  },

  // Template 7: Business & Management (Technical Product & Project Manager)
  'business-management': {
    personalInfo: {
      fullName: 'Neha Joshi',
      jobTitle: 'Senior Technical Product Manager (PMP)',
      email: 'neha.joshi@productcraft.in',
      phone: '+91 98220 56789',
      location: 'Thane, Maharashtra',
      website: 'https://nehajoshi-pm.in',
      linkedin: 'linkedin.com/in/nehajoshi-pm',
      github: 'github.com/nehajoshi-pm'
    },
    summary: 'Agile Senior Product Manager with 8+ years of experience leading cross-functional engineering and design squads in B2B SaaS and FinTech. Driven ₹14 Crore in incremental Annual Recurring Revenue (ARR), lowered churn by 34%, and launched 18 major product releases.',
    experiences: [
      {
        id: 'exp-bm-1',
        jobTitle: 'Senior Product Manager',
        company: 'Razorpay Software Pvt. Ltd.',
        location: 'Bengaluru / Mumbai',
        startDate: '2021-09',
        endDate: '',
        current: true,
        highlights: [
          'Formulated multi-year roadmap and feature backlog for merchant payment settlement APIs, scaling ARR from ₹8 Cr to ₹22 Cr.',
          'Conducted discovery interviews with 140+ enterprise finance leaders to prioritize automated instant refund settlement features.',
          'Shortened average enterprise merchant onboarding cycle from 30 days to 9 days through paperless digital KYC integration.'
        ]
      },
      {
        id: 'exp-bm-2',
        jobTitle: 'Technical Project Manager',
        company: 'Tech Mahindra',
        location: 'Pune, Maharashtra',
        startDate: '2018-04',
        endDate: '2021-08',
        current: false,
        highlights: [
          'Led 3 Scrum squads of 26 software engineers delivering telecom billing platforms for global enterprise service providers.',
          'Boosted sprint velocity predictability by 36% while cutting production release defect incidents by 48%.'
        ]
      }
    ],
    education: [
      {
        id: 'edu-bm-1',
        degree: 'B.Tech in Electronics & Telecommunication',
        institution: 'Veermata Jijabai Technological Institute (VJTI)',
        location: 'Mumbai, Maharashtra',
        startDate: '2014-08',
        endDate: '2018-05',
        current: false,
        gpa: '8.9 / 10.0',
        highlights: ['First Class with Distinction • Student Council Technical Secretary']
      }
    ],
    skillCategories: [
      {
        id: 'cat-bm-1',
        categoryName: 'Product Leadership',
        skills: ['Roadmap Prioritization', 'PRD & User Story Writing', 'Opportunity Solution Trees', 'Market Sizing', 'OKRs']
      },
      {
        id: 'cat-bm-2',
        categoryName: 'Agile Delivery',
        skills: ['Scrum', 'Kanban', 'JIRA', 'Confluence', 'Backlog Refinement', 'Sprint Planning', 'Release Management']
      },
      {
        id: 'cat-bm-3',
        categoryName: 'Analytics & Metrics',
        skills: ['Mixpanel', 'Amplitude', 'Google Analytics 4', 'SQL Queries', 'Tableau', 'Funnel Optimization', 'A/B Testing']
      }
    ],
    projects: [
      {
        id: 'proj-bm-1',
        title: 'Merchant Analytics Dashboard',
        description: 'Engineered self-serve analytics portal serving 60,000+ active merchants with live transaction volume metrics.',
        technologies: 'React, Node.js microservices, JIRA, Amplitude'
      },
      {
        id: 'proj-bm-2',
        title: 'Automated Chargeback Resolution Portal',
        description: 'Decreased merchant dispute resolution turnaround time from 7 business days to under 24 hours.',
        technologies: 'Payment Webhooks, Segment, Automated Workflows'
      }
    ],
    certifications: [
      {
        id: 'cert-bm-1',
        name: 'Project Management Professional (PMP)',
        issuer: 'Project Management Institute (PMI)',
        issueDate: '2021-06'
      },
      {
        id: 'cert-bm-2',
        name: 'Certified Scrum Product Owner (CSPO)',
        issuer: 'Scrum Alliance',
        issueDate: '2020-04'
      }
    ]
  },

  // Template 8: Compact Elegant (Management Consultant & Strategy Lead)
  'compact-elegant': {
    personalInfo: {
      fullName: 'Rohan Deshmukh',
      jobTitle: 'Management Consultant & Strategy Lead',
      email: 'rohan.deshmukh@advisory.in',
      phone: '+91 98230 67891',
      location: 'Chennai, Tamil Nadu',
      website: 'https://rohandeshmukh.in',
      linkedin: 'linkedin.com/in/rohandeshmukh-strategy',
      github: ''
    },
    summary: 'High-impact strategy and corporate development consultant with 6+ years advising leading conglomerates on operational restructuring, supply chain transformation, and new market entry across India and Southeast Asia.',
    experiences: [
      {
        id: 'exp-ce-1',
        jobTitle: 'Engagement Manager',
        company: 'Boston Consulting Group (BCG)',
        location: 'Chennai / Mumbai',
        startDate: '2022-03',
        endDate: '',
        current: true,
        highlights: [
          'Led team of 6 strategy consultants delivering commercial due diligence for a ₹1,200 Crore infrastructure investment.',
          'Designed direct-to-consumer digital distribution model for FMCG conglomerate, generating ₹45 Crore in new revenue.',
          'Presented turnaround roadmap to Board of Directors and Promoters, securing unanimous approval for multi-year rollout.'
        ]
      },
      {
        id: 'exp-ce-2',
        jobTitle: 'Strategy Consultant',
        company: 'PwC Advisory',
        location: 'Chennai, Tamil Nadu',
        startDate: '2019-07',
        endDate: '2022-02',
        current: false,
        highlights: [
          'Formulated procurement optimization strategy for leading healthcare network, realizing ₹22 Crore in annual cost savings.',
          'Re-engineered dealer incentive pricing structures, boosting average distributor sales volume by 24%.'
        ]
      }
    ],
    education: [
      {
        id: 'edu-ce-1',
        degree: 'MBA in Strategy & Finance',
        institution: 'Indian Institute of Management (IIM), Calcutta',
        location: 'Kolkata, West Bengal',
        startDate: '2017-06',
        endDate: '2019-04',
        current: false,
        highlights: ['Merit List Scholar • President of Management Consulting Club']
      },
      {
        id: 'edu-ce-2',
        degree: 'B.E. in Mechanical Engineering',
        institution: 'College of Engineering, Guindy (CEG), Anna University',
        location: 'Chennai, Tamil Nadu',
        startDate: '2013-08',
        endDate: '2017-05',
        current: false,
        gpa: 'First Class with Distinction'
      }
    ],
    skillCategories: [
      {
        id: 'cat-ce-1',
        categoryName: 'Strategic Advisory',
        skills: ['Commercial Due Diligence', 'Market Entry Strategy', 'Growth Advisory', 'Financial Valuation Modeling']
      },
      {
        id: 'cat-ce-2',
        categoryName: 'Stakeholder Management & Tools',
        skills: ['C-Suite & Board Presentations', 'Executive Negotiation', 'Advanced Excel', 'Alteryx', 'Tableau', 'PowerPoint Storylining']
      }
    ],
    projects: [
      {
        id: 'proj-ce-1',
        title: 'Enterprise Wholesale Distributor Modernization',
        description: 'Revamped Tier-2 and Tier-3 wholesale distribution network across 18 Indian states, expanding reach by 35%.'
      }
    ],
    certifications: [
      {
        id: 'cert-ce-1',
        name: 'Chartered Financial Analyst (CFA) Level II Candidate',
        issuer: 'CFA Institute',
        issueDate: '2021-06'
      }
    ]
  },

  // Template 9: Contemporary Sidebar (Head of Digital Marketing & Brand Growth)
  'contemporary-sidebar': {
    personalInfo: {
      fullName: 'Ananya Iyer',
      jobTitle: 'Head of Digital Marketing & Brand Growth',
      email: 'ananya.iyer@growthcraft.in',
      phone: '+91 98401 78901',
      location: 'Kolkata, West Bengal',
      website: 'https://ananyaiyer.marketing',
      linkedin: 'linkedin.com/in/ananyaiyer-marketing',
      github: 'github.com/ananyaiyer-growth'
    },
    summary: 'Data-driven Head of Digital Marketing with 7+ years of experience scaling consumer acquisition funnels, performance marketing campaigns, and omni-channel brand storytelling. Managed ₹8 Crore in annual performance ad budgets achieving an average 4.6x ROAS.',
    experiences: [
      {
        id: 'exp-cs-1',
        jobTitle: 'Director of Growth Marketing',
        company: 'Scaler Academy',
        location: 'Bengaluru / Kolkata',
        startDate: '2022-01',
        endDate: '',
        current: true,
        highlights: [
          'Scaled annual student enrollment pipeline by 145% while lowering customer acquisition cost (CAC) by 32%.',
          'Managed ₹6 Crore annual digital ad spend across Google Ads, Meta, LinkedIn, and YouTube with a verified 4.8x ROAS.',
          'Orchestrated nationwide brand campaign that amplified organic brand search volume by 88% in 6 months.'
        ]
      },
      {
        id: 'exp-cs-2',
        jobTitle: 'Performance Marketing Lead',
        company: 'ITC Infotech',
        location: 'Kolkata, West Bengal',
        startDate: '2018-09',
        endDate: '2021-12',
        current: false,
        highlights: [
          'Engineered product-led referral programs and interactive quizzes, acquiring 320,000+ verified customer leads.',
          'Formulated full-funnel attribution dashboards in Google Analytics 4 and Looker Studio tracking ROI from click to revenue.'
        ]
      }
    ],
    education: [
      {
        id: 'edu-cs-1',
        degree: 'MBA in Marketing',
        institution: 'Xavier Institute of Management (XIMB)',
        location: 'Bhubaneswar, Odisha',
        startDate: '2016-06',
        endDate: '2018-04',
        current: false,
        highlights: ['Dean’s Top 5% Academic Honor Roll']
      },
      {
        id: 'edu-cs-2',
        degree: 'B.A. (Hons) in English & Mass Communication',
        institution: "St. Xavier's College",
        location: 'Kolkata, West Bengal',
        startDate: '2013-07',
        endDate: '2016-05',
        current: false,
        gpa: 'First Class'
      }
    ],
    skillCategories: [
      {
        id: 'cat-cs-1',
        categoryName: 'Growth & Performance Marketing',
        skills: ['Google Ads (SEM)', 'Meta Ads', 'LinkedIn Ads', 'Search Engine Optimization (SEO)', 'ROAS', 'CAC / LTV']
      },
      {
        id: 'cat-cs-2',
        categoryName: 'Marketing Tech & Analytics',
        skills: ['Google Analytics 4', 'HubSpot', 'Looker Studio', 'Clevertap', 'SEMrush', 'Optimizely']
      },
      {
        id: 'cat-cs-3',
        categoryName: 'Creative & Brand Strategy',
        skills: ['Multi-Channel Brand Campaigns', 'Copywriting', 'A/B Testing', 'Lifecycle Email Automations']
      }
    ],
    projects: [
      {
        id: 'proj-cs-1',
        title: 'Programmatic SEO Learning Directory',
        description: 'Constructed programmatic learning directory generating 180,000+ monthly organic visits and ₹2.2 Crore in pipeline.',
        technologies: 'Next.js, Webflow, SEMrush, Google Search Console',
        liveUrl: 'https://ananyaiyer.marketing/seo-case-study'
      },
      {
        id: 'proj-cs-2',
        title: 'High-Intent Omni-Channel Lead Funnel',
        description: 'Multi-touch performance marketing pipeline delivering ₹4.2 Crore in closed course admissions.',
        technologies: 'HubSpot Marketing Hub, Meta Ads, GA4',
        liveUrl: 'https://ananyaiyer.marketing/omnichannel'
      }
    ],
    certifications: [
      {
        id: 'cert-cs-1',
        name: 'Google Ads & Analytics Certified Professional',
        issuer: 'Google',
        issueDate: '2023-02'
      },
      {
        id: 'cert-cs-2',
        name: 'Advanced Inbound & Lifecycle Marketing',
        issuer: 'HubSpot Academy',
        issueDate: '2022-06'
      }
    ]
  }
};

// --------------------------------------------------------------------------
// 9 Resume Template Definitions
// --------------------------------------------------------------------------
const RESUME_TEMPLATES = [
  {
    id: 'modern-minimal',
    name: 'Modern Minimal',
    role: 'Tech & Modern Professional',
    category: 'Tech & Engineering',
    description: 'Clean, airy layout with crisp typography and subtle accent dividers. Ideal for tech, startups, and product roles.',
    recommendedFor: 'Software Engineers, Product Managers, and Modern Specialists',
    defaultAccent: '#3b82f6',
    cssClass: 'tpl-modern-minimal'
  },
  {
    id: 'ats-classic',
    name: 'ATS Classic',
    role: 'Traditional & ATS Optimized',
    category: 'Business & Management',
    description: 'High-density, single-column layout engineered for 100% parsability by applicant tracking systems.',
    recommendedFor: 'Corporate Applicants, Finance, Legal, and High-Volume Applications',
    defaultAccent: '#1e293b',
    cssClass: 'tpl-ats-classic'
  },
  {
    id: 'tech-developer',
    name: 'Tech & Developer',
    role: 'Software & DevOps Engineer',
    category: 'Tech & Engineering',
    description: 'Features monospace accents, categorized technical skill tags, GitHub links, and code architecture highlights.',
    recommendedFor: 'Full Stack Developers, Cloud Architects, and Systems Engineers',
    defaultAccent: '#10b981',
    cssClass: 'tpl-tech-developer'
  },
  {
    id: 'executive-leader',
    name: 'Executive Leader',
    role: 'C-Suite & Senior Management',
    category: 'Business & Management',
    description: 'Prestigious corporate layout with executive summary, core competencies grid, and milestone-driven achievements.',
    recommendedFor: 'Directors, VPs, Executives, and Department Leads',
    defaultAccent: '#1e3a8a',
    cssClass: 'tpl-executive-leader'
  },
  {
    id: 'creative-designer',
    name: 'Creative Designer',
    role: 'Design & Visual Creative',
    category: 'Creative & Design',
    description: 'Stylish asymmetric header accent, visual design skill badges, and emphasized portfolio case study links.',
    recommendedFor: 'UI/UX Designers, Brand Architects, and Creative Directors',
    defaultAccent: '#8b5cf6',
    cssClass: 'tpl-creative-designer'
  },
  {
    id: 'academic-fresher',
    name: 'Academic & Fresher',
    role: 'Student & Early Career',
    category: 'Students & Freshers',
    description: 'Education-first structure spotlighting degree honors, GPA, relevant coursework, and academic capstones.',
    recommendedFor: 'University Students, New Graduates, and Interns',
    defaultAccent: '#0284c7',
    cssClass: 'tpl-academic-fresher'
  },
  {
    id: 'business-management',
    name: 'Business & Management',
    role: 'Consultant & Operations Lead',
    category: 'Business & Management',
    description: 'Metrics-focused corporate layout emphasizing quantifiable project delivery, team leadership, and ROI.',
    recommendedFor: 'Business Analysts, Scrum Masters, and Operations Managers',
    defaultAccent: '#0f766e',
    cssClass: 'tpl-business-management'
  },
  {
    id: 'compact-elegant',
    name: 'Compact Elegant',
    role: 'Condensed Single-Page Pro',
    category: 'Business & Management',
    description: 'Space-optimized single-page layout designed to fit extensive experience without awkward page-spill.',
    recommendedFor: 'Experienced Professionals seeking a concise 1-page resume',
    defaultAccent: '#4338ca',
    cssClass: 'tpl-compact-elegant'
  },
  {
    id: 'contemporary-sidebar',
    name: 'Contemporary Sidebar',
    role: 'Multi-Disciplinary Professional',
    category: 'Creative & Design',
    description: 'Two-column layout with a sleek left sidebar for contact details and skills, leaving full width for experience.',
    recommendedFor: 'Marketing Leads, Consultants, and Multi-Skilled Professionals',
    defaultAccent: '#2563eb',
    cssClass: 'tpl-contemporary-sidebar'
  }
];

// Helper to obtain a deep-cloned dummy resume for any template
function getDummyResumeForTemplate(templateId, title) {
  const dummy = DUMMY_PROFILES[templateId] || DUMMY_PROFILES['modern-minimal'];
  const tpl = RESUME_TEMPLATES.find(t => t.id === templateId) || RESUME_TEMPLATES[0];

  return {
    id: 'resume-' + Date.now(),
    title: title || `${tpl.name} Resume`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    settings: {
      template: templateId,
      accentColor: tpl.defaultAccent,
      fontFamily: templateId === 'ats-classic' ? 'serif' : (templateId === 'tech-developer' ? 'mono' : 'sans'),
      spacing: templateId === 'compact-elegant' ? 'compact' : 'normal'
    },
    personalInfo: JSON.parse(JSON.stringify(dummy.personalInfo || {})),
    summary: dummy.summary || '',
    experiences: JSON.parse(JSON.stringify(dummy.experiences || [])),
    education: JSON.parse(JSON.stringify(dummy.education || [])),
    skillCategories: JSON.parse(JSON.stringify(dummy.skillCategories || [])),
    projects: JSON.parse(JSON.stringify(dummy.projects || [])),
    certifications: JSON.parse(JSON.stringify(dummy.certifications || []))
  };
}

// --------------------------------------------------------------------------
// Semantic HTML Resume Renderer (Vanilla JS)
// --------------------------------------------------------------------------
const TemplateRenderer = {
  // Format Date (YYYY-MM to Month YYYY)
  formatDate(dateStr) {
    if (!dateStr || !dateStr.trim()) return '';
    try {
      const parts = dateStr.trim().split('-');
      if (parts.length < 2) return dateStr;
      const year = parts[0];
      const monthIndex = parseInt(parts[1], 10) - 1;
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return `${months[monthIndex] || parts[1]} ${year}`;
    } catch {
      return dateStr;
    }
  },

  // Escape HTML to prevent injection and rendering bugs
  escapeHTML(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  },

  // Format bullet points (split by newline or array, omitting blank lines)
  formatBullets(highlights) {
    if (!highlights) return '';
    let items = [];
    if (Array.isArray(highlights)) {
      items = highlights.map(h => (h || '').trim()).filter(h => h.length > 0);
    } else if (typeof highlights === 'string') {
      items = highlights
        .split('\n')
        .map(s => s.trim().replace(/^[-*•]\s*/, ''))
        .filter(s => s.length > 0);
    }
    if (items.length === 0) return '';
    return `<ul class="resume-bullets">${items.map(item => `<li>${this.escapeHTML(item)}</li>`).join('')}</ul>`;
  },

  // Main Render Function - renders user's actual data, omitting cleared/empty sections
  render(data) {
    if (!data) return '<div class="empty-preview">No resume data found</div>';

    const templateId = (data.settings && data.settings.template) || 'modern-minimal';
    const accentColor = (data.settings && data.settings.accentColor) || '#3b82f6';
    const fontFamily = (data.settings && data.settings.fontFamily) || 'sans';
    const spacing = (data.settings && data.settings.spacing) || 'normal';

    const tpl = RESUME_TEMPLATES.find(t => t.id === templateId) || RESUME_TEMPLATES[0];
    const cssClass = tpl.cssClass;

    const fontStyle = {
      sans: 'font-family: var(--font-sans);',
      serif: 'font-family: var(--font-serif);',
      mono: 'font-family: var(--font-mono);'
    }[fontFamily] || 'font-family: var(--font-sans);';

    const spacingStyle = {
      compact: '--section-gap: 0.85rem; --item-gap: 0.45rem;',
      normal: '--section-gap: 1.25rem; --item-gap: 0.75rem;',
      relaxed: '--section-gap: 1.65rem; --item-gap: 1rem;'
    }[spacing] || '';

    // Contemporary Sidebar layout
    if (templateId === 'contemporary-sidebar') {
      return this.renderSidebarTemplate(data, tpl, accentColor, fontStyle, spacingStyle);
    }

    // Standard Single-Column / Modular Layouts
    return `
      <div class="resume-sheet ${cssClass}" style="--tpl-accent: ${accentColor}; ${fontStyle} ${spacingStyle}">
        ${this.renderHeader(data, templateId)}
        ${this.renderSummary(data, templateId)}
        ${templateId === 'academic-fresher' ? this.renderEducation(data) : ''}
        ${this.renderExperience(data)}
        ${templateId !== 'academic-fresher' ? this.renderEducation(data) : ''}
        ${this.renderSkills(data)}
        ${this.renderProjects(data)}
        ${this.renderCertifications(data)}
      </div>
    `;
  },

  // Render Header Section (Handles cleared/empty fields gracefully without fallback placeholder text)
  renderHeader(data, templateId) {
    const p = data.personalInfo || {};
    const name = p.fullName ? this.escapeHTML(p.fullName.trim()) : '';
    const role = p.jobTitle ? this.escapeHTML(p.jobTitle.trim()) : '';

    const contactItems = [];
    if (p.email && p.email.trim()) contactItems.push(`<span>✉ ${this.escapeHTML(p.email.trim())}</span>`);
    if (p.phone && p.phone.trim()) contactItems.push(`<span>☎ ${this.escapeHTML(p.phone.trim())}</span>`);
    if (p.location && p.location.trim()) contactItems.push(`<span>📍 ${this.escapeHTML(p.location.trim())}</span>`);
    if (p.linkedin && p.linkedin.trim()) contactItems.push(`<span>🔗 ${this.escapeHTML(p.linkedin.trim())}</span>`);
    if (p.github && p.github.trim()) contactItems.push(`<span>💻 ${this.escapeHTML(p.github.trim())}</span>`);
    if (p.website && p.website.trim()) contactItems.push(`<span>🌐 ${this.escapeHTML(p.website.trim())}</span>`);

    // If completely empty, omit header
    if (!name && !role && contactItems.length === 0) return '';

    if (templateId === 'creative-designer' || templateId === 'compact-elegant') {
      return `
        <header class="tpl-header">
          <div>
            ${name ? `<h1 class="tpl-name">${name}</h1>` : ''}
            ${role ? `<div class="tpl-job-title">${role}</div>` : ''}
          </div>
          ${contactItems.length ? `<div class="tpl-contact-bar">${contactItems.join('')}</div>` : ''}
        </header>
      `;
    }

    return `
      <header class="tpl-header">
        ${name ? `<h1 class="tpl-name">${name}</h1>` : ''}
        ${role ? `<div class="tpl-job-title">${role}</div>` : ''}
        ${contactItems.length ? `<div class="tpl-contact-bar">${contactItems.join(' • ')}</div>` : ''}
      </header>
    `;
  },

  // Render Professional Summary (Hidden when empty)
  renderSummary(data, templateId) {
    if (!data.summary || !data.summary.trim()) return '';
    const title = templateId === 'academic-fresher' ? 'Career Objective' : 'Professional Summary';

    if (templateId === 'executive-leader') {
      return `
        <section class="resume-section">
          <h2 class="resume-section-title">${title}</h2>
          <div class="executive-summary-box">
            ${this.escapeHTML(data.summary.trim())}
          </div>
        </section>
      `;
    }

    return `
      <section class="resume-section">
        <h2 class="resume-section-title">${title}</h2>
        <p style="font-size: 0.85rem; line-height: 1.5; color: #334155;">
          ${this.escapeHTML(data.summary.trim())}
        </p>
      </section>
    `;
  },

  // Render Work Experience (Hidden when empty or when entries are cleared)
  renderExperience(data) {
    const rawList = data.experiences || [];
    const experiences = rawList.filter(e => {
      const hasTitle = e.jobTitle && e.jobTitle.trim().length > 0;
      const hasCompany = e.company && e.company.trim().length > 0;
      const hasHighlights = Array.isArray(e.highlights)
        ? e.highlights.some(h => h && h.trim().length > 0)
        : (e.highlights && e.highlights.trim().length > 0);
      return hasTitle || hasCompany || hasHighlights;
    });

    if (experiences.length === 0) return '';

    return `
      <section class="resume-section">
        <h2 class="resume-section-title">Work Experience</h2>
        ${experiences.map(exp => {
          const title = (exp.jobTitle || '').trim();
          const company = (exp.company || '').trim();
          const start = this.formatDate(exp.startDate);
          const end = exp.current ? 'Present' : this.formatDate(exp.endDate);
          const dateRange = (start || end) ? `${start || ''} – ${end || ''}` : '';
          const location = (exp.location || '').trim();

          return `
            <div class="resume-item">
              <div class="resume-item-header">
                <div>
                  ${title ? `<span class="resume-item-title">${this.escapeHTML(title)}</span>` : ''}
                  ${company ? `<span class="resume-item-subtitle">${title ? ' · ' : ''}${this.escapeHTML(company)}</span>` : ''}
                </div>
                <div class="resume-item-meta">
                  ${dateRange ? `<span>${dateRange}</span>` : ''}
                  ${location ? `<span>${dateRange ? ' | ' : ''}${this.escapeHTML(location)}</span>` : ''}
                </div>
              </div>
              ${this.formatBullets(exp.highlights)}
            </div>
          `;
        }).join('')}
      </section>
    `;
  },

  // Render Education (Hidden when empty or when entries are cleared)
  renderEducation(data) {
    const rawList = data.education || [];
    const education = rawList.filter(e => {
      const hasDegree = e.degree && e.degree.trim().length > 0;
      const hasInst = e.institution && e.institution.trim().length > 0;
      return hasDegree || hasInst;
    });

    if (education.length === 0) return '';

    return `
      <section class="resume-section">
        <h2 class="resume-section-title">Education</h2>
        ${education.map(edu => {
          const degree = (edu.degree || '').trim();
          const institution = (edu.institution || '').trim();
          const start = this.formatDate(edu.startDate);
          const end = edu.current ? 'Expected' : this.formatDate(edu.endDate);
          const dateRange = (start || end) ? `${start || ''} – ${end || ''}` : '';
          const location = (edu.location || '').trim();
          const gpa = (edu.gpa || '').trim();

          return `
            <div class="resume-item">
              <div class="resume-item-header">
                <div>
                  ${degree ? `<span class="resume-item-title">${this.escapeHTML(degree)}</span>` : ''}
                  ${institution ? `<span class="resume-item-subtitle">${degree ? ' · ' : ''}${this.escapeHTML(institution)}</span>` : ''}
                </div>
                <div class="resume-item-meta">
                  ${dateRange ? `<span>${dateRange}</span>` : ''}
                  ${location ? `<span>${dateRange ? ' | ' : ''}${this.escapeHTML(location)}</span>` : ''}
                </div>
              </div>
              ${gpa ? `<div style="font-size: 0.8125rem; color: #475569; margin-top: 0.15rem;">GPA / Marks: <strong>${this.escapeHTML(gpa)}</strong></div>` : ''}
              ${this.formatBullets(edu.highlights)}
            </div>
          `;
        }).join('')}
      </section>
    `;
  },

  // Render Skills (Hidden when empty or when tags are cleared)
  renderSkills(data) {
    const rawCategories = data.skillCategories || [];
    const categories = rawCategories.map(cat => {
      let tags = [];
      if (Array.isArray(cat.skills)) {
        tags = cat.skills.map(s => (s || '').trim()).filter(s => s.length > 0);
      } else if (typeof cat.skills === 'string') {
        tags = cat.skills.split(',').map(s => s.trim()).filter(s => s.length > 0);
      }
      return {
        categoryName: (cat.categoryName || '').trim(),
        skills: tags
      };
    }).filter(c => c.skills.length > 0 || c.categoryName.length > 0);

    if (categories.length === 0) return '';

    return `
      <section class="resume-section">
        <h2 class="resume-section-title">Skills & Competencies</h2>
        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
          ${categories.map(cat => {
            return `
              <div>
                ${cat.categoryName ? `<div style="font-size: 0.8125rem; font-weight: 700; color: #1e293b; margin-bottom: 0.2rem;">${this.escapeHTML(cat.categoryName)}</div>` : ''}
                ${cat.skills.length ? `
                  <div class="skill-tag-group">
                    ${cat.skills.map(skill => `<span class="skill-tag">${this.escapeHTML(skill)}</span>`).join('')}
                  </div>
                ` : ''}
              </div>
            `;
          }).join('')}
        </div>
      </section>
    `;
  },

  // Render Projects (Hidden when empty or when entries are cleared)
  renderProjects(data) {
    const rawList = data.projects || [];
    const projects = rawList.filter(p => {
      const hasTitle = p.title && p.title.trim().length > 0;
      const hasDesc = p.description && p.description.trim().length > 0;
      return hasTitle || hasDesc;
    });

    if (projects.length === 0) return '';

    return `
      <section class="resume-section">
        <h2 class="resume-section-title">Projects</h2>
        ${projects.map(proj => {
          const title = (proj.title || '').trim();
          const tech = (proj.technologies || '').trim();
          const desc = (proj.description || '').trim();
          const liveUrl = (proj.liveUrl || '').trim();
          const githubUrl = (proj.githubUrl || '').trim();

          return `
            <div class="resume-item">
              <div class="resume-item-header">
                <div>
                  ${title ? `<span class="resume-item-title">${this.escapeHTML(title)}</span>` : ''}
                  ${tech ? `<span style="font-size: 0.775rem; color: #64748b; margin-left: 0.35rem;">(${this.escapeHTML(tech)})</span>` : ''}
                </div>
                <div class="resume-item-meta">
                  ${liveUrl ? `<a href="${this.escapeHTML(liveUrl)}" target="_blank" style="color: var(--tpl-accent, #3b82f6); text-decoration: underline;">Live Demo</a>` : ''}
                  ${liveUrl && githubUrl ? ' · ' : ''}
                  ${githubUrl ? `<a href="${this.escapeHTML(githubUrl)}" target="_blank" style="color: var(--tpl-accent, #3b82f6); text-decoration: underline;">GitHub</a>` : ''}
                </div>
              </div>
              ${desc ? `<p style="font-size: 0.835rem; line-height: 1.45; color: #334155; margin-top: 0.2rem;">${this.escapeHTML(desc)}</p>` : ''}
            </div>
          `;
        }).join('')}
      </section>
    `;
  },

  // Render Certifications (Hidden when empty or when entries are cleared)
  renderCertifications(data) {
    const rawList = data.certifications || [];
    const certs = rawList.filter(c => {
      return (c.name && c.name.trim().length > 0) || (c.issuer && c.issuer.trim().length > 0);
    });

    if (certs.length === 0) return '';

    return `
      <section class="resume-section">
        <h2 class="resume-section-title">Certifications & Licenses</h2>
        <div style="display: flex; flex-direction: column; gap: 0.4rem;">
          ${certs.map(cert => {
            const name = (cert.name || '').trim();
            const issuer = (cert.issuer || '').trim();
            const date = this.formatDate(cert.issueDate);

            return `
              <div style="display: flex; justify-content: space-between; align-items: baseline; font-size: 0.85rem;">
                <div>
                  ${name ? `<strong style="color: #0f172a;">${this.escapeHTML(name)}</strong>` : ''}
                  ${issuer ? `<span style="color: #64748b;">${name ? ' · ' : ''}${this.escapeHTML(issuer)}</span>` : ''}
                </div>
                ${date ? `<span style="font-size: 0.8rem; color: #64748b;">${date}</span>` : ''}
              </div>
            `;
          }).join('')}
        </div>
      </section>
    `;
  },

  // Render Contemporary Sidebar Layout (All sections adapt gracefully)
  renderSidebarTemplate(data, tpl, accentColor, fontStyle, spacingStyle) {
    const p = data.personalInfo || {};
    const name = p.fullName ? this.escapeHTML(p.fullName.trim()) : '';
    const role = p.jobTitle ? this.escapeHTML(p.jobTitle.trim()) : '';

    const contactItems = [];
    if (p.email && p.email.trim()) contactItems.push(`<div>✉ ${this.escapeHTML(p.email.trim())}</div>`);
    if (p.phone && p.phone.trim()) contactItems.push(`<div>☎ ${this.escapeHTML(p.phone.trim())}</div>`);
    if (p.location && p.location.trim()) contactItems.push(`<div>📍 ${this.escapeHTML(p.location.trim())}</div>`);
    if (p.linkedin && p.linkedin.trim()) contactItems.push(`<div>🔗 ${this.escapeHTML(p.linkedin.trim())}</div>`);
    if (p.github && p.github.trim()) contactItems.push(`<div>💻 ${this.escapeHTML(p.github.trim())}</div>`);
    if (p.website && p.website.trim()) contactItems.push(`<div>🌐 ${this.escapeHTML(p.website.trim())}</div>`);

    const hasSidebarContent = contactItems.length > 0 || (data.skillCategories && data.skillCategories.length > 0) || (data.education && data.education.length > 0) || (data.certifications && data.certifications.length > 0);

    return `
      <div class="resume-sheet tpl-contemporary-sidebar" style="--tpl-accent: ${accentColor}; ${fontStyle} ${spacingStyle}">
        ${hasSidebarContent ? `
          <aside class="sidebar-col">
            ${(name || role) ? `
              <div>
                ${name ? `<h1 class="tpl-name" style="font-size: 1.65rem;">${name}</h1>` : ''}
                ${role ? `<div class="tpl-job-title">${role}</div>` : ''}
              </div>
            ` : ''}

            ${contactItems.length ? `
              <div class="resume-section">
                <h2 class="resume-section-title">Contact</h2>
                <div class="sidebar-contact-list">${contactItems.join('')}</div>
              </div>
            ` : ''}

            ${this.renderSkills(data)}
            ${this.renderEducation(data)}
            ${this.renderCertifications(data)}
          </aside>
        ` : ''}

        <main class="main-col" style="${!hasSidebarContent ? 'width: 100%;' : ''}">
          ${(!hasSidebarContent && (name || role)) ? `
            <div style="margin-bottom: 1.25rem;">
              ${name ? `<h1 class="tpl-name" style="font-size: 1.95rem;">${name}</h1>` : ''}
              ${role ? `<div class="tpl-job-title">${role}</div>` : ''}
            </div>
          ` : ''}
          ${this.renderSummary(data, 'contemporary-sidebar')}
          ${this.renderExperience(data)}
          ${this.renderProjects(data)}
        </main>
      </div>
    `;
  }
};

window.DUMMY_PROFILES = DUMMY_PROFILES;
window.RESUME_TEMPLATES = RESUME_TEMPLATES;
window.getDummyResumeForTemplate = getDummyResumeForTemplate;
window.TemplateRenderer = TemplateRenderer;
