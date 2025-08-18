const companies = [
  {
    name: "SteelAsia",
    website: "https://www.steelasia.com/",
    founder: "Benjamin Yao",
    product: "Mini-mill rebar manufacturing",
    category: "Industrial Tech",
    year: "1965",
    knownFor: "Largest steel manufacturer in the Philippines",
    image: "imgs_ph/steelasia_logo.png"
  },
  {
    name: "XDE Logistics",
    website: "https://www.xde.com.ph/",
    founder: "Jerome S. Ibañez",
    product: "Tech-enabled logistics and warehousing",
    category: "Logistics Tech",
    year: "1988",
    knownFor: "Pioneer in integrated logistics and warehousing",
    image: "imgs_ph/xdelogistics_logo.jpg"
  },
  {
    name: "Nexus Technologies",
    website: "https://www.nexustech.com.ph/",
    founder: "Juan G. Chua",
    product: "Systems integration and IT solutions",
    category: "Enterprise IT",
    year: "1994",
    knownFor: "One of the oldest Filipino-owned IT integrators",
    image: "imgs_ph/nexustechnologies_logo.png"
  },
  {
    name: "Bayad",
    website: "https://www.bayad.com/",
    founder: "Lawrence Ferrer",
    product: "Bill payment platform",
    category: "Fintech",
    year: "1997",
    knownFor: "First electronic bill payment center in PH",
    image: "imgs_ph/bayad_logo.png"
  },
  {
    name: "Edsamail",
    website: "https://www.edsamail.com.ph/",
    founder: "EDSA People Power Commission",
    product: "Early Filipino email service",
    category: "Internet Services",
    year: "1998",
    knownFor: "First web-based email service in the Philippines",
    image: "imgs_ph/edsamail_logo.jpeg"
  },
  {
    name: "1902 Software",
    website: "https://www.1902software.com/",
    founder: "Peter Skouhus",
    product: "Web and mobile development",
    category: "Software Development",
    year: "1998",
    knownFor: "Longest-running Filipino-Danish dev firm",
    image: "imgs_ph/1902software_logo.png"
  },
  {
    name: "Chikka Messenger",
    website: "https://web.archive.org/web/20180101000000*/http://www.chikka.com",
    founder: "Dennis Mendiola",
    product: "Mobile messaging platform",
    category: "Telecom / Messaging",
    year: "2000–2018",
    knownFor: "First SMS-to-email gateway; acquired by Smart",
    image: "imgs_ph/chikkatextmessenger_logo.png"
  },
  {
    name: "Syntactics Inc.",
    website: "https://www.syntacticsinc.com/",
    founder: "Stephanie Caragos; Wilfredo Kaamiño Jr.",
    product: "Custom software and IT solutions",
    category: "Software Development",
    year: "2000",
    knownFor: "Leading Mindanao-based IT firm",
    image: "imgs_ph/syntactics_logo.png"
  },
  {
    name: "Xurpas Inc.",
    website: "https://www.xurpas.com/",
    founder: "Nico Jose Nolledo",
    product: "Mobile content and enterprise services",
    category: "Mobile Tech",
    year: "2001",
    knownFor: "First publicly listed consumer tech firm in PH",
    image: "imgs_ph/Xurpas-Logo.png"
  },
  {
    name: "Gurango Software",
    website: "https://www.gurango.com/",
    founder: "Joey Gurango",
    product: "Enterprise HR software",
    category: "Enterprise Software",
    year: "2003",
    knownFor: "Pioneer in Filipino enterprise SaaS",
    image: "imgs_ph/gurango_Software_logo.png"
  },
  {
    name: "Pointwest Technologies",
    website: "https://www.pointwest.com.ph/",
    founder: "Victoria Basinang (CTO); Filipino-led team",
    product: "IT outsourcing and analytics",
    category: "Enterprise IT",
    year: "2003",
    knownFor: "100% Filipino-owned global IT services firm",
    image: "imgs_ph/pointwet_logo.png"
  },
  {
    name: "Kimstore",
    website: "https://www.kimstore.com/",
    founder: "Kim Lato",
    product: "E-commerce for gadgets and tech",
    category: "E-commerce",
    year: "2006",
    knownFor: "First major online gadget store in PH",
    image: "imgs_ph/kimstore_new_logo.PNG"
  },
  {
    name: "MyPhone",
    website: "https://myphone.com.ph/",
    founder: "David Lim",
    product: "Filipino-branded mobile phones",
    category: "Consumer Electronics",
    year: "2007",
    knownFor: "First Filipino mobile phone brand",
    image: "imgs_ph/myphone_logo.png"
  },
  {
    name: "Rags2Riches",
    website: "https://rags2riches.ph/",
    founder: "Reese Fernandez-Ruiz",
    product: "Upcycled fashion and social enterprise",
    category: "Social Enterprise",
    year: "2007",
    knownFor: "Flagship ethical fashion brand in PH",
    image: "imgs_ph/rags2riches_logo.png"
  },
  {
    name: "Cherry Mobile",
    website: "https://www.cherrymobile.com.ph/",
    founder: "Maynard Ngu",
    product: "Affordable smartphones and tablets",
    category: "Consumer Electronics",
    year: "2008",
    knownFor: "Mass-market mobile brand with nationwide reach",
    image: "imgs_ph/cherry-mobile-logo.png"
  },
  {
    name: "TaskUs",
    website: "https://taskus.com/",
    founder: "Bryce Maddock; Jaspar Weir",
    product: "Outsourced customer experience",
    category: "BPO / Tech Services",
    year: "2008",
    knownFor: "Global BPO unicorn with PH roots",
    image: "imgs_ph/Taskus_Logo.PNG"
  },
  {
    name: "Cignal TV",
    website: "https://cignal.tv/",
    founder: "MediaQuest Holdings",
    product: "Direct-to-home satellite TV",
    category: "Media Tech",
    year: "2009",
    knownFor: "Largest DTH satellite TV provider in PH",
    image: "imgs_ph/cignal_logo.PNG"
  },
  {
    name: "PhilDev Foundation",
    website: "https://phildev.org/",
    founder: "Dado Banatao",
    product: "Tech entrepreneurship ecosystem",
    category: "Nonprofit / Tech Dev",
    year: "2010",
    knownFor: "Leading tech-for-development nonprofit",
    image: "imgs_ph/phildev_logo.png"
  },
  {
    name: "Anthill Fabric Gallery",
    website: "https://anthillfabrics.com/",
    founder: "Anya Lim",
    product: "Handwoven textiles and artisan platform",
    category: "Social Enterprise",
    year: "2010",
    knownFor: "Reviving indigenous weaving traditions",
    image: "imgs_ph/anthillfabricgallery_logo.PNG"
  },
  {
    name: "Symph",
    website: "https://symph.co/",
    founder: "Dave Overton; Albert Padin; Dan Pantinople",
    product: "Web and app development",
    category: "Software Development",
    year: "2010",
    knownFor: "Cebu-based dev firm with global clients",
    image: "imgs_ph/symph_logo.png"
  },
  {
    name: "Kalibrr",
    website: "https://kalibrr.com/",
    founder: "Paul Rivera; Dexter Ligot-Gordon; Danny Castonguay",
    product: "Full-stack hiring platform",
    category: "HR Tech / SaaS",
    year: "2012",
    knownFor: "First PH startup accepted into Y Combinator",
    image: "imgs_ph/kalibrr_logo.PNG"
  },
  {
    name: "Cloudwalk Digital",
    website: "https://cloudwalkdigital.com/",
    founder: "Bianca Medina (Ops); CWD founding team",
    product: "Digital marketing and web services",
    category: "Digital Services",
    year: "2012",
    knownFor: "Boutique digital agency with regional clients",
    image: "imgs_ph/cloudwalkDigital.png"
  },
  {
    name: "ZigZag Offshoring",
    website: "https://zigzagoffshoring.com/",
    founder: "Vince Dickson",
    product: "Remote staffing and outsourcing",
    category: "BPO / Tech Services",
    year: "2012",
    knownFor: "Flexible outsourcing for startups",
    image: "imgs_ph/zigzagoffshoring.png"
  },
  {
    name: "Voyager Innovations",
    website: "https://voyagerinnovation.com/",
    founder: "Orlando Vea",
    product: "Fintech and digital platforms",
    category: "Fintech",
    year: "2013",
    knownFor: "Parent company of Maya and other fintech tools",
    image: "imgs_ph/voyagerinnovations_logo.png"
  },
  {
    name: "Qwikwire",
    website: "https://aqwire.io/",
    founder: "Ray Refundo; Earvin Ang; Jesse Manalansan",
    product: "Cross-border billing for real estate",
    category: "Fintech / SaaS",
    year: "2013",
    knownFor: "Real estate billing platform for overseas buyers",
    image: "imgs_ph/quickwire_logo.png"
  },
  {
    name: "Medifi",
    website: "https://medifi.com/",
    founder: "Freddy Gonzalez; Jay Fajardo; Mooney Castillo; Martin Marty",
    product: "Telemedicine platform",
    category: "Health Tech",
    year: "2014–2025",
    knownFor: "First PH telemedicine platform",
    image: "imgs_ph/medifi_logo.jpg"
  },
  {
    name: "Great Deals E-commerce",
    website: "https://greatdealscorp.com/",
    founder: "Steve Sy",
    product: "E-commerce enabler for brands",
    category: "E-commerce",
    year: "2014",
    knownFor: "Largest e-commerce enabler in PH",
    image: "imgs_ph/greatdealsecommerce.png"
  },
  {
    name: "BPOSeats",
    website: "https://bposeats.com/",
    founder: "Amanda Aworuwa",
    product: "Seat leasing and outsourcing",
    category: "BPO / Tech Services",
    year: "2014",
    knownFor: "Cebu-based BPO infrastructure provider",
    image: "imgs_ph/bposeats_logo.png"
  },
  {
    name: "Satoshi Citadel Industries",
    website: "https://sci.ph/",
    founder: "John Bailon; Miguel Cuneta; Jardine Gerodias",
    product: "Crypto and blockchain services",
    category: "Fintech / Blockchain",
    year: "2014",
    knownFor: "Pioneer in PH crypto infrastructure",
    image: "imgs_ph/satoshicitadelindustries.png"
  },
  {
    name: "ABS-CBN TV Plus",
    website: "https://abs-cbn.com/",
    founder: "ABS-CBN Corp.",
    product: "Digital TV broadcast box",
    category: "Media Tech",
    year: "2015",
    knownFor: "Popularized digital TV in PH households",
    image: "imgs_ph/abscbntvplus_logo.png"
  },
  {
    name: "Menarco Development",
    website: "https://menarco.com.ph/",
    founder: "Carmen Jimenez-Ong",
    product: "Sustainable office tower design",
    category: "Architecture",
    year: "2014",
    knownFor: "First WELL-certified building in Southeast Asia",
    image: "imgs_ph/menarco_development_corporation_logo.jpg"
  },
  {
    name: "PayMaya (now Maya)",
    website: "https://maya.ph/",
    founder: "Orlando Vea",
    product: "Digital wallet and banking",
    category: "Fintech",
    year: "2015",
    knownFor: "Leading digital bank in PH",
    image: "imgs_ph/maya_logo.png"
  },
  {
    name: "Sprout Solutions",
    website: "https://sprout.ph/",
    founder: "Patrick Gentry; Alexandria Gentry",
    product: "HR and payroll automation",
    category: "Enterprise SaaS",
    year: "2015",
    knownFor: "Fast-growing HR SaaS for PH businesses",
    image: "imgs_ph/sprout-solutions-logo.png"
  },
  {
    name: "Edukasyon.ph",
    website: "https://edukasyon.ph/",
    founder: "Henry Motte-Muñoz",
    product: "Education discovery platform",
    category: "EdTech",
    year: "2015",
    knownFor: "Largest student-focused education portal",
    image: "imgs_ph/edukasyonph.png"
  },
  {
    name: "BloomSolutions",
    website: "https://bloom.solutions/",
    founder: "Luis Buenaventura; Israel Keys",
    product: "Blockchain for remittances",
    category: "Fintech / Blockchain",
    year: "2015",
    knownFor: "Blockchain-based remittance platform",
    image: "imgs_ph/bloomsolutionslogo.png"
  },
  {
    name: "Taxumo",
    website: "https://taxumo.com/",
    founder: "EJ Arboleda; Ginger Arboleda",
    product: "Online tax filing platform",
    category: "Fintech / SaaS",
    year: "2016",
    knownFor: "First self-service tax platform for freelancers",
    image: "imgs_ph/taxumo.png"
  },
  {
    name: "Zennya Health",
    website: "https://zennya.com/",
    founder: "David Foote",
    product: "On-demand health services app",
    category: "Health Tech",
    year: "2016",
    knownFor: "Uber-style health services platform",
    image: "imgs_ph/zennyahealth_logo.png"
  },
  {
    name: "AIDE App",
    website: "https://aide-app.com/",
    founder: "Paolo Bugayong; Pamela Bugayong-Donato; Dr. Patrick Bugayong",
    product: "Home healthcare services",
    category: "Health Tech",
    year: "2016",
    knownFor: "First home-based medical service app in PH",
    image: "imgs_ph/aideapp_logo.png"
  },
  {
    name: "Be Visible Media",
    website: "https://bevisiblemedia.com/",
    founder: "Dale Basilla",
    product: "SEO and digital marketing agency",
    category: "Digital Marketing",
    year: "2017",
    knownFor: "Davao-based digital marketing firm",
    image: "imgs_ph/bevisiblemedia.png"
  },
  {
    name: "Kumu",
    website: "https://kumu.ph/about/",
    founder: "Roland Ros; Rexy Dorado",
    product: "Live streaming and social media",
    category: "Media Tech",
    year: "2018",
    knownFor: "Fastest-growing Filipino social app",
    image: "imgs_ph/kumu_logo.png"
  },
  {
    name: "ChatGenie",
    website: "https://chatgenie.ph/about-us.html",
    founder: "Nico Valencia; Ragde Falcis",
    product: "Mini-apps inside Messenger and Viber",
    category: "E-commerce / SaaS",
    year: "2020",
    knownFor: "Social commerce enabler for MSMEs",
    image: "imgs_ph/chatgenie_logo.png"
  },
  {
    name: "NextPay",
    website: "https://nextpay.world/",
    founder: "Don Pansacola",
    product: "Digital banking for SMEs",
    category: "Fintech",
    year: "2020",
    knownFor: "Banking-as-a-service for small businesses",
    image: "imgs_ph/nextpay_logo.png"
  },
  {
    name: "Buildeee",
    website: "https://buildeee.com/",
    founder: "Kelson Fung",
    product: "Construction tech platform",
    category: "Civil Engineering Tech",
    year: "2020",
    knownFor: "End-to-end platform for building professionals",
    image: "imgs_ph/buildee_logo.png"
  },
  {
    name: "Twala",
    website: "https://www.twala.io/",
    founder: "Engr. Jeffrey Reyes",
    product: "Blockchain-based document signing",
    category: "Legal Tech / Blockchain",
    year: "2020",
    knownFor: "First PH blockchain e-signature platform",
    image: "imgs_ph/twala_logo.png"
  },
  {
    name: "ShipIt / ZendEase",
    website: "https://zendease.com/",
    founder: "Mel Nava (via 1Export)",
    product: "Logistics and delivery tech",
    category: "Logistics Tech",
    year: "2021",
    knownFor: "Logistics arm of 1Export for MSMEs",
    image: "imgs_ph/shipitzendease_logo.png"
  },
  {
    name: "Spark Your Designs",
    website: "https://sparkyourdesigns.com/",
    founder: "Joji Shiotsuki; Noura Maloloy-on",
    product: "Web and graphic design agency",
    category: "Creative Tech",
    year: "2024",
    knownFor: "Modular design studio with cultural focus",
    image: "imgs_ph/sparkyourdesigns_logo.png"
  },
  {
    name: "Redfox Technologies",
    website: "https://www.redfoxtechnologies.com/",
    founder: "Jocelyn Te",
    product: "Locally branded laptops and tablets",
    category: "Consumer Electronics",
    year: "2000s",
    knownFor: "First Filipino PC brand with OEM/ODM capability",
    image: "imgs_ph/redfoxtechnologies_logo.png"
  }
];
