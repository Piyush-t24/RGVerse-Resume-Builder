import { ResumeData } from "../types/Resume";

export const sampleResumeData: ResumeData = {
  personalInfo: {
    fullName: "Jake Ryan",
    phone: "+1 (123) 456-7890",
    email: "jake@gmail.com",
    linkedin: "https://linkedin.com/in/jake",
    github: "https://github.com/jake",
    twitter: "https://x.com/jake",
    location: "Boston, MA",
  },
  professionalSummary:
    "Undergraduate student pursuing Computer Science with experience in Java, C++, JavaScript, and Python. Interested in software engineering, web development, and artificial intelligence.",
  education: [
    {
      id: "1",
      degree: "Bachelor of Science in Computer Science",
      school: "Boston University",
      schoolUrl: "https://bu.edu",
      location: "Boston, MA",
      startDate: "Sep 2018",
      endDate: "May 2022",
      gpa: "3.4",
    },
  ],
  experiences: [
    {
      id: "1",
      title: "Undergraduate Research Assistant",
      company: "Boston University",
      companyUrl: "https://bu.edu",
      location: "Boston, MA",
      startDate: "Jun 2020",
      endDate: "Present",
      description: [
        "Developed a REST API using FastAPI and PostgreSQL to store data from learning management systems",
        "Developed a full-stack web application using Flask, React, PostgreSQL, and Docker to analyze GitHub data",
        "Explored ways to visualize GitHub collaboration in a classroom setting",
      ],
    },
  ],
  projects: [
    {
      id: "1",
      name: "Gitlytics",
      technologies:
        "Python, Flask, React, PostgreSQL, Docker, TravisCI, Digital Ocean",
      liveUrl: "https://gitlytics.com",
      githubUrl: "https://github.com/jake/gitlytics",
      startDate: "Jun 2020",
      endDate: "Present",
      description: [
        "Developed a full-stack web application used by over 350 students at Boston University",
        "Impacted greatest number of students by creating a platform to analyze the data of any GitHub specification compliance",
      ],
    },
  ],
  certifications: [
    {
      id: "1",
      name: "AWS Certified Solutions Architect",
      // date: "Mar 2021",
      credentialUrl: "https://aws.amazon.com/verification",
    },
  ],
  extraCurricular: [
    {
      id: "1",
      activity: "Programming Club",
      organization: "Boston University",
      organizationUrl: "https://bu.edu",
      role: "President",
      startDate: "Sep 2019",
      endDate: "May 2022",
      description: [
        "Led a team of 50+ students in organizing coding competitions and workshops",
        "Increased club membership by 200% through innovative outreach programs",
      ],
    },
  ],
  awards: [
    {
      id: "1",
      title: "Dean's List",
      issuer: "Boston University",
      issuerUrl: "https://bu.edu",
      date: "Fall 2020",
      description: "Achieved GPA of 3.75 or higher for academic excellence",
    },
  ],
  achievements: [
    {
      id: "1",
      title: "Published Research Paper",
      description:
        "Co-authored paper on machine learning applications in education",
      date: "Dec 2021",
      url: "https://example.com/paper",
    },
  ],
  technicalSkills: {
    languages: ["Java", "Python", "C++", "SQL", "JavaScript", "HTML/CSS", "R"],
    frameworks: [
      "React",
      "Node.js",
      "Flask",
      "JUnit",
      "WordPress",
      "Material-UI",
      "FastAPI",
    ],
    tools: [
      "Git",
      "Docker",
      "TravisCI",
      "Google Cloud Platform",
      "VS Code",
      "Visual Studio",
      "PyCharm",
    ],
    libraries: ["pandas", "NumPy", "Matplotlib"],
  },
  // languageProficiency: [
  //   { language: "English", proficiency: 5 },
  //   { language: "Hindi", proficiency: 4 },
  // ],
  sectionOrder: [
    "professionalSummary",
    "education",
    "experiences",
    "projects",
    "certifications",
    "extraCurricular",
    "awards",
    "achievements",
    "technicalSkills",
    "languageProficiency",
  ],
};
