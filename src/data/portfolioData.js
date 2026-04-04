export const navItems = [
  { id: 'about', label: 'about', command: 'cat about.txt' },
  { id: 'stack', label: 'stack', command: 'ls tech-stack/' },
  { id: 'experience', label: 'experience', command: 'cat experience.log' },
  { id: 'projects', label: 'projects', command: 'cat projects.json' },
  { id: 'contact', label: 'contact', command: 'cat contact.md' }
];

export const hero = {
  name: 'Sachin Pandey',
  location: 'San Marcos, TX',
  photoUrl: `${process.env.PUBLIC_URL}/photos/profile.jpg`,
  photoAlt: 'Sachin Pandey portrait',
  summary: [
    'Computer Science undergraduate focused on full-stack product engineering.',
    'Working on IMU/EMG research and building practical AI-driven web applications.'
  ],
  quickLinks: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/pandey-s/', display: 'https://www.linkedin.com/in/pandey-s/' },
    { label: 'GitHub', href: 'https://github.com/SachinPandey22', display: 'https://github.com/SachinPandey22' },
    { label: 'Email', href: 'https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZWxTKGKjvnHttGsSrZCRnsvBFRdqqlGkMDQGcQHTCBPgMtKBtgNhHCTKHVMHfHdQgFftL', display: 'xachin300@gmail.com' },
    { label: 'Phone', href: 'tel:+17372132760', display: '+1 (737) 213 2760' }
  ]
};

export const techStack = {
  Languages: ['Python', 'C++', 'Java', 'JavaScript'],
  'Frameworks/Libraries': ['React', 'Django REST', 'Node.js', 'Flask', 'Firebase'],
  Tools: ['Git', 'GitKraken', 'Jira', 'Agile/Scrum', 'Bitbucket', 'GitHub'],
  Databases: ['PostgreSQL', 'MongoDB', 'Supabase'],
  'Cloud/Deployment': ['Netlify', 'Vercel', 'Bitbucket Pipelines']
};

export const experiences = [
  {
    title: 'Web Designing and Social Media Intern',
    org: 'The Teacher Reuse',
    period: 'Jan 2024 - May 2024',
    points: [
      'Improved UI, contributing to a 20% increase in site traffic.',
      'Increased engagement by 30% through targeted social media campaigns.'
    ]
  },
  {
    title: 'Undergraduate Research Assistant',
    org: 'Texas State University',
    period: 'Jul 2024 - Present',
    points: [
      'Collected IMU (Xsens) and EMG (Cometa) data from 14 participants across 4 tasks.',
      'Used MVN Analyze Pro, EMG and Motion Tool for synchronized data workflows.',
      'Supported data analysis in Python and contributed to paper/poster writing.'
    ]
  }
];

export const education = {
  school: 'Texas State University',
  location: 'San Marcos, TX',
  degree: 'B.S. Computer Science',
  graduation: 'Expected May 2027',
  gpa: '4.0'
};

export const projects = [
  {
    id: 'shaktiman',
    title: 'Shaktiman - AI Fitness Tracker Web App',
    stack: ['React', 'Django', 'PostgreSQL', 'Supabase'],
    details: [
      'Built a full-stack fitness tracking app with JWT authentication and nutrition tracking.',
      'Created REST APIs for macronutrient analysis and progress visualization with Recharts.',
      'Collaborated in a team of 4 using Agile workflows on Bitbucket and Jira.'
    ],
    
    githubUrl: 'https://github.com/SachinPandey22/Fitness_Web_App_Project',
    
    demoUrl: 'https://shakti-fitness.web.app/',
    //project screenshot path (e.g., /images/projects/shaktiman.png).
    imageUrl: `${process.env.PUBLIC_URL}/photos/Shakti.png`,
    imageAlt: 'Shaktiman project preview'
  },
  {
    id: 'rag-assistant',
    title: 'RAG-Based AI Assistant',
    stack: ['Python', 'Qdrant', 'Gemini API', 'Flask'],
    details: [
      'Built a RAG assistant that queries PDF-to-JSONL knowledge bases.',
      'Implemented vector database semantic search and retrieval pipelines.',
      'Integrated retrieval and generation endpoints with a Flask backend.'
    ],
    //real project repository URL.
    githubUrl: 'https://github.com/SachinPandey22/Gemini_RAG_DOCCHAT',
    // real live demo URL, or keep null if unavailable.
    demoUrl: 'https://gemini-rag-docchat.vercel.app/',
    //screenshot path (e.g., /images/projects/rag-assistant.png).
    imageUrl: `${process.env.PUBLIC_URL}/photos/Rag.png`,
    imageAlt: 'RAG assistant project preview'
  },
  { id: 'job-agent',
    title: 'AutoApply Job Application Bot',
    stack: ['Python', 'MCP Servers', 'Anthropic API', 'SQLite'],
    details: [
      'Personal AI-powered job application system built on Claude Code + MCP servers..',
      'Imports any job posting from a URL and auto-fills applications with resume and cover letter generation.',
      'Finds recruiters and drafts outreach emailsa.'
    ],
    //real project repository URL.
    githubUrl: 'https://github.com/SachinPandey22/job-agent',
    // real live demo URL, or keep null if unavailable.
    demoUrl: 'null',
    //screenshot path (e.g., /images/projects/rag-assistant.png).
    imageUrl: `${process.env.PUBLIC_URL}/photos/job-agent.png`,
    imageAlt: 'Job agent project preview'
  },
  { id: 'gmail_mcp',
    title: 'Gmail MCP Integration',
    stack: ['Python', 'Gmail API', 'Anthropic API', 'Gmail OAuth'],
    details: [
      'A local MCP (Model Context Protocol) server that gives Claude the ability to send emails',
      'Integrated MCP servers with Gmail for automated email management.',
      'manage drafts, send/delete emails and search Gmail — capabilities missing from Anthropics built-in Gmail connector.'


    ],
    //real project repository URL.
    githubUrl: 'https://github.com/SachinPandey22/gmail_mcp_local_server',
    // real live demo URL, or keep null if unavailable.
    demoUrl: 'null',
    //screenshot path (e.g., /images/projects/gmail_mcp.png).
    imageUrl: `${process.env.PUBLIC_URL}/photos/gmail_mcp.png`,
    imageAlt: 'Gmail MCP project preview'
  },
];

export const awards = [
  'CodePath Intermediate Technical Interview Prep Graduate (TIP 102)',
  'Google Data Analytics (Coursera, 2024)',
  'Advanced Google Data Analytics (Coursera, 2024)',
  "President's List / Dean's List (Fall 2023 - Fall 2025)"
];

export const affiliations = [
  'CodePath Community Member & Student (Feb 2025 - Present)'
];
