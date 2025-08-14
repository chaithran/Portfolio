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
  username: "Chaithra Narasimhaswamy",
  title: "Hi, I'm Chaithra",
  subTitle: emoji(
"Tech-savvy Full Stack Developer with nearly 10 years of hands-on expertise in building scalable applications using C# .NET, Azure, SQL Server, and REST APIs. Contributed to high-impact solutions across fintech, healthcare, and retail, partnering with industry leaders like Deloitte, Bosch, and Aldi Süd. Known for bridging business goals with technical execution in fast-paced environments.",
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/chaithran",
  linkedin: "https://www.linkedin.com/in/chaithraediga/",
  gmail: "chaithra.ediga@gmail.com",
  facebook: "https://www.facebook.com/chaithra.ediga",
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};


const projectsSection = [
  {
    name: "Fintech API Platform",
    desc:
      "Designed and developed scalable APIs and web applications for fintech clients including Deloitte and Aldi Sud, integrating payment gateways and third-party services.",
    link: "https://github.com/chaithran/fintech-api-platform", // Replace if you have one or use a dummy repo
  },
  {
    name: "Azure Infrastructure Automation",
    desc:
      "Automated infrastructure provisioning and deployment using Terraform, Packer, and Azure DevOps for high availability and monitoring.",
    link: "https://github.com/chaithran/azure-infra-automation", // Replace accordingly
  },
  {
    name: "E-commerce Dashboard",
    desc:
      "Developed full-stack e-commerce dashboards using React and .NET Core APIs with secure payment integrations.",
    link: "https://github.com/chaithran/ecommerce-dashboard", // Replace accordingly
  },
];


// Skills Section

