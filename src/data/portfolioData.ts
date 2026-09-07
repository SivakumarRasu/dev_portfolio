import { Project, SkillCategory, EducationItem, JourneyMilestone, Achievement, FocusTopic } from '../types';

export const PERSONAL_INFO = {
  name: 'Sivakumar R',
  brandLogo: 'SK',
  roles: [
    'Software Developer',
    'Android Developer',
    'Flutter Developer',
    'Full Stack Developer',
  ],
  heroTagline: 'HELLO, I\'M',
  heroSubtitle: 'Building modern mobile experiences and scalable software solutions.',
  bio: 'I’m Sivakumar R, a passionate Software Developer focused on building modern mobile applications, scalable backend systems, and intuitive digital experiences. I enjoy transforming ideas into real-world products using technologies such as Kotlin, Jetpack Compose, Flutter, FastAPI, Spring Boot, Firebase, and AWS.',
  aboutDetailed: 'Sivakumar R is a B.Tech Information Technology student at Sri Krishna College of Technology, Coimbatore, with strong interest and hands-on experience in software and mobile application development. With a track record of building and publishing production-ready applications, he combines clean architecture, UI/UX aesthetics, and cloud backend integrations to craft seamless user experiences.',
  stats: [
    { label: 'Published / Major Apps', value: '3+' },
    { label: 'Real-World Projects', value: 'Multiple' },
    { label: 'B.Tech IT', value: '2023 – Present' },
  ],
  linkedinUrl: 'https://www.linkedin.com/in/sivakumar-rasu-2447b0290/',
  email: 'sivakumarr271105@gmail.com',
  location: 'Coimbatore / Namakkal, Tamil Nadu, India',
};

