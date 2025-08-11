// TextSizeContext.tsx
import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface TextSizeContextType {
  textSize: number;
  increase: () => void;
  decrease: () => void;
  reset: () => void;
}

const TextSizeContext = createContext<TextSizeContextType | undefined>(undefined);

interface TextSizeProviderProps {
  children: ReactNode;
}

export const TextSizeProvider: React.FC<TextSizeProviderProps> = ({ children }) => {
  const [textSize, setTextSize] = useState(16);

  const increase = () => setTextSize(prev => Math.min(prev + 2, 20));
  const decrease = () => setTextSize(prev => Math.max(prev - 2, 12));
  const reset = () => setTextSize(16);

  return (
    <TextSizeContext.Provider value={{ textSize, increase, decrease, reset }}>
      <div style={{ fontSize: `${textSize}px`, transition: 'font-size 0.3s ease' }}>
        {children}
      </div>
    </TextSizeContext.Provider>
  );
};

export const useTextSize = () => {
  const context = useContext(TextSizeContext);
  if (!context) {
    throw new Error('useTextSize must be used within a TextSizeProvider');
  }
  return context;
};
