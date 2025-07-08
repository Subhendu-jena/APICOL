import React, { useState } from "react";
import ReportCard from "../../components/reportCard/ReportCard";
import a1 from "../../assets/pdfs/annual/Annual report_2022-23.pdf";
import a2 from "../../assets/pdfs/annual/Annual report_2021-22.pdf";
import a3 from "../../assets/pdfs/annual/Provisional Financials FY2019-20.pdf";
import a4 from "../../assets/pdfs/annual/Annual Report Cover 18-19.pdf";
import a5 from "../../assets/pdfs/annual/APICOL ANNUAL REPORT 2017 18.pdf";
import a6 from "../../assets/pdfs/annual/APICOL ANNUAL REPORT 2016 17.pdf";
import a7 from "../../assets/pdfs/annual/APICOL ANNUAL REPORT 2015 16.pdf";
import a8 from "../../assets/pdfs/annual/annual report 14-15.pdf";
import aa1 from "../../assets/pdfs/annual/a1.jpeg";
import aa2 from "../../assets/pdfs/annual/a2.jpeg";
import aa3 from "../../assets/pdfs/annual/aa3.jpg";
import aa4 from "../../assets/pdfs/annual/aa4.jpg";
import aa5 from "../../assets/pdfs/annual/aa5.png";
import aa6 from "../../assets/pdfs/annual/aa6.png";
import aa7 from "../../assets/pdfs/annual/aa7.png";
import aa8 from "../../assets/pdfs/annual/aa8.jpg";

const AnnualReports: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const data = [
    {
      title: "Annual Report 2022-23",
      description: "Annual report for the financial year 2022-23.",
      link: a1,
      bgImage: aa1,
    },
    {
      title: "Annual Report 2021-22",
      description: "Annual report for the financial year 2021-22.",
      link: a2,
      bgImage: aa2,
    },
    {
      title: "Annual Report 2019-20",
      description: "Provisional financials for the financial year 2019-20.",
      link: a3,
      bgImage: aa3,
    },
    {
      title: "Annual Report 2018-19",
      description: "Annual report cover for the financial year 2018-19.",
      link: a4,
      bgImage: aa4,
    },
    {
      title: "Annual Report 2017-18",
      description: "Annual report for the financial year 2017-18.",
      link: a5,
      bgImage: aa5,
    },
    {
      title: "Annual Report 2016-17",
      description: "Annual report for the financial year 2016-17.",
      link: a6,
      bgImage: aa6,
    },
    {
      title: "Annual Report 2015-16",
      description: "Annual report for the financial year 2015-16.",
      link: a7,
      bgImage: aa7,
    },
    {
      title: "Annual Report 2014-15",
      description: "Annual report for the financial year 2014-15.",
      link: a8,
      bgImage: aa8,
    },
  ];

  const filteredData = data.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold text-left mb-4 text-gray-800">
          Annual Reports
        </h2>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Search reports..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-auto max-w-md px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <ReportCard
              key={index}
              title={item.title}
              description={item.description}
              link={item.link}
              bgImage={item.bgImage}
            />
          ))
        ) : (
          <p className="text-gray-500 col-span-full">No reports found.</p>
        )}
      </div>
    </>
  );
};

export default AnnualReports;
