import { Users } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const VisitorCounter: React.FC = () => {
  const [visits, setVisits] = useState<number>(0);
 
  useEffect(() => {
    const visited = localStorage.getItem('visited');
    if (!visited) {
      const currentCount = parseInt(localStorage.getItem('visit-count') || '0') + 5;
      localStorage.setItem('visit-count', currentCount.toString());
      localStorage.setItem('visited', 'true');
      setVisits(currentCount);
    } else {
      const currentCount = parseInt(localStorage.getItem('visit-count') || '0');
      setVisits(currentCount);
    }
  }, []);

  return <div className='text-white mt-5 flex gap-2 mx-auto'><Users /> Total visits : {visits}</div>;
};

export default VisitorCounter;
