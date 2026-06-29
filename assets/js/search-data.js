// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-research",
          title: "Research",
          description: "Under construction.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-gallery",
          title: "Gallery",
          description: "Team Events",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Life/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Description for courses I taught.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-members",
          title: "Members",
          description: "meet members of the group",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-prof-wu-joined-peking-university-as-an-associate-professor",
          title: 'Prof. Wu Joined Peking University as an Associate Professor',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_1/";
            },},{id: "news-one-paper-accepted-in-ieee-vlsi-2024-congratulations-to-haoran-and-yandong",
          title: 'One Paper Accepted in IEEE VLSI 2024, congratulations to Haoran and Yandong',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-jiacheng-sun-won-best-poster-award-in-the-19th-national-semiconductor-and-integrated-technology-conference-congratulations",
          title: 'Jiacheng Sun Won Best Poster Award in The 19th National Semiconductor and Integrated...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_5/";
            },},{id: "news-jiacheng-sun-won-excellent-poster-award-in-the-annual-post-moore-conference-congratulations",
          title: 'Jiacheng Sun Won Excellent Poster Award in the annual Post-Moore conference, congratulations!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_6/";
            },},{id: "news-yimeng-wang-won-best-paper-in-ieee-edtm-2025-congratulations",
          title: 'Yimeng Wang Won Best Paper in IEEE EDTM 2025, congratulations!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_3/";
            },},{id: "news-3-papers-accepted-in-ieee-vlsi-2025-congratulations-to-the-authors",
          title: '3 Papers accepted in IEEE VLSI 2025, congratulations to the authors!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_4/";
            },},{id: "news-the-dtco-device-lab-gives-3-talks-in-vlsi-2025",
          title: 'The DTCO Device Lab Gives 3 Talks in VLSI 2025',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_7/";
            },},{id: "news-the-flip-fet-concept-gains-attentions-in-the-field",
          title: 'The Flip FET concept gains attentions in the field',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_8/";
            },},{id: "news-one-paper-was-accepted-by-ieee-iedm-congratulations-to-the-authors",
          title: 'One paper was accepted by IEEE IEDM, Congratulations to the authors',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_9/";
            },},{id: "news-incoming-graduate-student-zhentao-won-eds-undergraduate-student-scholarship",
          title: 'Incoming Graduate Student Zhentao Won EDS Undergraduate Student Scholarship',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_10/";
            },},{id: "news-3-students-won-excellent-undergraduate-thesis",
          title: '3 students won excellent undergraduate thesis',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_11/";
            },},{id: "projects-dtco",
          title: 'DTCO',
          description: "Design Technology Co-optimization is key in bleeding edge nodes",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-3d-integration",
          title: '3D Integration',
          description: "3D integration enables the scaling beyond Moore&#39;s Law",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-novel-device",
          title: 'Novel Device',
          description: "Innovative Device to Drive IC further",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-dualside-design",
          title: 'Dualside Design',
          description: "The circuit design innovations for both sides of wafer",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-beyond-moore",
          title: 'Beyond Moore',
          description: "Architecture Pathfinding to Identify Next-Gen Technology",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%68%65%6E%67%77%75@%70%6B%75.%65%64%75.%63%6E", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/heng-wu-1764a239", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-6854-3373", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=Ewp3OhkAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
