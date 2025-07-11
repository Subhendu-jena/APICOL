import React, { useState } from "react";
import ReusableTable from "../table/Table";

const headers = [
  { header: "Start Date", accessor: "startDate" },

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
    title: "Utkarsh Odisha",
    startDate: "19- 12- 2024",
    subTitle: "Invest in Odisha Invest in Future",
  },
  {
    title:
      "Final Block allocation list of empaneled BRPs at respective Project Blocks under Agriculture Entrepreneurship Promotion Scheme AEPS-OIIPCRA",
    startDate: "1- 2- 2024",
    subTitle:
      "Final Block allocation list of empaneled BRPs at respective Project Blocks under Agriculture Entrepreneurship Promotion Scheme AEPS-OIIPCRA",
  },
  {
    title:
      "Communication of Selected Agri. Entrepreneurs List to undergo registration process under AEPS-OIIPCRA, APICOL",
    startDate: "1- 2- 2024",
    subTitle:
      "Communication of Selected Agri. Entrepreneurs List to undergo registration process under AEPS-OIIPCRA, APICOL",
  },
  {
    title:
      "List of candidates empanelled under Block Resource Persons (BRPs) category for training and on field Handholding support of Agriculture Entrepreneurs (AEs) under AEPS-OIIPCRA",
    startDate: "1- 2- 2024",
    subTitle:
      "List of candidates empanelled under Block Resource Persons (BRPs) category for training and on field Handholding support of Agriculture Entrepreneurs (AEs) under AEPS-OIIPCRA",
  },
  {
    title:
      "List of Rejected Applications For Selection Process Under Agriculture Entrepreneurship Promotion Scheme (AEPS)-OIIPCRA",
    startDate: "11- 1- 2024",
    subTitle:
      "List of Rejected Applications For Selection Process Under Agriculture Entrepreneurship Promotion Scheme (AEPS)-OIIPCRA",
  },
  // Add more rows to test pagination
];

const Events: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
   const filteredData = sampleData.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.startDate.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="p-6">
      <div className="text-2xl font-bold">Events</div>
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

export default Events;
