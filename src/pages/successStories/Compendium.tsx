import React from "react";
import PdfViewer from "../../components/pdfViewer/PdfViewer";
import pdf from "../../assets/pdfs/MKUY Success Story Compendium.pdf";
const Compendium: React.FC = () => {
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
        // onLoadStart={() => console.log("PDF loading started")}
        // onLoadEnd={() => console.log("PDF loaded successfully")}
        onError={(error) => console.error("PDF error:", error)}
      />
    </div>
  );
};

export default Compendium;
