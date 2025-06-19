import React from 'react'
import PdfViewer from '../../components/pdfViewer/PdfViewer'
import pdf from '../../assets/pdfs/MKUY Success Story Compendium.pdf'
const Compendium : React.FC = () => {
  return (
    <div>
      <PdfViewer fileUrl={pdf}/>
      
    </div>
  )
}

export default Compendium
