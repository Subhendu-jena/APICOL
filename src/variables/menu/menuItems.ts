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
        href: paths.aboutUsManagingDirectorsMessage,
        include: true,
        target: false,
        children: [
          {
            name: "Managing Director's message",
            href: paths.aboutUsManagingDirectorsMessage,
          },
          { name: "Director's message", href: paths.aboutUsChairmansMessage },
        ],
      },
    ],
  },

  {
    name: "Schemes",
    href: "#",
    include: true,

    dropdown: [
      {
        name: "Mukhyamantri Krushi Udyog Yojana (MKUY)",
        href: "https://sugam.odisha.gov.in/website/home/scheme-list/VTJGc2RHVmtYMTl5RWZMM05wOEpUSFU0SXVUVnNoOFFPd2N6bnpSTW9yOD0%3D",
        target: true,
      },
      {
        name: "Financial assistance to Cold storages",
        href: "https://sugam.odisha.gov.in/website/home/scheme-list/VTJGc2RHVmtYMTl5RWZMM05wOEpUSFU0SXVUVnNoOFFPd2N6bnpSTW9yOD0%3D",
        target: true,
      },
      {
        name: "Agriculture Entrepreneurship Promotion Scheme (AEPS)",
        href: "#",
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
    name: "Model DPRs",
    href: paths.modelDpr,
    dropdown: [
      {
        name: "Mukhyamantri Krushi Udyog Yojana (MKUY)",
        href: paths.modelDprAgriculture,
        include: true,
        target: false,
        children: [
          { name: "Agriculture", href: paths.modelDprAgriculture },
          { name: "Horticulture", href: paths.modelDprHorticulture },
          { name: "AH&VS", href: paths.modelDprAHAndVS },
          { name: "Fishery", href: paths.modelDprFishery },
          { name: "Inter Sector", href: paths.modelDprInterDepartmental },
        ],
      },
    ],
  },
  {
    name: "Success Stories",
    href: paths.successStories,
    dropdown: [
      {
        name: "Coffee Table Book 2023-24",
        href: paths.successStoriesCoffeeTableBook,
      },
      {
        name: "Success Story Compendium 2024-25",
        href: paths.successStoriesCompendium,
      },
      {
        name: "Mukhyamantri Krushi Udyog Yojana (MKUY)",
        href: paths.successStoriesAgriculture,
        include: true,
        target: false,
        children: [
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
    name: "Gallery",
    href: paths.gallery,
    target: false,
    dropdown: [
      { name: "Video Gallery", href: paths.galleryVideos },

      {
        name: "Photo Gallery",
        href: paths.galleryPhotosMKUY,
        include: true,
        target: false,
        children: [
          {
            name: "Mukhyamantri Krushi Udyog Yojana (MKUY)",
            href: paths.galleryPhotosMKUY,
          },
          {
            name: "Financial Assistance to Cold Storages (FACS)",
            href: paths.galleryPhotosFACS,
          },
          {
            name: "Agri entrepreneurship Promotion Scheme (AEPS)",
            href: paths.galleryPhotosAEPS,
          },
        ],
      },
    ],
  },
  { name: "Analytics", href: paths.analytics },
  { name: "Contact Us", href: paths.contactUs },
];
