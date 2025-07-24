import React, { useState, useEffect, useRef } from 'react';
import { formatDate } from '../../variables/menu/utils';

interface VideoItem {
  id: string;
  title: string;
  thumbnail: string;
  publishTime:string;
}

interface YouTubePlayerProps {
  initialVideoId?: string;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({  initialVideoId }) => {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [currentVideo, setCurrentVideo] = useState<string>(initialVideoId || '');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const playerRef = useRef<HTMLIFrameElement>(null);
  const playlistRef = useRef<HTMLDivElement>(null);

  // Fetch videos from YouTube channel
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://grievance-ms-backend.onrender.com/api/v1/youtube/get-youtube-video`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch videos');
        }
        
        const data = await response.json();
        
        if (data.data.items) {
          const videoItems = data.data.items
            .filter((item: any) => item.id.kind === 'youtube#video')
            .map((item: any) => ({
              id: item.id.videoId,
              title: item.snippet.title,
              publishTime: item.snippet.publishTime,
              thumbnail: item.snippet.thumbnails.default.url,
            }));
          
          setVideos(videoItems);
          if (videoItems.length > 0 && !initialVideoId) {
            setCurrentVideo(videoItems[0].id);
          }
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        console.error('Error fetching YouTube videos:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [ initialVideoId]);
  const handleVideoSelect = (videoId: string) => {
    setCurrentVideo(videoId);
    if (playerRef.current) {
      playerRef.current.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&showinfo=0&autohide=1`;
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
        <strong>Error:</strong> {error}
      </div>
    );
  }

  return (
    <div className="bg-white   overflow-hidden max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row">
        {/* Video Player */}
        <div className="w-full md:w-2/3">
          <div className="relative pb-[56.25%] h-0 overflow-hidden ">
            <iframe
              ref={playerRef}
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${currentVideo}?rel=0&showinfo=0&autohide=1`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube video player"
            ></iframe>
          </div>
        </div>

        {/* Playlist */}
        <div className="w-full md:w-1/3 ">
          <div 
            ref={playlistRef}
            className="h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800"
          >
            <ul className=" text-black">
              {videos.map((video) => (
                <li 
                  key={video.id}
                  className={`hover:bg-gray-300 cursor-pointer transition ${currentVideo === video.id ? 'bg-gray-300' : ''}`}
                  onClick={() => handleVideoSelect(video.id)}
                >
                  <div className="flex p-3">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-16 h-12 object-cover rounded"
                    />
                    <div className="ml-3">
                      <p className="text-sm text-black line-clamp-2">{video.title}</p>
                      <p className="text-sm text-orange-600 line-clamp-2">{formatDate(video.publishTime)}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouTubePlayer;