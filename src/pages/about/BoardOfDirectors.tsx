import React from "react";
import prem from '../../assets/chiefs/subhanranshu_Mishra_md.jpeg'
import rohit from '../../assets/images/boardOfDirectors/Sri-Rohit-Kumar-Lenka.png'
import biswa from '../../assets/images/boardOfDirectors/Sri-Biswa-Mohan-Ray.png'
import nidhi from '../../assets/images/boardOfDirectors/Sri-Nidhi-Kumar-Rautray.png'
import saroj from '../../assets/images/boardOfDirectors/Dr.-Saroj-Kumar-Swain.png'
import niranjan from '../../assets/images/boardOfDirectors/CMA-Niranjan-Mishra.png'
interface Director {
  name: string;
  title: string;
  imageUrl: string;
  description?: string;
}

const directors: Director[] = [
  {
    name: "Sh. Shubhranshu Mishra",
    title: "Managing Director, APICOL",
    imageUrl: prem,
    description: "Oversees board operations and strategy.",
  },
  {
    name: "Sri Rohit Kumar Lenka",
    title: "IFS,(RR-2007), Director of Horticulture,Odisha, Bhubaneswar & Director, APICOL",
    imageUrl: rohit,
    description: "Leads the executive team and daily operations.",
  },
  {
    name: "Sri Biswa Mohan Ray",
    title: "OAS(SB)Special Secretary to Govt.F&ARD Department ., BBSR & Director, APICOL",
    imageUrl: biswa,
    description: "Manages financial planning and reporting.",
  },
  {
    name: "Sri Nidhi Kumar Rautray",
    title: "Special Secretary to Govt. Finance Dept., Odisha, Bhubaneswar & Director APICOL",
    imageUrl: nidhi,
    description: "Leads technical vision and infrastructure.",
  },
  {
    name: "Dr. Saroj Kumar Swain",
    title: "Director, CIFA, Kaushalyagang, Bhubaneswar & Director APICOL",
    imageUrl: saroj,
    description: "Leads technical vision and infrastructure.",
  },
  {
    name: "CMA Niranjan Mishra",
    title: "Independent Director",
    imageUrl: niranjan,
    description: "Leads technical vision and infrastructure.",
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
