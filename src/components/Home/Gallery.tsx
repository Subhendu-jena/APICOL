import React, { useState } from "react";
import Tender from "../Tender/Tender";
import Events from "../events/Events";
import Recruitment from "../recruitment/Recruitment";
import Notification from "../notification/Notification";
import SlideInFromBottom from "../animation/SlideInFromBottom";
import SlideInFromLeft from "../animation/SlideInFromLeft";
import ImageGallery from "./ImageGallery";
import VideoGallery from "./VideoGallery";

const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState("photo");

  // const gradientBackground = "bg-gradient-to-r from-[#000000] to-[#F47216]";
  // const gradientBackgroundHover =
  //   "bg-gradient-to-r from-[#000000] to-[#00A650]";

  const tabClasses = (tab: string) =>
    `w-full py-4 px-15 font-medium rounded-2xl transition-all duration-300 ${
      activeTab === tab
        ? `bg-gradient-to-r from-[#000000] to-[#00A650] text-white shadow-lg transform scale-105`
        : `bg-emerald-700  text-white shadow-lg transform scale-105 `
    }`;
  const tabs = [
    { key: "photo", label: "Photo Gallery" },
    { key: "video", label: "Video Gallery" },
    { key: "social", label: "Social Media" },
  ];

  return (
    <div className="py-5  bg-white">
      <div className="max-w-7xl mx-auto ">
        {/* Tabs */}
        <div className="flex">
          {tabs.map(({ key, label }) => (
            <SlideInFromBottom>
              <div className="justify-center mr-10">
                <button
                  key={key}
                  className={tabClasses(key)}
                  onClick={() => setActiveTab(key)}
                >
                  {label}
                </button>
                {activeTab === key && (
                  <div className="">
                    <div
                      className={`w-0 h-0  border-l-20 border-r-20 border-t-20 border-l-transparent border-r-transparent  mx-auto`}
                    ></div>
                  </div>
                )}
              </div>
            </SlideInFromBottom>
          ))}
        </div>
        {/* Tab Content */}
        <div className="w-full">
          {activeTab === "photo" && (
            <>
              <SlideInFromLeft>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <SlideInFromBottom>
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-2xl font-bold text-gray-800">
                        Photo Gallery
                      </h2>
                      <button className="text-sm font-medium text-orange-600 hover:underline">
                        View All
                      </button>
                    </div>
                  </SlideInFromBottom>
                  <ImageGallery />
                </div>
              </SlideInFromLeft>
            </>
          )}
          {activeTab === "video" && (
            <>
              {/* <SlideInFromLeft> */}
                {/* Video Gallery Section */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <SlideInFromBottom>
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-2xl font-bold text-gray-800">
                        Video Gallery
                      </h2>
                      <button className="text-sm font-medium text-orange-600 hover:underline">
                        View All
                      </button>
                    </div>
                  </SlideInFromBottom>
                  <VideoGallery />
                </div>
              {/* </SlideInFromLeft> */}
            </>
          )}
          {activeTab === "social" && <Recruitment />}
          {activeTab === "notification" && <Notification />}
        </div>
      </div>
    </div>
  );
};

export default Gallery;






// import { useState,useEffect } from "react";
// import ScrollAnimate from '../components/ScrollAnimate';

// export default function GalleryAndSocialSection() {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [selectedVideo, setSelectedVideo] = useState(null);
//   const [galleryType, setGalleryType] = useState("photo");
//   const [socialPlatform, setSocialPlatform] = useState("Instagram");

//   const photos = [
//     { src: "/plant1.png", title: "Farmer Training" },
//     { src: "/farmer.jpg", title: "Irrigation Tools" },
//     { src: "/sus.jpg", title: "Market Access" },
//     { src: "/women.jpg", title: "Organic Farming" },
//     { src: "/plant.jpg", title: "Market Access" },
//     { src: "/plant1.png", title: "Organic Farming" },
//   ];

//   const videos = [
//     {
//       src: "https://www.youtube.com/embed/kpld32X_Q2o",
//       title: "Success Story",
//     },
//     {
//       src: "https://www.youtube.com/embed/kpld32X_Q2o",
//       title: "Modern Farming",
//     },
//     {
//       src: "https://www.youtube.com/embed/kpld32X_Q2o",
//       title: "Training Recap",
//     },
//     {
//       src: "https://www.youtube.com/embed/kpld32X_Q2o",
//       title: "Success Story",
//     },
//     {
//       src: "https://www.youtube.com/embed/kpld32X_Q2o",
//       title: "Modern Farming",
//     },
//     {
//       src: "https://www.youtube.com/embed/kpld32X_Q2o",
//       title: "Training Recap",
//     },
//     {
//       src: "https://www.youtube.com/embed/kpld32X_Q2o",
//       title: "Success Story",
//     },
//     {
//       src: "https://www.youtube.com/embed/kpld32X_Q2o",
//       title: "Modern Farming",
//     },
//     {
//       src: "https://www.youtube.com/embed/kpld32X_Q2o",
//       title: "Training Recap",
//     },
//   ];

//     const socialEmbeds = {
//     Instagram: {
//       embedUrl: "https://www.instagram.com/apicolodisha/embed",
//        fallbackUrl: "https://www.instagram.com/apicolodisha/"
//     },
//     Facebook: {
//       embedUrl: "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fapicolodisha&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId",
//       fallbackUrl: "https://www.facebook.com/apicolodisha/"
//     },
//     X: {
//       embedUrl: "https://platform.twitter.com/widgets.js",
//       handle: "APICOLBBSR",
//       fallbackUrl: "https://x.com/APICOLBBSR"
//     }
//   };

//   useEffect(() => {
//     // Load Twitter widgets script when X platform is selected
//     if (socialPlatform === "X") {
//       const script = document.createElement("script");
//       script.src = "https://platform.twitter.com/widgets.js";
//       script.async = true;
//       document.body.appendChild(script);
      
//       return () => {
//         document.body.removeChild(script);
//       };
//     }
//   }, [socialPlatform]);

//   const renderInstagramFeed = () => (
//     <div className="h-full">
//       <iframe
//         src={socialEmbeds.Instagram.embedUrl}
//         width="100%"
//         height="100%"
//         frameBorder="0"
//         scrolling="yes"
//         allowTransparency="true"
//         className="rounded-lg"
//         title="Instagram Feed"
//         onError={() => {
//           // Fallback: redirect to Instagram page
//           window.open(socialEmbeds.Instagram.fallbackUrl, '_blank');
//         }}
//       />
//     </div>
//   );

//   const renderFacebookFeed = () => (
//     <div className="h-full">
//       <iframe
//         src={socialEmbeds.Facebook.embedUrl}
//         width="100%"
//         height="100%"
//         style={{ border: 'none', overflow: 'hidden' }}
//         scrolling="yes"
//         frameBorder="0"
//         allowTransparency="true"
//         allow="encrypted-media"
//         className="rounded-lg"
//         title="Facebook Feed"
//         onError={() => {
//           // Fallback: redirect to Facebook page
//           window.open(socialEmbeds.Facebook.fallbackUrl, '_blank');
//         }}
//       />
//     </div>
//   );

//   const renderXFeed = () => (
//     <div className="h-full overflow-auto">
//       <a 
//         className="twitter-timeline" 
//         data-height="450"
//         data-theme="light"
//         data-chrome="noheader nofooter noborders transparent"
//         href={`https://twitter.com/${socialEmbeds.X.handle}?ref_src=twsrc%5Etfw`}
//       >
//         Tweets by {socialEmbeds.X.handle}
//       </a>
      
