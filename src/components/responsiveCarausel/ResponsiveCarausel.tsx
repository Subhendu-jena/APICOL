import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  id: string | number;
  content: React.ReactNode;
}

interface CarouselProps {
  slides: Slide[];
  breakpoints?: {
    xl?: number;
    lg?: number;
    md?: number;
    sm?: number;
    base?: number;
  };
}

const defaultBreakpoints = {
  xl: 3,
  lg: 3,
  md: 2,
  sm: 1,
  base: 1,
};

const ResponsiveCarousel: React.FC<CarouselProps> = ({
  slides,
  breakpoints = defaultBreakpoints,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(1);

  const updateVisibleSlides = () => {
    const width = window.innerWidth;
    if (width >= 1280) setVisibleSlides(breakpoints.xl || 3);
    else if (width >= 1024) setVisibleSlides(breakpoints.lg || 3);
    else if (width >= 768) setVisibleSlides(breakpoints.md || 2);
    else if (width >= 640) setVisibleSlides(breakpoints.sm || 1);
    else setVisibleSlides(breakpoints.base || 1);
  };

  useEffect(() => {
    updateVisibleSlides();
    window.addEventListener('resize', updateVisibleSlides);
    return () => window.removeEventListener('resize', updateVisibleSlides);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - visibleSlides : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev + visibleSlides >= slides.length ? 0 : prev + 1
    );
  };

  const visibleItems = slides.slice(
    currentSlide,
    currentSlide + visibleSlides
  );

  // Handle wrap-around
  const itemsToShow =
    visibleItems.length < visibleSlides
      ? [...visibleItems, ...slides.slice(0, visibleSlides - visibleItems.length)]
      : visibleItems;

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex transition-transform duration-700 ease-in-out" style={{ width: '100%' }}>
        {itemsToShow.map((slide) => (
          <div
            key={slide.id}
            className="w-full flex-1 px-2"
            style={{ flex: `0 0 ${100 / visibleSlides}%` }}
          >
            <div className="relative w-full h-full overflow-hidden rounded-lg shadow">
              {slide.content}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute hidden left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all md:block"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute hidden  right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all md:block"
      >
        <ChevronRight />
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full ${
              index === currentSlide
                ? 'bg-white scale-110'
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ResponsiveCarousel;
