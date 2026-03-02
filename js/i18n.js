/* ═══════════════════════════════════════════════════════════
   i18n — Translation strings + language switcher
   ═══════════════════════════════════════════════════════════ */

const T = {
  sk: {
    // Nav
    nav_about:    'O mne',
    nav_services: 'Služby',
    nav_refs:     'Referencie',
    nav_avail:    'Dostupnosť',
    nav_contact:  'Kontakt',

    // Hero
    hero_badge: 'Otvorený pre spoluprácu',
    hero_h1a:   'Tvorím web,',
    hero_h1b:   'ktorý funguje.',
    hero_sub:   'Webové aplikácie a systémy šité na mieru. Od jednoduchých PHP stránok až po komplexné Angular + .NET riešenia.',
    hero_cta1:  'Kontaktujte ma',
    hero_cta2:  'Pozrieť referencie',

    // About
    about_label:    'O mne',
    about_h2:       'Jeden vývojár. Komplexné riešenia.',
    about_lead:     'Som freelance full-stack vývojár a zakladateľ codehero s.r.o. Špecializujem sa na tvorbu webových aplikácií na mieru.',
    about_body:     'Pracujem ako samostatný vývojár s viac ako 6 rokmi skúseností v Angular a 2 rokmi v .NET ekosystéme. Okrem vlastných projektov som spolupracoval na viacerých väčších systémoch pre štátne a komerčné inštitúcie. Materinský jazyk: slovenčina, pracovná angličtina.',
    stat_angular:   'rokov Angular',
    stat_dotnet:    'roky .NET',
    stat_projects:  'dokončených projektov',
    skills_label:   'Technológie',
    years_6:        '6+ rokov',
    years_2:        '2+ roky',
    years_exp:      'skúsenosti',

    // Services
    services_label: 'Čo ponúkam',
    services_h2:    'Služby',
    services_lead:  'Ponúkam komplexné webové riešenia od návrhu po nasadenie. Každý projekt je unikátny a pristupujem k nemu individuálne.',
    svc1_title:     'Malé weby v PHP',
    svc1_desc:      'Prezentačné a firemné weby, katalógy, rezervačné systémy. Rýchle, bezpečné a jednoduché na správu.',
    svc2_title:     'Angular + .NET aplikácie',
    svc2_desc:      'Stredne veľké SPA aplikácie s robustným backendom. TypeScript, .NET API, SQL databázy.',
    svc3_title:     'Vlastný CMS',
    svc3_desc:      'Plne prispôsobený redakčný systém bez zbytočných obmedzení. Obsah spravujete presne tak, ako potrebujete.',
    svc4_title:     'Údržba a konzultácie',
    svc4_desc:      'Aktualizácie, opravy chýb, optimalizácia výkonu a konzultácie k existujúcim projektom.',

    // References
    refs_label:   'Portfólio',
    refs_h2:      'Referencie',
    refs_lead:    'Výber projektov, na ktorých som pracoval — vlastné projekty aj práca pre klientov.',
    tab_personal: 'Vlastné projekty',
    tab_client:   'Klientske projekty',

    // Personal projects
    ref_audiolux:   'Prezentačný web pre audio a osvetľovaciu techniku. Vlastný CMS na správu produktov a obsahu.',
    ref_divadielko: 'Web pre divadielko a galériu. Plne vlastný CMS s redakčným systémom. Projekt v príprave.',
    ref_anotoki:    'Centrálny rozcestník pre vedľajšie projekty anotoki.eu — fanúšikovské a vzdelávacie weby.',
    ref_genshin:    'Fan stránka pre hru Genshin Impact s herným obsahom, návodmi a databázou postáv.',
    ref_japanese:   'Vzdelávací portál pre učenie japončiny — prototype v príprave.',
    ref_starrail:   'Fan stránka pre hru Honkai: Star Rail. V pláne.',

    // Client projects
    client1_name: 'Trenčianske vodárne a kanalizácie',
    client1_desc: 'Vývoj interných aj externých systémov pre správu vodárenských procesov. Full-stack riešenie v ASP.NET a Blazor.',
    client2_name: 'Úrad verejného zdravotníctva SR',
    client2_desc: 'Vývoj frontendu pre systémy verejného zdravotníctva v Angular.',
    client3_name: 'Centrálna Integračná Platforma',
    client3_desc: 'Rozširovanie funkcionality integračnej platformy v Talend prostredí.',
    client4_name: 'Úrad pre reguláciu elekt. komunikácií',
    client4_desc: 'Frontend Angular aplikácia pre regulačný úrad elektronických komunikácií a poštových služieb.',
    client5_name: 'Monitorovací systém pre reguláciu',
    client5_desc: 'Frontend vývoj monitorovacieho systému pre reguláciu a štátny dohľad v Angular.',
    client6_name: 'Ústav súdneho inžinierstva v Žiline',
    client6_desc: 'Frontend Angular aplikácia pre potreby Ústavu súdneho inžinierstva Žilinskej univerzity.',

    // Status labels
    status_live:    'Živé',
    status_wip:     'V príprave',
    status_planned: 'Plánované',
    link_visit:     'Navštíviť →',

    // Availability
    avail_label:      'Dostupnosť',
    avail_h2:         'Aktuálna kapacita',
    avail_lead:       'Vzhľadom na množstvo práce som momentálne otvorený pre menšie projekty.',
    avail_box_title:  'Prijímam objednávky pre malé projekty',
    avail_box_desc:   'Z dôvodu veľkého pracovného zaťaženia prijímam aktuálne projekty menšieho rozsahu — bez vlastného CMS alebo s len niekoľkými backendovými funkciami po vzájomnej dohode. Cena je dohodou.',

    // Contact
    contact_label:          'Spojme sa',
    contact_h2:             'Kontakt',
    contact_lead:           'Máte projekt? Napíšte mi a dohodneme sa.',
    contact_email_label:    'E-mail',
    contact_location_label: 'Lokalita',
    contact_location_value: 'Slovenská republika',
    contact_company_label:  'Spoločnosť',
    contact_cta_title:      'Začnime spolupracovať',
    contact_cta_desc:       'Opíšte váš projekt a ja sa ozvem čo najskôr. Každá spolupráca začína rozhovorom.',
    contact_cta_btn:        'Napísať e-mail',

    // Footer
    footer_rights: 'Všetky práva vyhradené.',
  },

  en: {
    // Nav
    nav_about:    'About',
    nav_services: 'Services',
    nav_refs:     'References',
    nav_avail:    'Availability',
    nav_contact:  'Contact',

    // Hero
    hero_badge: 'Open for collaboration',
    hero_h1a:   'I build web',
    hero_h1b:   'that works.',
    hero_sub:   'Custom web applications and systems tailored to your needs. From simple PHP sites to complex Angular + .NET solutions.',
    hero_cta1:  'Get in touch',
    hero_cta2:  'View references',

    // About
    about_label:    'About',
    about_h2:       'One developer. Complete solutions.',
    about_lead:     'I\'m a freelance full-stack developer and founder of codehero s.r.o., specializing in custom web application development.',
    about_body:     'I work as an independent developer with 6+ years of Angular experience and 2+ years in the .NET ecosystem. Beyond my own projects, I have contributed to larger systems for public and commercial institutions. Native language: Slovak, working English.',
    stat_angular:   'years Angular',
    stat_dotnet:    'years .NET',
    stat_projects:  'completed projects',
    skills_label:   'Technologies',
    years_6:        '6+ years',
    years_2:        '2+ years',
    years_exp:      'experience',

    // Services
    services_label: 'What I offer',
    services_h2:    'Services',
    services_lead:  'I provide complete web solutions from design to deployment. Every project is unique and I approach it individually.',
    svc1_title:     'Small PHP websites',
    svc1_desc:      'Presentation and business sites, catalogues, booking systems. Fast, secure and easy to manage.',
    svc2_title:     'Angular + .NET applications',
    svc2_desc:      'Medium-scale SPA applications with a robust backend. TypeScript, .NET API, SQL databases.',
    svc3_title:     'Custom CMS',
    svc3_desc:      'A fully customized content management system with no unnecessary limitations. Manage content exactly the way you need.',
    svc4_title:     'Maintenance & consulting',
    svc4_desc:      'Updates, bug fixes, performance optimization and consulting for existing projects.',

    // References
    refs_label:   'Portfolio',
    refs_h2:      'References',
    refs_lead:    'A selection of projects I\'ve worked on — personal projects and client work.',
    tab_personal: 'Personal projects',
    tab_client:   'Client projects',

    // Personal projects
    ref_audiolux:   'Presentation website for audio and lighting equipment. Custom CMS for product and content management.',
    ref_divadielko: 'Website for a theatre and gallery. Fully custom CMS with editorial system. Project in preparation.',
    ref_anotoki:    'Central hub for anotoki.eu side projects — fan and educational websites.',
    ref_genshin:    'Fan site for Genshin Impact with game content, guides and character database.',
    ref_japanese:   'Educational portal for learning Japanese — prototype in preparation.',
    ref_starrail:   'Fan site for Honkai: Star Rail. Planned.',

    // Client projects
    client1_name: 'Trenčianske vodárne a kanalizácie',
    client1_desc: 'Development of internal and external systems for water management processes. Full-stack solution in ASP.NET and Blazor.',
    client2_name: 'Public Health Authority of the SR',
    client2_desc: 'Frontend development for public health systems in Angular.',
    client3_name: 'Central Integration Platform',
    client3_desc: 'Extending functionality of the integration platform in Talend environment.',
    client4_name: 'Regulatory Authority for Electronic Comm.',
    client4_desc: 'Angular frontend application for the regulatory authority of electronic communications and postal services.',
    client5_name: 'Monitoring System for Regulation',
    client5_desc: 'Frontend development of a monitoring system for regulation and state supervision in Angular.',
    client6_name: 'Institute of Forensic Engineering Žilina',
    client6_desc: 'Angular frontend application for the Institute of Forensic Engineering at the University of Žilina.',

    // Status labels
    status_live:    'Live',
    status_wip:     'In progress',
    status_planned: 'Planned',
    link_visit:     'Visit →',

    // Availability
    avail_label:      'Availability',
    avail_h2:         'Current capacity',
    avail_lead:       'Due to high workload I am currently open for smaller projects.',
    avail_box_title:  'Accepting orders for small projects',
    avail_box_desc:   'Due to a large amount of work I am currently accepting smaller-scope projects — without a custom CMS or with only a few backend functions after mutual agreement. Price is negotiable.',

    // Contact
    contact_label:          'Let\'s connect',
    contact_h2:             'Contact',
    contact_lead:           'Have a project? Write to me and we\'ll work it out.',
    contact_email_label:    'Email',
    contact_location_label: 'Location',
    contact_location_value: 'Slovak Republic',
    contact_company_label:  'Company',
    contact_cta_title:      'Let\'s work together',
    contact_cta_desc:       'Describe your project and I will get back to you as soon as possible. Every collaboration starts with a conversation.',
    contact_cta_btn:        'Send an email',

    // Footer
    footer_rights: 'All rights reserved.',
  },
};

// ── Detect & apply language ───────────────────────────────────────────────────

let currentLang = localStorage.getItem('lang')
  || (navigator.language.startsWith('sk') ? 'sk' : 'en');

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (T[lang][key] !== undefined) el.textContent = T[lang][key];
  });

  document.getElementById('langBtn').textContent = lang === 'sk' ? 'EN' : 'SK';

  document.title = lang === 'sk'
    ? 'codehero s.r.o. — Webové aplikácie na mieru'
    : 'codehero s.r.o. — Custom Web Applications';
}
