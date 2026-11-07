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
    nav: { about: "About", journey: "Experience", projects: "Projects",
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
      kicker: "Experience",
      title: "From simulation code to research platforms",
      cvLink: "View full CV",
      items: [
        { period: "2025 – now", role: "Software Engineer",
          org: "Leibniz Institute of Plant Biochemistry (IPB)",
          summary: "Backend and web development for the Natural One Health and CRIMSy research platforms — authentication (OAuth2/OIDC, sessions, RBAC), OpenAPI-based APIs with generated clients, and Docker-based CI/CD.",
          tech: ["Java", "Spring Boot", "Jakarta EE", "PostgreSQL", "Neo4j", "React / TypeScript", "Docker"] },
        { period: "2023 – 2025", role: "Freelance Software Engineer & Trainer",
          org: "Self-employed",
          summary: "Technical consulting for clients, including software for building management (service charges, maintenance and repairs) and for a law firm, plus German and English training for international professionals.",
          tech: ["Consulting", "Process automation", "AI & IoT"] },
        { period: "2021 – 2023", role: "Software Engineer – IoT & Cloud",
          org: "Beko Technologies",
          summary: "Industrial IoT software in C++ and Qt. Introduced CI/CD pipelines (30% faster deployments) and optimised data structures and SQL queries in legacy systems (25% efficiency gain).",
          tech: ["C++", "Qt", "SQL", "CI/CD"] },
        { period: "2020 – 2021", role: "Software Engineer",
          org: "Markt-intern Verlag",
          summary: "Database management and further development of subscription management systems, with systematic testing and refactoring.",
          tech: ["SQL", "Databases", "Testing"] },
        { period: "2017 – 2020", role: "Student Research Assistant – Software Development",
          org: "IKV · RWTH Aachen",
          summary: "Core developer of the simulation software SphaeroSim (C++): parallelised its three main algorithms with OpenMP, implemented simulated annealing, and automated data pipelines in Python and RapidMiner (50% higher throughput).",
          tech: ["C++", "OpenMP", "Python", "RapidMiner"] }
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
      orcid: "All publications on ORCID",
      read: "Read",
      items: [
        { year: "2024", title: "Interpretable and explainable predictive machine learning models for data-driven protein engineering",
          venue: "Biotechnology Advances, 79 (2025) · co-author", url: "https://doi.org/10.1016/j.biotechadv.2024.108495" },
        { year: "2024", title: "Peptide-based drug discovery through artificial intelligence: towards an autonomous design of therapeutic peptides",
          venue: "Briefings in Bioinformatics, 25(4) · co-author", url: "https://doi.org/10.1093/bib/bbae275" }
      ],
      earlier: "Earlier publications (2013–2015) on virtual creativity systems for smart cities, trust management in e-commerce and the security of mobile financial transactions."
    },

    contact: {
      kicker: "Contact",
      title: "Let's build something reliable together.",
      text: "I'm open to roles in software, backend, cloud and AI engineering as well as application modernisation in Germany. The fastest way to reach me is by email or LinkedIn.",
      copy: "Copy email",
      copied: "Copied!"
    },

    footer: { rights: "All rights reserved.", built: "Built with HTML · CSS · JavaScript · Hosted on GitHub Pages" }
  },

  /* ------------------------------------------------------------------ */
  de: {
    nav: { about: "Über mich", journey: "Erfahrung", projects: "Projekte",
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
      kicker: "Erfahrung",
      title: "Von Simulationscode zu Forschungsplattformen",
      cvLink: "Vollständigen Lebenslauf ansehen",
      items: [
        { period: "2025 – heute", role: "Software Engineer",
          org: "Leibniz-Institut für Pflanzenbiochemie (IPB)",
          summary: "Backend- und Webentwicklung für die Forschungsplattformen Natural One Health und CRIMSy – Authentifizierung (OAuth2/OIDC, Sessions, RBAC), OpenAPI-basierte APIs mit generierten Clients und Docker-basiertes CI/CD.",
          tech: ["Java", "Spring Boot", "Jakarta EE", "PostgreSQL", "Neo4j", "React / TypeScript", "Docker"] },
        { period: "2023 – 2025", role: "Freiberufliche Softwareentwicklerin & Dozentin",
          org: "Selbstständig",
          summary: "Technische Beratung für Kunden, u. a. Software für die Gebäudeverwaltung (Nebenkosten, Wartung und Reparaturen) und für eine Anwaltskanzlei, sowie Deutsch- und Englischunterricht für internationale Fachkräfte.",
          tech: ["Beratung", "Prozessautomatisierung", "KI & IoT"] },
        { period: "2021 – 2023", role: "Softwareentwicklerin – IoT & Cloud",
          org: "Beko Technologies",
          summary: "Industrielle IoT-Software mit C++ und Qt. Einführung von CI/CD-Pipelines (30 % schnellere Deployments) und Optimierung von Datenstrukturen und SQL-Abfragen in Legacy-Systemen (25 % Effizienzsteigerung).",
          tech: ["C++", "Qt", "SQL", "CI/CD"] },
        { period: "2020 – 2021", role: "Softwareentwicklerin",
          org: "Markt-intern Verlag",
          summary: "Datenbankverwaltung und Weiterentwicklung von Abonnement-Management-Systemen mit systematischem Testing und Refactoring.",
          tech: ["SQL", "Datenbanken", "Testing"] },
        { period: "2017 – 2020", role: "Studentische Hilfskraft – Softwareentwicklung",
          org: "IKV · RWTH Aachen",
          summary: "Kernentwicklerin der Simulationssoftware SphaeroSim (C++): Parallelisierung der drei Hauptalgorithmen mit OpenMP, Implementierung von Simulated Annealing und Automatisierung von Datenpipelines mit Python und RapidMiner (50 % höherer Durchsatz).",
          tech: ["C++", "OpenMP", "Python", "RapidMiner"] }
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
      orcid: "Alle Publikationen auf ORCID",
      read: "Lesen",
      items: [
        { year: "2024", title: "Interpretable and explainable predictive machine learning models for data-driven protein engineering",
          venue: "Biotechnology Advances, 79 (2025) · Mitautorin", url: "https://doi.org/10.1016/j.biotechadv.2024.108495" },
        { year: "2024", title: "Peptide-based drug discovery through artificial intelligence: towards an autonomous design of therapeutic peptides",
          venue: "Briefings in Bioinformatics, 25(4) · Mitautorin", url: "https://doi.org/10.1093/bib/bbae275" }
      ],
      earlier: "Frühere Publikationen (2013–2015) zu virtuellen Kreativitätssystemen für Smart Cities, Vertrauensmanagement im E-Commerce und Sicherheit mobiler Finanztransaktionen."
    },

    contact: {
      kicker: "Kontakt",
      title: "Lassen Sie uns gemeinsam zuverlässige Systeme bauen.",
      text: "Ich bin offen für Positionen in Software-, Backend-, Cloud- und KI-Engineering sowie Application Modernization in Deutschland. Am schnellsten erreichen Sie mich per E-Mail oder LinkedIn.",
      copy: "E-Mail kopieren",
      copied: "Kopiert!"
    },

    footer: { rights: "Alle Rechte vorbehalten.", built: "Erstellt mit HTML · CSS · JavaScript · Gehostet auf GitHub Pages" }
  }
};
