import React, { useEffect, useState } from 'react'
import Table1 from '../../components/table/Table';

const CDAO : React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
    const ddHeaders = [
  { accessor: "slNo", header: "Sl. No.",render: (row: any) => (
      <div className="text-black">{row.slNo}</div>
    ),
    size: 10, },
  { accessor: "district", header: "District",
    render: (row: any) => (
      <div className="font-semibold text-black">{row.district}</div>
    ), },
  { accessor: "name", header: "Position Name",render: (row: any) => (
      <div className="text-black">{row.name}</div>
    ),
    size: 350, },
  { accessor: "email", header: "E-mail Id",
    render: (row: any) => (
      <div className="text-orange-600 underline">
        {Array.isArray(row.email)
          ? row.email.map((e: string, i: number) => (
              <div key={i}>
                <a href={`mailto:${e}`}>{e}</a>
              </div>
            ))
          : <a href={`mailto:${row.email}`}>{row.email}</a>}
      </div>
    ), },
  { accessor: "contact", header: "Contact Number",
    render: (row: any) => (
      <div className="text-black hover:underline">
        {Array.isArray(row.contact)
          ? row.contact.map((m: string, i: number) => (
              <div key={i} className='my-2'>
                <a href={`tel:${m}`}>+91-{m}</a>
              </div>
            ))
          : <a href={`tel:${row.contact}`}>+91-{row.contact}</a>}
      </div>
    ),
    size: 200, },
];

    const ddData = [
  {
    slNo: 1,
    district: "Angul",
    name: "Jyotideepta Patanaik",
    email: "ddaangul.dag@nic.in",
    contact: "9437104500",
  },
  {
    slNo: 2,
    district: "Balasore",
    name: "Saroj Kunar Mohapatra",
    email: "",
    contact: "9437295325",
  },
  {
    slNo: 3,
    district: "Bargarh",
    name: "Amiya Kumar Sahoo",
    email: "ddabargarh.dag@nic.in",
    contact: "7008337242",
  },
  {
    slNo: 4,
    district: "Bhadrak",
    name: "Narayan Upadhya",
    email: "",
    contact: "9937593869",
  },
  {
    slNo: 5,
    district: "Balangir",
    name: "Subash Behera",
    email: "",
    contact: "9439811691",
  },
  {
    slNo: 6,
    district: "Boudh",
    name: "Basanta Panigrahi",
    email: "ddaboudh.dag@nic.in",
    contact: "7978363224",
  },
  {
    slNo: 7,
    district: "Cuttack",
    name: "Sudam Kumar Nayak",
    email: "ddactc.dag@nic.in",
    contact: "9437087603",
  },
  {
    slNo: 8,
    district: "Deogarh",
    name: "Manoranjan Mandal",
    email: "ddadeogarh.dag@nic.in",
    contact: "9437838179",
  },
  {
    slNo: 9,
    district: "Dhenkanal",
    name: "Diptikanta Routray",
    email: "ddadkl10@gmail.com; ddadkl.dhe@nic.in",
    contact: "9861576848",
  },
  {
    slNo: 10,
    district: "Gajapati",
    name: "Ireniyas Pradhan (I/C)",
    email: "ddagaja.dag@nic.in",
    contact: "6370479797",
  },
  {
    slNo: 11,
    district: "Ganjam",
    name: "Subrat Kumar Sahoo",
    email: "ddabmp.dag@nic.in",
    contact: "9937109831",
  },
  {
    slNo: 12,
    district: "Jagatsinghpur",
    name: "Sanjiv kumar Mudali",
    email: "ddajspur.dag@nic.in",
    contact: "9437245305",
  },
  {
    slNo: 13,
    district: "Jajpur",
    name: "Udeepta kumar Tripathy",
    email: "",
    contact: "9078138588",
  },
  {
    slNo: 14,
    district: "Jharsuguda",
    name: "Baldev Mahapatra",
    email: "ddajhar.dag@nic.in",
    contact: "9937551917",
  },
  {
    slNo: 15,
    district: "Kalahandi",
    name: "Bisweswar Sahu",
    email: "ddakld@rediffmail.com",
    contact: "7991094275",
  },
  {
    slNo: 16,
    district: "Kandhamal",
    name: "Tushar Kanti",
    email: "",
    contact: "9439726439",
  },
  {
    slNo: 17,
    district: "Kendrapara",
    name: "Manoj Kumar Chand",
    email: "ddaken.dag@nic.in",
    contact: "8327745330",
  },
  {
    slNo: 18,
    district: "Keonjhar",
    name: "Mihir Kumar Sahoo",
    email: "ddakeonjhar.dag@nic.in",
    contact: "7978646506",
  },
  {
    slNo: 19,
    district: "Khordha",
    name: "Sarat",
    email: "",
    contact: "9437194866",
  },
  {
    slNo: 20,
    district: "Koraput",
    name: "Pradeep Mohanty",
    email: "ddakoraput.dag@nic.in",
    contact: "9937307520",
  },
  {
    slNo: 21,
    district: "Mayurbhanj",
    name: "Tarun Kumar Chhatray",
    email: "ddabaripada.dag@nic.in",
    contact: "7008460371",
  },
  {
    slNo: 22,
    district: "Nabarangpur",
    name: "G Venkat Reddy",
    email: "",
    contact: "9438221663",
  },
  {
    slNo: 23,
    district: "Nayagarh",
    name: "B P Sahu",
    email: "",
    contact: "7978007494",
  },
  {
    slNo: 24,
    district: "Nuapada",
    name: "Himansu Kumar Mohapatra",
    email: "ddanua.dag@nic.in",
    contact: "9668650488",
  },
  {
    slNo: 25,
    district: "Puri",
    name: "Manoj Mohanty",
    email: "",
    contact: "9437192360",
  },
  {
    slNo: 26,
    district: "Rayagada",
    name: "Manoj Kumar Pradhan",
    email: "ddarayagada.dag@nic.in",
    contact: "9437702207",
  },
  {
    slNo: 27,
    district: "Sambalpur",
    name: "Sri.Gouri Sankar Singh",
    email: "ddasambalpur.dag@nic.in",
    contact: "9437344123",
  },
  {
    slNo: 28,
    district: "Sonepur",
    name: "Dr Bibhuti Bhusan Mishra",
    email: "ddason.dag@nic.in",
    contact: "9937981009",
  },
  {
    slNo: 29,
    district: "Sundargarh",
    name: "Sh. Harihar Nayak",
    email: "ddasng.dag@gmail.com",
    contact: "9437804224",
  },
  {
    slNo: 30,
    district: "Malkangiri",
    name: "Jami Surya Rao",
    email: "ddamal.dag@nic.in",
    contact: "9437373373",
  },
];
const [filteredData, setFilteredData] = useState(ddData);
useEffect(() => {
  const lowerCaseTerm = searchTerm.toLowerCase();

  const filtered = ddData.filter((item) =>
    Object.values(item).some((value) =>
      value?.toString().toLowerCase().includes(lowerCaseTerm)
    )
  );

  setFilteredData(filtered);
}, [searchTerm, ddData]);
  return (
     <div className="max-w-6xl mx-auto py-8">
      <div className="text-2xl font-bold">Chief District Agriculture Officer (CDAO)</div>
       <div className="flex justify-end">
        <input
          type="text"
          placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          className="w-90 bg-white placeholder:text-black text-black mb-2 px-4 py-2 border rounded-lg"
        />
      </div>
      <Table1 columns={ddHeaders} data={filteredData} />
    </div>
  )
}

export default CDAO
