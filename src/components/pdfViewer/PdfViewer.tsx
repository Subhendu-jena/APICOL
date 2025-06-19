import React, { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    pdfjsLib: any;
  }
}

interface PdfViewerProps {
  fileUrl: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ fileUrl }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [pdf, setPdf] = useState<any>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>(window.innerWidth);
const containerRef = useRef<HTMLDivElement | null>(null);
  // Resize listener
  useEffect(() => {
    const handleResize = () => setContainerWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Load PDF.js
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
    script.onload = () => {
      const loadingTask = window.pdfjsLib.getDocument(fileUrl);
      loadingTask.promise.then((loadedPdf: any) => {
        setPdf(loadedPdf);
        setNumPages(loadedPdf.numPages);
        renderPage(loadedPdf, pageNumber, containerWidth);
      });
    };
    document.body.appendChild(script);
  }, [fileUrl]);

  // Re-render page on resize
  useEffect(() => {
    if (pdf) {
      renderPage(pdf, pageNumber, containerWidth);
    }
  }, [containerWidth]);

const renderPage = (pdfDoc: any, pageNum: number, maxWidth: number) => {
  pdfDoc.getPage(pageNum).then((page: any) => {
    const unscaledViewport = page.getViewport({ scale: 1 });
    const scale = maxWidth / unscaledViewport.width;
    const viewport = page.getViewport({ scale });

    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    if (canvas && context) {
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      page.render({ canvasContext: context, viewport }).promise.then(() => {
        containerRef.current?.scrollIntoView({ behavior: 'smooth' });
      });
    }
  });
};


  const goToPage = (offset: number) => {
    const newPage = pageNumber + offset;
    if (pdf && newPage >= 1 && numPages && newPage <= numPages) {
      setPageNumber(newPage);
      renderPage(pdf, newPage, containerWidth);
    }
  };

  return (
    <div style={{ textAlign: 'center' }} ref={containerRef}>
      <canvas ref={canvasRef} style={{ width: '100%', height: 'auto' }} />
      <div style={{ marginTop: '1rem' }}>
        <button onClick={() => goToPage(-1)} disabled={pageNumber <= 1}>
          ← Prev
        </button>
        <span style={{ margin: '0 1rem' }}>
          Page {pageNumber} of {numPages ?? '--'}
        </span>
        <button onClick={() => goToPage(1)} disabled={numPages !== null && pageNumber >= numPages}>
          Next →
        </button>
      </div>
    </div>
  );
};

export default PdfViewer;