const skillsSection = {
  data:
    [
      {
        title: "What I do",
        subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
        skills: [
          emoji(
            "⚡ Develop highly interactive web applications using C# .Net, Angular, React and Typescript"
          ),
          emoji("⚡Strong foundation in implementation and integration Web APIs and Microservices"),
          emoji(
            "⚡ Azure infrastructure knowledge, CI/CD pipelines Azure Devops"
          )
        ],

        /* Make Sure to include correct Font Awesome Classname to view your icon
      https://fontawesome.com/icons?d=gallery */

        softwareSkills: [
          {
            skillName: "C# .Net",
            fontAwesomeClassname: "fab fa-microsoft"
          },
          {
            skillName: ".Net Core",
            fontAwesomeClassname: "fab fa-code"
          },
          {
            skillName: "Angular",
            fontAwesomeClassname: "fab fa-angular"
          },
          {
            skillName: "React",
            fontAwesomeClassname: "fab fa-react"
          },
          {
            skillName: "html-5",
            fontAwesomeClassname: "fab fa-html5"
          },
          {
            skillName: "css3",
            fontAwesomeClassname: "fab fa-css3-alt"
          },
          {
            skillName: "JavaScript",
            fontAwesomeClassname: "fab fa-js"
          },
          {
            skillName: "sql-database",
            fontAwesomeClassname: "fas fa-database"
          },
          {
            skillName: "azure",
            fontAwesomeClassname: "fab fa-microsoft"
          },
        ],
        display: true // Set false to hide this section, defaults to true
      }

      [{
        title: "DevOps & Tools",
        skills: [
          "Azure DevOps, CI/CD Pipelines",
          "Terraform, Docker, Kubernetes",
          "Git, TFS, Monitoring (New Relic)",
        ],
        softwareSkills: [
          { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" },
          { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
          { skillName: "Azure DevOps", fontAwesomeClassname: "fab fa-microsoft" },
        ],
      }]
    ]
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true

  schools: [
    {
      schoolName: "Visveswaraya Technological University, Belgaum, India",
      logo: require("./assets/images/VTU.jpg"),
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "September 2012 - August 2015"
    },
    {
      schoolName: "Board of Technical Education, Bangalore, India",
      logo: require("./assets/images/BTE.jpg"),
      subHeader: "Diploma in Computer Science and Engineering",
      duration: "September 2009 - August 2012"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend - APIs, Microservices",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    },
    {
      Stack: "Azure Infrastructure",
      progressPercentage: "60%"
    },
    {
      Stack: "Azure DevOps, CI/CD",
      progressPercentage: "70%"
    },
    {
      Stack: "SQL Server",
      progressPercentage: "70%"
    },
    {
      Stack: "NoSQL - CosmosDB, MongoDB",
      progressPercentage: "60%"
    },
    {
      Stack: "SSIS, SSRS, CQRS, DDD etc",
      progressPercentage: "35%"
    }

  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Sinovo Health Solutions",
      companylogo: require("./assets/images/Sinovo.jpg"), // replace with your logo file
      date: "March 2023 – Present",
      desc: "Lead development of healthcare solutions with a focus on performance, security, and scalability. Collaborate with cross-functional teams to design and deliver high-quality software aligned with healthcare standards and compliance.",
      descBullets: [
        "Architect and implement robust backend and frontend modules for healthcare platforms.",
        "Optimize system performance and integrate secure data handling practices."
      ]
    },
    {
      role: "Subject Matter Expert",
      company: "ALDI Digital Services GmbH, Mülheim",
      companylogo: require("./assets/images/Aldi.png"), // replace with logo file
      date: "June 2022 – December 2022",
      desc: "Specialized in infrastructure monitoring, incident handling, and security within ALDI’s digital services ecosystem.",
      descBullets: [
        "Technologies: New Relic Monitoring, Infrastructure monitoring, Security, Incident handling, Testing, UAT"
      ]
    },
    {
      role: "Software Developer",
      company: "Deloitte Consulting GmbH, Frankfurt am Main",
      companylogo: require("./assets/images/Deloitte.png"),
      date: "January 2022 – May 2022",
      desc: "Delivered enterprise-scale applications and automation pipelines for Deloitte clients.",
      descBullets: [
        "Technologies: Angular 8, Typescript, C#, .NET Core, SQL Server, Azure DevOps, Terraform, Packer, CI/CD, Karma, Jasmine"
      ]
    },
    {
      role: "Software Developer",
      company: "PM International AG, Speyer",
      companylogo: require("./assets/images/PM.jpg"),
      date: "November 2020 – December 2021",
      desc: "Built and optimized backend services and event-driven architectures.",
      descBullets: [
        "Technologies: C# .NET Core, SQL Server, Docker, RabbitMQ, Event Store, DDD, CQRS, Seq Server, API Management, Azure DevOps CI/CD, Git, Scrum"
      ]
    },
    {
      role: "Assistant Manager",
      company: "Deloitte Touche Tohmatsu Services, Inc., Bangalore",
      companylogo: require("./assets/images/Deloitte.png"),
      date: "November 2018 – June 2020",
      desc: "Led software projects from conception to completion, ensuring security, scalability, and performance.",
      descBullets: [
        "Implemented security best practices reducing risks by 30%",
        "Developed landing pages, dashboards, and RESTful APIs using Angular 8, Typescript, and .NET",
        "Worked on DevOps pipelines, Terraform automation, and payment integrations (Braintree, PayPal)"
      ]
    },
    {
      role: "Software Developer",
      company: "Robert Bosch Engineering and Business Solutions, Bangalore",
      companylogo: require("./assets/images/Bosch.png"),
      date: "January 2016 – November 2018",
      desc: "Developed and maintained enterprise solutions, modernizing legacy codebases and introducing agile practices.",
      descBullets: [
        "Trained and supervised junior developers",
        "Optimized legacy applications and introduced best coding practices",
        "Collaborated with cross-functional teams to deliver high-quality solutions"
      ]
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/Aldi.png"),
      projectName: "ALDI US Entity",
      projectDesc: "Supported digital initiatives for ALDI US, optimizing user experience and functionality across their e-commerce and informational web platforms",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.aldi.us/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Sinovo.jpg"),
      projectName: "Sinovo Mylife",
      projectDesc: "Contributed to the development of digital tools for diabetes management, enhancing usability and patient engagement within the MyLife Software platform",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://mylife-software.net/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// // Achievement Section
// // Include certificates, talks etc

// const achievementSection = {
//   title: emoji("Achievements And Certifications 🏆 "),
//   subtitle:
//     "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

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
//         { name: "Certification", url: "" },
//         {
//           name: "Final Project",
//           url: "https://pakistan-olx-1.firebaseapp.com/"
//         }
//       ]
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// // Blogs Section

// const blogSection = {
//   title: "Blogs",
//   subtitle:
//     "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
//   displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
//   blogs: [
//     {
//       url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
//       title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
//       description:
//         "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
//     },
//     {
//       url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
//       title: "Why REACT is The Best?",
//       description:
//         "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// // Talks Sections

// const talkSection = {
//   title: "TALKS",
//   subtitle: emoji(
//     "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
//   ),

//   talks: [
//     {
//       title: "Build Actions For Google Assistant",
//       subtitle: "Codelab at GDG DevFest Karachi 2019",
//       slides_url: "https://bit.ly/saadpasta-slides",
//       event_url: "https://www.facebook.com/events/2339906106275053/"
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// // Podcast Section

// const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

//   // Please Provide with Your Podcast embeded Link
//   podcast: [
//     "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+49-15218745643",
  email_address: "chaithra.ediga@gmail.com"
};

// // Twitter Section

// const twitterDetails = {
//   userName: "twitter", //Replace "twitter" with your twitter username without @
//   display: true // Set true to display this section, defaults to false
// };

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  projectsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  contactInfo,
  isHireable,
  resumeSection
};