export const PROJECTS: Project[] = [
  {
    id: 'heamix',
    title: 'Heamix',
    category: 'Android Music Experience',
    shortDescription: 'A modern Android music experience focused on smooth music playback, offline listening, lyrics integration, playlist management, and a polished user interface.',
    fullDescription: 'Heamix is a native Android music platform built with Jetpack Compose and Kotlin, delivering an immersive, hardware-accelerated audio listening experience. Designed with performance and aesthetics in mind, it features seamless background playback, dynamic lockscreen controls, synchronized lyrics integration, and intelligent local media indexing.',
    highlightFeatures: [
      'Modern Android UI with Jetpack Compose',
      'High-performance offline music playback',
      'Synchronized lyrics integration',
      'Smart playlist management & queueing',
      'Background audio playback with notification controls',
      'Hardware accelerated audio rendering'
    ],
    technologies: ['Android', 'Kotlin', 'Jetpack Compose', 'Media Playback'],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.trimelis.heamix',
    imagePlaceholder: 'https://play-lh.googleusercontent.com/sBA3VzyTkgFRrD6AalPtGk-r0j5ttewUJt5MsVLPjX7CRc8ypVjd27ZfbWQ1gJLRqBxL2s1np4Avqhoc5r4YCOI=w832-h470-rw',
    themeColor: 'blue',
    badge: 'Published App'
  },
  {
    id: 'speney',
    title: 'Speney',
    category: 'Expense Tracker',
    shortDescription: 'A personal expense tracking application designed to simplify expense management using smart transaction detection and categorization.',
    fullDescription: 'Speney automates tracking daily personal expenses by using intelligent parsing of incoming UPI and banking SMS transactions. Built cross-platform with Flutter and powered by Firebase cloud infrastructure, Speney offers automated categorization, real-time analytics, and secure cloud backups.',
    highlightFeatures: [
      'SMS-based UPI transaction parsing & detection',
      'Automatic expense detection & auto-tagging',
      'Smart categorization with visual charts',
      'Firebase Authentication & Firestore DB sync',
      'Cloud Messaging for smart spending alerts',
      'Comprehensive budget & expense reporting'
    ],
    technologies: ['Flutter', 'Firebase', 'Firestore', 'Mobile Development'],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.trimelis.speney',
    imagePlaceholder: 'https://play-lh.googleusercontent.com/czq-oMKl_NUXyz7UydxzUGoBtAr_oONoDrxGiHI_InIshsjq8pV9mDdfoKB60RMmU2fe5UIt5HwyYJof8XeGp7k=w832-h470-rw',
    themeColor: 'emerald',
    badge: 'Published App'
  },
  {
    id: 'lyrewave',
    title: 'LyreWave',
    category: 'Voice Recorder & Audio Utility',
    shortDescription: 'A high-quality Android audio utility application focused on recording and audio processing.',
    fullDescription: 'LyreWave is an all-in-one mobile audio recording suite. Developed using Flutter and low-level audio processing plugins, it enables crystal-clear audio recording, speech-to-text audio transcription, precise waveform trimming, and audio segment merging within an intuitive interface.',
    highlightFeatures: [
      'High-definition multi-format audio recording',
      'Automated speech-to-text audio transcription',
      'Precision waveform audio trimming & editing',
      'Audio segment joining & concatenation',
      'Clean, distraction-free user interface',
      'Low latency performance optimization'
    ],
    technologies: ['Flutter', 'Audio Processing', 'Mobile Development'],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.trimelis.lyrewave',
    imagePlaceholder: 'https://play-lh.googleusercontent.com/YyMoK9qcFTWvR7f_5Ezc24baLTI6_VR5-bEkdcJ47czRX1xuTuQrvlxMLPzJzAFCNeXSz4aFbuUkPfNXaNeJ9-k=w832-h470-rw',
    themeColor: 'purple',
    badge: 'Published App'
  },
  {
    id: 'musico',
    title: 'Musico',
    category: 'Music Streaming Platform',
    isExperimental: true,
    badge: 'Experimental Project',
    shortDescription: 'An independent music streaming platform experiment featuring modern music discovery and streaming-focused features.',
    fullDescription: 'Musico is an experimental full-stack music streaming initiative. It explores cloud-native media distribution, dynamic RESTful backend APIs built with FastAPI, AWS S3 infrastructure for scalable audio delivery, and a sleek Flutter-driven frontend.',
    highlightFeatures: [
      'Seamless online music streaming experience',
      'Modern, responsive streaming user interface',
      'Custom playlist creation & cloud synchronization',
      'Algorithmic music discovery & recommendations',
      'REST API backend integration with FastAPI & AWS'
    ],
    technologies: ['Flutter', 'FastAPI', 'AWS', 'Backend APIs'],
    websiteUrl: 'https://musicoindia-b08f2.web.app/',
    imagePlaceholder: '/assets/projects/musico.jpg',
    themeColor: 'amber'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    iconName: 'Code',
    skills: [
      { name: 'Kotlin', isPrimary: true },
      { name: 'Java', isPrimary: true },
      { name: 'Dart', isPrimary: true },
      { name: 'Python', isPrimary: true },
      { name: 'C++' },
      { name: 'SQL' },
    ]
  },
  {
    title: 'Mobile Development',
    iconName: 'Smartphone',
    skills: [
      { name: 'Android', isPrimary: true },
      { name: 'Jetpack Compose', isPrimary: true },
      { name: 'Flutter', isPrimary: true },
    ]
  },
  {
    title: 'Backend Development',
    iconName: 'Server',
    skills: [
      { name: 'FastAPI', isPrimary: true },
      { name: 'Spring Boot', isPrimary: true },
      { name: 'REST APIs', isPrimary: true },
    ]
  },
  {
    title: 'Frontend Development',
    iconName: 'Layout',
    skills: [
      { name: 'React JS', isPrimary: true },
      { name: 'HTML5 & CSS3' },
      { name: 'Tailwind CSS' },
    ]
  },
  {
    title: 'Cloud & Services',
    iconName: 'Cloud',
    skills: [
      { name: 'AWS', isPrimary: true },
      { name: 'Firebase', isPrimary: true },
      { name: 'Firestore', isPrimary: true },
    ]
  },
  {
    title: 'Tools & Security',
    iconName: 'Wrench',
    skills: [
      { name: 'Linux', isPrimary: true },
      { name: 'Selenium' },
      { name: 'UI/UX Design', isPrimary: true },
      { name: 'Web Testing' },
    ]
  }
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    degree: 'B.Tech – Information Technology',
    institution: 'Sri Krishna College of Technology, Coimbatore',
    location: 'Coimbatore, Tamil Nadu',
    period: '2023 – Present',
    grade: 'CGPA: 8.04 / 10.0',
    highlights: [
      'Focus on Mobile Architecture, Software Engineering & Cloud Infrastructure',
      'Active participation in technical app design contests & project exhibitions',
      'Consistent academic excellence with hands-on app development'
    ]
  },
  {
    degree: 'Higher Secondary Education (Class XII)',
    institution: 'Government Higher Secondary School',
    location: 'Kavakarapatti, Namakkal',
    period: '2022 – 2023',
    highlights: [
      'Specialized in Mathematics, Computer Science, Physics & Chemistry',
      'Foundation in algorithmic thinking and computer systems'
    ]
  }
];

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    year: '2023',
    title: 'Academic & Tech Foundation',
    subtitle: 'B.Tech IT Commencement',
    description: 'Began B.Tech in Information Technology at Sri Krishna College of Technology. Rapidly built core fundamentals in Data Structures, OOP, C++, and Java.',
    tags: ['B.Tech IT', 'Java', 'Algorithms'],
    iconName: 'GraduationCap'
  },
  {
    year: 'Mobile Era',
    title: 'Android & Flutter Development',
    subtitle: 'Building Published Applications',
    description: 'Mastered cross-platform Flutter and native Android with Jetpack Compose. Architected and deployed Heamix, Speney, and LyreWave onto the Google Play Store.',
    tags: ['Kotlin', 'Jetpack Compose', 'Flutter', 'Play Store'],
    iconName: 'Smartphone'
  },
  {
    year: 'Full Stack',
    title: 'Backend & Cloud Systems',
    subtitle: 'Expanding API Architecture',
    description: 'Engineered robust backend microservices with FastAPI and Spring Boot. Configured AWS S3 cloud hosting, Firebase authentication, and database orchestration.',
    tags: ['FastAPI', 'Spring Boot', 'AWS', 'Firebase'],
    iconName: 'Layers'
  },
  {
    year: 'Today',
    title: 'Continuous Innovation & Craft',
    subtitle: 'Real-World Mobile & Cloud Solutions',
    description: 'Dedicated to building sleek, responsive mobile products, optimizing system performance, and exploring cutting-edge AI integrations.',
    tags: ['Advanced Android', 'System Architecture', 'AI Exploration'],
    iconName: 'Rocket'
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'pixelpunk',
    title: 'Organized Pixelpunk 2024',
    description: 'Successfully organized and coordinated Pixelpunk 2024, an inter-department mobile application design contest at college.',
    iconName: 'Award',
    category: 'Leadership & Events'
  },
  {
    id: 'mobile-arch',
    title: 'Mobile Architecture Certification',
    description: 'Completed specialized training in Cross-Platform Software Development & Mobile App Architecture.',
    iconName: 'Smartphone',
    category: 'Certification'
  },
  {
    id: 'aws-cloud',
    title: 'Cloud & AWS Management Training',
    description: 'Completed formal hands-on training in Cloud Management, AWS Console Handling, and cloud resource provisioning.',
    iconName: 'Cloud',
    category: 'Cloud Engineering'
  },
  {
    id: 'security-linux',
    title: 'Networking & Security Training',
    description: 'Completed comprehensive training in Computer Networking, Linux System Administration, and Cryptographic Security Systems.',
    iconName: 'ShieldCheck',
    category: 'Systems & Security'
  }
];