//       {/* Fallback link */}
//       <div className="mt-4 text-center">
//         <a 
//           href={socialEmbeds.X.fallbackUrl}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-blue-500 hover:text-blue-700 underline"
//         >
//           View @{socialEmbeds.X.handle} on X →
//         </a>
//       </div>
//     </div>
//   );

//   const renderAlternativeFeed = () => (
//     <div className="h-full flex flex-col items-center justify-center text-center p-6">
//       <div className="mb-4">
//         <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
//           <span className="text-2xl">
//             {socialPlatform === "Instagram" ? "📷" : 
//              socialPlatform === "Facebook" ? "👥" : "🐦"}
//           </span>
//         </div>
//         <h4 className="text-lg font-semibold text-gray-700 mb-2">
//           Follow us on {socialPlatform}
//         </h4>
//         <p className="text-gray-600 mb-4">
//           Stay updated with our latest agricultural initiatives and farmer empowerment programs.
//         </p>
//       </div>
      
//       <a
//         href={
//           socialPlatform === "Instagram" ? socialEmbeds.Instagram.fallbackUrl :
//           socialPlatform === "Facebook" ? socialEmbeds.Facebook.fallbackUrl :
//           socialEmbeds.X.fallbackUrl
//         }
//         target="_blank"
//         rel="noopener noreferrer"
//         className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200"
//       >
//         Visit {socialPlatform} Page →
//       </a>
      
//       <div className="mt-6 text-sm text-gray-500">
//         <p>Latest updates • Farmer stories • Agricultural news</p>
//       </div>
//     </div>
//   );

//   const renderFeed = () => {
//     // Try to render the actual social media embed
//     // If embeds don't work due to CORS or other restrictions, show alternative
//     try {
//       switch (socialPlatform) {
//         case "Instagram":
//           return renderInstagramFeed();
//         case "Facebook":
//           return renderFacebookFeed();
//         case "X":
//           return renderXFeed();
//         default:
//           return renderAlternativeFeed();
//       }
//     } catch (error) {
//       console.log("Social media embed error:", error);
//       return renderAlternativeFeed();
//     }
//   };

