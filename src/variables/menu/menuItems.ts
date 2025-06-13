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
        name: "Managing Director's message",
        href: paths.aboutUsManagingDirectorsMessage,
        target: false,
      },
      {
        name: "RTI",
        href: "https://rtiodisha.gov.in/pa/T1RILzIzLzgzLzE5",
        target: true,
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
        href: paths.schemesMukhyamantriKrushiUdyogYojanaMkuy,
      },
      {
        name: "Financial assistance to Cold storages",
        href: paths.schemesFinancialAssistanceToColdStorages,
      },
      {
        name: "Agriculture Entrepreneurship Promotion Scheme (AEPS)",
        href: paths.schemesAgricultureEntrepreneurshipPromotionSchemeAeps,
      },
      {
        name: "Prime Minister Formalization of Micro Food Processing Enterprises (PMFME)",
        href: paths.schemesPrimeMinisterFormalizationOfMicroFoodProcessingEnterprisesPmfme,
      },
      {
        name: "Agriculture Export Policy (AEP)",
        href: paths.schemesAgricultureExportPolicyAep,
      },
    ],
  },

  {
    name: "Apply Online",
    href: paths.applyOnline,
    dropdown: [
      {
        name: "Mukhyamantri Krushi Udyog Yojana (MKUY)",
        href: paths.applyOnlineMukhyamantriKrushiUdyogYojanaMkuy,
      },
      {
        name: "Financial assistance to Cold storages",
        href: paths.applyOnlineColdStorages,
      },
      {
        name: "Agriculture Entrepreneurship Promotion Scheme (AEPS)",
        href: paths.applyOnlineAeps,
      },
      {
        name: "Prime Minister Formalization of Micro Food Processing Enterprises (PMFME)",
        href: paths.applyOnlinePmfme,
      },
      { name: "Agriculture Export Policy (AEP)", href: paths.applyOnlineAep },
    ],
  },

  {
    name: "Success Stories",
    href: paths.successStories,
    dropdown: [
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
    ],
  },

  { name: "Notices", href: paths.notice },

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
  },

  { name: "Entrepreneur's Corner", href: paths.entrepreneurs },

  {
    name: "Gallery",
    href: paths.gallery,
    dropdown: [
      { name: "Photos", href: paths.galleryPhotos },
      { name: "Videos", href: paths.galleryVideos },
    ],
  },
];
