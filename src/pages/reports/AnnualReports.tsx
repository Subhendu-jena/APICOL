import React from 'react';
import ReportCard from '../../components/reportCard/ReportCard';
import a1 from '../../assets/pdfs/Annual report_2021-22.pdf';
import a2 from '../../assets/pdfs/Annual report_2022-23.pdf';
import aa1 from '../../assets/pdfs/a1.jpeg';
import aa2 from '../../assets/pdfs/a2.jpeg';

const AnnualReports  : React.FC     = () => {
  const data = [
    {
      title: "Annual Report 2021-22",
      description: "Annual report for the financial year 2021-22.",
      link: a1,
      bgImage: aa1
    },
    {
      title: "Annual Report 2022-23",
      description: "Annual report for the financial year 2022-23.",
      link: a2,
      bgImage: aa2
    }
  ];

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
  );
};

export default AnnualReports;