//  return (
//     <section className="relative py-16 bg-white bg-cover bg-center" style={{ backgroundImage: `url('/bgf1.png')` }}>
//       <div className="container mx-auto px-4">
//         {/* Title */}
//         <ScrollAnimate className="text-center mb-10 animate-fade-in">
//           <h2 className="text-3xl font-bold text-gray-800 mb-2">Gallery & Social</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Visual insights and the latest updates from APICOL's official channels.
//           </p>
//         </ScrollAnimate>

//         {/* Two Columns */}
//         <div className="grid md:grid-cols-2 gap-12">
//         <ScrollAnimate className="animate-slide-in-left">
//           {/* Social Media Section */}
//           <div>
//             <div className="mb-4 flex gap-1">
//         {["Instagram", "Facebook", "X"].map((platform) => (
//           <button
//             key={platform}
//             onClick={() => setSocialPlatform(platform)}
//             className={`px-3 py-2 rounded-md font-medium transition-colors duration-200 ${
//               socialPlatform === platform
//                 ? "bg-green-600 text-white"
//                 : "bg-gray-100 text-gray-700 hover:bg-green-100"
//             }`}
//           >
//             {platform === "Instagram" && "📷"} 
//             {platform === "Facebook" && "👥"} 
//             {platform === "X" && "🐦"} 
//             {platform}
//           </button>
//         ))}
//       </div>
//           </div>
    
//       <div className="border rounded-lg bg-white shadow-inner overflow-hidden">
//         <div className="bg-gradient-to-r from-green-50 to-green-100 px-4 py-3 border-b">
//           <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
//             <span>
//               {socialPlatform === "Instagram" ? "📷" : 
//                socialPlatform === "Facebook" ? "👥" : "🐦"}
//             </span>
//             Latest on {socialPlatform}
//           </h3>
//         </div>
        
//         <div className="h-96">
//           {renderFeed()}
//         </div>
//       </div>
//         </ScrollAnimate>

//         <ScrollAnimate className="animate-slide-in-right">  {/* Gallery Section */}
//           <div>
//             <div className="mb-4 flex gap-2 justify-end">
//               {["photo", "video"].map((type) => (
//                 <button
//                   key={type}
//                   onClick={() => setGalleryType(type)}
//                   className={`px-4 py-2 rounded-md font-medium capitalize ${
//                     galleryType === type
//                       ? "bg-green-600 text-white"
//                       : "bg-gray-100 text-gray-700 hover:bg-green-100"
//                   }`}
//                 >
//                   {type}
//                 </button>
//               ))}
//             </div>
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
//               {(galleryType === "photo" ? photos : videos).map((item, index) => (
//                 <div
//                   key={index}
//                   onClick={() =>
//                     galleryType === "photo" ? setSelectedImage(item) : setSelectedVideo(item)
//                   }
//                   className="cursor-pointer group relative rounded-lg overflow-hidden shadow"
//                 >
//                   {galleryType === "photo" ? (
//                     <img
//                       src={item.src}
//                       alt={item.title}
//                       className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
//                     />
//                   ) : (
//                     <div className="aspect-video w-full">
//                       <iframe
//                         src={item.src}
//                         title={item.title}
//                         className="w-full h-full rounded-lg"
//                         allowFullScreen
//                       />
//                     </div>
//                   )}
//                   <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm p-2">
//                     {item.title}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           </ScrollAnimate>
//          </div>

//         {/* Image Lightbox */}
//         {selectedImage && (
//           <div
//             className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
//             onClick={() => setSelectedImage(null)}
//           >
//             <img
//               src={selectedImage.src}
//               alt={selectedImage.title}
//               className="max-w-3xl max-h-[80vh] object-contain"
//               onClick={(e) => e.stopPropagation()}
//             />
//             <button
//               className="absolute top-4 right-6 text-white text-3xl"
//               onClick={() => setSelectedImage(null)}
//             >
//               &times;
//             </button>
//           </div>
//         )}

//         {/* Video Lightbox */}
//         {selectedVideo && (
//           <div
//             className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
//             onClick={() => setSelectedVideo(null)}
//           >
//             <div className="w-full max-w-4xl aspect-video">
//               <iframe
//                 src={selectedVideo.src}
//                 title={selectedVideo.title}
//                 className="w-full h-full rounded-lg"
//                 allowFullScreen
//               />
//             </div>
//             <button
//               className="absolute top-4 right-6 text-white text-3xl"
//               onClick={() => setSelectedVideo(null)}
//             >
//               &times;
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }
