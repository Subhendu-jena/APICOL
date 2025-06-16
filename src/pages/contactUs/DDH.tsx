import React from 'react'
import Table1 from '../../components/table/Table';

const DDH : React.FC = () => {
    const ddhHeaders = [
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

const ddhData = [
  { slNo: 1, district: "Angul", name: "Lamber Lugun", email: "ddhangul12@gmail.com", contact: "9861358535" },
  { slNo: 2, district: "Balasore", name: "Tapan Kumar Mohanty", email: "", contact: "9437186628" },
  { slNo: 3, district: "Bargarh", name: "Gobinda Chandra Panda", email: "ddhbargarh@gmail.com", contact: "9439973355" },
  { slNo: 4, district: "Bhadrak", name: "Hruday Ranjan Jena", email: "", contact: "9938171303" },
  { slNo: 5, district: "Balangir", name: "Prafulla Kumar Bhanja", email: "", contact: "9853334997" },
  { slNo: 6, district: "Boudh", name: "Jogindranath Mohapatra", email: "adhboudh.od@nic.in", contact: "9437467254" },
  { slNo: 7, district: "Cuttack", name: "Soumendra Panigrahi", email: "ddhctc@gmail.com", contact: "9437202022" },
  { slNo: 8, district: "Deogarh", name: "Sri.Himanshu Sekhar Sahoo", email: "ddhsambalpur@gmail.com", contact: "9439113494" },
  { slNo: 9, district: "Dhenkanal", name: "Smt. Geetashri Parhi", email: "ddhdhenkanal.od@nic.in", contact: "9437237618" },
  { slNo: 10, district: "Gajapati", name: "Susanta Ranjan Dash", email: "ddhgajapati@gmail.com", contact: "9861232085" },
  { slNo: 11, district: "Ganjam", name: "Kandha Jena", email: "ddhganjamberhampur@gmail.com", contact: "9437334966" },
  { slNo: 12, district: "Jagatsinghpur", name: "Anil kumar Sethy", email: "adhjagatsinghpur1@gmail.com", contact: "9437236238" },
  { slNo: 13, district: "Jajpur", name: "Suryamani Maharana", email: "", contact: "9437214246" },
  { slNo: 14, district: "Jharsuguda", name: "Manoranjan Nanda", email: "hortjharsuguda@gmail.com", contact: "9439920525" },
  { slNo: 15, district: "Kalahandi", name: "Sri Kishor Kumar Mahaling", email: "ddhkalahandi@gmail.com", contact: "9937869553" },
  { slNo: 16, district: "Kandhamal", name: "Ramakanta Giri", email: "", contact: "9439066944" },
  { slNo: 17, district: "Kendrapara", name: "Debdas Dutta", email: "hort.kendrapara@gmail.com", contact: "8895055314" },
  { slNo: 18, district: "Keonjhar", name: "Soumendra Panigrahi", email: "ddhkeonjhar@gmail.com", contact: "9437202022" },
  { slNo: 19, district: "Khordha", name: "Smita Mohanty", email: "", contact: "9437196900" },
  { slNo: 20, district: "Koraput", name: "Sudam Chandra Biswal", email: "ddhkoraput.od@nic.in", contact: "9853493524" },
  { slNo: 21, district: "Mayurbhanj", name: "Tankadhar Kab", email: "ddhbpd.mbj@gmail.com", contact: "9337159836" },
  { slNo: 22, district: "Nabarangpur", name: "Chandra Mohan Sahu", email: "", contact: "7008366945" },
  { slNo: 23, district: "Nayagarh", name: "Lalit Panda", email: "", contact: "9437443991" },
  { slNo: 24, district: "Nuapada", name: "Hare Krushna Chand Hansdah", email: "adh.npd@gmail.com", contact: "7735157569" },
  { slNo: 25, district: "Puri", name: "Manjula", email: "", contact: "7008583513" },
  { slNo: 26, district: "Rayagada", name: "Dayanidhi Rout", email: "ddhrgda@gmail.com", contact: "9438016069" },
  { slNo: 27, district: "Sambalpur", name: "Sri.Himanshu Sekhar Sahoo", email: "ddhsambalpur@gmail.com", contact: "9439113494" },
  { slNo: 28, district: "Sonepur", name: "Hrusikesh Dash", email: "snphort@gmail.com", contact: "9437284257" },
  { slNo: 29, district: "Sundargarh", name: "Sh. Sukanta Nayak", email: "ddhsundargarh@gmail.com", contact: "8637234017" },
  { slNo: 30, district: "Malkangiri", name: "Prasant Patra", email: "ddhmalkangiri@gmail.com", contact: "9861132369" },
];


  return (
     <div className="max-w-6xl mx-auto py-8">
      <div className="text-2xl font-bold">Deputy Director Horticulture (DDH)</div>
      <Table1 columns={ddhHeaders} data={ddhData} />
    </div>
  )
}

export default DDH
