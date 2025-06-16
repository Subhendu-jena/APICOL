import React from "react";
import Table1 from "../../components/table/Table";

const Aptt : React.FC = ()=> {
  const consultantHeaders = [
    {
      header: "SL No.",
      accessor: "slno",
     
    },
    {
      header: "Position",
      accessor: "position",
      render: (row: any) => (
        <div className="font-semibold text-black">{row.position}</div>
      ),
    },
    {
      header: "Name",
      accessor: "name",
      render: (row: any) => <div className="text-black">{row.name}</div>,
    },
    {
      header: "Email",
      accessor: "email",
      render: (row: any) => (
        <a href={`mailto:${row.email}`} className="text-blue-600 underline">
          {row.email}
        </a>
      ),
    },
    {
      header: "Contact No.",
      accessor: "contact",
      render: (row: any) => (
        <a href={`tel:${row.contact}`} className="text-black">
          {row.contact}
        </a>
      ),
    },
  ];
  const districtConsultantHeaders = [
     {
      header: "SL No.",
      accessor: "slno",
     
    },
    {
      header: "District",
      accessor: "district",
      render: (row: any) => (
        <div className="font-semibold text-black">{row.district}</div>
      ),
    },
    {
      header: "Name",
      accessor: "name",
      render: (row: any) => <div className="text-black">{row.name}</div>,
    },
    {
      header: "Email",
      accessor: "email",
      render: (row: any) => (
        <a href={`mailto:${row.email}`} className="text-blue-600 underline">
          {row.email}
        </a>
      ),
    },
    {
      header: "Contact No.",
      accessor: "contact",
      render: (row: any) => (
        <a href={`tel:${row.contact}`} className="text-black">
          {row.contact}
        </a>
      ),
    },
  ];

  const consultantsData = [
    {
      slNo: 1,
      position: "Team Lead (Project Manager)",
      name: "Nitin Srivastav",
      email: "nitin.srivastav@in.ey.com",
      contact: "8755795910",
    },
    {
      slNo: 2,
      position: "Module Lead – Scheme Implementation",
      name: "Pravash Kumar Sahu",
      email: "pravash.sahu@in.ey.com",
      contact: "9861062283",
    },
    {
      slNo: 3,
      position: "Module Lead – Entrepreneurship Promotion",
      name: "Seema Rani Jena",
      email: "seema.Jena@in.ey.com",
      contact: "9015660496",
    },
    {
      slNo: 4,
      position: "Scheme Implementation Consultant",
      name: "Susruta Das",
      email: "susruta.Dash@in.ey.com",
      contact: "7978182390",
    },
    {
      slNo: 5,
      position: "Entrepreneurship Promotion & Strategy Consultant",
      name: "Anil Kumar Mishra",
      email: "anil.mishra@in.ey.com",
      contact: "7008109387",
    },
    {
      slNo: 6,
      position: "Entrepreneurship Promotion & Strategy Consultant",
      name: "Preetam Pradhan",
      email: "preetam.pradhan@in.ey.com",
      contact: "9179626750",
    },
    {
      slNo: 7,
      position: "Market Linkage & Exports Consultant",
      name: "Rahul Kumar Singh",
      email: "rahul.Singh39@in.ey.com",
      contact: "7388692354",
    },
    {
      slNo: 8,
      position: "Project Finance Consultant",
      name: "Chinmaya Prusty",
      email: "chinmaya.prusty@in.ey.com",
      contact: "9861365797",
    },
    {
      slNo: 9,
      position: "Food Processing Consultant",
      name: "Md Neshat Iqbal",
      email: "md.Iqbal@in.ey.com",
      contact: "8683822210",
    },
    {
      slNo: 10,
      position: "Accounts & Finance Consultant",
      name: "Sanjat Kumar Panda",
      email: "sanjat.Panda@in.ey.com",
      contact: "7008765087",
    },
    {
      slNo: 11,
      position: "Tech. & Data Consultant",
      name: "Preetimohan Mishra",
      email: "preetimohan.mishra@in.ey.com",
      contact: "8763314768",
    },
  ];
  const districtConsultants = [
    {
      slNo: 1,
      district: "Angul",
      name: "Smrutiranjan Panda",
      email: "Smrutiranjan.Panda@in.ey.com",
      contact: "6372450331",
    },
    {
      slNo: 2,
      district: "Balsore",
      name: "Avijit Padhy",
      email: "Avijit.Padhy@in.ey.com",
      contact: "9776339986",
    },
    {
      slNo: 3,
      district: "Bargarh",
      name: "Shweta Das",
      email: "shweta.das1@in.ey.com",
      contact: "7978058343",
    },
    {
      slNo: 4,
      district: "Bhadrak",
      name: "Kumar Debasis",
      email: "Kumar.Debasis@in.ey.com",
      contact: "9040500579",
    },
    {
      slNo: 5,
      district: "Balangir",
      name: "Nag Sekhar Nemani",
      email: "nag.nemani@in.ey.com",
      contact: "9937092299",
    },
    {
      slNo: 6,
      district: "Boudh",
      name: "Sachin Kalindi",
      email: "Sachin.Kalindi@in.ey.com",
      contact: "8709499730",
    },
    {
      slNo: 7,
      district: "Cuttack",
      name: "Sritam Krishna Panigrahi",
      email: "Sritam.Panigrahi@in.ey.com",
      contact: "6200260079",
    },
    {
      slNo: 8,
      district: "Deogarh & Sambalpur",
      name: "Gopabandhu Garnaik",
      email: "Gopabandhu.Garnaik@in.ey.com",
      contact: "9658966856",
    },
    {
      slNo: 9,
      district: "Dhenkanal",
      name: "Amrita Samanta",
      email: "Amrita.Samanta@in.ey.com",
      contact: "8658378362",
    },
    {
      slNo: 10,
      district: "Gajapati",
      name: "Nitish Kumar Dhar",
      email: "Nitish.Dhar@in.ey.com",
      contact: "7978029551",
    },
    {
      slNo: 11,
      district: "Ganjam",
      name: "Chinmaya Kumar Behera",
      email: "Chinmaya.Behera@in.ey.com",
      contact: "8018159700",
    },
    {
      slNo: 12,
      district: "Jagatsinghpur",
      name: "Pratap Kumar Rout",
      email: "Pratap.Rout@in.ey.com",
      contact: "9658842340",
    },
    {
      slNo: 13,
      district: "Jajpur",
      name: "Jitan Kumar Das",
      email: "Jitan.Das@in.ey.com",
      contact: "7008786194",
    },
    {
      slNo: 14,
      district: "Jharsuguda",
      name: "Smita Mukherjee",
      email: "Smita.Mukherjee@in.ey.com",
      contact: "9556313856",
    },
    {
      slNo: 15,
      district: "Kalahandi",
      name: "Bhola Sankar Dharua",
      email: "Bhola.Dharua@in.ey.com",
      contact: "9668712957",
    },
    {
      slNo: 16,
      district: "Kandhamal",
      name: "Priyanka Mansingh",
      email: "Priyanka.Manasingh@in.ey.com",
      contact: "7008062613",
    },
    {
      slNo: 17,
      district: "Kendrapara",
      name: "Siba Prasad Sahoo",
      email: "Siba.Sahoo@in.ey.com",
      contact: "8908631286",
    },
    {
      slNo: 18,
      district: "Keonjhar",
      name: "Jyoti Khalkho",
      email: "Jyoti.Khalkho@in.ey.com",
      contact: "8709875367",
    },
    {
      slNo: 19,
      district: "Khordha",
      name: "Pradeep Kumar Sahoo",
      email: "Pradeep.Sahoo@in.ey.com",
      contact: "7978626209",
    },
    {
      slNo: 20,
      district: "Koraput",
      name: "Santosh Kumar Sahu",
      email: "Santosh.Sahu1@in.ey.com",
      contact: "8908007724",
    },
    {
      slNo: 21,
      district: "Malkangiri",
      name: "Gopal Krishna Padhi",
      email: "Gopal.Padhi@in.ey.com",
      contact: "8763568444",
    },
    {
      slNo: 22,
      district: "Mayurbhanj",
      name: "Spandan Moharana",
      email: "spandan.moharana@in.ey.com",
      contact: "8895304224",
    },
    {
      slNo: 23,
      district: "Nabarangpur",
      name: "Baijayantimala Majhi",
      email: "Baijayantimala.Majhi@in.ey.com",
      contact: "8658509934",
    },
    {
      slNo: 24,
      district: "Nayagarh",
      name: "Abinash Dash",
      email: "Abinash.Dash@in.ey.com",
      contact: "8895081998",
    },
    {
      slNo: 25,
      district: "Nuapada",
      name: "Nag Sekhar Nemani",
      email: "nag.nemani@in.ey.com",
      contact: "9937092299",
    },
    {
      slNo: 26,
      district: "Puri",
      name: "Pratyasha Mohapatra",
      email: "Pratyasha.Mohapatra@in.ey.com",
      contact: "7008398120",
    },
    {
      slNo: 27,
      district: "Rayagada",
      name: "Shibashish Panda",
      email: "Shibashish.Panda@in.ey.com",
      contact: "9439100727",
    },
    {
      slNo: 28,
      district: "Sambalpur",
      name: "Gopabandhu Garnaik",
      email: "Gopabandhu.Garnaik@in.ey.com",
      contact: "9658966856",
    },
    {
      slNo: 29,
      district: "Sonepur",
      name: "Sachin Kalindi",
      email: "Sachin.Kalindi@in.ey.com",
      contact: "8709499730",
    },
    {
      slNo: 30,
      district: "Sundargarh",
      name: "Tapas Kumar Patel",
      email: "Tapas.Patel@in.ey.com",
      contact: "8917365684",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-8">
      <div className="text-4xl font-bold py-4">APTT STATE TEAM</div>
      <Table1 columns={consultantHeaders} data={consultantsData} />
      <div className="text-4xl font-bold py-4">APTT DISTRICT COORDINATORS</div>
      <Table1 columns={districtConsultantHeaders} data={districtConsultants} />
    </div>
  );
}

export default Aptt;
