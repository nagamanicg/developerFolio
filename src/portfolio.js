/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "nagamani",
  title: "Hi, I'm Nagamani",
  subTitle: emoji(
    "Passionate Software & Security Engineer dedicated to crafting scalable, defense-in-depth applications. From architecting gRPC gateways in Go to designing intuitive, secure UI components in React.js and React Native, I focus on building software that is as performant as it is resilient. I thrive at the intersection of full-stack development and modern threat mitigation.."
  ),
  resumeLink:
    "https://drive.google.com/file/d/10l09-qy6PXeghR4DyE5GHidyImjLFRrr/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/nagamanicg",
  linkedin: "https://www.linkedin.com/in/nagamanicgunjal/",
  gmail: "nagamanicg229@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@nagamanicg22",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "SECURITY-FOCUSED FULL STACK ENGINEER",
  skills: [
    emoji("⚡ Build secure, scalable web apps with React, Go, and cloud-native architectures"),
    emoji("⚡ Perform AppSec assessments — threat modeling, SAST/DAST, and pen testing"),
    emoji("⚡ Design defense-in-depth systems with OAuth, RBAC, mTLS, and OWASP best practices")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      categoryName: "Languages",
      skills: [
        { skillName: "Go", fontAwesomeClassname: "devicon-go-original-wordmark" },
        { skillName: "Python", fontAwesomeClassname: "devicon-python-plain" },
        { skillName: "Java", fontAwesomeClassname: "devicon-java-plain" },
        { skillName: "C#", fontAwesomeClassname: "devicon-csharp-plain" },
        { skillName: "JavaScript", fontAwesomeClassname: "devicon-javascript-plain" },
        { skillName: "HTML5", fontAwesomeClassname: "devicon-html5-plain" },
        { skillName: "CSS3", fontAwesomeClassname: "devicon-css3-plain" }
      ]
    },
    {
      categoryName: "Security",
      skills: [
        { skillName: "Burp Suite", fontAwesomeClassname: "fas fa-bug", style: { color: "#EA6A1A" } },
        { skillName: "OWASP ZAP", fontAwesomeClassname: "fas fa-shield-alt", style: { color: "#003FAB" } },
        { skillName: "Wireshark", fontAwesomeClassname: "fas fa-network-wired", style: { color: "#1662AB" } },
        { skillName: "Nmap", fontAwesomeClassname: "fas fa-search", style: { color: "#54226C" } },
        { skillName: "Metasploit", fontAwesomeClassname: "fas fa-crosshairs", style: { color: "#1D69B4" } },
        { skillName: "SonarQube", fontAwesomeClassname: "fas fa-code", style: { color: "#4E9BCD" } },
        { skillName: "SIEM/ SOAR", fontAwesomeClassname: "fas fa-chart-line", style: { color: "#FF007F" } }
      ]
    },
    {
      categoryName: "Frameworks & Libraries",
      skills: [
        { skillName: "React", fontAwesomeClassname: "devicon-react-original" },
        { skillName: "Node.js", fontAwesomeClassname: "devicon-nodejs-plain" },
        { skillName: "npm", fontAwesomeClassname: "devicon-npm-original-wordmark" },
        { skillName: "Flutter", fontAwesomeClassname: "devicon-flutter-plain" }
      ]
    },
    {
      categoryName: "Systems, Hardware & Tools",
      skills: [
        { skillName: "PostgreSQL", fontAwesomeClassname: "devicon-postgresql-plain" },
        { skillName: "MySQL", fontAwesomeClassname: "devicon-mysql-plain" },
        { skillName: "MongoDB", fontAwesomeClassname: "devicon-mongodb-plain" },
        { skillName: "Linux", fontAwesomeClassname: "devicon-linux-plain" },
        { skillName: "Git", fontAwesomeClassname: "devicon-git-plain" },
        { skillName: "gRPC", fontAwesomeClassname: "fas fa-network-wired", style: { color: "#244C5A" } },
        { skillName: "CUDA", fontAwesomeClassname: "fas fa-microchip", style: { color: "#76B900" } },
        { skillName: "OpenMP", fontAwesomeClassname: "fas fa-code-branch", style: { color: "#008AD6" } }
      ]
    },
    {
      categoryName: "Cloud & Infrastructure",
      skills: [
        { skillName: "Docker", fontAwesomeClassname: "devicon-docker-plain" },
        { skillName: "Kubernetes", fontAwesomeClassname: "devicon-kubernetes-plain" },
        { skillName: "AWS", fontAwesomeClassname: "devicon-amazonwebservices-plain-wordmark" },
        { skillName: "GCP", fontAwesomeClassname: "devicon-googlecloud-plain" },
        { skillName: "Azure", fontAwesomeClassname: "devicon-azure-plain" },
        { skillName: "Terraform", fontAwesomeClassname: "devicon-terraform-plain" },
        { skillName: "Jenkins", fontAwesomeClassname: "devicon-jenkins-plain" },
        { skillName: "CI/CD", fontAwesomeClassname: "fas fa-sync-alt", style: { color: "#FCA121" } }
      ]
    },
    {
      categoryName: "AI & Machine Learning",
      skills: [
        { skillName: "TensorFlow", fontAwesomeClassname: "devicon-tensorflow-original" },
        { skillName: "Keras", fontAwesomeClassname: "devicon-keras-plain" },
        { skillName: "PyTorch", fontAwesomeClassname: "devicon-pytorch-original" },
        { skillName: "Machine Learning", fontAwesomeClassname: "fas fa-brain", style: { color: "#FF9900" } },
        { skillName: "Deep Learning", fontAwesomeClassname: "fas fa-network-wired", style: { color: "#1662AB" } },
        { skillName: "Computer Vision", fontAwesomeClassname: "fas fa-eye", style: { color: "#FF4500" } },
        { skillName: "LLMs", fontAwesomeClassname: "fas fa-robot", style: { color: "#4B0082" } },
        { skillName: "Generative AI", fontAwesomeClassname: "fas fa-magic", style: { color: "#10A37F" } }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Maryland",
      logo: require("./assets/images/informal-seal.png"),
      subHeader: "Master of Engineering in Cybersecurity",
      duration: "August 2024 - December 2025",
      desc: "GPA: 3.87/4.0", // [cite: 5, 87, 170]
      descBullets: [
        "Specialization in Secure Software Design, Cloud Security, and Penetration Testing.", // [cite: 376]
        "Recipient of the WiCyS 2026 Scholarship." //
      ]
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "KLE Technological University",
      logo: require("./assets/images/KLElogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2015 - July 2019",
      desc: "GPA: 3.57/4.0",
      descBullets: [
        "Best Paper Award at the International Conference on Sustainable Advance Computing (2019)." // [cite: 79, 162, 238]
      ]
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  // experience: [
  //   {
  //     Stack: "Frontend/Design", //Insert stack or technology you have experience in
  //     progressPercentage: "90%" //Insert relative proficiency in percentage
  //   },
  //   {
  //     Stack: "Backend",
  //     progressPercentage: "70%"
  //   },
  //   {
  //     Stack: "Programming",
  //     progressPercentage: "60%"
  //   }
  // ],
  experience: [
    {
      Stack: "Cybersecurity & AppSec (OWASP, SAST/DAST, Pen Testing, Threat Modeling)",
      progressPercentage: "90%"
    },
    {
      Stack: "Frontend & UI/UX (React/TypeScript/Redux)",
      progressPercentage: "95%" // Your strongest point
    },
    {
      Stack: "Backend & Cloud (Go/gRPC/Python/AWS /GCP)",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  // experience: [
  //   {
  //     role: "Software Engineer",
  //     company: "Facebook",
  //     companylogo: require("./assets/images/facebookLogo.png"),
  //     date: "June 2018 – Present",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //     descBullets: [
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  //     ]
  //   },
  //   {
  //     role: "Front-End Developer",
  //     company: "Quora",
  //     companylogo: require("./assets/images/quoraLogo.png"),
  //     date: "May 2017 – May 2018",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  //   },
  //   {
  //     role: "Software Engineer Intern",
  //     company: "Airbnb",
  //     companylogo: require("./assets/images/airbnbLogo.png"),
  //     date: "Jan 2015 – Sep 2015",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  //   }
  // ]
  experience: [
    {
      role: "Graduate Research Intern",
      company: "University of Maryland",
      companylogo: require("./assets/images/informal-seal.png"),
      date: "June 2025 – August 2025",
      desc: "Uncovered drone (UAV) communication vulnerabilities via protocol fuzzing.",
      descBullets: [
        "Conducted real-time radio telemetry signal analysis and data capture using Software-Defined Radio (SDR) tools (HackRF One, RTL SDR) to reverse-engineer communication protocols and identify potential side-channel data leaks and Identified firmware update flaws through secure code reviews and architecture.",
        "Mapped hardware interface risks (GPS/IMU/sensors) to MITRE ATT&CK and OWASP IoT Top 10 frameworks using threat modeling and TLS inspection tools."
      ]
    },
    {
      role: "Graduate Teaching Assistant | ENPM 694: Networks & Protocols",
      company: "University of Maryland",
      companylogo: require("./assets/images/informal-seal.png"),
      date: "Sep 2025 – Dec 2025",
      desc: "Conducted lab sessions and collaborated with the professor to develop course materials and grading assignments, while providing hands-on guidance to students on networking concepts.",
      descBullets: []
    },
    {
      role: "Security and Product Architect",
      company: "Transform your Planning. Inc (Annaina)",
      companylogo: require("./assets/images/annaina.jpg"),
      date: "June 2025 – August 2025",
      desc: "Developed secure landing pages and implemented AI Security Guardrails to protect against prompt injection.", // [cite: 257, 385]
      descBullets: [
        "Integrated OAuth 2.0 and JWT-based authentication for secure user sessions.", // [cite: 184, 185]
        "Performed DAST using OWASP ZAP to identify supply-chain vulnerabilities." // [cite: 387]
      ]
    },
    {
      role: "R&D Engineer",
      company: "Nokia Research & Development",
      companylogo: require("./assets/images/nokia-refreshed-logo-1_1.jpg"),
      date: "Feb 2022 – Dec 2023",
      desc: "Designed secure microservices in Go and migrated 200+ APIs to Attribute-Based Access Control (ABAC).", // [cite: 33, 34, 399]
      descBullets: [
        "Boosted gRPC performance by 30% and enforced mutual TLS (mTLS) for service communication.", // [cite: 34, 399]
        "Audited 150+ Go modules using SonarQube, mitigating 15+ critical vulnerabilities." // [cite: 36, 119, 202]
      ]
    },
    {
      role: "AppSec Engineer",
      company: "Bharat Electronics Limited (BEL)",
      companylogo: require("./assets/images/bel.png"),
      date: "Jan 2021 – Feb 2022",
      desc: "Architected a secure React/Redux application serving 100K+ users with robust RBAC frameworks.", // [cite: 42, 408]
      descBullets: [
        "Neutralized XSS, CSRF, and SQLi threats through strict input validation and threat modeling.", // [cite: 44, 409]
        "Optimized frontend workflows and integrated high-throughput REST APIs." // [cite: 455]
      ]
    },
    {
      role: "Software Engineer",
      company: "KNOCK KNOCK Pvt. Ltd.",
      companylogo: require("./assets/images/knock-knock.png"),
      date: "Oct 2019 – Dec 2020",
      desc: "Developed a secure and scalable delivery management system using React JS, Redux, Angular JS, Material UI, and MySQL, with an intuitive UI.",
      descBullets: []
    },
    {
      role: "Software Engineer & Intern",
      company: "Deep Vision Analytics Pvt. Ltd. (DEEVIA)",
      companylogo: require("./assets/images/deevia.png"),
      date: "Jan 2019 – Oct 2019",
      desc: "Developed a real-time action recognition system using TensorFlow and OpenCV, achieving 88% accuracy.",
      descBullets: [
        "Integrated the model into a PyQt UI for real-time action recognition.",
        "Built a predictive defect detection tool for industrial metal sheets using ONNX and OpenVINO."
      ]
    }
  ]

};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME RECENT PROJECTS I HAVE WORKED ON",
  projects: [
    {
      projectName: "UAV Communication Security & RF Threat Modeling",
      projectSubHeader: "Securing the Skies: RF Analysis & Threat Modeling",
      featured: true,
      image: require("./assets/images/uav_rf_security.jpg"), // Drop your image here and uncomment
      projectDesc:
        "End-to-end security analysis of UAV telemetry and command-and-control (C2) protocols using HackRF One (SDR). Performed deep-spectrum enumeration across 2.4GHz and 5.8GHz bands to identify signal signatures and side-channel leaks. Conducted a formal STRIDE-based threat model mapping vulnerabilities at the physical and protocol layers — from signal replay attacks to GPS spoofing — and validated findings through RF inspection and firmware review. Research demonstrates the necessity of encrypted MAVLink communication and frequency-hopping robustness in modern IoT and aerial robotics.",
      techTags: ["SDR / HackRF One", "STRIDE Threat Modeling", "MAVLink Protocol", "RF Spectrum Analysis", "GPS Spoofing", "Firmware Review", "MITRE ATT&CK IoT", "2.4GHz / 5.8GHz"],
      footerLink: []
    },
    {
      projectName: "Recipedia – Secure Recipe Organizer Web App",
      projectDesc: "Built and secured a production-style Go (Fiber) app using clean architecture, secure-SDLC, OWASP ASVS, and STRIDE; implemented strong validation, auth, threat modelling, CSRF, secure uploads, hashing, and SAST and DAST with ZAP/SQLMap.",
      footerLink: []
    },
    {
      projectName: "Cloud Security Configuration Tracker",
      projectDesc: "Audited cloud workloads via Terraform and Python scripts; detected & remediated misconfigs (e.g., open S3/IAM), applying least privilege, IaC, and AWS Well-Architected & PCI DSS practices",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  // title: emoji("Achievements And Certifications 🏆 "),
  // subtitle:
  //   "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  title: "Awards & Scholarships",
  subtitle: "Recognitions, Scholarships, and Hardware Grants in Cybersecurity",
  achievementsCards: [
    {
      title: "Women in CyberSecurity (WiCyS) 2026 Conference Scholarship",
      subtitle: "Awarded the prestigious scholarship to attend the international WiCyS 2026 conference.",
      footerLink: []
    },
    {
      title: "WISP RSA 2025 Scholar",
      subtitle: "Recognized as a scholar for the RSA Conference through Women in Security and Privacy (WISP).",
      footerLink: []
    },
    {
      title: "WiCyS VDP Scholar",
      subtitle: "Awarded as part of the Women in CyberSecurity (WiCyS) Veterans/VDP program.",
      footerLink: []
    },
    {
      title: "WiCyS Mentor and Mentee Program",
      subtitle: "Active participant in the WiCyS Mentorship program, fostering growth and leadership in the cybersecurity community.",
      footerLink: []
    },
    {
      title: "Great Scott Gadgets - Free Stuff Grant (May 2025)",
      subtitle: "Awarded a HackRF One SDR for an academic project involving the security testing of UAV/drones, analyzing control signals and RF communication protocols to implement secure countermeasures.",
      footerLink: [
        { name: "Read Announcement", url: "https://greatscottgadgets.com/2025/10-01-free-stuff-may-2025/" }
      ]
    },
    {
      title: "CNS Full Stack Award",
      subtitle: "Business Excellence award for technical contributions to the Nokia Digital Automation Cloud.",
      footerLink: [{ name: "Nokia Business Excellence", url: "https://drive.google.com/file/d/13_3TEXIbZpBvvvZRa9TBCzJlPj3b3DQT/view" }]
    },
    {
      title: "Security Certifications",
      subtitle: " Google Cybersecurity, Splunk Knowledge Manager 101, Machine Learning with TensorFlow on Google Cloud Platform Specialization, JNOS, CompTIA Security+ , eJPT(In Progress..).",
      footerLink: [{ name: "View Credentials", url: "https://www.coursera.org/account/accomplishments/specialization/C9YLMW5M2RX6" }]
      // https://www.coursera.org/account/accomplishments/verify/A36Z1YLR98D8
    },
    {
      title: "OWASP Member",
      subtitle: "Active member of the Open Worldwide Application Security Project (OWASP), contributing to the global mission of improving software security.",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};
//   achievementsCards: [
//     {
//       title: "Google Code-In Finalist",
//       subtitle:
//         "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
//       image: require("./assets/images/codeInLogo.webp"),
//       imageAlt: "Google Code-In Logo",
//       footerLink: [
//         {
//           name: "Certification",
//           url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
//         },
//         {
//           name: "Award Letter",
//           url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
//         },
//         {
//           name: "Google Code-in Blog",
//           url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
//         }
//       ]
//     },
//     {
//       title: "Google Assistant Action",
//       subtitle:
//         "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
//       image: require("./assets/images/googleAssistantLogo.webp"),
//       imageAlt: "Google Assistant Action Logo",
//       footerLink: [
//         {
//           name: "View Google Assistant Action",
//           url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
//         }
//       ]
//     },

//     {
//       title: "PWA Web App Developer",
//       subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
//       image: require("./assets/images/pwaLogo.webp"),
//       imageAlt: "PWA Logo",
//       footerLink: [
//         {name: "Certification", url: ""},
//         {
//           name: "Final Project",
//           url: "https://pakistan-olx-1.firebaseapp.com/"
//         }
//       ]
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };


// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};
// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 2404132114",
  email_address: "nagamanicg229@gmail.com"
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      id: "grpc-gateway",
      url: "/blog/grpc-gateway",
      title: "Bridging the Gap - Why Every gRPC Service Needs a Gateway",
      image: "grpc_gateway_cover.png",
      description:
        "The Problem: The Browser-gRPC Mismatch. As a backend engineer, I love gRPC. It’s fast, type-safe, and uses HTTP/2 to make microservices talk to each other...",
      content: `<h3>The Problem: The Browser-gRPC Mismatch</h3>
<p>As a backend engineer, I love gRPC. It’s fast, type-safe, and uses HTTP/2 to make microservices talk to each other like a dream. But there’s a catch: web browsers aren't quite there yet. If you’re building a frontend in React or want to provide a public-facing API, forcing everyone to use a gRPC client is a tough sell.</p>

<h3>The Solution: gRPC-Gateway</h3>
<p>The grpc-gateway is a powerful Golang-based plugin that acts as a reverse proxy. It sits in front of your gRPC service, intercepts RESTful JSON requests, and translates them into gRPC calls.</p>

<h3>Why I Use It in My Projects:</h3>
<ul class="blog-list">
  <li><strong>One Source of Truth:</strong> I define my service once in a .proto file. The gateway generates the REST endpoints automatically using custom annotations.</li>
  <li><strong>Developer Experience:</strong> It allows me to maintain a high-performance internal mesh while still providing a standard Swagger/OpenAPI UI for other developers to test.</li>
  <li><strong>Seamless Integration:</strong> For my React frontends, I can make standard fetch or axios calls without needing complex client-side gRPC-web setups.</li>
</ul>

<h3>Final Thought:</h3>
<p>In modern distributed systems, we shouldn't have to choose between performance and accessibility. The gRPC-Gateway gives you the best of both worlds: a high-speed binary core with a friendly, universal JSON exterior.</p>`
    },
    {
      id: "agentic-ai-security",
      url: "/blog/agentic-ai-security",
      title: "Beyond the Perimeter—Securing Identity in the Age of Agentic AI",
      image: "ai_security.png",
      description:
        "The Shift in 2026. For years, we defined security by the 'network perimeter.' But with the rise of Agentic AI—autonomous agents that perform tasks and call APIs—the biggest threat...",
      content: `<h3>The Shift in 2026</h3>
<p>For years, we defined security by the "network perimeter." If you were inside the VPN, you were trusted. But as we move into 2026, the perimeter has completely evaporated. With the rise of Agentic AI—autonomous agents that perform tasks and call APIs on our behalf—the biggest threat isn't just a human hacker; it’s an over-privileged or compromised AI agent.</p>

<h3>Identity as the New Firewall</h3>
<p>In my work with application security, I’ve seen that traditional "Username/Password" models are no longer enough. We are entering the era of Non-Human Identity (NHI) Management.</p>

<h3>Key Strategies for Secure Systems:</h3>
<ul class="blog-list">
  <li><strong>Zero Trust for Microservices:</strong> Every service-to-service call must be authenticated via mTLS. We can no longer assume a request is safe just because it came from a local IP.</li>
  <li><strong>Scopes for AI Agents:</strong> When we integrate AI into our apps, we must apply the Principle of Least Privilege. An AI agent tasked with "summarizing emails" should never have the scope to "delete files."</li>
  <li><strong>Continuous Threat Modeling:</strong> Security isn't a one-time check. As we push code faster using AI-assisted tools, we need automated security pipelines (DevSecOps) that flag architectural flaws in real-time.</li>
</ul>

<h3>The Bottom Line</h3>
<p>As engineers, our job isn't just to make things work; it's to make things resilient. In a world of autonomous code and distributed clouds, Identity is the only boundary that matters.</p>`
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// CTF Section

const ctfSection = {
  title: emoji("Capture The Flag 🚩"),
  subtitle: "CTF COMPETITIONS I HAVE PARTICIPATED IN",
  ctfs: [
    {
      name: "Amazon & WiCyS: Together We Hack",
      date: "2025",
      placement: "Top 9",
      description: "Achieved a Top 9 finish in a high-stakes collaborative hacking event hosted by Amazon, HackerOne, and Women in CyberSecurity (WiCyS).",
      categories: ["Web", "Cryptography", "Reverse Engineering", "Forensics", "OSINT", "Pwn", "Misc", "Bug Bounty", "Vulnerability Research"]
    },
    {
      name: "OWASP Global AppSec / Bob the Breaker CTF Challenge",
      date: "2025",
      placement: "Top 7",
      description: "Secured a Top 7 position in the AI-focused security challenge hosted by NOKOD Security at the OWASP Global AppSec Conference, focusing on identifying vulnerabilities in low-code/no-code platforms and addressing the OWASP Top 10.",
      categories: ["AI Security", "LLM Hacking", "AppSec", "Web"]
    },
    {
      name: "Snyk Fetch the Flag CTF",
      date: "2025",
      placement: "Ranked 357/1539 Teams",
      description: "Successfully competed in a global CTF under the team name NOVANYX, solving complex challenges across various security domains.",
      categories: ["Web Security", "AppSec", "General CTF"]
    },
    {
      name: "PicoCTF",
      date: "Ongoing",
      placement: "Active Member",
      description: "Regularly solving complex labs and challenges focused on penetration testing, pwn, and reverse engineering.",
      categories: ["Pwn", "Reverse Engineering", "Network Security"]
    },
    {
      name: "Hack The Box",
      date: "Ongoing",
      placement: "Active Member",
      description: "Regularly solving complex labs and challenges focused on penetration testing, pwn, and reverse engineering.",
      categories: ["Pwn", "Reverse Engineering", "Network Security"]
    },
    {
      name: "TryHackMe",
      date: "Ongoing",
      placement: "Participant",
      description: "Continuous learning through offensive and defensive security rooms, earning badges in red teaming and SOC operations.",
      categories: ["Pentesting", "SOC", "Red Teaming"]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  ctfSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
