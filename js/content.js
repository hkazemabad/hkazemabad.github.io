/* =====================================================================
   CONTENT FILE — edit this file to change the text on the website.
   Every section has an English (en) and a German (de) version.
   To add a project: copy one block inside "projects" and change it.
   ===================================================================== */

const SITE = {
  name: "Hoda Anvari-Kazemabad",
  photo: "assets/hoda.jpg",
  cv: "assets/CV_Hoda_Anvari-Kazemabad_EN.pdf",
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
    nav: { about: "About", journey: "Experience", projects: "Projects", creating: "Creating",
           research: "Research", contact: "Contact" },

    hub: [
      { label: "Engineer", title: "Backend & research infrastructure",
        text: "APIs, security and CI/CD for platforms that move real data.", href: "#journey" },
      { label: "Researcher", title: "AI for proteins & peptides",
        text: "Explainable machine learning in protein engineering and drug discovery.", href: "#research" },
      { label: "Creator", title: "SoulReach & Persian poetry readings",
        text: "A product I built on my own — and poetry I read aloud on YouTube.", href: "#creating" }
    ],

    creating: {
      kicker: "Creating",
      title: "Beyond engineering",
      intro: "Beyond my day job: a product I built myself, and the poetry I love.",
      items: [
        { name: "SoulReach", status: "Coming soon", url: "", linkLabel: "",
          text: "A web app I built for one-to-one listening and conversation sessions — and for having books read aloud." },
        { name: "Poetry on YouTube", status: "Live", url: "https://www.youtube.com/@hodaanvari", linkLabel: "youtube.com/@hodaanvari",
          text: "My channel where I read Persian poetry and the Shahnameh aloud — my space for literature beyond code." }
      ]
    },

    hero: {
      status: "Open to backend, cloud & application-modernisation roles",
      hello: "Hi there!",
      role: "Backend Software Engineer",
      title: "I build <em>secure, API-first</em> backends for data that matters.",
      intro: "From industrial IoT at Beko Technologies to federated life-science research infrastructure at the Leibniz Institute of Plant Biochemistry — plus AI research and products of my own.",
      stackLabel: "Core stack",
      stack: ["Python", "Java", "C++", "FastAPI", "Jakarta EE", "PostgreSQL", "OAuth2 / RBAC", "Docker", "GitHub Actions"],
      facts: [
        { icon: "pin",   text: "Germany" },
        { icon: "cap",   text: "M.Sc. RWTH Aachen" },
        { icon: "globe", text: "English · German · Persian" }
      ],
      ctaProjects: "View projects",
      ctaContact: "Contact me",
      ctaCv: "CV",
      stats: [
        { value: "6",   label: "years full-time engineering in Germany (since 2020)" },
        { value: "4",   label: "professional roles in industry, consulting & research" },
        { value: "5",   label: "scientific publications" },
        { value: "30%", label: "faster deployments through CI/CD" }
      ],
      nowLabel: "Right now",
      now: "Software Engineer at the <strong>Leibniz Institute of Plant Biochemistry (IPB)</strong> — modernising the backend of the Natural One Health research infrastructure.",
      prevLabel: "Previously",
      prev: ["Beko Technologies", "IKV · RWTH Aachen"],
      featuredLabel: "Featured",
      featured: [
        { kind: "Project", title: "CRIMSy / Natural One Health", href: "#projects" },
        { kind: "Publication", title: "Interpretable ML for protein engineering · 2024", href: "#research" }
      ],
      scroll: "Scroll"
    },

    about: {
      kicker: "About",
      title: "Between engineering depth and scientific data",
      intro: "I'm a software engineer and researcher with an M.Sc. in Software Systems Engineering from RWTH Aachen. I have worked across industrial IoT, publishing and life-science research, and I like the moment when a slow, fragile system becomes fast, documented and easy to build on.",
      cards: [
        { icon: "api",    title: "Backend & API design",
          text: "REST and FastAPI services, OpenAPI/Swagger pipelines with generated clients, OAuth2 and fine-grained RBAC." },
        { icon: "flask",  title: "Research infrastructure",
          text: "Distributed platforms that link chemistry, biodiversity and biomedical data across institutional borders." },
        { icon: "gear",   title: "DevOps & automation",
          text: "Docker-based CI/CD with GitHub Actions, reproducible deployments, agile TDD workflows." },
        { icon: "brain",  title: "AI & data science",
          text: "Explainable AI and geometric deep learning for protein and peptide research, with TensorFlow and HuggingFace." }
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

    impact: {
      kicker: "Measured impact",
      items: [
        { value: "50%", text: "higher data-pipeline throughput at IKV / RWTH Aachen" },
        { value: "30%", text: "shorter deployment time through CI/CD at Beko Technologies" },
        { value: "25%", text: "efficiency gain from legacy performance tuning" }
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

    principles: {
      kicker: "How I work",
      title: "Principles",
      items: [
        { title: "Make it measurable", text: "Performance work starts with a baseline and ends with a number." },
        { title: "Document as you build", text: "An API without documentation is only half delivered." },
        { title: "Security by design", text: "Access control and privacy belong in the first draft, not the last." },
        { title: "Respect legacy code", text: "Old systems hold real knowledge — modernise them step by step." },
        { title: "Automate the boring parts", text: "Reproducible pipelines free people for the hard problems." },
        { title: "Keep learning", text: "From C++ simulations to explainable AI — curiosity is the constant." }
      ]
    },

    contact: {
      kicker: "Contact",
      title: "Let's build something reliable together.",
      text: "I'm open to roles in backend engineering, application modernisation and cloud engineering in Germany. The fastest way to reach me is by email or LinkedIn.",
      copy: "Copy email",
      copied: "Copied!"
    },

    rights: "All rights reserved.",
    footer: { rights: "All rights reserved.", built: "Built with HTML · CSS · JavaScript · Hosted on GitHub Pages" }
  },

  /* ------------------------------------------------------------------ */
  de: {
    nav: { about: "Über mich", journey: "Erfahrung", projects: "Projekte", creating: "Eigenes",
           research: "Forschung", contact: "Kontakt" },

    hub: [
      { label: "Engineerin", title: "Backend & Forschungsinfrastruktur",
        text: "APIs, Security und CI/CD für Plattformen mit echten Daten.", href: "#journey" },
      { label: "Forscherin", title: "KI für Proteine & Peptide",
        text: "Erklärbares Machine Learning in Protein-Engineering und Wirkstoffforschung.", href: "#research" },
      { label: "Kreativ", title: "SoulReach & persische Poesie",
        text: "Ein eigenes Produkt — und Gedichte, die ich auf YouTube vorlese.", href: "#creating" }
    ],

    creating: {
      kicker: "Eigene Projekte",
      title: "Jenseits der Technik",
      intro: "Neben meinem Job: ein eigenes Produkt und die Poesie, die ich liebe.",
      items: [
        { name: "SoulReach", status: "Bald verfügbar", url: "", linkLabel: "",
          text: "Eine Web-App, die ich für persönliche Zuhör- und Gesprächssitzungen gebaut habe — und zum Vorlesen von Büchern." },
        { name: "Poesie auf YouTube", status: "Live", url: "https://www.youtube.com/@hodaanvari", linkLabel: "youtube.com/@hodaanvari",
          text: "Mein Kanal, auf dem ich persische Poesie und das Schahname vorlese — mein Raum für Literatur jenseits von Code." }
      ]
    },

    hero: {
      status: "Offen für Rollen in Backend, Cloud & Application Modernization",
      hello: "Hallo!",
      role: "Backend-Softwareentwicklerin",
      title: "Ich baue <em>sichere, API-first</em> Backends für Daten, die zählen.",
      intro: "Vom industriellen IoT bei Beko Technologies bis zur föderierten Life-Science-Forschungsinfrastruktur am Leibniz-Institut für Pflanzenbiochemie — dazu KI-Forschung und eigene Produkte.",
      stackLabel: "Kern-Stack",
      stack: ["Python", "Java", "C++", "FastAPI", "Jakarta EE", "PostgreSQL", "OAuth2 / RBAC", "Docker", "GitHub Actions"],
      facts: [
        { icon: "pin",   text: "Deutschland" },
        { icon: "cap",   text: "M.Sc. RWTH Aachen" },
        { icon: "globe", text: "Englisch · Deutsch · Persisch" }
      ],
      ctaProjects: "Projekte ansehen",
      ctaContact: "Kontakt",
      ctaCv: "Lebenslauf",
      stats: [
        { value: "6",   label: "Jahre Vollzeit-Softwareentwicklung in Deutschland (seit 2020)" },
        { value: "4",   label: "berufliche Stationen in Industrie, Beratung & Forschung" },
        { value: "5",   label: "wissenschaftliche Publikationen" },
        { value: "30%", label: "schnellere Deployments durch CI/CD" }
      ],
      nowLabel: "Aktuell",
      now: "Software Engineer am <strong>Leibniz-Institut für Pflanzenbiochemie (IPB)</strong> — Modernisierung des Backends der Forschungsinfrastruktur Natural One Health.",
      prevLabel: "Zuvor",
      prev: ["Beko Technologies", "IKV · RWTH Aachen"],
      featuredLabel: "Highlights",
      featured: [
        { kind: "Projekt", title: "CRIMSy / Natural One Health", href: "#projects" },
        { kind: "Publikation", title: "Interpretierbares ML im Protein-Engineering · 2024", href: "#research" }
      ],
      scroll: "Scrollen"
    },

    about: {
      kicker: "Über mich",
      title: "Zwischen Engineering-Tiefe und wissenschaftlichen Daten",
      intro: "Ich bin Softwareentwicklerin und Forscherin mit einem M.Sc. in Software Systems Engineering der RWTH Aachen. Ich habe in industriellem IoT, im Verlagswesen und in der Life-Science-Forschung gearbeitet — und mag den Moment, in dem ein langsames, fragiles System schnell, dokumentiert und leicht erweiterbar wird.",
      cards: [
        { icon: "api",    title: "Backend- & API-Design",
          text: "REST- und FastAPI-Services, OpenAPI/Swagger-Pipelines mit generierten Clients, OAuth2 und feingranulares RBAC." },
        { icon: "flask",  title: "Forschungsinfrastruktur",
          text: "Verteilte Plattformen, die Chemie-, Biodiversitäts- und biomedizinische Daten über Institutionsgrenzen hinweg verbinden." },
        { icon: "gear",   title: "DevOps & Automatisierung",
          text: "Docker-basiertes CI/CD mit GitHub Actions, reproduzierbare Deployments, agile TDD-Workflows." },
        { icon: "brain",  title: "KI & Data Science",
          text: "Erklärbare KI und Geometric Deep Learning für Protein- und Peptidforschung mit TensorFlow und HuggingFace." }
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

    impact: {
      kicker: "Messbare Wirkung",
      items: [
        { value: "50%", text: "höherer Datenpipeline-Durchsatz am IKV / RWTH Aachen" },
        { value: "30%", text: "kürzere Deployment-Zeit durch CI/CD bei Beko Technologies" },
        { value: "25%", text: "Effizienzgewinn durch Performance-Tuning von Legacy-Systemen" }
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

    principles: {
      kicker: "Arbeitsweise",
      title: "Prinzipien",
      items: [
        { title: "Messbar machen", text: "Performance-Arbeit beginnt mit einer Baseline und endet mit einer Zahl." },
        { title: "Dokumentieren beim Bauen", text: "Eine API ohne Dokumentation ist nur halb geliefert." },
        { title: "Security by Design", text: "Zugriffskontrolle und Datenschutz gehören in den ersten Entwurf, nicht in den letzten." },
        { title: "Legacy-Code respektieren", text: "Alte Systeme enthalten echtes Wissen — modernisiere sie Schritt für Schritt." },
        { title: "Das Langweilige automatisieren", text: "Reproduzierbare Pipelines schaffen Zeit für die schwierigen Probleme." },
        { title: "Neugierig bleiben", text: "Von C++-Simulationen bis zu erklärbarer KI — Lernen ist die Konstante." }
      ]
    },

    contact: {
      kicker: "Kontakt",
      title: "Lassen Sie uns gemeinsam zuverlässige Systeme bauen.",
      text: "Ich bin offen für Positionen in Backend Engineering, Application Modernization und Cloud Engineering in Deutschland. Am schnellsten erreichen Sie mich per E-Mail oder LinkedIn.",
      copy: "E-Mail kopieren",
      copied: "Kopiert!"
    },

    rights: "Alle Rechte vorbehalten.",
    footer: { rights: "Alle Rechte vorbehalten.", built: "Erstellt mit HTML · CSS · JavaScript · Gehostet auf GitHub Pages" }
  }
};
