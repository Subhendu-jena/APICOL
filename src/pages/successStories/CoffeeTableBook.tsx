import React from 'react'
import PdfViewer from '../../components/pdfViewer/PdfViewer'
import pdf from '../../assets/pdfs/APICOL Coffee Table Book_Mar_2024(30x24cm).pdf'
const CoffeeTableBook : React.FC = () => {
  return (
    <div>
      <PdfViewer fileUrl={pdf}/>
    </div>
  )
}

export default CoffeeTableBook
