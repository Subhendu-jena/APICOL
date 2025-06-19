import React, { useEffect, useState } from 'react';

const VisitorCounter: React.FC = () => {
  const [visits, setVisits] = useState<number>(0);

  useEffect(() => {
    const visited = localStorage.getItem('visited');
    if (!visited) {
      const currentCount = parseInt(localStorage.getItem('visit-count') || '0') + 1;
      localStorage.setItem('visit-count', currentCount.toString());
      localStorage.setItem('visited', 'true');
      setVisits(currentCount);
    } else {
      const currentCount = parseInt(localStorage.getItem('visit-count') || '0');
      setVisits(currentCount);
    }
  }, []);

  return <div className='text-white mt-5'>👁️ Total visits (this browser): {visits}</div>;
};

export default VisitorCounter;
