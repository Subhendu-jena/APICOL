import React from "react";
import ReusableTable from "../table/Table";

const headers = [
  { header: "Release Date", accessor: "releaseDate" },

  {
    header: "Title",
    accessor: "title",
    render: (row: any) => (
      <div className="text-black font-semibold hover:underline cursor-pointer">
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
    title:
      "  Communication of Selected Agri. Entrepreneurs List to undergo registration process under AEPS-OIIPCRA, APICOL",
    releaseDate: "10- 4- 2025",
    subTitle:
      "Communication of Selected Agri. Entrepreneurs List to undergo registration process under AEPS-OIIPCRA, APICOL",
  },
  {
    title:
      "  Communication of Selected Agri. Entrepreneurs List to undergo registration process under AEPS-OIIPCRA, APICOL",
    releaseDate: "10- 4- 2025",
    subTitle:
      "Communication of Selected Agri. Entrepreneurs List to undergo registration process under AEPS-OIIPCRA, APICOL",
  },
  {
    title:
      "  Communication of Selected Agri. Entrepreneurs List to undergo registration process under AEPS-OIIPCRA, APICOL",
    releaseDate: "10- 4- 2025",
    subTitle:
      "Communication of Selected Agri. Entrepreneurs List to undergo registration process under AEPS-OIIPCRA, APICOL",
  },
  {
    title:
      "  Communication of Selected Agri. Entrepreneurs List to undergo registration process under AEPS-OIIPCRA, APICOL",
    releaseDate: "10- 4- 2025",
    subTitle:
      "Communication of Selected Agri. Entrepreneurs List to undergo registration process under AEPS-OIIPCRA, APICOL",
  },

  // Add more rows to test pagination
];

const Notification: React.FC = () => {
  return (
    <div className="p-6">
       <div className="text-2xl font-bold">Notification</div>
      <div className="flex justify-end">
        <input
          type="text"
          placeholder="Search..."
          //   value={searchTerm}
          //   onChange={(e) => setSearchTerm(e.target.value)}
          className="w-90 bg-white placeholder:text-black text-black border-none outline-none px-4 py-2 border rounded-lg"
        />
      </div>
      <ReusableTable columns={headers} data={sampleData} />
    </div>
  );
};

export default Notification;
