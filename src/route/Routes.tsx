// AppRoutes.tsx or Routes.tsx
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { paths } from "./path";
import PrimeLayout from "../components/layout/PrimeLayout";
import logo from "../assets/logos/APICOL-Logo.png";
import Horticulture from "../pages/successStories/Horticulture";
import AnimalResource from "../pages/successStories/AnimalResource";
import Fishery from "../pages/successStories/Fishery";
import IntegratedFarming from "../pages/successStories/IntegratedFarming";
import CentralGallery from "../pages/gallery/CentralGallery";
import CentralGallery2 from "../pages/gallery/CentralGallery2";
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
const Events = lazy(() => import("../components/events/Events"));
const Notification = lazy(
  () => import("../components/notification/Notification")
);
const Recruitment = lazy(() => import("../components/recruitment/Recruitment"));
const VideoGallery = lazy(() => import("../components/Home/VideoGallery"));
const Tender = lazy(() => import("../components/Tender/Tender"));
const ComingSoon = lazy(() => import("../components/comingSoon/ComingSoon"));
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
            {/* Home */}
            <Route index element={<Home />} />
            {/* About Us */}
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
            {/* Notice */}
            <Route path={paths.notice} element={<Events />} />
            <Route path={paths.events} element={<Events />} />
            <Route path={paths.notification} element={<Notification />} />
            <Route path={paths.tenders} element={<Tender />} />
            <Route path={paths.recruitment} element={<Recruitment />} />
            {/* Model DPR */}
            <Route path={paths.modelDpr} element={<DPRAgriculture />} />
            <Route
              path={paths.modelDprMukhyamantriKrushiUdyogYojana}
              element={<DPRAgriculture />}
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
            {/* Success Stories */}
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
              element={<Horticulture />}
            />
            <Route
              path={paths.successStoriesAnimalResource}
              element={<AnimalResource />}
            />
            <Route path={paths.successStoriesFishery} element={<Fishery />} />
            <Route
              path={paths.successStoriesIntegratedFarming}
              element={<IntegratedFarming />}
            />
            {/* Reports */}
            <Route path={paths.reports} element={<AnnualReports />} />
            <Route
              path={paths.reportsAnnualReports}
              element={<AnnualReports />}
            />
            <Route
              path={paths.reportsStudyReports}
              element={<StudyReports />}
            />
            {/* Gallery */}
            <Route path={paths.gallery} element={<CentralGallery />} />
            <Route path={paths.galleryPhotos} element={<CentralGallery />} />
            <Route
              path={paths.galleryPhotosMKUY}
              element={<CentralGallery />}
            />
            <Route path={paths.galleryPhotosFACS} element={<CentralGallery2 />} />
            <Route path={paths.galleryPhotosAEPS} element={<ComingSoon />} />
            <Route path={paths.galleryVideos} element={<VideoGallery />} />
            {/* Analytics */}
            <Route path={paths.analytics} element={<ComingSoon />} />
            {/* Contact Us */}
            <Route path={paths.contactUs} element={<ContactUs />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRoutes;
