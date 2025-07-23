// import React, { useEffect, useRef, useState } from "react";

// declare global {
//   interface Window {
//     pdfjsLib: any;
//   }
// }

// interface PdfViewerProps {
//   fileUrl: string;
// }

// const PdfViewer: React.FC<PdfViewerProps> = ({ fileUrl }) => {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);
//   const [pdf, setPdf] = useState<any>(null);
//   const [pageNumber, setPageNumber] = useState<number>(1);
//   const [numPages, setNumPages] = useState<number | null>(null);
//   const [containerWidth, setContainerWidth] = useState<number>(
//     window.innerWidth
//   );
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const [scale, setScale] = useState(1.0);

//   const handleZoomIn = () => setScale((s) => s + 0.2);
//   const handleZoomOut = () => setScale((s) => Math.max(s - 0.2, 0.5));
//   const handlePrint = () => window.open(fileUrl, "_blank")?.print();
//   const handleDownload = () => {
//     const a = document.createElement("a");
//     a.href = fileUrl;
//     a.download = fileUrl.split("/").pop() || "document.pdf";
//     a.click();
//   };
//   // Resize listener
//   useEffect(() => {
//     const handleResize = () => setContainerWidth(window.innerWidth);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Load PDF.js
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src =
//       "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
//     script.onload = () => {
//       const loadingTask = window.pdfjsLib.getDocument(fileUrl);
//       loadingTask.promise.then((loadedPdf: any) => {
//         setPdf(loadedPdf);
//         setNumPages(loadedPdf.numPages);
//         renderPage(loadedPdf, pageNumber, containerWidth);
//       });
//     };
//     document.body.appendChild(script);
//   }, [fileUrl]);

//   // Re-render page on resize
//   useEffect(() => {
//     if (pdf) {
//       renderPage(pdf, pageNumber, containerWidth);
//     }
//   }, [containerWidth]);

//   const renderPage = (pdfDoc: any, pageNum: number, maxWidth: number) => {
//     pdfDoc.getPage(pageNum).then((page: any) => {
//       const unscaledViewport = page.getViewport({ scale: 1 });
//       const scale = maxWidth / unscaledViewport.width;
//       const viewport = page.getViewport({ scale });

//       const canvas = canvasRef.current;
//       const context = canvas?.getContext("2d");

//       if (canvas && context) {
//         canvas.height = viewport.height;
//         canvas.width = viewport.width;

//         page.render({ canvasContext: context, viewport }).promise.then(() => {
//           containerRef.current?.scrollIntoView({ behavior: "smooth" });
//         });
//       }
//     });
//   };

//   const goToPage = (offset: number) => {
//     const newPage = pageNumber + offset;
//     if (pdf && newPage >= 1 && numPages && newPage <= numPages) {
//       setPageNumber(newPage);
//       renderPage(pdf, newPage, containerWidth);
//     }
//   };

//   return (
//     <div style={{ textAlign: "center" }} ref={containerRef}>
//       <div className="flex gap-2">
//         <button onClick={()=>{handleZoomOut(); console.log('sdhh')}}>➖ Zoom</button>
//         <button onClick={handleZoomIn}>➕ Zoom</button>
//         <button onClick={handleDownload}>⬇️ Download</button>
//         <button onClick={handlePrint}>🖨️ Print</button>
//       </div>
//       <canvas ref={canvasRef} style={{ width: "100%", height: "auto" }} />
//       <div style={{ marginTop: "1rem" }}>
        
//         <button onClick={() => goToPage(-1)} disabled={pageNumber <= 1}>
//           ← Prev
//         </button>
//         <span style={{ margin: "0 1rem" }}>
//           Page {pageNumber} of {numPages ?? "--"}
//         </span>
//         <button
//           onClick={() => goToPage(1)}
//           disabled={numPages !== null && pageNumber >= numPages}
//         >
//           Next →
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PdfViewer;





// import React, { useEffect, useRef } from 'react';

// interface PdfViewerProps {
//   src: string; // Path to PDF (e.g. /files/sample.pdf)
//   className?: string; // Optional tailwind classes
// }

