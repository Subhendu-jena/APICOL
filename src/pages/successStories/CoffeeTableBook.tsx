import React from "react";
import pdf from "../../assets/pdfs/APICOL Coffee Table Book_Mar_2024(30x24cm).pdf";
import PdfViewer from "../../components/pdfViewer/PdfViewer";
const CoffeeTableBook: React.FC = () => {
  return (
    <div>
      <PdfViewer
        src={pdf || "hhhhhhh"}
        title="TraceMonkey Research Paper"
        width="100%"
        height={800}
        className="my-custom-class"
        showControls={true}
        allowFullscreen={true}
        allowDownload={true}
        // onLoadStart={() => console.log('PDF loading started')}
        // onLoadEnd={() => console.log('PDF loaded successfully')}
        onError={(error) => console.error("PDF error:", error)}
      />
    </div>
  );
};

export default CoffeeTableBook;
