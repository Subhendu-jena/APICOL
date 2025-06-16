import React from 'react'
import Table1 from '../../components/table/Table';

const DFO : React.FC = () => {
    const dfoHeaders = [
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
          : <a href={`mailto:${row.email}`}>{row.email ? row.email : "N/A"}</a>}
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

const dfoData = [
  { slNo: 1, district: "Angul", name: "Rajendra Kumar Patra", email: "dfoangul123@gmail.com", contact: "9438226945" },
  { slNo: 2, district: "Balasore", name: "Jitendra Behera", email: "", contact: "9853031715" },
  { slNo: 3, district: "Bargarh", name: "Biswaranjan Rath", email: "dfobargarh@gmail.com", contact: "8249807770" },
  { slNo: 4, district: "Bhadrak", name: "Prakash", email: "", contact: "9437618755" },
  { slNo: 5, district: "Balangir", name: "Gajendra Padhan", email: "", contact: "9437569600" },
  { slNo: 6, district: "Boudh", name: "Lipsa Pattnaik", email: "bdhfisheries123@gmail.com", contact: "9438308026" },
  { slNo: 7, district: "Cuttack", name: "Itishree Rath", email: "dfocuttack@gmail.com", contact: "8847816529" },
  { slNo: 8, district: "Deogarh", name: "Sri.Bhabagrahi Kissan", email: "adfdeogarh@gmail.com", contact: "8480132047" },
  { slNo: 9, district: "Dhenkanal", name: "Shri Sangram Kar", email: "afodkl@gmail.com", contact: "8917608190" },
  { slNo: 10, district: "Gajapati", name: "Lisa Behera", email: "dfogajapati.fy@gmail.com", contact: "8895749897" },
  { slNo: 11, district: "Ganjam", name: "Nimai Charan Bastia", email: "dfogmbam2016@gmail.com", contact: "7008023924" },
  { slNo: 12, district: "Jagatsinghpur", name: "Reshmarani Singh", email: "dfojspur@gmail.com", contact: "7978231017" },
  { slNo: 13, district: "Jajpur", name: "Pramod Kumar Rout", email: "", contact: "9556484599" },
  { slNo: 14, district: "Jharsuguda", name: "Vivek Soren", email: "adfjsg1@gmail.com", contact: "8908586862" },
  { slNo: 15, district: "Kalahandi", name: "Miss Draupadi Majhi", email: "dfokld@yahoo.com", contact: "7008890234" },
  { slNo: 16, district: "Kandhamal", name: "Prafulla Kanhar", email: "", contact: "9439269513" },
  { slNo: 17, district: "Kendrapara", name: "Sasanka Sekhar Sahoo", email: "dfokendrapara@gmail.com", contact: "9437229692" },
  { slNo: 18, district: "Keonjhar", name: "Debabrata Samal", email: "dfokendujhar@gmail.com", contact: "9438412375" },
  { slNo: 19, district: "Khordha", name: "", email: "", contact: "9437269613" },
  { slNo: 20, district: "Koraput", name: "Rabindra Kumar Marandi", email: "adfkpt@gmail.com", contact: "7978347299" },
  { slNo: 21, district: "Mayurbhanj", name: "Manas Ranjan Sahu", email: "mayurbhanjfisheries@yahoo.in", contact: "8917571121" },
  { slNo: 22, district: "Nabarangpur", name: "Ranjita Behera", email: "", contact: "9938041227" },
  { slNo: 23, district: "Nayagarh", name: "Prakash Tripathy", email: "", contact: "9437232463" },
  { slNo: 24, district: "Nuapada", name: "Sailesh kumar rath", email: "districtfisheriesofficenpd@gmail.com", contact: "9437625091" },
  { slNo: 25, district: "Puri", name: "S. Rout", email: "", contact: "7008674337" },
  { slNo: 26, district: "Rayagada", name: "Chulakanti Tajan", email: "adfrayagada.fisheries@gmail.com", contact: "9777950486" },
  { slNo: 27, district: "Sambalpur", name: "Sri Tusar Ranjan Dip", email: "adf.sbp@gmail.com", contact: "9937363181" },
  { slNo: 28, district: "Sonepur", name: "Sri Prasanna Pattnaik", email: "adfsonepur@gmail.com", contact: "9438060246" },
  { slNo: 29, district: "Sundargarh", name: "Sh. Arun Kumar Sahoo", email: "dfosundargarh@gmail.com", contact: "9437212376" },
  { slNo: 30, district: "Malkangiri", name: "Narasingh Mund", email: "malkangirifisheries@gmail.com", contact: "9437096759" },
];



  return (
     <div className="max-w-6xl mx-auto py-8">
      <div className="text-2xl font-bold">District Fishery Officer (DFO)</div>
      <Table1 columns={dfoHeaders} data={dfoData} />
    </div>
  )
}

export default DFO
