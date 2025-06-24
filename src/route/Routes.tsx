// AppRoutes.tsx or Routes.tsx
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { paths } from "./path";
import PrimeLayout from "../components/layout/PrimeLayout";
import logo from "../assets/logos/APICOL-Logo.png";
const Home = lazy(() => import("../pages/home/Home"));
const AboutUs = lazy(() => import("../pages/about/AboutsUs"));
const BoardOfDirectors = lazy(() => import("../pages/about/BoardOfDirectors"));
const Organogram = lazy(() => import("../pages/about/Organogram"));
const ManagingDirectorsMessage = lazy(
  () => import("../pages/about/ManagingDirectorsMessage")
);
const ChairmansMessage = lazy(() => import("../pages/about/ChairmansMessage"));
const CoffeeTableBook = lazy(
  () => import("../pages/successStories/CoffeeTableBook")
);
const Compendium = lazy(() => import("../pages/successStories/Compendium"));
const Agriculture = lazy(() => import("../pages/successStories/Agriculture"));
const StudyReports = lazy(() => import("../pages/reports/StudyReports"));
const AnnualReports = lazy(() => import("../pages/reports/AnnualReports"));
const DPRAgriculture = lazy(() => import("../pages/modelDpr/DPRAgriculture"));
const DPRHorticulture = lazy(() => import("../pages/modelDpr/DPRHorticulture"));
const DPRAHandVS = lazy(() => import("../pages/modelDpr/DPRAHandVS"));
const DPRFishery = lazy(() => import("../pages/modelDpr/DPRFishery"));
const ContactUs = lazy(() => import("../pages/contactUs/ContactUs"));
const DDH = lazy(() => import("../pages/contactUs/DFO"));
const Events = lazy(() => import("../components/events/Events"));
const Notification = lazy(
  () => import("../components/notification/Notification")
);
const Recruitment = lazy(() => import("../components/recruitment/Recruitment"));
const ImageGallery = lazy(() => import("../components/Home/ImageGallery"));
const VideoGallery = lazy(() => import("../components/Home/VideoGallery"));
const Tender = lazy(() => import("../components/Tender/Tender"));
const ComingSoon = lazy(() => import("../components/comingSoon/ComingSoon"));
const RedirectNotice = lazy(
  () => import("../components/redirectNotice/RedirectNotice")
);
const NotFound = lazy(() => import("../components/errorHandling/NotFound"));

const AppRoutes: React.FC = () => {
  return (
    <>
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full p-1 border-4 border-blue-500">
              <div className="rounded-full overflow-hidden w-20 h-20">
                <img
                  src={logo}
                  alt="Loading"
                  className="w-full h-full object-cover animate-none"
                />
              </div>
            </div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<PrimeLayout />}>
            <Route index element={<Home />} />

            <Route path={paths.aboutUs} element={<AboutUs />} />
            <Route path={paths.aboutUsAboutApicol} element={<AboutUs />} />
            <Route
              path={paths.aboutUsBoardOfDirectors}
              element={<BoardOfDirectors />}
            />
            <Route path={paths.aboutUsOrganogram} element={<Organogram />} />
            <Route
              path={paths.aboutUsMessage}
              element={<ManagingDirectorsMessage />}
            />
            <Route
              path={paths.aboutUsChairmansMessage}
              element={<ChairmansMessage />}
            />
            <Route
              path={paths.aboutUsManagingDirectorsMessage}
              element={<ManagingDirectorsMessage />}
            />

            {/* <Route path="schemes" element={<SchemesHome />} /> */}
            <Route path={paths.schemes} element={<ComingSoon />} />
            <Route
              path={paths.schemesMukhyamantriKrushiUdyogYojanaMkuy}
              element={<RedirectNotice />}
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
            <Route path={paths.successStories} element={<CoffeeTableBook />} />
            <Route
              path={paths.successStoriesCoffeeTableBook}
              element={<CoffeeTableBook />}
            />
            <Route
              path={paths.successStoriesCompendium}
              element={<Compendium />}
            />
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
            <Route
              path={paths.successStoriesFishery}
              element={<ComingSoon />}
            />
            <Route
              path={paths.successStoriesIntegratedFarming}
              element={<ComingSoon />}
            />
            <Route path={paths.reports} element={<AnnualReports />} />
            <Route
              path={paths.reportsAnnualReports}
              element={<AnnualReports />}
            />
            <Route
              path={paths.reportsStudyReports}
              element={<StudyReports />}
            />

            <Route path={paths.modelDpr} element={<DPRAgriculture />} />
            <Route
              path={paths.modelDprMukhyamantriKrushiUdyogYojana}
              element={<ComingSoon />}
            />
            <Route
              path={paths.modelDprAgriculture}
              element={<DPRAgriculture />}
            />
            <Route
              path={paths.modelDprHorticulture}
              element={<DPRHorticulture />}
            />
            <Route path={paths.modelDprAHAndVS} element={<DPRAHandVS />} />
            <Route path={paths.modelDprFishery} element={<DPRFishery />} />
            <Route
              path={paths.modelDprInterDepartmental}
              element={<ComingSoon />}
            />

            <Route path={paths.downloads} element={<ComingSoon />} />
            <Route path={paths.downloadsModelDpr} element={<ComingSoon />} />
            <Route
              path={paths.downloadsBriefProjectProfile}
              element={<ComingSoon />}
            />
            <Route
              path={paths.downloadsPresentations}
              element={<ComingSoon />}
            />
            <Route
              path={paths.downloadsTechnicalInfo}
              element={<ComingSoon />}
            />
            <Route path={paths.downloadsMobileApps} element={<ComingSoon />} />
            <Route
              path={paths.downloadsDistrictManagers}
              element={<ComingSoon />}
            />
            <Route
              path={paths.downloadsNodalOfficers}
              element={<ComingSoon />}
            />
            <Route
              path={paths.downloadsBlockOfficers}
              element={<ComingSoon />}
            />
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
          <Route path="apicol" element={<DDH />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRoutes;
