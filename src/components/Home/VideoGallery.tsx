// const VideoGallery: React.FC = () => {
//   // const socialEmbeds = {
//   //   YouTube: {
//   //     embedUrl: "https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=UCQc1ctQRJayuEbCLNNZWoUw&key=AIzaSyCvxbB9pUGA1RjwpClXUIRmdlfUBSwNKwk", // Replace with actual ID
//   //     fallbackUrl: "https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=UCQc1ctQRJayuEbCLNNZWoUw&key=AIzaSyCvxbB9pUGA1RjwpClXUIRmdlfUBSwNKwk", // optional
//   //   },
//   // };

//   // const renderYouTubeFeed = () => (
//   //   <iframe
//   //     src={socialEmbeds.YouTube.embedUrl}
//   //     width="100%"
//   //     height="100%"
//   //     frameBorder="0"
//   //     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//   //     allowFullScreen
//   //     className="rounded-lg"
//   //     title="YouTube Video"
//   //   />
//   // );

//   return (
//     <div className="border rounded-lg bg-white shadow-inner overflow-hidden">
//       <div className="bg-gradient-to-r from-red-50 to-red-100 px-4 py-3 border-b">
//         <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
//           ▶️ Latest on YouTube
//         </h3>
//       </div>
//       {/* <div className="h-96">{renderYouTubeFeed()}</div> */}
//          <iframe
//           className="w-full h-[500px]"
//           src="https://www.youtube.com/embed?listType=playlist&list=UUQc1ctQRJayuEbCLNNZWoUw" // Replace with your channel username
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//           title="YouTube Channel Feed"
//         />
//     </div>
//   );
// };

// export default VideoGallery;




import React  from "react";
import YouTubePlayer from "./YoutubePlayer";




const VideoGallery: React.FC = () => {
 

  return (
    <div className="p-4">
      <YouTubePlayer/>
    </div>
  );
};

export default VideoGallery
