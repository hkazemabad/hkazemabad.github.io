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
    meta: {
      title: "Hoda Anvari-Kazemabad — Software Engineer | Backend, Cloud & AI",
      description: "Software engineer in Germany: backend systems, APIs, databases, CI/CD and cloud, with a background in machine learning and research software."
    },
    ui: { skip: "Skip to content", menu: "Open menu", language: "Language", photo: "Portrait of Hoda Anvari-Kazemabad" },

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
        { value: "50%", label: "higher simulation performance through OpenMP parallelisation — IKV, RWTH Aachen" },
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
      title: "Personal projects",
      intro: "Outside my job, I am building my own product and sharing Persian literature.",
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
          summary: "Core developer of the simulation software SphaeroSim (C++): parallelised its three main algorithms with OpenMP and optimised memory use with std::vector and Eigen (50% higher performance). Also built data-driven models in Python and RapidMiner, implemented simulated annealing and ran feasibility studies for new features.",
          tech: ["C++", "OpenMP", "Eigen", "Python", "RapidMiner"] }
      ]
    },

    projects: {
      kicker: "Projects",
      title: "Selected work",
      intro: "Three projects from research and industry — what they are and what I contributed.",
      mine: "My contribution",
      soon: "More projects coming soon",
      soonText: "Further work, including AI and web applications, will be added here.",
      items: [
        { name: "Natural One Health", tag: "Research platform", period: "2026", featured: true,
          org: "Leibniz Institute of Plant Biochemistry (IPB) · team project",
          overview: "An interactive knowledge base for bioactive compound discovery that links natural product chemistry, biodiversity and biomedical research data.",
          points: [
            "Researcher login via ORCID with Spring Security (OIDC) and server-side sessions in PostgreSQL",
            "API-first development: OpenAPI specification with a generated TypeScript client for the React frontend",
            "User account features, automated tests (JUnit, Jest) and Docker / GitHub Actions pipelines"
          ],
          note: "200+ commits",
          tech: ["Java 21", "Spring Boot", "PostgreSQL", "Neo4j", "OpenAPI", "React", "TypeScript", "Docker"],
          links: [{ label: "GitHub", url: "https://github.com/ipb-halle/one-health" }] },
        { name: "CRIMSy modernisation", tag: "Modernisation", period: "2025 – 2026", featured: true,
          org: "Leibniz Institute of Plant Biochemistry (IPB) · team project",
          overview: "CRIMSy is a distributed research data platform with fine-grained access control across institutions. I worked on moving it towards an API-first, REST-based architecture.",
          points: [
            "Migrated the backend to Jakarta EE and introduced OpenAPI-defined REST APIs for authentication, users and search",
            "Redesigned authentication: bearer tokens, database-backed sessions with expiry and cleanup, security filters",
            "Built a standalone React + TypeScript frontend with a generated API client, role-based UI, user management and CSV/PDF export"
          ],
          note: "240+ commits",
          tech: ["Java", "Jakarta EE", "OpenAPI Generator", "PostgreSQL", "React", "TypeScript"],
          links: [{ label: "GitHub", url: "https://github.com/ipb-halle/CRIMSy/tree/crimsy_training" }] },
        { name: "SphaeroSim", tag: "Scientific software", period: "2017 – 2020",
          org: "IKV · RWTH Aachen",
          overview: "Simulation software for modelling spherulite growth during polymer crystallisation.",
          points: [
            "Parallelised the three main algorithms with OpenMP and optimised memory use with std::vector and Eigen — 50% higher simulation performance",
            "Core developer of the C++ code base: simulated annealing and feasibility studies for new features",
            "Wrote a data extractor that turns simulation output (XML, CSV, VTK) into clean datasets for analysis"
          ],
          note: "",
          tech: ["C++", "OpenMP", "Eigen", "Python", "RapidMiner"],
          links: [
            { label: "SphaeroSim", url: "https://github.com/hkazemabad/SphaeroSim" },
            { label: "Data Extractor", url: "https://github.com/hkazemabad/SphaeroSim-DataExtractor" }
          ] }
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
    meta: {
      title: "Hoda Anvari-Kazemabad — Software Engineer | Backend, Cloud & KI",
      description: "Softwareentwicklerin in Deutschland: Backend-Systeme, APIs, Datenbanken, CI/CD und Cloud – mit Hintergrund in Machine Learning und Forschungssoftware."
    },
    ui: { skip: "Zum Inhalt springen", menu: "Menü öffnen", language: "Sprache", photo: "Porträt von Hoda Anvari-Kazemabad" },

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
        { value: "50 %", label: "höhere Simulations-Performance durch Parallelisierung mit OpenMP – IKV, RWTH Aachen" },
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
      title: "Eigene Projekte",
      intro: "Außerhalb meines Berufs entwickle ich ein eigenes Produkt und teile persische Literatur.",
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
          summary: "Kernentwicklerin der Simulationssoftware SphaeroSim (C++): Parallelisierung der drei Hauptalgorithmen mit OpenMP und Optimierung der Speichernutzung mit std::vector und Eigen (50 % höhere Performance). Außerdem datengetriebene Modelle mit Python und RapidMiner, Implementierung von Simulated Annealing und Machbarkeitsstudien für neue Funktionen.",
          tech: ["C++", "OpenMP", "Eigen", "Python", "RapidMiner"] }
      ]
    },

    projects: {
      kicker: "Projekte",
      title: "Ausgewählte Arbeiten",
      intro: "Drei Projekte aus Forschung und Industrie – worum es geht und was ich beigetragen habe.",
      mine: "Mein Beitrag",
      soon: "Weitere Projekte folgen",
      soonText: "Weitere Arbeiten, u. a. KI- und Webanwendungen, werden hier ergänzt.",
      items: [
        { name: "Natural One Health", tag: "Forschungsplattform", period: "2026", featured: true,
          org: "Leibniz-Institut für Pflanzenbiochemie (IPB) · Teamprojekt",
          overview: "Eine interaktive Wissensdatenbank für die Entdeckung bioaktiver Substanzen, die Naturstoffchemie, Biodiversität und biomedizinische Forschungsdaten verknüpft.",
          points: [
            "Login für Forschende über ORCID mit Spring Security (OIDC) und serverseitigen Sessions in PostgreSQL",
            "API-first-Entwicklung: OpenAPI-Spezifikation mit generiertem TypeScript-Client für das React-Frontend",
            "Funktionen für Benutzerkonten, automatisierte Tests (JUnit, Jest) sowie Docker- und GitHub-Actions-Pipelines"
          ],
          note: "200+ Commits",
          tech: ["Java 21", "Spring Boot", "PostgreSQL", "Neo4j", "OpenAPI", "React", "TypeScript", "Docker"],
          links: [{ label: "GitHub", url: "https://github.com/ipb-halle/one-health" }] },
        { name: "Modernisierung von CRIMSy", tag: "Modernisierung", period: "2025 – 2026", featured: true,
          org: "Leibniz-Institut für Pflanzenbiochemie (IPB) · Teamprojekt",
          overview: "CRIMSy ist eine verteilte Plattform für Forschungsdaten mit feingranularer, institutionsübergreifender Zugriffskontrolle. Ich habe an der Umstellung auf eine API-first- und REST-basierte Architektur gearbeitet.",
          points: [
            "Migration des Backends auf Jakarta EE und Einführung OpenAPI-definierter REST-APIs für Authentifizierung, Benutzer und Suche",
            "Neugestaltung der Authentifizierung: Bearer-Tokens, datenbankgestützte Sessions mit Ablauf und Bereinigung, Security-Filter",
            "Eigenständiges Frontend mit React und TypeScript, generiertem API-Client, rollenbasierter Oberfläche, Benutzerverwaltung und CSV/PDF-Export"
          ],
          note: "240+ Commits",
          tech: ["Java", "Jakarta EE", "OpenAPI Generator", "PostgreSQL", "React", "TypeScript"],
          links: [{ label: "GitHub", url: "https://github.com/ipb-halle/CRIMSy/tree/crimsy_training" }] },
        { name: "SphaeroSim", tag: "Wissenschaftliche Software", period: "2017 – 2020",
          org: "IKV · RWTH Aachen",
          overview: "Simulationssoftware zur Modellierung des Sphärolithwachstums bei der Kristallisation von Polymeren.",
          points: [
            "Parallelisierung der drei Hauptalgorithmen mit OpenMP und Optimierung der Speichernutzung mit std::vector und Eigen – 50 % höhere Simulations-Performance",
            "Kernentwicklerin der C++-Codebasis: Simulated Annealing und Machbarkeitsstudien für neue Funktionen",
            "Entwicklung eines Data Extractors, der Simulationsergebnisse (XML, CSV, VTK) in saubere Datensätze für die Analyse überführt"
          ],
          note: "",
          tech: ["C++", "OpenMP", "Eigen", "Python", "RapidMiner"],
          links: [
            { label: "SphaeroSim", url: "https://github.com/hkazemabad/SphaeroSim" },
            { label: "Data Extractor", url: "https://github.com/hkazemabad/SphaeroSim-DataExtractor" }
          ] }
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
      title: "Lassen Sie uns gemeinsam zuverlässige Systeme entwickeln.",
      text: "Ich bin offen für Positionen in Software-, Backend-, Cloud- und KI-Engineering sowie Application Modernization in Deutschland. Am schnellsten erreichen Sie mich per E-Mail oder LinkedIn.",
      copy: "E-Mail kopieren",
      copied: "Kopiert!"
    },

    footer: { rights: "Alle Rechte vorbehalten.", built: "Erstellt mit HTML · CSS · JavaScript · Gehostet auf GitHub Pages" }
  }
};
