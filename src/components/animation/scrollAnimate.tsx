import { useEffect, useRef, useState } from 'react';

export default function ScrollAnimate({ children, className = '' }: any) {
  const ref = useRef<HTMLDivElement>(null); // Initialize ref with null and specify the type
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = () => {
      if (ref.current) { // Check if ref.current is not null
        const rect = ref.current.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setIsVisible(true);
          window.removeEventListener('scroll', observer);
        }
      }
    };

    observer(); // trigger once on mount
    window.addEventListener('scroll', observer);

    return () => window.removeEventListener('scroll', observer);
  }, []);

  return (
    <div ref={ref} className={`${className} transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
      }`}>
      {children}
    </div>
  );
}