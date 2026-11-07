/* =====================================================================
   CONTENT FILE — edit this file to change the text on the website.
   Every section has an English (en) and a German (de) version.
   To add a project: copy one block inside "projects" and change it.
   ===================================================================== */

const SITE = {
  name: "Hoda Anvari-Kazemabad",
  photo: "assets/hoda.jpg",
  cv: {
    en: "assets/CV_Hoda_Anvari-Kazemabad_EN.pdf",
    de: "assets/CV_Hoda_Anvari-Kazemabad_DE.pdf"
  },
  links: {
    email: "hodaanvarik@gmail.com",
    linkedin: "https://www.linkedin.com/in/hoda-anvari-kazemabad/",
    github: "https://github.com/hkazemabad",
    orcid: "https://orcid.org/0009-0002-4454-4213",
    youtube: "https://www.youtube.com/@hodaanvari"
  }
};

const CONTENT = {
  /* ------------------------------------------------------------------ */
  en: {
    nav: { about: "About", journey: "Experience", projects: "Projects", skills: "Skills",
           research: "Research", contact: "Contact" },

    hero: {
      status: "Open to software, backend, cloud & AI engineering roles",
      hello: "Hi there!",
      role: "Software Engineer · Backend, Cloud & AI",
      title: "I build <em>reliable backend systems</em> for research and industry.",
      intro: "Software engineer in Germany with experience in research infrastructure (Leibniz Institute of Plant Biochemistry), industrial IoT (Beko Technologies) and scientific software (RWTH Aachen). I work on APIs, authentication, databases and CI/CD, with a background in machine learning and data-driven modelling.",
      facts: [
        { icon: "pin",   text: "Germany" },
        { icon: "cap",   text: "M.Sc. RWTH Aachen" },
        { icon: "globe", text: "English · German · Persian" }
      ],
      ctaProjects: "View projects",
      ctaContact: "Contact me",
      ctaCv: "CV",
      stats: [
        { value: "30%", label: "shorter deployment time through CI/CD — Beko Technologies" },
        { value: "25%", label: "efficiency gain from tuning data structures and SQL queries — Beko Technologies" },
        { value: "50%", label: "higher data-pipeline throughput — IKV, RWTH Aachen" },
        { value: "5",   label: "scientific publications, two of them in 2024" }
      ],
      nowLabel: "Right now",
      now: "Software Engineer at the <strong>Leibniz Institute of Plant Biochemistry (IPB)</strong> — backend and web development for the Natural One Health and CRIMSy research platforms.",
      prevLabel: "Previously",
      prev: ["Beko Technologies", "IKV · RWTH Aachen"]
    },

    about: {
      kicker: "About",
      title: "Software engineering for research and industry",
      intro: "I'm a software engineer with an M.Sc. in Software Systems Engineering from RWTH Aachen. Since 2017 I have worked on scientific simulation software, industrial IoT systems and, today, distributed research infrastructure. I have also co-authored research on machine learning in protein engineering and drug discovery.",
      cards: [
        { icon: "api",   title: "Backend & APIs",
          text: "REST APIs with Spring Boot and Jakarta EE, OpenAPI/Swagger documentation with generated TypeScript clients, OAuth2/OIDC login and role-based access control." },
        { icon: "db",    title: "Databases & performance",
          text: "PostgreSQL and Neo4j in research platforms; performance tuning of data structures and SQL queries in industrial software." },
        { icon: "gear",  title: "DevOps & quality",
          text: "Docker-based environments, GitHub Actions CI pipelines and automated tests (JUnit, Jest) in agile, test-driven workflows." },
        { icon: "brain", title: "AI & data-driven modelling",
          text: "Data-driven models in Python and RapidMiner, a simulated-annealing optimisation for simulation software at RWTH Aachen, and machine-learning research in protein engineering." }
      ]
    },

    creating: {
      kicker: "Beyond work",
      title: "Alongside my engineering work",
      intro: "Next to my professional work, I am building my own product and sharing Persian literature.",
      items: [
        { name: "SoulReach", status: "Coming soon", url: "", linkLabel: "",
          text: "A web app I am building for one-to-one listening and conversation sessions, and for having books read aloud." },
        { name: "Poetry on YouTube", status: "Live", url: "https://www.youtube.com/@hodaanvari", linkLabel: "youtube.com/@hodaanvari",
          text: "My channel where I read Persian poetry and the Shahnameh aloud." }
      ]
    },

    journey: {
      kicker: "Journey",
      title: "From simulation code to research platforms",
      items: [
        { period: "Sep 2025 – now", role: "Software Engineer",
          org: "Leibniz Institute of Plant Biochemistry (IPB), Halle (Saale)", tech: ["Java","Jakarta EE","PostgreSQL","OAuth2","OpenAPI","Docker","CI/CD"],
          points: [
            "Designed and modernised the backend of the Natural One Health (N1H) research infrastructure built on CRIMSy.",
            "Implemented PostgreSQL-based session management, OAuth2 authentication and fine-grained RBAC.",
            "Introduced automated OpenAPI/Swagger documentation pipelines with client code generation.",
            "Built Docker-based CI/CD pipelines for isolated, reproducible deployments."
          ] },
        { period: "Nov 2023 – Aug 2025", role: "Independent Software Engineer & Technical Consultant",
          org: "Self-employed", tech: ["AI systems","IoT architecture","Automation"],
          points: [
            "Consulted international clients on AI-powered systems, IoT architectures and process automation.",
            "Delivered German and English language training for international engineers and researchers."
          ] },
        { period: "Jul 2021 – Sep 2023", role: "Software Engineer – IoT & Cloud",
          org: "Beko Technologies GmbH, Neuss", tech: ["C++","Qt","IoT","Cloud","CI/CD"],
          points: [
            "Developed industrial IoT software in embedded and cloud environments with Qt and C++.",
            "Rolled out automated CI/CD pipelines — 30% faster deployments.",
            "Tuned legacy systems for a documented 25% efficiency gain across key data pipelines."
          ] },
        { period: "Dec 2020 – May 2021", role: "Software Engineer",
          org: "Markt-intern Verlag GmbH, Düsseldorf", tech: ["Subscription systems","Testing","Debugging automation","Refactoring"],
          points: [
            "Extended and maintained business-critical subscription management systems.",
            "Systematised testing and refactored code to improve stability."
          ] },
        { period: "Jun 2017 – Jul 2020", role: "Student Research Assistant – Software Development",
          org: "IKV Institute, RWTH Aachen", tech: ["C++","Python","RapidMiner","Simulation"],
          points: [
            "Core developer of the simulation framework SphaeroSim (C++).",
            "Automated data processing pipelines with Python, C++ and RapidMiner — 50% higher throughput."
          ] }
      ]
    },

    projects: {
      kicker: "Projects",
      title: "Selected work on GitHub",
      intro: "Public repositories. More projects will be added here soon.",
      all: "All",
      code: "Code",
      soon: "More projects coming soon",
      soonText: "Further work — including AI and web applications — will be published here.",
      items: [
        { name: "CRIMSy / Natural One Health", tag: "Backend",
          url: "https://github.com/hkazemabad/CRIMSy",
          role: "Contributor · IPB Halle", featured: true,
          highlights: ["PostgreSQL session management, OAuth2 & fine-grained RBAC", "OpenAPI/Swagger docs pipeline with generated clients", "Dockerised CI/CD for reproducible deployments"],
          text: "Cloud Resource & Information Management System — a distributed research platform for sharing and analysing chemical, sequence and biochemical data with fine-grained access control across institutions.",
          tech: ["Java", "Jakarta EE", "Maven", "PostgreSQL", "Docker", "OAuth2"] },
        { name: "SphaeroSim", tag: "Simulation",
          url: "https://github.com/hkazemabad/SphaeroSim",
          role: "Core developer · IKV, RWTH Aachen",
          text: "Engineering simulation framework for modelling spherulite growth during polymer crystallisation.",
          tech: ["C++", "Eigen", "Visual Studio"] },
        { name: "SphaeroSim Data Extractor", tag: "Data",
          url: "https://github.com/hkazemabad/SphaeroSim-DataExtractor",
          role: "Author",
          text: "Scans simulation databanks, extracts XML, CSV and VTK results, interpolates temperature profiles, validates runs and exports clean, aggregated CSV datasets for analysis.",
          tech: ["C++", "XML", "CSV", "VTK"] }
      ]
    },

    research: {
      kicker: "Research",
      title: "Publications",
      orcid: "View ORCID profile",
      items: [
        { year: "2024", title: "Interpretable machine learning models for protein engineering", venue: "Biotechnology Advances" },
        { year: "2024", title: "AI-driven peptide drug discovery", venue: "Briefings in Bioinformatics" },
        { year: "2015", title: "Virtual creativity systems for smart cities", venue: "WASET" },
        { year: "2015", title: "Trust management in e-commerce systems", venue: "AASRJ" },
        { year: "2013", title: "Security of mobile financial transactions", venue: "IJCNCS" }
      ]
    },

    skills: {
      kicker: "Skills",
      title: "Technical toolbox",
      groups: [
        { name: "Programming", items: ["Python", "C++", "Java", "JavaScript", "SQL"] },
        { name: "Backend & APIs", items: ["FastAPI", "REST", "OpenAPI / Swagger", "Jakarta EE", "OAuth2", "RBAC"] },
        { name: "Databases", items: ["PostgreSQL", "Neo4j", "MySQL", "MSSQL"] },
        { name: "DevOps & Cloud", items: ["Docker", "Git", "GitHub Actions", "CI/CD"] },
        { name: "AI & Data Science", items: ["Explainable AI", "Geometric Deep Learning", "TensorFlow", "HuggingFace", "Jupyter"] },
        { name: "Software Engineering", items: ["Scalable architecture", "Microservices", "Scrum", "TDD"] },
        { name: "UI & Tools", items: ["React", "Qt", "HTML5 / CSS3", "VS Code", "IntelliJ IDEA"] }
      ]
    },

    education: {
      kicker: "Education",
      title: "Education & certifications",
      degrees: [
        { period: "2016 – 2020", degree: "M.Sc. Software Systems Engineering", school: "RWTH Aachen University, Germany",
          note: "Thesis: Model-Based Software Engineering and Privacy in the Smart Home" },
        { period: "2007 – 2011", degree: "B.Sc. Information Technology", school: "IAUM, Mashhad, Iran",
          note: "Thesis: Customer Relationship Management (CRM) Systems" }
      ],
      certTitle: "Certifications",
      certs: [
        { name: "Deep Learning Specialization", issuer: "DeepLearning.AI (Coursera)" },
        { name: "Azure AI Fundamentals (AI-900)", issuer: "Microsoft" },
        { name: "Azure Fundamentals (AZ-900)", issuer: "Microsoft" }
      ],
      langTitle: "Languages",
      langs: [
        { name: "English", level: "Full professional", pct: 95 },
        { name: "German", level: "Professional working", pct: 80 },
        { name: "Persian", level: "Native", pct: 100 }
      ]
    },

    contact: {
      kicker: "Contact",
      title: "Let's build something reliable together.",
      text: "I'm open to roles in software, backend, cloud and AI engineering as well as application modernisation in Germany. The fastest way to reach me is by email or LinkedIn.",
      copy: "Copy email",
      copied: "Copied!"
    },

    rights: "All rights reserved.",
    footer: { rights: "All rights reserved.", built: "Built with HTML · CSS · JavaScript · Hosted on GitHub Pages" }
  },

  /* ------------------------------------------------------------------ */
  de: {
    nav: { about: "Über mich", journey: "Erfahrung", projects: "Projekte", skills: "Kenntnisse",
           research: "Forschung", contact: "Kontakt" },

    hero: {
      status: "Offen für Positionen in Software-, Backend-, Cloud- und KI-Engineering",
      hello: "Hallo!",
      role: "Software Engineer · Backend, Cloud & KI",
      title: "Ich entwickle <em>zuverlässige Backend-Systeme</em> für Forschung und Industrie.",
      intro: "Softwareentwicklerin in Deutschland mit Erfahrung in Forschungsinfrastruktur (Leibniz-Institut für Pflanzenbiochemie), industriellem IoT (Beko Technologies) und wissenschaftlicher Software (RWTH Aachen). Meine Schwerpunkte sind APIs, Authentifizierung, Datenbanken und CI/CD – mit Hintergrund in Machine Learning und datengetriebener Modellierung.",
      facts: [
        { icon: "pin",   text: "Deutschland" },
        { icon: "cap",   text: "M.Sc. RWTH Aachen" },
        { icon: "globe", text: "Deutsch · Englisch · Persisch" }
      ],
      ctaProjects: "Projekte ansehen",
      ctaContact: "Kontakt",
      ctaCv: "Lebenslauf",
      stats: [
        { value: "30 %", label: "kürzere Deployment-Zeit durch CI/CD – Beko Technologies" },
        { value: "25 %", label: "Effizienzsteigerung durch Optimierung von Datenstrukturen und SQL-Abfragen – Beko Technologies" },
        { value: "50 %", label: "höherer Durchsatz der Datenpipelines – IKV, RWTH Aachen" },
        { value: "5",    label: "wissenschaftliche Publikationen, davon zwei aus 2024" }
      ],
      nowLabel: "Aktuell",
      now: "Software Engineer am <strong>Leibniz-Institut für Pflanzenbiochemie (IPB)</strong> – Backend- und Webentwicklung für die Forschungsplattformen Natural One Health und CRIMSy.",
      prevLabel: "Zuvor",
      prev: ["Beko Technologies", "IKV · RWTH Aachen"]
    },

    about: {
      kicker: "Über mich",
      title: "Softwareentwicklung für Forschung und Industrie",
      intro: "Ich bin Softwareentwicklerin mit einem M.Sc. in Software Systems Engineering der RWTH Aachen. Seit 2017 arbeite ich an wissenschaftlicher Simulationssoftware, industriellen IoT-Systemen und heute an verteilter Forschungsinfrastruktur. Außerdem bin ich Mitautorin von Forschungsarbeiten zu Machine Learning im Protein-Engineering und in der Wirkstoffforschung.",
      cards: [
        { icon: "api",   title: "Backend & APIs",
          text: "REST-APIs mit Spring Boot und Jakarta EE, OpenAPI/Swagger-Dokumentation mit generierten TypeScript-Clients, OAuth2/OIDC-Login und rollenbasierte Zugriffskontrolle." },
        { icon: "db",    title: "Datenbanken & Performance",
          text: "PostgreSQL und Neo4j in Forschungsplattformen; Performance-Tuning von Datenstrukturen und SQL-Abfragen in industrieller Software." },
        { icon: "gear",  title: "DevOps & Qualität",
          text: "Docker-basierte Umgebungen, CI-Pipelines mit GitHub Actions und automatisierte Tests (JUnit, Jest) in agilen, testgetriebenen Workflows." },
        { icon: "brain", title: "KI & datengetriebene Modellierung",
          text: "Datengetriebene Modelle mit Python und RapidMiner, Simulated-Annealing-Optimierung für Simulationssoftware an der RWTH Aachen und Machine-Learning-Forschung im Protein-Engineering." }
      ]
    },

    creating: {
      kicker: "Neben der Arbeit",
      title: "Neben meiner Arbeit als Engineerin",
      intro: "Neben meiner beruflichen Tätigkeit entwickle ich ein eigenes Produkt und teile persische Literatur.",
      items: [
        { name: "SoulReach", status: "Bald verfügbar", url: "", linkLabel: "",
          text: "Eine Web-App, die ich für persönliche Zuhör- und Gesprächssitzungen sowie das Vorlesen von Büchern entwickle." },
        { name: "Poesie auf YouTube", status: "Live", url: "https://www.youtube.com/@hodaanvari", linkLabel: "youtube.com/@hodaanvari",
          text: "Mein Kanal, auf dem ich persische Poesie und das Schahname vorlese." }
      ]
    },

    journey: {
      kicker: "Werdegang",
      title: "Von Simulationscode zu Forschungsplattformen",
      items: [
        { period: "Sep 2025 – heute", role: "Software Engineer",
          org: "Leibniz-Institut für Pflanzenbiochemie (IPB), Halle (Saale)", tech: ["Java","Jakarta EE","PostgreSQL","OAuth2","OpenAPI","Docker","CI/CD"],
          points: [
            "Konzeption und Modernisierung des Backends der Forschungsinfrastruktur Natural One Health (N1H) auf Basis von CRIMSy.",
            "Umsetzung von PostgreSQL-basiertem Session-Management, OAuth2-Authentifizierung und feingranularem RBAC.",
            "Einführung automatisierter OpenAPI/Swagger-Dokumentationspipelines mit Client-Codegenerierung.",
            "Aufbau Docker-basierter CI/CD-Pipelines für isolierte, reproduzierbare Deployments."
          ] },
        { period: "Nov 2023 – Aug 2025", role: "Freiberufliche Software Engineerin & technische Beraterin",
          org: "Selbstständig", tech: ["KI-Systeme","IoT-Architektur","Automatisierung"],
          points: [
            "Beratung internationaler Kunden zu KI-Systemen, IoT-Architekturen und Prozessautomatisierung.",
            "Sprachtrainings (Deutsch/Englisch) für internationale Ingenieur:innen und Forschende."
          ] },
        { period: "Jul 2021 – Sep 2023", role: "Software Engineer – IoT & Cloud",
          org: "Beko Technologies GmbH, Neuss", tech: ["C++","Qt","IoT","Cloud","CI/CD"],
          points: [
            "Entwicklung industrieller IoT-Software in Embedded- und Cloud-Umgebungen mit Qt und C++.",
            "Einführung automatisierter CI/CD-Pipelines — 30 % kürzere Deployment-Zeit.",
            "Performance-Tuning von Legacy-Systemen mit dokumentierten 25 % Effizienzgewinn."
          ] },
        { period: "Dez 2020 – Mai 2021", role: "Software Engineer",
          org: "Markt-intern Verlag GmbH, Düsseldorf", tech: ["Abo-Systeme","Testing","Debugging-Automatisierung","Refactoring"],
          points: [
            "Weiterentwicklung und Wartung geschäftskritischer Abo-Verwaltungssysteme.",
            "Systematisierung von Tests und Refactoring für mehr Stabilität."
          ] },
        { period: "Jun 2017 – Jul 2020", role: "Studentische Hilfskraft – Softwareentwicklung",
          org: "IKV, RWTH Aachen", tech: ["C++","Python","RapidMiner","Simulation"],
          points: [
            "Kernentwicklerin des Simulationsframeworks SphaeroSim (C++).",
            "Automatisierung von Datenpipelines mit Python, C++ und RapidMiner — 50 % höherer Durchsatz."
          ] }
      ]
    },

    projects: {
      kicker: "Projekte",
      title: "Ausgewählte Arbeiten auf GitHub",
      intro: "Öffentliche Repositories. Weitere Projekte folgen in Kürze.",
      all: "Alle",
      code: "Code",
      soon: "Weitere Projekte folgen",
      soonText: "Weitere Arbeiten — u. a. KI- und Webanwendungen — werden hier veröffentlicht.",
      items: [
        { name: "CRIMSy / Natural One Health", tag: "Backend",
          url: "https://github.com/hkazemabad/CRIMSy",
          role: "Mitwirkende · IPB Halle", featured: true,
          highlights: ["PostgreSQL-Session-Management, OAuth2 & feingranulares RBAC", "OpenAPI/Swagger-Dokumentationspipeline mit generierten Clients", "Dockerisiertes CI/CD für reproduzierbare Deployments"],
          text: "Cloud Resource & Information Management System — eine verteilte Forschungsplattform zum Austausch und zur Analyse chemischer, sequenzbasierter und biochemischer Daten mit feingranularer, institutionsübergreifender Zugriffskontrolle.",
          tech: ["Java", "Jakarta EE", "Maven", "PostgreSQL", "Docker", "OAuth2"] },
        { name: "SphaeroSim", tag: "Simulation",
          url: "https://github.com/hkazemabad/SphaeroSim",
          role: "Kernentwicklerin · IKV, RWTH Aachen",
          text: "Simulationsframework zur Modellierung des Sphärolithwachstums bei der Polymerkristallisation.",
          tech: ["C++", "Eigen", "Visual Studio"] },
        { name: "SphaeroSim Data Extractor", tag: "Data",
          url: "https://github.com/hkazemabad/SphaeroSim-DataExtractor",
          role: "Autorin",
          text: "Durchsucht Simulationsdatenbanken, extrahiert XML-, CSV- und VTK-Ergebnisse, interpoliert Temperaturprofile, validiert Läufe und exportiert bereinigte, aggregierte CSV-Datensätze.",
          tech: ["C++", "XML", "CSV", "VTK"] }
      ]
    },

    research: {
      kicker: "Forschung",
      title: "Publikationen",
      orcid: "ORCID-Profil ansehen",
      items: [
        { year: "2024", title: "Interpretable machine learning models for protein engineering", venue: "Biotechnology Advances" },
        { year: "2024", title: "AI-driven peptide drug discovery", venue: "Briefings in Bioinformatics" },
        { year: "2015", title: "Virtual creativity systems for smart cities", venue: "WASET" },
        { year: "2015", title: "Trust management in e-commerce systems", venue: "AASRJ" },
        { year: "2013", title: "Security of mobile financial transactions", venue: "IJCNCS" }
      ]
    },

    skills: {
      kicker: "Skills",
      title: "Technischer Werkzeugkasten",
      groups: [
        { name: "Programmierung", items: ["Python", "C++", "Java", "JavaScript", "SQL"] },
        { name: "Backend & APIs", items: ["FastAPI", "REST", "OpenAPI / Swagger", "Jakarta EE", "OAuth2", "RBAC"] },
        { name: "Datenbanken", items: ["PostgreSQL", "Neo4j", "MySQL", "MSSQL"] },
        { name: "DevOps & Cloud", items: ["Docker", "Git", "GitHub Actions", "CI/CD"] },
        { name: "KI & Data Science", items: ["Erklärbare KI", "Geometric Deep Learning", "TensorFlow", "HuggingFace", "Jupyter"] },
        { name: "Software Engineering", items: ["Skalierbare Architektur", "Microservices", "Scrum", "TDD"] },
        { name: "UI & Tools", items: ["React", "Qt", "HTML5 / CSS3", "VS Code", "IntelliJ IDEA"] }
      ]
    },

    education: {
      kicker: "Ausbildung",
      title: "Ausbildung & Zertifikate",
      degrees: [
        { period: "2016 – 2020", degree: "M.Sc. Software Systems Engineering", school: "RWTH Aachen University, Deutschland",
          note: "Masterarbeit: Model-Based Software Engineering and Privacy in the Smart Home" },
        { period: "2007 – 2011", degree: "B.Sc. Informationstechnologie", school: "IAUM, Maschhad, Iran",
          note: "Bachelorarbeit: Customer-Relationship-Management-Systeme (CRM)" }
      ],
      certTitle: "Zertifikate",
      certs: [
        { name: "Deep Learning Specialization", issuer: "DeepLearning.AI (Coursera)" },
        { name: "Azure AI Fundamentals (AI-900)", issuer: "Microsoft" },
        { name: "Azure Fundamentals (AZ-900)", issuer: "Microsoft" }
      ],
      langTitle: "Sprachen",
      langs: [
        { name: "Englisch", level: "Verhandlungssicher", pct: 95 },
        { name: "Deutsch", level: "Fließend im Beruf", pct: 80 },
        { name: "Persisch", level: "Muttersprache", pct: 100 }
      ]
    },

    contact: {
      kicker: "Kontakt",
      title: "Lassen Sie uns gemeinsam zuverlässige Systeme bauen.",
      text: "Ich bin offen für Positionen in Software-, Backend-, Cloud- und KI-Engineering sowie Application Modernization in Deutschland. Am schnellsten erreichen Sie mich per E-Mail oder LinkedIn.",
      copy: "E-Mail kopieren",
      copied: "Kopiert!"
    },

    rights: "Alle Rechte vorbehalten.",
    footer: { rights: "Alle Rechte vorbehalten.", built: "Erstellt mit HTML · CSS · JavaScript · Gehostet auf GitHub Pages" }
  }
};
