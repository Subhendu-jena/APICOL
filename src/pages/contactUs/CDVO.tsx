import React, { useEffect, useState } from 'react'
import Table1 from "../../components/table/Table";

const CDVO: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState("");
  
  const cdvoHeaders = [
    {
      accessor: "slNo",
      header: "Sl. No.",
      render: (row: any) => <div className="text-black">{row.slNo}</div>,
      size: 10,
    },
    {
      accessor: "district",
      header: "District",
      render: (row: any) => (
        <div className="font-semibold text-black">{row.district}</div>
      ),
    },
    {
      accessor: "name",
      header: "Position Name",
      render: (row: any) => <div className="text-black">{row.name}</div>,
      size: 350,
    },
    {
      accessor: "email",
      header: "E-mail Id",
      render: (row: any) => (
        <div className="text-orange-600 underline">
          {Array.isArray(row.email) ? (
            row.email.map((e: string, i: number) => (
              <div key={i}>
                <a href={`mailto:${e}`}>{e}</a>
              </div>
            ))
          ) : (
            <a href={`mailto:${row.email}`}>{row.email}</a>
          )}
        </div>
      ),
      size: 300,

    },
    {
      accessor: "contact",
      header: "Contact Number",
      render: (row: any) => (
        <div className="text-black hover:underline">
          {Array.isArray(row.contact) ? (
            row.contact.map((m: string, i: number) => (
              <div key={i} className="my-2">
                <a href={`tel:${m}`}>+91-{m}</a>
              </div>
            ))
          ) : (
            <a href={`tel:${row.contact}`}>+91-{row.contact}</a>
          )}
        </div>
      ),
      size: 300,
    },
  ];

  const cdvoData = [
    {
      slNo: 1,
      district: "Angul",
      name: "Dr.Nirod Das",
      email: "",
      contact: "9437425510",
    },
    {
      slNo: 2,
      district: "Balasore",
      name: "Dr. Ranjan Das",
      email: "",
      contact: "9937125725",
    },
    {
      slNo: 3,
      district: "Bargarh",
      name: "Dr.Susanta kumar Nayak",
      email: "cdvobargarh2019@gmail.com",
      contact: "8895332440",
    },
    {
      slNo: 4,
      district: "Bhadrak",
      name: "Dr.Hrushikesh",
      email: "",
      contact: "9437658839",
    },
    {
      slNo: 5,
      district: "Balangir",
      name: "Dr.Sukumar Munda",
      email: "",
      contact: "9556041159",
    },
    {
      slNo: 6,
      district: "Boudh",
      name: "Dr Ramarao Palo",
      email: "cdvoboudh@gmail.com",
      contact: "9437434770",
    },
    {
      slNo: 7,
      district: "Cuttack",
      name: "Dr.Bibhu Das",
      email: "cdvo.cuttack@gmail.com",
      contact: "9438299082",
    },
    {
      slNo: 8,
      district: "Deogarh & Sambalpur",
      name: "Dr.Satyaranjan Rout",
      email: "cdvodebgarh@gmail.com",
      contact: "9437316038",
    },
    {
      slNo: 9,
      district: "Dhenkanal",
      name: "Dr. Damburudhar Samal",
      email: "cdvodkl_07@yahoo.co.in",
      contact: "7978989725",
    },
    {
      slNo: 10,
      district: "Gajapati",
      name: "Dr.Dharmananda Mohanty",
      email: "cdvogajapatiparalakhemundi@yahoo.in",
      contact: "9437185715",
    },
    {
      slNo: 11,
      district: "Ganjam",
      name: "Dr. Manoj Kumar Sahoo",
      email: "cdvoganjam07@gmail.com",
      contact: "9437177312",
    },
    {
      slNo: 12,
      district: "Jagatsinghpur",
      name: "Dr. Kailash Mallick",
      email: "cdvojspur@gmail.com",
      contact: "9777672515",
    },
    {
      slNo: 13,
      district: "Jajpur",
      name: "Dr. Padmanava Das",
      email: "",
      contact: "9437214246",
    },
    {
      slNo: 14,
      district: "Jharsuguda",
      name: "Dr. Daya Sagar Duriya",
      email: "cdvojsg@gmail.com",
      contact: "9178918319",
    },
    {
      slNo: 15,
      district: "Kalahandi",
      name: "Dr.Hemanta Kumar Pradhan",
      email: "cdvokalahandi@gmail.com",
      contact: "9437173933",
    },
    {
      slNo: 16,
      district: "Kandhamal",
      name: "Dr. Patel",
      email: "",
      contact: "9437402812",
    },
    {
      slNo: 17,
      district: "Kendrapara",
      name: "Dr. Dipti Mahapatra",
      email: "cdvokendrapara@gmail.com",
      contact: "9439317727",
    },
    {
      slNo: 18,
      district: "Keonjhar",
      name: "Dr. Akashya Kumar Ghadei",
      email: "cdvokjr@gmail.com",
      contact: "9437170353",
    },
    {
      slNo: 19,
      district: "Khordha",
      name: "",
      email: "",
      contact: "9437950349",
    },
    {
      slNo: 20,
      district: "Koraput",
      name: "Dr.Rabi Narayan Panda",
      email: "cdvokoraput1@gmail.com",
      contact: "9437323214",
    },
    {
      slNo: 21,
      district: "Mayurbhanj",
      name: "Dr Kalpatru Swain",
      email: "cdvombj@gmail.com",
      contact: "9937775925",
    },
    {
      slNo: 22,
      district: "Nabarangpur",
      name: "Dr. Radheshyam Laik",
      email: "",
      contact: "8249707020",
    },
    {
      slNo: 23,
      district: "Nayagarh",
      name: "Dr.Prashant Mishra",
      email: "",
      contact: "9437197818",
    },
    {
      slNo: 24,
      district: "Nuapada",
      name: "Dr.Pradeep Kumar Seth",
      email: "cdvonuapada@gmail.com",
      contact: "9776080468",
    },
    {
      slNo: 25,
      district: "Puri",
      name: "Dr.Sarat",
      email: "",
      contact: "9437832405",
    },
    {
      slNo: 26,
      district: "Rayagada",
      name: "Dr.Hadibandhu Bhoi",
      email: "cdvorayagada@gmail.com",
      contact: "9439856373",
    },
    {
      slNo: 27,
      district: "Sambalpur",
      name: "Dr.Parsuram Panda",
      email: "cdvosambalpur2020@gmail.com",
      contact: "9437755407",
    },
    {
      slNo: 28,
      district: "Sonepur",
      name: "Dr Ratnakar Rout",
      email: "cdvosonepur@gmail.com",
      contact: "9437493017",
    },
    {
      slNo: 29,
      district: "Sundargarh",
      name: "Dr. Basant Ku Dhala",
      email: "cdvosundargarh@gmail.com",
      contact: "9439750081",
    },
    {
      slNo: 30,
      district: "Malkangiri",
      name: "Dr.Ashok Tripathi",
      email: "cdvomalkangiri1@gmail.com",
      contact: "9437285420",
    },
  ];
const [filteredData, setFilteredData] = useState(cdvoData);
useEffect(() => {
  const lowerCaseTerm = searchTerm.toLowerCase();

  const filtered = cdvoData.filter((item) =>
    Object.values(item).some((value) =>
      value?.toString().toLowerCase().includes(lowerCaseTerm)
    )
  );

  setFilteredData(filtered);
}, [searchTerm]);
  return (
    <div className="max-w-6xl mx-auto py-8">
      <div className="text-2xl font-bold">
        Chief District Veterinary Officer (CDVO)
      </div>
       <div className="flex justify-end">
        <input
          type="text"
          placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          className="w-90 bg-white placeholder:text-black text-black mb-2 px-4 py-2 border rounded-lg"
        />
      </div>
      <Table1 columns={cdvoHeaders} data={filteredData} />
    </div>
  );
};

export default CDVO;
