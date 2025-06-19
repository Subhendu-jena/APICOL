// AppRoutes.tsx or Routes.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutsUs from "../pages/about/AboutsUs";
import Home from "../pages/home/Home";
import ComingSoon from "../components/comingSoon/ComingSoon";
import BoardOfDirectors from "../pages/about/BoardOfDirectors";
import Organogram from "../pages/about/Organogram";
import ManagingDirectorsMessage from "../pages/about/ManagingDirectorsMessage";
import PrimeLayout from "../components/layout/PrimeLayout";
import { paths } from "./path";
import Agriculture from "../pages/successStories/Agriculture";
import { ContactUs } from "../pages/contactUs/ContactUs";
import ImageGallery from "../components/Home/ImageGallery";
import VideoGallery from "../components/Home/VideoGallery";
import DDH from "../pages/contactUs/DFO";
import Tender from "../components/Tender/Tender";
import Notification from "../components/notification/Notification";
import Events from "../components/events/Events";
import Recruitment from "../components/recruitment/Recruitment";
import AnnualReports from "../pages/reports/AnnualReports";
import CoffeeTableBook from "../pages/successStories/CoffeeTableBook";
import Compendium from "../pages/successStories/Compendium";
import StudyReports from "../pages/reports/StudyReports";
import DPRAgriculture from "../pages/modelDpr/DPRAgriculture";
import DPRAHandVS from "../pages/modelDpr/DPRAHandVS";
import DPRHorticulture from "../pages/modelDpr/DPRHorticulture";
import DPRFishery from "../pages/modelDpr/DPRFishery";

const AppRoutes: React.FC = () => {
  return (
    <>
      <Routes>
        {" "}
        <Route path="/" element={<PrimeLayout />}>
          <Route index element={<Home />} />

          <Route path={paths.aboutUs} element={<AboutsUs />} />
          <Route path={paths.aboutUsAboutApicol} element={<AboutsUs />} />
          <Route
            path={paths.aboutUsBoardOfDirectors}
            element={<BoardOfDirectors />}
          />
          <Route path={paths.aboutUsOrganogram} element={<Organogram />} />
          <Route
            path={paths.aboutUsManagingDirectorsMessage}
            element={<ManagingDirectorsMessage />}
          />

          {/* <Route path="schemes" element={<SchemesHome />} /> */}
          <Route path={paths.schemes} element={<ComingSoon />} />
          <Route
            path={paths.schemesMukhyamantriKrushiUdyogYojanaMkuy}
            element={<ComingSoon />}
          />
          <Route
            path={paths.schemesFinancialAssistanceToColdStorages}
            element={<ComingSoon />}
          />
          <Route
            path={paths.schemesAgricultureEntrepreneurshipPromotionSchemeAeps}
            element={<ComingSoon />}
          />
          <Route
            path={
              paths.schemesPrimeMinisterFormalizationOfMicroFoodProcessingEnterprisesPmfme
            }
            element={<ComingSoon />}
          />
          <Route
            path={paths.schemesAgricultureExportPolicyAep}
            element={<ComingSoon />}
          />
          <Route path={paths.applyOnline} element={<ComingSoon />} />
          <Route path={paths.applyOnlineMukhyamantriKrushiUdyogYojanaMkuy} element={<ComingSoon />} />
          <Route path={paths.applyOnlineColdStorages} element={<ComingSoon />} />
          <Route path={paths.applyOnlineAeps} element={<ComingSoon />} />
          <Route path={paths.applyOnlinePmfme} element={<ComingSoon />} />
          <Route path={paths.applyOnlineAep} element={<ComingSoon />} />
          <Route path={paths.successStories} element={<CoffeeTableBook />} />
          <Route path={paths.successStoriesCoffeeTableBook} element={<CoffeeTableBook />} />
          <Route path={paths.successStoriesCompendium} element={<Compendium />} />
          <Route path={paths.successStoriesAgriculture} element={<Agriculture />} />
          <Route path={paths.successStoriesHorticulture} element={<ComingSoon />} />
          <Route path={paths.successStoriesAnimalResource} element={<ComingSoon />} />
          <Route path={paths.successStoriesFishery} element={<ComingSoon />} />
          <Route path={paths.successStoriesIntegratedFarming} element={<ComingSoon />} />
          <Route path={paths.reports} element={<AnnualReports />} />
          <Route path={paths.reportsAnnualReports} element={<AnnualReports />} />
          <Route path={paths.reportsStudyReports} element={<StudyReports />} />
          
          <Route path={paths.modelDpr} element={<DPRAgriculture />} />
          <Route path={paths.modelDprMukhyamantriKrushiUdyogYojana} element={<ComingSoon />} />
          <Route path={paths.modelDprAgriculture} element={<DPRAgriculture />} />
          <Route path={paths.modelDprHorticulture} element={<DPRHorticulture />} />
          <Route path={paths.modelDprAHAndVS} element={<DPRAHandVS />} />
          <Route path={paths.modelDprFishery} element={<DPRFishery />} />
          <Route path={paths.modelDprInterDepartmental} element={<ComingSoon />} />

          <Route path={paths.downloads} element={<ComingSoon />} />
          <Route path={paths.downloadsModelDpr} element={<ComingSoon />} />
          <Route path={paths.downloadsBriefProjectProfile} element={<ComingSoon />} />
          <Route path={paths.downloadsPresentations} element={<ComingSoon />} />
          <Route path={paths.downloadsTechnicalInfo} element={<ComingSoon />} />
          <Route path={paths.downloadsMobileApps} element={<ComingSoon />} />
          <Route path={paths.downloadsDistrictManagers} element={<ComingSoon />} />
          <Route path={paths.downloadsNodalOfficers} element={<ComingSoon />} />
          <Route path={paths.downloadsBlockOfficers} element={<ComingSoon />} />
          <Route path={paths.downloadsSuppliers} element={<ComingSoon />} />
          <Route path={paths.downloadsBankers} element={<ComingSoon />} />
          <Route path={paths.notice} element={<Events />} />
          <Route path={paths.events} element={<Events />} />
          <Route path={paths.notification} element={<Notification />} />
          <Route path={paths.tenders} element={<Tender />} />
          <Route path={paths.recruitment} element={<Recruitment />} />
          <Route path={paths.entrepreneurs} element={<ComingSoon />} />
          <Route path={paths.gallery} element={<ImageGallery />} />
          <Route path={paths.galleryPhotos} element={<ImageGallery />} />
          <Route path={paths.galleryVideos} element={<VideoGallery />} />
          <Route path={paths.contactUs} element={<ContactUs />} />
        </Route>
          <Route path='apicol' element={<DDH />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
