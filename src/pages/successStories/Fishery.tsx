import React from "react";
import SuccessStoriesCard from "../../components/successStoriesCard/SuccessStoriesCard";
import fishery_1 from "../../assets/successPDFS/fishery/Success Story of-Jayanti Sahu.jpeg";
import fishery_1_image from "../../assets/successPDFS/fishery/jayanti_sahu_image.jpeg";
import providing from "../../assets/successPDFS/fishery/Providing solution to fish farmers A tale of a successful entrepreneur.pdf";
import providing_image from "../../assets/successPDFS/fishery/Providing solution to fish farmers A tale of a successful entrepreneur_image.jpeg";
import enterprise from "../../assets/successPDFS/fishery/Enterprising venture on Re-Circulatory Aquaculture System (RAS)in Jagatsinghpur.pdf";
import enterprise_image from "../../assets/successPDFS/fishery/Enterprising venture on Re-Circulatory Aquaculture System_image.jpeg";
const Fishery: React.FC = () => {
  const successStories = [
    { title: "Fishery: Water Turns to Wealth", image: fishery_1_image, description: "", pdf: fishery_1 },
    { title: "Providing solution to fish farmers : A tale of a successful entrepreneur", image: providing_image, description: "", pdf: providing },
    { title: "Enterprising venture on Re-Circulatory Aquaculture System (RAS)in Jagatsinghpur", image: enterprise_image, description: "", pdf: enterprise },
  ];
  return (
    <div className="min-h-screen bg-gray-50 ">
      <h2 className="text-3xl font-bold text-left mb-6 text-gray-800">
        Fishery
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  gap-4">
        {successStories.map((story, index) => (
          <SuccessStoriesCard
            key={index}
            image={story.image}
            title={story.title}
            description={story.description}
            link={story.pdf}
          />
        ))}
      </div>
    </div>
  );
};

export default Fishery;
