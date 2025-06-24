import React, { useState, useEffect, useRef } from 'react';
import { formatDate } from '../../variables/menu/utils';

interface VideoItem {
  id: string;
  title: string;
  thumbnail: string;
  publishTime:string;
}

interface YouTubePlayerProps {
  apiKey: string;
  channelId: string;
  initialVideoId?: string;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ apiKey, channelId, initialVideoId }) => {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const errorVideos =[
  {
    id: '8M3R15Ku6c8',
    title: 'Agri & Food Processing Industry in Odisha 2025',
    publishTime: '2025-01-30T12:58:28Z',
    thumbnail: 'https://i.ytimg.com/vi/8M3R15Ku6c8/default.jpg'
  },
  {
    id: 'My5ckTnSyzY',
    title: 'Bio Fertilizer Unit by Krushna Chandra Nayak at Nabarangpur',
    publishTime: '2025-01-19T09:50:17Z',
    thumbnail: 'https://i.ytimg.com/vi/My5ckTnSyzY/default.jpg'
  },
  {
    id: 'RVi9a2Wvcf8',
    title: 'EC Broiler Firm by Pragyan Paramita Mishra at Cuttack',
    publishTime: '2025-01-19T09:48:41Z',
    thumbnail: 'https://i.ytimg.com/vi/RVi9a2Wvcf8/default.jpg'
  },
  {
    id: 'plR8Y92NTs8',
    title: 'Commercial Fruit Plantation by Nibedita Khatua at Nayagarh',
    publishTime: '2025-01-19T09:48:05Z',
    thumbnail: 'https://i.ytimg.com/vi/plR8Y92NTs8/default.jpg'
  },
  {
    id: 'zCagNtbhuqo',
    title: 'Mushroom Spawn Production Unit by Manorama Dehury at Dhenkanal',
    publishTime: '2025-01-19T09:49:41Z',
    thumbnail: 'https://i.ytimg.com/vi/zCagNtbhuqo/default.jpg'
  },
  {
    id: 'dBLp0HJ2vl0',
    title: 'Commercial Poultry Firm by Amit Panda in Kalahandi',
    publishTime: '2024-12-23T07:40:44Z',
    thumbnail: 'https://i.ytimg.com/vi/dBLp0HJ2vl0/default.jpg'
  },
  {
    id: 'f_DOKrJ3Ua8',
    title: 'Commercial Goatary Firm by Usharani Mohanta in Keonjhar',
    publishTime: '2024-12-23T07:39:33Z',
    thumbnail: 'https://i.ytimg.com/vi/f_DOKrJ3Ua8/default.jpg'
  },
  {
    id: 'ADpLnHwYfUg',
    title: 'Integrated Farming (Dairy and Milk Processing Unit) by Kiranbala Sahu in Keonjhar',
    publishTime: '2024-12-23T07:36:26Z',
    thumbnail: 'https://i.ytimg.com/vi/ADpLnHwYfUg/default.jpg'
  },
  {
    id: 'xMlu0GnDg4Q',
    title: 'Integrated Farming (Organic Dragon Fruit and Fishery) by Putta Muralikrishna in Sambalpur',
    publishTime: '2024-12-23T07:37:31Z',
    thumbnail: 'https://i.ytimg.com/vi/xMlu0GnDg4Q/default.jpg'
  },
  {
    id: 'Ar48SyX6PXY',
    title: 'Agro Service Centre by Pramodini Pradhan in Balangir',
    publishTime: '2024-12-23T07:33:54Z',
    thumbnail: 'https://i.ytimg.com/vi/Ar48SyX6PXY/default.jpg'
  },
  {
    id: '7saRKE5QCSw',
    title: 'Animal Feed Plant by Prashant Mohanty in Balasore',
    publishTime: '2024-12-23T07:35:14Z',
    thumbnail: 'https://i.ytimg.com/vi/7saRKE5QCSw/default.jpg'
  },
  {
    id: 'YDi_k4ru2Nc',
    title: 'Lemon Grass Oil extraction unit by Rebati Muduli in Dhenkanal',
    publishTime: '2024-12-21T08:24:44Z',
    thumbnail: 'https://i.ytimg.com/vi/YDi_k4ru2Nc/default.jpg'
  },
  {
    id: '3sYaznOfaxA',
    title: 'Oil Extraction Unit by Supriya Swain in Dhenkanal',
    publishTime: '2024-12-21T08:23:56Z',
    thumbnail: 'https://i.ytimg.com/vi/3sYaznOfaxA/default.jpg'
  },
  {
    id: 'kQ1jBSzUc0M',
    title: 'Commercial Floriculture Unit by Rajkumari Sahu at Jharsuguda',
    publishTime: '2024-12-16T11:31:24Z',
    thumbnail: 'https://i.ytimg.com/vi/kQ1jBSzUc0M/default.jpg'
  },
  {
    id: 'F9Tk12zPm-E',
    title: 'Agro Eco Tourism by Nirmal Chandra Pradhan in Jagatsinghpur, Odisha',
    publishTime: '2024-12-10T12:09:12Z',
    thumbnail: 'https://i.ytimg.com/vi/F9Tk12zPm-E/default.jpg'
  },
  {
    id: '7keB3_j_BHg',
    title: 'Ganjam _Animal Feed Plant_B Rameswar Patro_1080p',
    publishTime: '2024-11-21T13:32:08Z',
    thumbnail: 'https://i.ytimg.com/vi/7keB3_j_BHg/default.jpg'
  },
  {
    id: 'lGzC6lS-xsQ',
    title: 'Puri_Commercial Piggery Unit_Jhunarani Behera_1080p',
    publishTime: '2024-11-21T13:27:52Z',
    thumbnail: 'https://i.ytimg.com/vi/lGzC6lS-xsQ/default.jpg'
  },
  {
    id: 'aR2KD4Jta9E',
    title: 'Khordha_Seed Processing Plant_Sunanda Satpathy_1080p',
    publishTime: '2024-11-21T13:27:12Z',
    thumbnail: 'https://i.ytimg.com/vi/aR2KD4Jta9E/default.jpg'
  },
  {
    id: 'USL08HpbxxQ',
    title: 'Nayagarh_Commercial Fruit Plantation_Nibedita Kathua_1080p',
    publishTime: '2024-11-21T13:25:53Z',
    thumbnail: 'https://i.ytimg.com/vi/USL08HpbxxQ/default.jpg'
  },
  {
    id: '2NR-t0XuYO0',
    title: 'Gajapati_Cashew Processing Unit_R Kamala_1080p',
    publishTime: '2024-11-21T13:26:55Z',
    thumbnail: 'https://i.ytimg.com/vi/2NR-t0XuYO0/default.jpg'
  },
  {
    id: 'V7QFD70pevA',
    title: 'Ganjam_Insulated Van_Dharanidhar Behera_1080p',
    publishTime: '2024-11-21T13:25:06Z',
    thumbnail: 'https://i.ytimg.com/vi/V7QFD70pevA/default.jpg'
  },
  {
    id: 'gTLO4W0gfQs',
    title: 'Sambalpur_Integrated Farm_Putta Murali Krishna_1080p',
    publishTime: '2024-11-16T09:21:28Z',
    thumbnail: 'https://i.ytimg.com/vi/gTLO4W0gfQs/default.jpg'
  },
  {
    id: 'WO8UdFbFjKE',
    title: 'Sambalpur_Button Mushroom Unit_Abhiraj Saraf_1080p',
    publishTime: '2024-11-16T09:19:18Z',
    thumbnail: 'https://i.ytimg.com/vi/WO8UdFbFjKE/default.jpg'
  },
  {
    id: 'PFfFrla1jNg',
    title: 'Puri_Aqua Shop_Sakhilata Mohanty_1080p',
    publishTime: '2024-11-16T09:17:17Z',
    thumbnail: 'https://i.ytimg.com/vi/PFfFrla1jNg/default.jpg'
  },
  {
    id: '2Px7C1aEjpY',
    title: 'Nabarangpur_Organic Fertilizer Unit_Krushna Chandra Nayak_1080p',
    publishTime: '2024-11-16T09:15:18Z',
    thumbnail: 'https://i.ytimg.com/vi/2Px7C1aEjpY/default.jpg'
  },
  {
    id: 's9iPWnPEnVk',
    title: 'Mayurbhanj_Commercial Broiler Unit_Rudra Prakash Nayak_1080p',
    publishTime: '2024-11-16T09:13:48Z',
    thumbnail: 'https://i.ytimg.com/vi/s9iPWnPEnVk/default.jpg'
  },
  {
    id: 'WFA2pWXu4P4',
    title: 'Mayurbhanj_Bakery and Confectionary Unit_Manorama Sahu_1080p',
    publishTime: '2024-11-14T05:42:47Z',
    thumbnail: 'https://i.ytimg.com/vi/WFA2pWXu4P4/default.jpg'
  },
  {
    id: '--4XPEyxLAY',
    title: 'Khordha_Mushroom Production and Value Addition_Satyabhama Sahu_1080p',
    publishTime: '2024-11-14T05:40:57Z',
    thumbnail: 'https://i.ytimg.com/vi/--4XPEyxLAY/default.jpg'
  },
  {
    id: 'ZFAg06_Pqmo',
    title: 'Keonjhar_Integrated Farm_Kiran Bala Sahu_1080p',
    publishTime: '2024-11-14T05:40:47Z',
    thumbnail: 'https://i.ytimg.com/vi/ZFAg06_Pqmo/default.jpg'
  },
  {
    id: 'B_bfABrLEJY',
    title: 'Kalahandi_EC Broiler Farm_Amit Kumar Panda_1080p',
    publishTime: '2024-11-14T05:38:56Z',
    thumbnail: 'https://i.ytimg.com/vi/B_bfABrLEJY/default.jpg'
  },
  {
    id: 'TDuPMX_v7y8',
    title: 'Jharsuguda_Commercial Floriculture_Rajkumari Sahu_1080p',
    publishTime: '2024-11-14T05:38:42Z',
    thumbnail: 'https://i.ytimg.com/vi/TDuPMX_v7y8/default.jpg'
  },
  {
    id: 'aMtC2Wh5faM',
    title: 'Keonjhar_Commercial Goat Farming_Usharani Mohanta_1080p',
    publishTime: '2024-11-14T05:39:23Z',
    thumbnail: 'https://i.ytimg.com/vi/aMtC2Wh5faM/default.jpg'
  },
  {
    id: '5dU6Ps-MLtY',
    title: 'Jagatsinghpur_Aquashop_Umakanta Parida_1080p',
    publishTime: '2024-11-14T05:36:48Z',
    thumbnail: 'https://i.ytimg.com/vi/5dU6Ps-MLtY/default.jpg'
  },
  {
    id: 'G2ZHVcS7NCQ',
    title: 'Ganjam_Bio Floc_Sunita Jena_1080p',
    publishTime: '2024-11-14T05:34:10Z',
    thumbnail: 'https://i.ytimg.com/vi/G2ZHVcS7NCQ/default.jpg'
  },
  {
    id: 'fjT0k-DpiXU',
    title: 'Jagatsinghpur_Agro Eco Tourism_Nirmal Chandra Pradhan_1080p',
    publishTime: '2024-11-14T05:35:52Z',
    thumbnail: 'https://i.ytimg.com/vi/fjT0k-DpiXU/default.jpg'
  },
  {
    id: 'PCt-94cRQjk',
    title: 'Dhenkanal_Oil Extraction Mill_Supriya Swain_1080p',
    publishTime: '2024-11-14T05:32:34Z',
    thumbnail: 'https://i.ytimg.com/vi/PCt-94cRQjk/default.jpg'
  },
  {
    id: 'He2QjBLEIEk',
    title: 'Dhenkanal_Manorama Dehury_Mushroom Spawn Production Unit_1080p',
    publishTime: '2024-11-13T07:08:36Z',
    thumbnail: 'https://i.ytimg.com/vi/He2QjBLEIEk/default.jpg'
  },
  {
    id: 'ql6yg4Z6Y6E',
    title: 'Dhenkanal_Lemon Grass Unit_Rebati Muduli_1080p',
    publishTime: '2024-11-13T07:07:11Z',
    thumbnail: 'https://i.ytimg.com/vi/ql6yg4Z6Y6E/default.jpg'
  },
  {
    id: 'xhZ4BYfgGA4',
    title: 'Dhenkanal_Layer Unit_Choudhary Debebrata_1080p',
    publishTime: '2024-11-13T07:06:25Z',
    thumbnail: 'https://i.ytimg.com/vi/xhZ4BYfgGA4/default.jpg'
  },
  {
    id: 'PIVT9d3fttI',
    title: 'Dhenknal_Freshwater Pearl Unit_Supriya Parida_1080p',
    publishTime: '2024-11-13T07:03:17Z',
    thumbnail: 'https://i.ytimg.com/vi/PIVT9d3fttI/default.jpg'
  },
  {
    id: 'q-LytWFg5GE',
    title: 'Cuttack_EC Broiler Farm_Pragyan Paramitra Mishra_1080p',
    publishTime: '2024-11-13T07:00:28Z',
    thumbnail: 'https://i.ytimg.com/vi/q-LytWFg5GE/default.jpg'
  },
  {
    id: 'U01jvmUNiDQ',
    title: 'Boudh_Fish Seed Hatchery_Maruti Nandan Tripathy_1080p',
    publishTime: '2024-11-13T06:57:09Z',
    thumbnail: 'https://i.ytimg.com/vi/U01jvmUNiDQ/default.jpg'
  },
  {
    id: 'Xaqrn4Pg2VU',
    title: 'Bargarh_Layer Unit_Suchitra Behera_1080p',
    publishTime: '2024-11-13T06:53:09Z',
    thumbnail: 'https://i.ytimg.com/vi/Xaqrn4Pg2VU/default.jpg'
  },
  {
    id: 'y59u692IURg',
    title: 'Bargarh_Agro Service Centre_Pramodini Pradhan_1080p',
    publishTime: '2024-11-13T06:49:58Z',
    thumbnail: 'https://i.ytimg.com/vi/y59u692IURg/default.jpg'
  },
  {
    id: 'b_vl06SeuNw',
    title: 'Balasore_Animal Feed Plant_Prashant Kumar Mohanty_1080p',
    publishTime: '2024-11-13T06:45:23Z',
    thumbnail: 'https://i.ytimg.com/vi/b_vl06SeuNw/default.jpg'
  },
  {
    id: 'jG5PiSIxzUs',
    title: 'MKUY_APICOL',
    publishTime: '2024-11-05T09:40:50Z',
    thumbnail: 'https://i.ytimg.com/vi/jG5PiSIxzUs/default.jpg'
  }
]
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
          `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=50`
        );
        console.log(response,'youtubePlayer')
        if (!response.ok) {
          setVideos(errorVideos);
          throw new Error('Failed to fetch videos');
        }
        
        const data = await response.json();
        
        if (data.items) {
          const videoItems = data.items
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
  }, [apiKey, channelId, initialVideoId]);
console.log(videos,'videos')
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