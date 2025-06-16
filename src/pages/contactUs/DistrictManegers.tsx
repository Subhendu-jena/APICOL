import React from 'react'
import Table1 from '../../components/table/Table';

const DistrictManegers : React.FC = () => {

    const engineerHeaders = [
  {
    header: "S.N",
    accessor: "slNo",
    render: (row: any) => (
      <div className="text-black">{row.slNo}</div>
    ),
    size: 10,
  },
  {
    header: "District",
    accessor: "district",
    render: (row: any) => (
      <div className="font-semibold text-black">{row.district}</div>
    ),
  },
  {
    header: "Name & Designation",
    accessor: "name",
    render: (row: any) => (
      <div className="text-black">{row.name}</div>
    ),
    size: 350,
  },
  {
    header: "Email",
    accessor: "email",
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
    ),

  },
  {
    header: "Mobile No.",
    accessor: "mobile",
    render: (row: any) => (
      <div className="text-black hover:underline">
        {Array.isArray(row.mobile)
          ? row.mobile.map((m: string, i: number) => (
              <div key={i} className='my-2'>
                <a href={`tel:${m}`}>+91-{m}</a>
              </div>
            ))
          : <a href={`tel:${row.mobile}`}>+91-{row.mobile}</a>}
      </div>
    ),
    size: 200,

  },
];

    const districtEngineersData = [
  {
    slNo: 1,
    district: "Angul",
    name: "Pramod Kumar Das, AEE",
    email: "das_pramod27@yahoo.in",
    mobile: "9437415159",
  },
  {
    slNo: 2,
    district: "Balasore",
    name: "Alok Adhikari, EE",
    email: "eeag.balasore@gmail.com",
    mobile: "9437145177",
  },
  {
    slNo: 3,
    district: "Bargarh",
    name: "Shri. Purna Chandra Basa, EE (Agril)",
    email: "eeabargarh@gmail.com",
    mobile: "9937888654",
  },
  {
    slNo: 4,
    district: "Bhadrak",
    name: "Niroj Kumar Behera, AEE",
    email: "aeebhadrak@gmail.com",
    mobile: "9438123979",
  },
  {
    slNo: 5,
    district: "Bolangir",
    name: "Lasa Murmu, EE",
    email: "eea.blgr@gmail.com",
    mobile: "9437198218",
  },
  {
    slNo: 6,
    district: "Boudh",
    name: "Purna Chandra Prusty, AEE",
    email: "aeeag.boudh@gmail.com",
    mobile: ["7978206210", "9437517184"],
  },
  {
    slNo: 7,
    district: "Cuttack",
    name: "Debadutta Das Mohapatra, EE (Agril.)",
    email: "eeagril.cuttack@gmail.com",
    mobile: "9438050646",
  },
  {
    slNo: 8,
    district: "Dhenkanal",
    name: "Pradyuta Kumar Patnaik, EE (Agril.)",
    email: "eeagri.dhenkanal@gmail.com",
    mobile: "8763492201",
  },
  {
    slNo: 9,
    district: "Deogarh",
    name: "Dibyalochan Sahu, AAE I/C",
    email: "aeeagri.dgh@gmail.com",
    mobile: "9938666792",
  },
  {
    slNo: 10,
    district: "Gajapati",
    name: "Ramesh Ch Singh, AEE",
    email: "s.rameshchandra1987@gmail.com",
    mobile: "9337184686",
  },
  {
    slNo: 11,
    district: "Ganjam",
    name: "Nima Anand, EE (Agril)",
    email: "eeagril.ganjam@gmail.com",
    mobile: "7077472745",
  },
  {
    slNo: 12,
    district: "Jagatsinghpur",
    name: "Santosh Kumar Nayak, AEE",
    email: "aeejsp1@gmail.com",
    mobile: "9437086533",
  },
  {
    slNo: 13,
    district: "Jajpur",
    name: "Biswajit Panda, AEE",
    email: "aeeagril.jajpur@gmail.com",
    mobile: "7008934702",
  },
  {
    slNo: 14,
    district: "Jharsuguda",
    name: "Giri Shankar Behera, AEE",
    email: "girishagengg@gmail.com",
    mobile: ["9437923556", "9556644896"],
  },
  {
    slNo: 15,
    district: "Kalahandi",
    name: "Jagabandhu Mahali, EE (Agril)",
    email: "eeagrilkld@gmail.com",
    mobile: "9438513312",
  },
  {
    slNo: 16,
    district: "Kandhamal",
    name: "Rabindra Kumar Sahoo, EE (Agril)",
    email: "eeagrilkandhamal@gmail.com",
    mobile: "9437280606",
  },
  {
    slNo: 17,
    district: "Keonjhar",
    name: "Jagatbandhu Pattnaik, EE (Agril)",
    email: "eeagril.kjr@gmail.com",
    mobile: "9437424986",
  },
  {
    slNo: 18,
    district: "Kendrapara",
    name: "Debabrata Satapathy, EE (Agril)",
    email: "eeagril.kendrapara@gmail.com",
    mobile: "9777797206",
  },
  {
    slNo: 19,
    district: "Khurda",
    name: "Pradeep Kumar Nayak, AEE",
    email: "aeekhordha.dag@gmail.com",
    mobile: "9437322543",
  },
  {
    slNo: 20,
    district: "Koraput",
    name: "Santosh Kumar Misra, EE",
    email: "eeagril.koraput@gmail.com",
    mobile: "9556842096",
  },
  {
    slNo: 21,
    district: "Malkanagiri",
    name: "Dhruba Charan Biswal, AEE",
    email: "aeemalkangiri@gmail.com",
    mobile: "6370369123",
  },
  {
    slNo: 22,
    district: "Mayurbhanj",
    name: "Srinibash Prusty, EE (Agril)",
    email: "eea-mayurbhanj@gov.in, eeagril.mayurbhanj@gmail.com",
    mobile: "9861135891",
  },
  {
    slNo: 23,
    district: "Nayagarh",
    name: "Sudhansu Sekhar Das, EE (Agril)",
    email: "eeagril.nayargarh@gmail.com",
    mobile: "9437248680",
  },
  {
    slNo: 24,
    district: "Nabarangpur",
    name: "Gouri Sankar Sahu, AEE",
    email: "aeeagril.nabarangpur@gmail.com",
    mobile: "8763522202",
  },
  {
    slNo: 25,
    district: "Nuapada",
    name: "Padma Lochan Majhi, AEE",
    email: "aeeanuapada@gmail.com",
    mobile: "9668615658",
  },
  {
    slNo: 26,
    district: "Puri",
    name: "Srikant Kumar Parida, EE (Agril)",
    email: "eeag-puri@gov.in",
    mobile: ["7008523238", "9437182120"],
  },
  {
    slNo: 27,
    district: "Rayagada",
    name: "Prafula Kumar Behera, EE",
    email: "rayagadaeeagril@gmail.com",
    mobile: "9439285362",
  },
  {
    slNo: 28,
    district: "Sambalpur",
    name: "Debashis Mishra, EE",
    email: "eeaiadp@gmail.com",
    mobile: "9437152396",
  },
  {
    slNo: 29,
    district: "Sonepur",
    name: "Gopinath Hansda, AEE",
    email: "aeeagril.snpr@gmail.com",
    mobile: "9437391507",
  },
  {
    slNo: 30,
    district: "Sundargarh",
    name: "Paramananda Pradhan, EE (Agril)",
    email: "eeasundargarh@gmail.com",
    mobile: "9937325651",
  },
];

  return (
   <div className="max-w-6xl mx-auto py-8">
      <div className="text-2xl font-bold">District Engineers</div>
      <Table1 columns={engineerHeaders} data={districtEngineersData} />
    </div>
  )
}

export default DistrictManegers
