import React, { useState } from "react";
import ReusableTable from "../table/Table";

const headers = [
  { header: "Open Date", accessor: "openDate" },

  {
    header: "Title",
    accessor: "title",
    render: (row: any) => (
      <div className="text-black font-semibold hover:underline cursor-pointer ">
        {row.title}
        <p className="text-gray-500 font-normal text-xs">{row.subTitle}</p>
      </div>
    ),
  },
  { header: "Close Date", accessor: "closeDate" },
  {
    header: "Actions",
    accessor: "actions",
    render: () => (
      <div className="flex space-x-2">
        <button className="text-orange-600 hover:underline">View</button>
      </div>
    ),
  },
];

const sampleData = [
  {
    title: "CORRIGENDUM RfP for Selection of Agency/Firm",
    openDate: "2023-10-01",
    closeDate: "2023-10-15",
    subTitle:
      "Rescheduling of different events related to RfP for Selection of Agency for Third Party Evaluation of MKUY",
  },
  // Add more rows to test pagination
];

const Tender: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredData = sampleData.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.openDate.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.closeDate.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="p-6">
       <div className="text-2xl font-bold">Tender</div>
      <div className="flex justify-end">
        <input
          type="text"
          placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          className="w-90 bg-white placeholder:text-black text-black mb-2 px-4 py-2 border rounded-lg"
        />
      </div>
      <ReusableTable columns={headers} data={filteredData} />
    </div>
  );
};

export default Tender;
