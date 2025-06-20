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



import React from 'react';

const VideoGallery: React.FC = () => {
  // const socialEmbeds = {
  //   YouTube: {
  //     embedUrl: "https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=UCQc1ctQRJayuEbCLNNZWoUw&key=AIzaSyCvxbB9pUGA1RjwpClXUIRmdlfUBSwNKwk", // Replace with actual ID
  //     fallbackUrl: "https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=UCQc1ctQRJayuEbCLNNZWoUw&key=AIzaSyCvxbB9pUGA1RjwpClXUIRmdlfUBSwNKwk", // optional
  //   },
  // };

  // const renderYouTubeFeed = () => (
  //   <iframe
  //     src={socialEmbeds.YouTube.embedUrl}
  //     width="100%"
  //     height="100%"
  //     frameBorder="0"
  //     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  //     allowFullScreen
  //     className="rounded-lg"
  //     title="YouTube Video"
  //   />
  // );

  return (
    <div className="border rounded-lg bg-white shadow-inner overflow-hidden">
      <div className="bg-gradient-to-r from-red-50 to-red-100 px-4 py-3 border-b">
        <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
          ▶️ Latest on YouTube
        </h3>
      </div>
      {/* <div className="h-96">{renderYouTubeFeed()}</div> */}
         <iframe
          className="w-full h-[500px]"
          src="https://www.youtube.com/embed?listType=playlist&list=UUQc1ctQRJayuEbCLNNZWoUw" // Replace with your channel username
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube Channel Feed"
        />
    </div>
  );
};

export default VideoGallery;





// import React, { useEffect, useState } from "react";

// interface Video {
//   videoId: string;
//   title: string;
//   thumbnail: string;
//   playlistTitle: string;
// }

// const CHANNEL_ID = "UCQc1ctQRJayuEbCLNNZWoUw";
// const API_KEY = "AIzaSyCvxbB9pUGA1RjwpClXUIRmdlfUBSwNKwk";

// const YouTubeChannelPlaylists: React.FC = () => {
//   const [videos, setVideos] = useState<Video[]>([]);

//   useEffect(() => {
//     const fetchPlaylistsAndVideos = async () => {
//       try {
//         const plRes = await fetch(
//           `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${CHANNEL_ID}&maxResults=10&key=${API_KEY}`
//         );
//         const plJson = await plRes.json();

//         const allVideos: Video[] = [];
//         for (const playlist of plJson.items) {
//           const playlistId = playlist.id;
//           const playlistTitle = playlist.snippet.title;

//           const vidRes = await fetch(
//             `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=6&key=${API_KEY}`
//           );
//           const vidJson = await vidRes.json();

//           const vids = vidJson.items.map((item: any) => ({
//             videoId: item.snippet.resourceId.videoId,
//             title: item.snippet.title,
//             thumbnail: item.snippet.thumbnails.medium.url,
//             playlistTitle,
//           }));
//           allVideos.push(...vids);
//         }

//         setVideos(allVideos);
//       } catch (err) {
//         console.error("YouTube API Error", err);
//       }
//     };

//     fetchPlaylistsAndVideos();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <h1 className="text-3xl font-bold text-center mb-10">🎥 APICOL Odisha - YouTube Playlists</h1>

//       {videos.length === 0 ? (
//         <p className="text-center">Loading videos...</p>
//       ) : (
//         <div className="space-y-10">
//           {[...new Set(videos.map((v) => v.playlistTitle))].map((playlistTitle) => (
//             <div key={playlistTitle}>
//               <h2 className="text-2xl font-semibold text-gray-700 mb-4">
//                 {playlistTitle}
//               </h2>
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                 {videos
//                   .filter((v) => v.playlistTitle === playlistTitle)
//                   .map((vid) => (
//                     <div key={vid.videoId} className="group">
//                       <a
//                         href={`https://www.youtube.com/watch?v=${vid.videoId}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <img
//                           src={vid.thumbnail}
//                           alt={vid.title}
//                           className="rounded-lg shadow-lg w-full aspect-video group-hover:opacity-80 transition"
//                         />
//                         <p className="mt-2 text-sm text-gray-800 font-medium">
//                           {vid.title}
//                         </p>
//                       </a>
//                     </div>
//                   ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default YouTubeChannelPlaylists;