// const PdfViewer: React.FC<PdfViewerProps> = ({ src, className }) => {
//   const ref = useRef<HTMLElement>(null);

//   useEffect(() => {
//     if (!window.customElements.get('pdf-viewer')) {
//       const template = document.createElement('template');
//       template.innerHTML = `
//         <iframe frameborder="0" width="100%" height="100%"></iframe>
//       `;

//       class PdfViewer extends HTMLElement {
//         constructor() {
//           super();
//           const shadowRoot = this.attachShadow({ mode: 'open' });
//           shadowRoot.appendChild(template.content.cloneNode(true));
//         }

//         static get observedAttributes() {
//           return ['src'];
//         }

//         connectedCallback() {
//           this.updateIframeSrc();
//         }

//         attributeChangedCallback(name: string) {
//           if (name === 'src') {
//             this.updateIframeSrc();
//           }
//         }

//         updateIframeSrc() {
//           const iframe = this.shadowRoot?.querySelector('iframe');
//           if (iframe) {
//             iframe.setAttribute(
//               'src',
//               `https://mozilla.github.io/pdf.js/web/viewer.html?file=${this.getAttribute('src') || ''}`
//             );
//           }
//         }
//       }

//       window.customElements.define('pdf-viewer', PdfViewer);
//     }

//     if (ref.current) {
//       ref.current.setAttribute('src', src);
//     }
//   }, [src]);
// console.log(src,'kjhdfkj')
//   return (
//     <div className={`w-full h-[90vh] ${className || ''}`}>
//       <pdf-viewer ref={ref as any}></pdf-viewer>
//     </div>
//   );
// };

// export default PdfViewer;



import React, { useState, useRef, useEffect } from 'react';
import { FileText} from 'lucide-react';

interface PdfViewerProps {
  src: string;
  title?: string;
  width?: string | number;
  height?: string | number;
  className?: string;
  showControls?: boolean;
  allowFullscreen?: boolean;
  allowDownload?: boolean;
  useCorsProxy?: boolean;
  fallbackToEmbed?: boolean;
  onLoadStart?: () => void;
  onLoadEnd?: () => void;
  onError?: (error: string) => void;
}

