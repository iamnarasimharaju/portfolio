export const portfolioData = {
  hero: {
    name: "S B Narasimha Raju",
    role:
      "Cybersecurity Analyst | SOC Operations | Threat Detection | Incident Response | Vulnerability Assessment",
    location: "Mysore, Karnataka, India",
    summary:
      "Entry-level Cybersecurity Analyst with hands-on experience in Security Operations (SOC), threat detection, vulnerability assessment, and web application security. Skilled in analyzing network traffic, identifying malicious activity, and investigating security events using tools such as Wireshark, Nmap, Splunk, Burp Suite, and ELK Stack. Experienced in penetration testing, identifying vulnerabilities like SQL Injection and XSS, and documenting remediation strategies. Strong foundation in network security, incident response concepts, and secure system monitoring with a focus on protecting systems and identifying cyber threats.",

    links: {
      github: "https://github.com/iamnarasimharaju",
      linkedin: "https://linkedin.com/in/narasimharaju1",
      cyberResume: "Resume.pdf"
    }
  },

  skills: {
    securityDomains: [
      "Security Operations Center (SOC)",
      "Threat Detection & Analysis",
      "Incident Response Fundamentals",
      "Vulnerability Assessment",
      "Web Application Security",
      "Network Security Monitoring"
    ],

    securityTools: [
      "Wireshark",
      "Nmap",
      "Splunk",
      "ELK Stack",
      "Burp Suite",
      "Metasploit",
      "SQLmap"
    ],

    analysisSkills: [
      "Network Traffic Analysis",
      "Log Analysis",
      "Attack Pattern Identification",
      "Security Event Investigation",
      "Alert Severity Classification"
    ],

    programming: ["Python", "Java", "C", "SQL"],

    webTechnologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React Native"
    ]
  },

  softwareProjects: [
    {
      title: "Home Services Booking App",
      tech: "React Native, JavaScript",
      problem:
        "Manual service booking causes delays, conflicts, and lack of transparency.",
      solution:
        "Built a mobile application enabling users to book home services with real-time worker availability.",
      features: [
        "User authentication",
        "Date & time-based booking",
        "QR-based payment flow",
        "SMS confirmation",
        "Admin & client dashboards",
        "Booking conflict prevention"
      ]
    },
    {
      title: "LiDAR-Based Object Detection",
      tech: "Python, Deep Learning, Open3D",
      problem:
        "Accurate object detection in autonomous driving is challenging in real-world environments.",
      solution:
        "Implemented and compared advanced 3D detection models on the KITTI dataset.",
      features: [
        "PV-RCNN++, PointPillars, CenterPoint comparison",
        "Improved detection accuracy",
        "Real-time 3D visualization",
        "Performance benchmarking"
      ]
    },
    {
      title: "IoT-Based Anti-Poaching Alarm System",
      tech: "Arduino, Sensors, IoT",
      problem:
        "Forests lack real-time monitoring for poaching and fire incidents.",
      solution:
        "Designed an automated IoT system to detect and alert authorities instantly.",
      features: [
        "Fire and tilt sensors",
        "Automated alerts",
        "Water pump activation",
        "Real-time incident notification"
      ]
    }
  ],

  cyberProjects: [
    {
      title: "SOC Log Monitoring & Threat Detection System",
      tools: "Wireshark, Splunk, ELK Stack, Nmap",
      image: "soc-dashboard.png",

      description:
        "Built a Security Operations Center (SOC) style monitoring dashboard to analyze network alerts and detect cyber threats in real time using log analysis and traffic monitoring.",

      whatIDid: [
        "Designed a SOC alerts dashboard to visualize network security events.",
        "Monitored alert logs generated from simulated network traffic.",
        "Classified security alerts into CRITICAL, ALERT, and INFO severity levels.",
        "Analyzed suspicious network activity using Wireshark and log analysis.",
        "Identified patterns indicating reconnaissance, exploitation attempts, and DoS activity."
      ],

      attacksDetected: [
        "Denial-of-Service (DoS) attacks",
        "Reconnaissance scans",
        "Exploit attempts",
        "Backdoor connection attempts",
        "Fuzzing attacks"
      ],

      investigationWorkflow: [
        "Detected abnormal spikes in CRITICAL alerts from network traffic logs.",
        "Filtered alerts by severity level and protocol.",
        "Analyzed suspicious packets using Wireshark.",
        "Identified malicious behavior patterns such as reconnaissance scanning and exploit attempts.",
        "Documented the incident and suggested mitigation actions."
      ]
    },

    {
      title: "Web Application Penetration Testing (DVWA Lab)",
      tools: "Nmap, Burp Suite, SQLmap, DVWA",

      description:
        "Performed security testing on a vulnerable web application to identify critical vulnerabilities and demonstrate real-world exploitation techniques.",

      vulnerabilities: [
        "SQL Injection",
        "Cross-Site Scripting (XSS)",
        "Security misconfiguration vulnerabilities"
      ]
    },

    {
      title: "Identity & Access Management Security Simulation",
      tools: "IAM, SOC workflows",

      description:
        "Completed a cybersecurity analyst simulation focused on identity and access management controls and enterprise security workflows.",

      highlights: [
        "IAM implementation concepts",
        "Security documentation and reporting",
        "Risk assessment and mitigation",
        "Business-aligned security decision making"
      ]
    }
  ],

  securityLabs: [
    {
      title: "SOC Alert Investigation Lab",
      tools: "Wireshark, Log Analysis",
      description:
        "Analyzed simulated SOC alerts to identify malicious activity patterns including reconnaissance scans, exploit attempts, and Denial-of-Service attacks.",
      activities: [
        "Analyzed alert logs generated from network traffic monitoring",
        "Classified alerts by severity levels (CRITICAL, ALERT, INFO)",
        "Investigated suspicious network activity using packet inspection",
        "Identified attack patterns including DoS and reconnaissance scans"
      ]
    },

    {
      title: "Web Application Security Testing Lab",
      tools: "Burp Suite, SQLmap, DVWA",
      description:
        "Performed penetration testing on a vulnerable web application environment to identify common security vulnerabilities.",
      activities: [
        "Identified SQL Injection vulnerabilities",
        "Detected Cross-Site Scripting (XSS)",
        "Analyzed request manipulation using Burp Suite",
        "Documented security findings and mitigation strategies"
      ]
    },

    {
      title: "Network Scanning & Enumeration Lab",
      tools: "Nmap",
      description:
        "Performed network reconnaissance to identify open ports, services, and potential attack surfaces.",
      activities: [
        "Conducted port scanning using Nmap",
        "Identified running services on target systems",
        "Analyzed network exposure and security risks",
        "Documented reconnaissance findings"
      ]
    }
  ],

  education: [
    {
      degree: "MCA (Cybersecurity)",
      institution: "Amrita Vishwa Vidyapeetham",
      year: "2023 – 2025",
      cgpa: "7.41"
    },
    {
      degree: "B.Sc Computer Science",
      institution: "NIE First Grade College",
      year: "2019 – 2022",
      cgpa: "6.74"
    }
  ],

  certifications: [
    {
      title: "Tata Cybersecurity Analyst Simulation",
      issuer: "Forage",
      image: "tata-cybersecurity.png",
      file: "tata-cybersecurity.pdf",
      description:
        "Completed cybersecurity analyst simulation focusing on IAM, risk analysis, and SOC workflows."
    },
    {
      title: "JPMorgan Chase Software Engineering Simulation",
      issuer: "Forage",
      image: "jpmorgan-simulation.png",
      file: "jpmorgan.pdf",
      description:
        "Worked on real-world cybersecurity tasks including log analysis and threat detection."
    },
    {
      title: "Cyber Security Workshop Participation",
      issuer: "Amrita Vishwa Vidyapeetham, Mysuru Campus",
      image: "cybersecurity-workshop.png",
      file: "cisco-cybersecurity.pdf",
      description:
        "Participated in a one-day hands-on workshop on Cyber Security covering practical concepts and security fundamentals."
    },
    {
      title: "Certified Blockchain Security Examiner",
      issuer: "Blockchain Council",
      image: "blockchain-security.png",
      file: "blockchain-security.pdf",
      description:
        "Covered blockchain security risks, attacks, and protection mechanisms."
    }
  ],

  contact: {
    email: "rajusbnarasimha@gmail.com",
    phone: "8431190959"
  }
};