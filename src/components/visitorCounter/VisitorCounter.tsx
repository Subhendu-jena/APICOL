import { Users } from "lucide-react";
import React, { useEffect, useState } from "react";

const VisitorCounter: React.FC = () => {
  const [visits, setVisits] = useState<number | null>(null);
  const api_url = import.meta.env.VITE_API_URL;
    useEffect(() => {
    const recordVisit = async () => {
      try {
        const res = await fetch(`${api_url}/api/v1/visiter/count`);
        const data = await res.json();
        setVisits(data.totalVisitors);
      } catch (err) {
        console.error("Failed to fetch visitor count:", err);
      }
    };

    recordVisit();
  }, []);

  const formatVisitorCount = (count: number): string => {
    return count.toString().padStart(6, "0");
  };

  return (
    <div className="text-white mt-5 flex gap-2 items-center mx-auto">
      <Users />
      <span>Total visits:</span>
      {visits !== null ? (
        <span className="font-mono font-bold tracking-widest bg-white text-black px-3 rounded-md">
          {formatVisitorCount(visits)}
        </span>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
};

export default VisitorCounter;