const PdfViewer: React.FC<PdfViewerProps> = ({
  src,
  title = 'PDF Document',
  width = '100%',
  height = 600,
  className = '',
  useCorsProxy = false,
  fallbackToEmbed = true,
  onLoadStart,
  onLoadEnd,
  onError,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [useFallback, setUseFallback] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Validate src prop and construct PDF URL
  const isValidSrc = src && src.trim() !== '';
  
  // Try to determine if the src is a relative path
  const isRelativePath = isValidSrc && !src.startsWith('http') && !src.startsWith('//');
  
  // Construct the PDF URL with optional CORS proxy
  const getPdfUrl = () => {
    if (!isValidSrc) return '';
    
    let fileUrl = src;
    
    // For relative paths, make them absolute
    if (isRelativePath) {
      fileUrl = `${window.location.origin}/${src.replace(/^\/+/, '')}`;
    }
    
    // Use CORS proxy if requested
    if (useCorsProxy) {
      fileUrl = `https://corsproxy.io/?${encodeURIComponent(fileUrl)}`;
    }
    
    return `https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(fileUrl)}`;
  };
  
  const pdfUrl = getPdfUrl();

  useEffect(() => {
    // Don't attempt to load if src is invalid
    if (!isValidSrc) {
      setIsLoading(false);
      setHasError(true);
      onError?.('No PDF source provided');
      return;
    }

    const iframe = iframeRef.current;
    if (!iframe) return;

    let timeoutId: NodeJS.Timeout;

    const handleLoad = () => {
      clearTimeout(timeoutId);
      
      // Add a small delay to check if PDF.js actually loaded successfully
      setTimeout(() => {
        try {
          // Try to access the iframe content to detect CORS errors
          const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
          if (iframeDoc) {
            setIsLoading(false);
            setHasError(false);
            setUseFallback(false);
            onLoadEnd?.();
          }
        } catch (error) {
          // CORS or other access error
          handleError();
        }
      }, 1000);
    };

    const handleError = () => {
      clearTimeout(timeoutId);
      setIsLoading(false);
      
      if (fallbackToEmbed && !useFallback) {
        setUseFallback(true);
        setHasError(false);
      } else {
        setHasError(true);
        onError?.('Failed to load PDF document - possible CORS issue');
      }
    };

    // Set a timeout to detect if PDF.js fails to load
    timeoutId = setTimeout(() => {
      handleError();
    }, 10000); // 10 second timeout

    iframe.addEventListener('load', handleLoad);
    iframe.addEventListener('error', handleError);

    // Start loading
    setIsLoading(true);
    setUseFallback(false);
    onLoadStart?.();

    return () => {
      clearTimeout(timeoutId);
      iframe.removeEventListener('load', handleLoad);
      iframe.removeEventListener('error', handleError);
    };
  }, [src, isValidSrc, fallbackToEmbed, useFallback, onLoadStart, onLoadEnd, onError]);
return (
    <div
      ref={containerRef}
      className={`relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden shadow-lg border border-gray-200 ${className} ${
        isFullscreen ? 'fixed inset-0 z-50 rounded-none' : ''
      }`}
      style={{ width, height: isFullscreen ? '100vh' : height }}
    >
      {/* Header */}
      {/* <div className="flex items-center justify-between p-4 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-red-100 rounded-lg">
            <FileText className="w-5 h-5 text-red-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 truncate max-w-xs">
              {title}
            </h3>
            <p className="text-sm text-gray-500">PDF Document</p>
          </div>
        </div>

        {showControls && (
          <div className="flex items-center gap-2">
            <button
              onClick={() => sendCommand('zoomout')}
              className={controlButtonClass}
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            
            <button
              onClick={() => sendCommand('zoomin')}
              className={controlButtonClass}
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            
            <button
              onClick={() => setUseFallback(false)}
              className={controlButtonClass}
              title="Retry with PDF.js"
            >
              <RotateCw className="w-4 h-4" />
            </button>

            {allowDownload && (
              <button
                onClick={handleDownload}
                className={controlButtonClass}
                title="Download PDF"
              >
                <Download className="w-4 h-4" />
              </button>
            )}

            {allowFullscreen && (
              <button
                onClick={toggleFullscreen}
                className={controlButtonClass}
                title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
              >
                {isFullscreen ? (
                  <X className="w-4 h-4" />
                ) : (
                  <Maximize2 className="w-4 h-4" />
                )}
              </button>
            )}
          </div>
        )}
      </div> */}

      {/* PDF Container */}
      <div className="relative flex-1 h-full">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-10">
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 rounded-full border-4 border-gray-200"></div>
                <div className="absolute top-0 left-0 w-12 h-12 rounded-full border-4 border-red-500 border-t-transparent animate-spin"></div>
              </div>
              <p className="text-gray-600 font-medium">Loading PDF...</p>
            </div>
          </div>
        )}

        {hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
            <div className="text-center p-8 max-w-md">
              <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                <FileText className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {!isValidSrc ? 'No PDF Source' : 'Failed to Load PDF'}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                {!isValidSrc 
                  ? 'Please provide a valid PDF file URL.' 
                  : 'This might be due to CORS restrictions or network issues. Try one of these solutions:'
                }
              </p>
              {isValidSrc && (
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      setHasError(false);
                      setUseFallback(true);
                    }}
                    className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    Try Browser PDF Viewer
                  </button>
                  <button
                    onClick={() => window.open(src, '_blank')}
                    className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm"
                  >
                    Open in New Tab
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* PDF Content */}
        {useFallback ? (
          <embed
            src={src}
            type="application/pdf"
            className="w-full h-full"
            title={title}
          />
        ) : (
          <iframe
            ref={iframeRef}
            src={isValidSrc ? pdfUrl : undefined}
            className="w-full h-full border-0 bg-white"
            title={title}
            sandbox="allow-scripts allow-same-origin"
          />
        )}
      </div>

      {/* Gradient overlay for aesthetics */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      </div>
    </div>
  );
};

export default PdfViewer;