import React from "react";
import Table1 from "../../components/table/Table";

const Apicol: React.FC = () => {
  const headers = [
    
  // { accessor: "slNo", header: "Sl. No.",render: (row: any) => {
  //   console.log(row)
  //   return(
  //     <div className="text-black">{row.slNo}</div>
  //   )},
  //   size: 10, },
    {
      header: "Title",
      accessor: "title",
      render: (row: any) => {
        console.log(row)
        return(
        <div className="text-black">
          {row.title}
        </div>
      )},
    },
    {
      header: "Name of the Officers",
      accessor: "name",
      render: (row: any) => (
        <div className="text-black">
          {row.name ? row.name : "N/A"}
        </div>
      ),
    },
    {
      header: "Contact No.",
      accessor: "contactNo",
      render: (row: any) => (
        <div className="text-black font-semibold hover:underline cursor-pointer">
          {row.contactNo ? row.contactNo : "N/A"}
        </div>
      ),
    },
    {
      header: "Email",
      accessor: "email",
      render: (row: any) => (
        <div className="text-black font-semibold hover:underline cursor-pointer">
          {row.email ? row.email : "N/A"}
        </div>
      ),
    },
  ];
  const officialsData = [
    {
      slNo: 1,
      title: "APICOL",
      name: "",
      contactNo: "0674-2354125",
      email: "apicol96@yahoo.com",
    },
    {
      slNo: 2,
      title: "MKUY Nodal Officer, APICOL",
      name: "Dr. Girish Chandra Kar, DD(V)",
      contactNo: "9437207150",
    },
    {
      slNo: 3,
      title: "Scheme Officer - Agriculture",
      officials: [
        {
          name: "Sri Ashis Das, AAO",
          contactNo: "8895942018",
        },
        {
          name: "Sri Chinmaya Behera, AAO",
          contactNo: "8763049272",
        },
      ],
    },
    {
      slNo: 4,
      title: "Scheme Officer - Agro Service Centre",
      officials: [
        {
          name: "Er. Raghunath Behera, EE (Agril.)",
          contactNo: "9437150351",
        },
        {
          name: "Er. Pawandeep Minz, AEE (Agril.)",
          contactNo: "9438145854",
        },
      ],
    },
    {
      slNo: 5,
      title: "Scheme Officer - Agro Food Processing",
      officials: [
        {
          name: "Er. Kailash Chandra Nag, AEE (Agril.)",
          contactNo: "8895534501",
        },
      ],
    },
    {
      slNo: 6,
      title: "Scheme Officer - Animal Resources Development",
      officials: [
        {
          name: "Dr. Sambit Mishra, ADVO",
          contactNo: "9861273619",
        },
        {
          name: "Dr. Krushna Keshab Sarangi, ADVO",
          contactNo: "9437566324",
        },
        {
          name: "Dr. Preetangini Arukha, BVO",
          contactNo: "7978628459",
        },
      ],
    },
    {
      slNo: 7,
      title: "Scheme Officer - Horticulture",
      officials: [
        {
          name: "Mr. Chinmaya Behera (Incharge), AAO",
          contactNo: "8763049272",
        },
      ],
    },
    {
      slNo: 8,
      title: "Scheme Officer - Fisheries",
      officials: [
        {
          name: "Ms. Jayashree Routray, DFO",
          contactNo: "9692003002",
        },
        {
          name: "Ms. Monalisha Parida, AFO",
          contactNo: "9937690089",
        },
      ],
    },
  ];
  const flattenedData = officialsData.flatMap((item) => {
    if (item.officials && Array.isArray(item.officials)) {
      return item.officials.map((official: any) => ({
        title: item.title,
        name: official.name,
        contactNo: official.contactNo,
        email: official.email ?? "", // optional if email not present
      }));
    }

    return [
      {
        title: item.title,
        name: item.name || "",
        contactNo: item.contactNo || "",
        email: item.email || "",
      },
    ];
  });

  return (
    <div className="max-w-6xl mx-auto py-8">
      <div className="text-2xl font-bold">APICOL</div>
      <Table1 columns={headers} data={flattenedData} />
    </div>
  );
};

export default Apicol;
