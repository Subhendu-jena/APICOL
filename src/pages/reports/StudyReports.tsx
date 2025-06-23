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
    <>
   <h2 className="text-3xl font-bold text-left mb-6 text-gray-800">Annual Reports</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
    </>
  )
}

export default StudyReports
