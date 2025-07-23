declare module 'pdfjs-dist/build/pdf.worker.entry';
declare module 'react-pdf';
declare module 'pdfjs-dist/build/pdf.worker.min.js';

declare namespace JSX {
  interface IntrinsicElements {
    'pdf-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  }
}


