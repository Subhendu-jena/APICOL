// import React from "react";
// const rawVideos = [
//   "https://www.youtube.com/embed/kpld32X_Q2o",
//   "https://youtu.be/kpld32X_Q2o?si=NMr1w2mSyXb195Ow",
//   "https://youtu.be/HTKzQ8spZ9c?si=bnh8dnCXAbVfsaRm",
//   "https://youtu.be/M8l4oUuPGpE?si=pTUoeco3fcdtEoc4",
//   "https://youtu.be/zzQdYfcU1mM?si=MWnF4NALvX-V_dIr",
//   "https://youtu.be/MW6cO2KQh6s?si=Ccl9g-KXTrRALEQz",
//   "https://youtu.be/gx0kQ1Ymfa0?si=zGERvZ27oYI5ni_0",
//   "https://youtu.be/gx0kQ1Ymfa0?si=wF3qjCheR64A8b_1",
// ];

// // Extract video ID and convert to embed URL
// const getEmbedUrl = (url: string) => {
//   const match = url.match(/(?:youtu\.be\/|embed\/|v=)([a-zA-Z0-9_-]{11})/);
//   return match ? `https://www.youtube.com/embed/${match[1]}` : null;
// };

// const embeddedVideos = rawVideos.map(getEmbedUrl).filter(Boolean);
// const VideoGallery: React.FC = () => {
//   return (
//     <div className="max-w-6xl mx-auto ">
//       {Array.from({ length: Math.ceil(embeddedVideos.length / 4) }, (_, rowIndex) => (
//         <div key={rowIndex} className="flex group h-60">
//           {embeddedVideos.slice(rowIndex * 4, rowIndex * 4 + 4).map((videoUrl, idx) => (
//             <div
//               key={idx}
//               className="flex group-hover:flex-[0.5] hover:flex-[2] transition-all duration-500 overflow-hidden"
//             >
//               <iframe
//                 src={videoUrl ?? ''}
//                 title={`video-${rowIndex * 4 + idx}`}
//                 className="w-full h-full p-[1px]"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               />
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default VideoGallery;



// import React from 'react';

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

const YOUTUBE_API_KEY = "AIzaSyCvxbB9pUGA1RjwpClXUIRmdlfUBSwNKwk";
const CHANNEL_ID = "UCQc1ctQRJayuEbCLNNZWoUw";
// interface Video {
//   id: { videoId: string };
//   snippet: {
//     title: string;
//     thumbnails: { medium: { url: string } };
//     publishedAt: string;
//   };
// }

const VideoGallery: React.FC = () => {
  // const [videos, setVideos] = useState<Video[]>([]);

  // useEffect(() => {
  //   fetch(
  //     `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=10`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setVideos(data.items || []))
  //     .catch((err) => console.error("Failed to fetch videos", err));
  // }, []);

  // if (!videos.length) return <p className="p-4">Loading videos...</p>;

  // const featured = videos[0]; // Most recent
  // const others = videos.slice(1); // Remaining videos

  return (
    // <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
    //   {/* Featured video */}
    //   <div className="md:col-span-2 w-full ">
    //     <div className="aspect-w-16 aspect-h-9">
    //       <iframe
    //         src={`https://www.youtube.com/embed/${featured.id.videoId}`}
    //         title={featured.snippet.title}
    //         frameBorder="0"
    //         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //         allowFullScreen
    //         className="w-full h-[500px] rounded-lg"
    //       />
    //     </div>
    //     <h2 className="text-lg font-semibold mt-2">{featured.snippet.title}</h2>
    //     <p className="text-sm text-gray-500">
    //       {new Date(featured.snippet.publishedAt).toLocaleDateString()}
    //     </p>
    //   </div>

    //   {/* List of other videos */}
    //   <div className="space-y-4 line-clamp-5 h-[500px] overflow-scroll">
    //     {others.map((video, idx) => (
    //       <a
    //         key={idx}
    //         href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         className="flex items-start space-x-2 hover:bg-gray-100 p-2 rounded"
    //       >
    //         <img
    //           src={video.snippet.thumbnails.medium.url}
    //           alt={video.snippet.title}
    //           className="w-28 h-auto rounded"
    //         />
    //         <div className="flex-1">
    //           <h3 className="text-sm font-medium">{video.snippet.title}</h3>
    //           <p className="text-xs text-gray-500">
    //             {new Date(video.snippet.publishedAt).toLocaleDateString()}
    //           </p>
    //         </div>
    //       </a>
    //     ))}
    //   </div>
    // </div>


    <div className="p-4">
      <YouTubePlayer 
        apiKey={YOUTUBE_API_KEY} 
        channelId={CHANNEL_ID} 
      />
    </div>
  );
};

export default VideoGallery
