import React from "react";
import SuccessStoriesCard from "../../components/successStoriesCard/SuccessStoriesCard";
import dairy from "../../assets/successPDFS/animal/Amrita Dairy.pdf";
import dairy_image from "../../assets/successPDFS/animal/Success_image.jpeg";
import dairyMilk from "../../assets/successPDFS/animal/Highway Dairy_image.jpeg";
import dairyMilk_image from "../../assets/successPDFS/animal/Highway Dairy_image.jpeg";
import brand from "../../assets/successPDFS/animal/Koraput Dairy.pdf";
import nihar from "../../assets/successPDFS/animal/Nihar Behura.pdf";
import shramistha from "../../assets/successPDFS/animal/Sarmistha Satapathy.jpeg";
import shramistha_image from "../../assets/successPDFS/animal/sharmistha_image.jpeg";

const AnimalResource: React.FC = () => {
  const successStories = [
    {
      title: "Dairy: An Exemplary Enterprise of White Revolution",
      image: dairy_image,
      description:
        "This is the success story of an unemployed highly educated woman entrepreneur ",
      pdf: dairy,
    },
    {
      title: "Dairy Milk: Beckons Value Addition for Profit",
      image: dairyMilk_image,
      description: "",
      pdf: dairyMilk,
    },
    {
      title: "Brand Your Cows, Brand Your Product",
      description:
        "Koraput Dairy Farm near Doliamba village of Mahadeiput GP in Koraput district ",
      pdf: brand,
    },
    { title: "Dairy: Dedicated for Social Cause",  description: "MRS. PRIYALAXMI BEURA, W/O SRI NIHAR RANJAN BEURA, AN IITIAN HAS BEEN PROVIDED", pdf: nihar },
    { title: "Dairy: A Profitable Enterprise", image: shramistha_image, description: "", pdf: shramistha },
  ];
  return (
    <div className="min-h-screen bg-gray-50 ">
      <h2 className="text-3xl font-bold text-left mb-6 text-gray-800">
        Animal Resource Development
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

export default AnimalResource;
