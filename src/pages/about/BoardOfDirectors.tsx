import React from "react";
import arabinda from "../../assets/all/arabinda.png";
import subhanranshu from "../../assets/chiefs/subhanranshu_Mishra_md.jpeg";
import Shubham from "../../assets/chiefs/Sh. Shubham Saxena, Director, Agriculture and Food Production, Odisha.png";
import noImage from '../../assets/no_user.png'
interface Director {
  name: string;
  title: string;
  imageUrl: string;
  description?: string;
}

const directors: Director[] = [
  {
    name: "Dr. Arabinda Kumar Padhee",
    title: "IAS, Principal Secretary, Department of Agriculture & Farmers Empowerment, Odisha & Chairman, APICOL",
    imageUrl: arabinda,
  },
  {
    name: "Sri Shubhranshu Mishra",
    title: "OAS, Additional Secretary to Government, Directorate of Agriculture & Food Production, Bhubaneswar & Managing Director, APICOL",
    imageUrl: subhanranshu,
  },
  {
    name: "Sri Bhupendra Singh Poonia",
    title: "IAS, Managing Director, APICOL, Bhubaneswar & Director, APICOL",
    imageUrl: noImage,
  },
  {
    name: "Sri Subham Saxena",
    title: "IAS, Director of Agriculture & Food Production, Odisha & Director, APICOL",
    imageUrl: Shubham,
  },
  {
    name: "Sri Vijay Kumar Kulange",
    title: "IAS, Director, AH & VS & Director, APICOL",
    imageUrl: noImage,
  },
  {
    name: "Sri Kalunge Gorakh Waman",
    title: "IFS, Director of Horticulture, Odisha & Director, APICOL",
    imageUrl: noImage,
  },
  {
    name: "Sri Susanta Kumar Singh",
    title: "OAS (SAG), Additional Secretary to Government, P.E. Department, Odisha, Bhubaneswar & Director, APICOL",
    imageUrl: noImage,
  },
  {
    name: "Sri Krushna Chandra Satapathy",
    title: "OAS (SAG), Additional Secretary to Government, Finance Department, Government of Odisha & Director, APICOL",
    imageUrl: noImage,
  },
  {
    name: "Sri Purna Chandra Dalai",
    title: "OAS (SAG), Additional Secretary to Government, F & ARD Department, Government of Odisha & Director, APICOL",
    imageUrl: noImage,
  },
  {
    name: "Prof. Niranjan Panda",
    title: "Dean (Research), OUAT, Bhubaneswar & Director, APICOL",
    imageUrl: noImage,
  },
  {
    name: "Dr. Pramod Kumar Sahoo",
    title: "Director, CIFA, Kausalyaganga, Bhubaneswar & Director, APICOL",
    imageUrl: noImage,
  },
];


const BoardOfDirectors: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-2xl font-medium text-center text-yellow-600 ">Meet Our </h1>
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Board of Directors
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {directors.map((director, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition"
          >
            <img
              src={director.imageUrl}
              alt={director.name}
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
        <div className="bottom-0">    <h2 className="text-xl font-semibold text-gray-800">
              {director.name}
            </h2>
            <p className="text-sm text-orange-600 mb-2">{director.title}</p></div>
            {/* {director.description && (
              <p className="text-gray-600 text-sm">{director.description}</p>
            )} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardOfDirectors;