export const CURRENT_FOCUS_TOPICS: FocusTopic[] = [
  {
    title: 'Advanced Android Development',
    description: 'Mastering native Android internals, custom views, audio frameworks, and memory profiling.',
    icon: '/assets/tech_badge_icon.png',
    gradient: 'from-blue-600/30 to-cyan-500/20'
  },
  {
    title: 'Jetpack Compose',
    description: 'Designing fluid, declarative UI components, custom canvas animations, and reactive state flows.',
    icon: '/assets/compose_icon.png',
    gradient: 'from-cyan-500/20 to-teal-500/20'
  },
  {
    title: 'Cloud & AWS',
    description: 'Deploying cloud microservices, serverless APIs, IAM security, and automated storage solutions.',
    icon: '/assets/cloud.png',
    gradient: 'from-indigo-600/30 to-purple-500/20'
  },
  {
    title: 'Scalable Backend Systems',
    description: 'Architecting high-throughput REST APIs using FastAPI, Spring Boot, and relational DB indexing.',
    icon: '/assets/spring.png',
    gradient: 'from-purple-600/30 to-pink-500/20'
  },
  {
    title: 'AI-Powered Applications',
    description: 'Integrating machine learning models and LLM APIs to enhance mobile user experiences.',
    icon: '/assets/ai.jpg',
    gradient: 'from-emerald-600/30 to-blue-500/20'
  }
];
