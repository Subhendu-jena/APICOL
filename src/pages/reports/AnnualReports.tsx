import React from 'react';
import ReportCard from '../../components/reportCard/ReportCard';
import a1 from '../../assets/pdfs/annual/Annual report_2022-23.pdf';
import a2 from '../../assets/pdfs/annual/Annual report_2021-22.pdf';
import a3 from '../../assets/pdfs/annual/Provisional Financials FY2019-20.pdf';
import a4 from '../../assets/pdfs/annual/Annual Report Cover 18-19.pdf';
import a5 from '../../assets/pdfs/annual/APICOL ANNUAL REPORT 2017 18.pdf';
import a6 from '../../assets/pdfs/annual/APICOL ANNUAL REPORT 2016 17.pdf';
import a7 from '../../assets/pdfs/annual/APICOL ANNUAL REPORT 2015 16.pdf';
import a8 from '../../assets/pdfs/annual/annual report 14-15.pdf';
import aa1 from '../../assets/pdfs/annual/a1.jpeg';
import aa2 from '../../assets/pdfs/annual/a2.jpeg';
import aa3 from '../../assets/pdfs/annual/aa3.jpg';
import aa4 from '../../assets/pdfs/annual/aa4.jpg';
import aa5 from '../../assets/pdfs/annual/aa5.png';
import aa6 from '../../assets/pdfs/annual/aa6.png';
import aa7 from '../../assets/pdfs/annual/aa7.png';
import aa8 from '../../assets/pdfs/annual/aa8.jpg';

const AnnualReports  : React.FC     = () => {
 
const data = [
  {
    title: "Annual Report 2022-23",
    description: "Annual report for the financial year 2022-23.",
    link: a1,
    bgImage: aa1
  },
  {
    title: "Annual Report 2021-22",
    description: "Annual report for the financial year 2021-22.",
    link: a2,
    bgImage: aa2
  },
  {
    title: "Annual Report 2019-20",
    description: "Provisional financials for the financial year 2019-20.",
    link: a3,
    bgImage: aa3
  },
  {
    title: "Annual Report 2018-19",
    description: "Annual report cover for the financial year 2018-19.",
    link: a4,
    bgImage: aa4
  },
  {
    title: "Annual Report 2017-18",
    description: "Annual report for the financial year 2017-18.",
    link: a5,
    bgImage: aa5
  },
  {
    title: "Annual Report 2016-17",
    description: "Annual report for the financial year 2016-17.",
    link: a6,
    bgImage: aa6
  },
  {
    title: "Annual Report 2015-16",
    description: "Annual report for the financial year 2015-16.",
    link: a7,
    bgImage: aa7
  },
  {
    title: "Annual Report 2014-15",
    description: "Annual report for the financial year 2014-15.",
    link: a8,
    bgImage: aa8
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

{/* 
    <section className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-indigo-100 py-16 px-6 md:px-12">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-16">Research Publications</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.map((paper, idx) => (
          <div
            key={idx}
            className="relative bg-white/30 backdrop-blur-md border border-gray-200 rounded-3xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.03] group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-t-3xl" />
            <div className="p-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-gradient-to-br from-indigo-200 to-purple-300 p-3 rounded-xl">
                  <FileText className="text-indigo-600 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{paper.title}</h3>
                  <p className="text-gray-600 text-sm mt-2">{paper.description}</p>
                </div>
              </div>
              <a
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all"
              >
                View PDF <FileText size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section> */}
    </div>
  );
};

export default AnnualReports;
