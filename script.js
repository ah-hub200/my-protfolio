// Wait for the full page to load before running the code
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. DARK MODE TOGGLE ---
    const darkModeBtn = document.getElementById('dark-mode-toggle');
    if (darkModeBtn) {
        darkModeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            if (document.body.classList.contains('dark-theme')) {
                darkModeBtn.textContent = '☀️ Light';
            } else {
                darkModeBtn.textContent = '🌙 Dark';
            }
        });
    }

    // --- 2. BILINGUAL DICTIONARY (EN/FR) ---
    const translations = {
        "en": {
            "nav_about": "About", "nav_projects": "Projects", "nav_experience": "Experience", 
            "nav_education": "Education", "nav_skills": "Skills", "nav_contact": "Contact",
            "header_subtitle": "L2 Computer Science Student | Python Developer",
            "about_title": "About Me",
            "about_p1": "Hello, I'm Ayoub. As an L2 Computer Science student at the University of Orléans, I am passionate about software development, backend automation, and solving complex logic problems.",
            "about_p2": "Before dedicating myself fully to tech, I built my professional rigor, stress management, and sense of responsibility in demanding, high-paced environments (Auchan, KFC). Today, I combine this proven work ethic with my technical foundation in Python, C, SQL, and UNIX.",
            "about_p3": "I am actively seeking a Computer Science Apprenticeship (Alternance) starting in September 2026.",
            "proj1_title": "Featured Project: Website Health Monitor",
            "proj1_desc": "An automated Python tool designed to monitor web server uptime and analyze HTTP status codes in real-time.",
            "proj1_f1": "Multi-Channel Alerting: Engineered an automated notification system integrating Discord (Webhooks) and WhatsApp (Twilio API).",
            "proj1_f2": "Compliance & Architecture: Researched and implemented ARCEP regulations regarding A2P WhatsApp traffic routing.",
            "proj1_f3": "Security: Secured sensitive credentials and API keys using environment variables (.env).",
            "proj2_title": "Project: Personal Interactive Portfolio",
            "proj2_desc": "Designed and developed this responsive website from scratch to showcase my technical background.",
            "proj2_f1": "Dynamic UI: Implemented a persistent 'Dark Mode' toggle using JavaScript DOM manipulation.",
            "proj2_f2": "Bilingual Architecture: Engineered a dynamic English/French translation system using a JSON dictionary.",
            "proj2_f3": "UX: Integrated smooth scroll animations using the Intersection Observer API.",
            "exp_subtitle": "Retail & Customer Operations",
            "exp_p1": "Rigor & Precision: Managed high-volume financial transactions and executed high-accuracy inventory scanning.",
            "exp_p2": "Responsibility: Entrusted with store opening/closing procedures and high-paced production management.",
            "exp_p3": "Soft Skills: Demonstrated strong stress management, customer relations, and teamwork in demanding environments.",
            "edu_degree": "Computer Science Degree (Seeking Apprenticeship)",
            "edu_present": "Present",
            "edu_p1": "Academic Path: Successfully transitioned from an L1 Math & Computer Science portal into a specialized L2 Computer Science major.",
            "edu_p2": "Core IT: Algorithmics, data structures, Python, C programming, Database Foundations (SQL), and UNIX System Practice.",
            "edu_p3": "Applied Mathematics: Discrete mathematics, linear algebra, logic, and computer architecture.",
            "skill_sys_title": "🖥️ System & Architecture",
            "skill_sys_1": "Linux/UNIX: Bash scripting, CLI tools, File permissions",
            "skill_sys_2": "Hardware: Computer architecture, Boolean logic, Binary arithmetic",
            "skill_data_title": "💾 Data & Databases",
            "skill_data_1": "SQL: Relational database design, Complex queries",
            "skill_data_2": "Modeling: Entity-Relationship models (MCD/MLD)",
            "skill_prog_title": "⚙️ Programming & Logic",
            "skill_prog_1": "Languages: Python (Google Certified), C, HTML/CSS/JS",
            "skill_prog_2": "Core CS: Algorithm design, Data structures, Graph theory",
            "nav_certifications": "Certifications",
            "cert_title": "Google IT Automation with Python",
            "cert_date": "April 2026",
            "cert_p1": "Crash Course on Python: Mastered Object-Oriented Programming (OOP), complex data structures, and file manipulation.",
            "cert_p2": "Validation: Official Google certification proving production-ready Python skills.",
            "cert_btn": "View Certificate",
            "contact_email": "Email:",
            "contact_phone": "Phone:",
            "header_name": "Ayoub Hemmou",
            "header_subtitle": "Computer Science Student | Seeking Alternance Sept 2026",
            "about_text": "I am currently finishing my 1st year of Math & Computer Science at Université d'Orléans. Passionate about software engineering, I am transitioning to a specialized Tech School for my 2nd year to accelerate my professional growth. I am actively seeking a work-study contract (Alternance) starting September 2026 to apply my skills in Python, C, and Web Development to real-world projects.",
            "edu_l2_title": "2nd Year Computer Science (Seeking Alternance)",
            "edu_l2_school": "Private Tech School (Admission in Progress)",
            "edu_l2_p1": "Preparation for a Bac+2 equivalent degree (RNCP Level 5).",
            "edu_l2_p2": "Actively seeking a work-study contract (Alternance).",
            "edu_l1_title": "1st Year Math & Computer Science",
            "edu_l1_school": "Université d'Orléans",
            "edu_l1_p1": "Track: Successful transition from a Math-Info portal to a CS specialization.",
            "edu_l1_p2": "Core IT: Algorithms, Data Structures, Python, C Language, Databases (SQL), and UNIX.",
            "edu_l1_p3": "Applied Math: Discrete Mathematics, Linear Algebra, Logic, and Computer Architecture."
        },
        "fr": {
            "nav_about": "À propos", "nav_projects": "Projets", "nav_experience": "Expérience", 
            "nav_education": "Formation", "nav_skills": "Compétences", "nav_contact": "Contact",
            "header_subtitle": "Étudiant L2 Informatique | Développeur Python",
            "about_title": "À propos de moi",
            "about_p1": "Bonjour, je suis Ayoub. Étudiant en L2 Informatique à l'Université d'Orléans, je suis passionné par le développement logiciel, l'automatisation et la résolution de problèmes complexes.",
            "about_p2": "Avant de me consacrer pleinement à la tech, j'ai forgé ma rigueur professionnelle et ma résistance au stress dans des environnements exigeants (Auchan, KFC). Aujourd'hui, j'associe cette solide éthique de travail à mon socle technique en Python, C, SQL et UNIX.",
            "about_p3": "Je recherche activement une alternance en informatique pour septembre 2026.",
            "proj1_title": "Projet Phare : Website Health Monitor",
            "proj1_desc": "Outil Python automatisé conçu pour surveiller la disponibilité des serveurs web et analyser les codes d'état HTTP en temps réel.",
            "proj1_f1": "Alerte Multicanal : Intégration d'un système de notification via Discord (Webhooks) et WhatsApp (API Twilio).",
            "proj1_f2": "Conformité & Architecture : Analyse et respect des régulations de l'ARCEP pour le routage du trafic WhatsApp A2P.",
            "proj1_f3": "Sécurité : Gestion rigoureuse des identifiants et clés d'API via des variables d'environnement (.env).",
            "proj2_title": "Projet : Portfolio Interactif Personnel",
            "proj2_desc": "Conception et développement de ce site web responsif de A à Z pour mettre en valeur mon profil technique.",
            "proj2_f1": "Interface Dynamique : Implémentation d'un Mode Sombre via la manipulation du DOM en JavaScript.",
            "proj2_f2": "Système Bilingue : Création d'un système de traduction dynamique utilisant un dictionnaire JSON.",
            "proj2_f3": "UX : Intégration d'animations fluides au défilement grâce à l'API Intersection Observer.",
            "exp_subtitle": "Opérations et Service Client",
            "exp_p1": "Rigueur & Précision : Gestion autonome des flux financiers et réalisation d'inventaires avec scannage de précision.",
            "exp_p2": "Responsabilité : Prise en charge des procédures d'ouverture/fermeture et gestion de la production sous pression.",
            "exp_p3": "Savoir-être : Excellente gestion du stress, relation client et travail en équipe dans des environnements exigeants.",
            "edu_degree": "Licence Informatique (Recherche d'Alternance)",
            "edu_present": "Présent",
            "edu_p1": "Parcours : Transition réussie d'un portail L1 Math-Info vers une spécialisation en L2 Informatique.",
            "edu_p2": "Cœur Informatique : Algorithmique, structures de données, Python, Langage C, bases de données (SQL) et UNIX.",
            "edu_p3": "Mathématiques Appliquées : Mathématiques discrètes, algèbre linéaire, logique et architecture des ordinateurs.",
            "skill_sys_title": "🖥️ Système & Architecture",
            "skill_sys_1": "Linux/UNIX : Scripting Bash, ligne de commande, permissions",
            "skill_sys_2": "Hardware : Architecture des ordinateurs, logique booléenne",
            "skill_data_title": "💾 Données & Bases de Données",
            "skill_data_1": "SQL : Conception relationnelle, requêtes complexes",
            "skill_data_2": "Modélisation : Modèles Entité-Association (MCD/MLD)",
            "skill_prog_title": "⚙️ Programmation & Logique",
            "skill_prog_1": "Langages : Python (Certifié Google), C, HTML/CSS/JS",
            "skill_prog_2": "Cœur Info : Algorithmique, structures de données, théorie des graphes",
            "nav_certifications": "Certifications",
            "cert_title": "Google IT Automation with Python",
            "cert_date": "Avril 2026",
            "cert_p1": "Crash Course on Python : Maîtrise de la Programmation Orientée Objet (POO), des structures de données complexes et de la manipulation de fichiers.",
            "cert_p2": "Validation : Certification officielle Google attestant de compétences Python prêtes pour le monde de l'entreprise.",
            "cert_btn": "Voir le certificat",
            "contact_email": "Email :",
            "contact_phone": "Téléphone :",
            "header_name": "Ayoub Hemmou",
            "header_subtitle": "Étudiant en Informatique | Recherche Alternance Sept 2026",
            "about_text": "Je termine actuellement ma 1ère année de Licence Math-Informatique à l'Université d'Orléans. Passionné par le développement logiciel, j'intègre une école d'informatique pour ma 2ème année (équivalent Bac+2) afin d'accélérer ma professionnalisation. Je recherche activement une alternance pour septembre 2026 afin de mettre mes compétences (Python, C, Web) au service de projets concrets en entreprise.",
            "edu_l2_title": "2ème année d'Informatique (Recherche d'Alternance)",
            "edu_l2_school": "École d'Informatique (Admission en cours)",
            "edu_l2_p1": "Préparation d'un diplôme équivalent Bac+2 / Titre RNCP niveau 5.",
            "edu_l2_p2": "Recherche active d'un contrat d'alternance.",
            "edu_l1_title": "Licence 1 Math-Informatique",
            "edu_l1_school": "Université d'Orléans",
            "edu_l1_p1": "Parcours : Transition réussie d'un portail L1 Math-Info vers une spécialisation en Informatique.",
            "edu_l1_p2": "Cœur Informatique : Algorithmique, structures de données, Python, Langage C, bases de données (SQL) et UNIX.",
            "edu_l1_p3": "Mathématiques Appliquées : Mathématiques discrètes, algèbre linéaire, logique et architecture des ordinateurs."
        }
    };

    const langBtn = document.getElementById('lang-toggle');
    let currentLang = "en";

    if (langBtn) {
        langBtn.addEventListener('click', () => {
            currentLang = currentLang === "en" ? "fr" : "en";
            langBtn.textContent = currentLang === "en" ? "FR" : "EN";

            document.querySelectorAll('[data-key]').forEach(element => {
                const key = element.getAttribute('data-key');
                if (translations[currentLang][key]) {
                    if (element.tagName === 'STRONG' || element.tagName === 'SPAN') {
                        element.innerHTML = translations[currentLang][key]; 
                    } else {
                        element.textContent = translations[currentLang][key];
                    }
                }
            });
        });
    }

    // --- 3. SCROLL REVEAL ANIMATION ---
    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.15 });

    revealElements.forEach(el => revealOnScroll.observe(el));
});