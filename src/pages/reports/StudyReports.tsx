import React from 'react'
import a1 from '../../assets/pdfs/study/One District One Product study report.pdf';
import aa1 from '../../assets/pdfs/study/aa1.png';
import ReportCard from '../../components/reportCard/ReportCard';


const StudyReports : React.FC = () => {
    const data = [
        {
   title: "One District One Product study report",
    description: "Study report for One District One Product",
    link: a1,
    bgImage: aa1
        }
    ]
  return (
        <div className="flex flex-wrap gap-6 p-4">
      {data.map((item, index) => (
        <ReportCard
          key={index}
          title={item.title}
          description={item.description}
          link={item.link}
          bgImage={item.bgImage}
        />
      ))}
    </div>
  )
}

export default StudyReports
