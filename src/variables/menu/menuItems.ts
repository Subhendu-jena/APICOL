import { paths } from "../../route/path";

export const menuItems = [
  { name: "Home", include: false, href: paths.home },

  {
    name: "About us",
    href: paths.aboutUs,
    include: true,
    dropdown: [
      { name: "About APICOL", href: paths.aboutUsAboutApicol },
      { name: "Board of Directors", href: paths.aboutUsBoardOfDirectors },
      { name: "Organogram", href: paths.aboutUsOrganogram },
      {
        name: "Messages",
        href: paths.aboutUsMessage,
        include: true,
        target: false,
        children: [
          {name: "Managing Director's message", href: paths.aboutUsManagingDirectorsMessage},
          {name: "Director's message", href: paths.aboutUsChairmansMessage},
        ],
      },
    ],
  },

  {
    name: "Schemes",
    href: paths.schemes,
    include: true,

    dropdown: [
      {
        name: "Mukhyamantri Krushi Udyog Yojana (MKUY)",
        href:'https://sugam.odisha.gov.in/website/home/scheme-list/VTJGc2RHVmtYMTlISnVUQkx0TDNGZnNsQlk3alVONHBMeVM0VUM1WDJiMD0%3D',
        target: true
      },
      {
        name: "Financial assistance to Cold storages",
        href: 'https://sugam.odisha.gov.in/website/home/scheme-list/VTJGc2RHVmtYMTlISnVUQkx0TDNGZnNsQlk3alVONHBMeVM0VUM1WDJiMD0%3D',
        target: true
      },
      {
        name: "Agriculture Entrepreneurship Promotion Scheme (AEPS)",
        href: paths.schemesAgricultureEntrepreneurshipPromotionSchemeAeps,
      },
    ],
  },
 {
    name: "Notices",
    href: paths.notice,
    dropdown: [
      {
        name: "Events",
        href: paths.events,
      },
      {
        name: "Notification",
        href: paths.notification,
      },
      {
        name: "Tenders",
        href: paths.tenders,
      },
      {
        name: "Recruitment",
        href: paths.recruitment,
      },
    ],
  },
  {
    name:'Model DPRs',
    href:paths.modelDpr,
    dropdown:[
      {name:'Mukhyamantri Krushi Udyog Yojana (MKUY)',href:'#'},
      {name:'Agriculture',href:paths.modelDprAgriculture},
      {name:'Horticulture',href:paths.modelDprHorticulture},
      {name:'AH&VS',href:paths.modelDprAHAndVS},
      {name:'Fishery',href:paths.modelDprFishery},
      {name:'Inter Departmental',href:paths.modelDprInterDepartmental},
    ]

  },
  {
    name: "Success Stories",
    href: paths.successStories,
    dropdown: [
      { name: "Coffee Table Book 2023-24", href: paths.successStoriesCoffeeTableBook },
      { name: "Success Story Compendium 2024-25", href: paths.successStoriesCompendium },
      { name: "Agriculture", href: paths.successStoriesAgriculture },
      { name: "Horticulture", href: paths.successStoriesHorticulture },
      {
        name: "Animal Resource Development",
        href: paths.successStoriesAnimalResource,
      },
      { name: "Fishery", href: paths.successStoriesFishery },
      {
        name: "Integrated Farming",
        href: paths.successStoriesIntegratedFarming,
      },
    ],
  },

  {
    name: "Reports",
    href: paths.reports,
    dropdown: [
      { name: "Annual Reports", href: paths.reportsAnnualReports },
      { name: "Study Reports", href: paths.reportsStudyReports },
      { name: "Enterprise Guidebook", href: "#" },
    ],
  },


  {
    name: "Downloads",
    href: paths.downloads,
    dropdown: [
      { name: "Model DPR", href: paths.downloadsModelDpr },
      {
        name: "Brief Project Profile",
        href: paths.downloadsBriefProjectProfile,
      },
      { name: "Presentations", href: paths.downloadsPresentations },
      { name: "Technical information", href: paths.downloadsTechnicalInfo },
      { name: "Mobile Apps", href: paths.downloadsMobileApps },
      {
        name: "District Managers' List",
        href: paths.downloadsDistrictManagers,
      },
      {
        name: "District Nodal Officers List",
        href: paths.downloadsNodalOfficers,
      },
      { name: "Block Level Officers List", href: paths.downloadsBlockOfficers },
      { name: "Suppliers' List", href: paths.downloadsSuppliers },
      { name: "Bankers' List", href: paths.downloadsBankers },
    ],
     target: false,

  },
  {
    name: "Gallery",
    href: paths.gallery,
    dropdown: [
      { name: "Photos", href: paths.galleryPhotos },
      { name: "Videos", href: paths.galleryVideos },
      { name: "News Clipping (Last 1 Year)", href: '#' },
      { name: "Mukhyamantri Krushi Udyog Yojana (MKUY)", href: '#' },
      // { name: "Financial Assistance to Cold Storages (FACS)", href: '#' },
      { name: "Agri entrepreneurship Promotion Scheme (AEPS)", href: '#' },
    ],
     target: false,
  },
  { name: "Analytics", href: "#" },

  // {
  //   name: "Entrepreneur's Corner",
  //   href: "https://entrepreneur-s-corner-frontend.onrender.com",
  //   target: true,
  // },
 

];
