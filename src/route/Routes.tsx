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

const AppRoutes: React.FC = () => {
  return (
    <>
      {/* <Routes>
        <Route element={<PrimeLayout/>}>
        <Route path={paths.home} element={<Home />} />

        <Route path={paths.aboutUs} element={<CustomLayout />}>
          <Route index element={<AboutsUs />} />
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
        </Route>

        <Route path={paths.schemes} element={<CustomLayout />}>
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
        </Route>
        <Route path={paths.applyOnline} element={<CustomLayout />}>
          <Route
            path={paths.applyOnlineMukhyamantriKrushiUdyogYojanaMkuy}
            element={<ComingSoon />}
          />
          <Route
            path={paths.applyOnlineColdStorages}
            element={<ComingSoon />}
          />
          <Route path={paths.applyOnlineAeps} element={<ComingSoon />} />
          <Route path={paths.applyOnlinePmfme} element={<ComingSoon />} />
          <Route path={paths.applyOnlineAep} element={<ComingSoon />} />
        </Route>
        <Route path={paths.successStories} element={<CustomLayout />}>
          <Route
            path={paths.successStoriesAgriculture}
            element={<Agriculture />}
          />
          <Route
            path={paths.successStoriesHorticulture}
            element={<ComingSoon />}
          />
          <Route
            path={paths.successStoriesAnimalResource}
            element={<ComingSoon />}
          />
          <Route path={paths.successStoriesFishery} element={<ComingSoon />} />
          <Route
            path={paths.successStoriesIntegratedFarming}
            element={<ComingSoon />}
          />
        </Route>
        <Route path={paths.reports} element={<CustomLayout />}>
          <Route path={paths.reportsAnnualReports} element={<ComingSoon />} />
          <Route path={paths.reportsStudyReports} element={<ComingSoon />} />
        </Route>
        <Route path={paths.notice} element={<CustomLayout />}></Route>
        <Route path={paths.downloads} element={<CustomLayout />}>
          <Route path={paths.downloadsModelDpr} element={<ComingSoon />} />
          <Route
            path={paths.downloadsBriefProjectProfile}
            element={<ComingSoon />}
          />
          <Route path={paths.downloadsPresentations} element={<ComingSoon />} />
          <Route path={paths.downloadsTechnicalInfo} element={<ComingSoon />} />
          <Route path={paths.downloadsMobileApps} element={<ComingSoon />} />
          <Route
            path={paths.downloadsDistrictManagers}
            element={<ComingSoon />}
          />
          <Route path={paths.downloadsNodalOfficers} element={<ComingSoon />} />
          <Route path={paths.downloadsBlockOfficers} element={<ComingSoon />} />
          <Route path={paths.downloadsSuppliers} element={<ComingSoon />} />
          <Route path={paths.downloadsBankers} element={<ComingSoon />} />
        </Route>
        <Route path={paths.entrepreneurs} element={<CustomLayout />}></Route>
        <Route path={paths.gallery} element={<CustomLayout />}>
          <Route path={paths.galleryPhotos} element={<ComingSoon />} />
          <Route path={paths.galleryVideos} element={<ComingSoon />} />
        </Route>
        </Route>
      </Routes> */}

      <Routes>
        {" "}
        <Route path="/" element={<PrimeLayout />}>
          <Route index element={<Home />} />

          {/* <Route path="about-us" element={<AboutsUs />} /> */}
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
          <Route path={paths.successStories} element={<Agriculture />} />
          <Route path={paths.successStoriesAgriculture} element={<Agriculture />} />
          <Route path={paths.successStoriesHorticulture} element={<ComingSoon />} />
          <Route path={paths.successStoriesAnimalResource} element={<ComingSoon />} />
          <Route path={paths.successStoriesFishery} element={<ComingSoon />} />
          <Route path={paths.successStoriesIntegratedFarming} element={<ComingSoon />} />
          <Route path={paths.reports} element={<ComingSoon />} />
          <Route path={paths.reportsAnnualReports} element={<ComingSoon />} />
          <Route path={paths.reportsStudyReports} element={<ComingSoon />} />
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
          <Route path={paths.notice} element={<ComingSoon />} />
          <Route path={paths.entrepreneurs} element={<ComingSoon />} />
          <Route path={paths.gallery} element={<ComingSoon />} />
          <Route path={paths.galleryPhotos} element={<ComingSoon />} />
          <Route path={paths.galleryVideos} element={<ComingSoon />} />
          <Route path={paths.contactUs} element={<ContactUs />} />
          {/* ... other schemes ... */}
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
