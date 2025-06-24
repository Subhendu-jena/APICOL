import React, { useState } from "react";
import a1 from "../../assets/pdfs/study/One District One Product study report.pdf";
import aa1 from "../../assets/pdfs/study/aa1.png";
import ReportCard from "../../components/reportCard/ReportCard";

const StudyReports: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const data = [
    {
      title: "One District One Product study report",
      description: "Study report for One District One Product",
      link: a1,
      bgImage: aa1,
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
          Study  Reports
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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
          <p className="text-lg font-semibold text-gray-800">
            No reports found
          </p>
        )}
      </div>
    </>
  );
};

export default StudyReports;
