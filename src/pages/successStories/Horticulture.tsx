import React from "react";
import SuccessStoriesCard from "../../components/successStoriesCard/SuccessStoriesCard";
import inspiration from "../../assets/successPDFS/horticulture/An inspiration for many women-Babita Meher_image.jpeg";
import inspirationPDF from "../../assets/successPDFS/horticulture/An inspiration for many women-Babita Meher.pdf";
import empowering from "../../assets/successPDFS/horticulture/Empowering growth through mushroom business_image.jpeg";
import empoweringPDF from "../../assets/successPDFS/horticulture/Empowering growth through mushroom business.pdf";
import kanak_bio from "../../assets/successPDFS/horticulture/Kanak Bio-fertilizer.jpeg";
import kanak_bioPDF from "../../assets/successPDFS/horticulture/Kanak Bio-fertilizer.pdf";
import rasmirekha_mushroom from "../../assets/successPDFS/horticulture/Rashmirekha_Mushroom_image.jpeg";
import rasmirekha_mushroomPDF from "../../assets/successPDFS/horticulture/Rashmirekha_Mushroom.pdf";
import prakriti_frozen from "../../assets/successPDFS/horticulture/Prakriti Frozen Products_image.jpeg";
import prakriti_frozenPDF from "../../assets/successPDFS/horticulture/Prakriti Frozen Products.pdf";

const Horticulture: React.FC = () => {
  const successStories = [
    { title: "Frozen Fruits & Vegetables: An Innovative Intermediary Activity", image: prakriti_frozen, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e", pdf: prakriti_frozenPDF },
    { title: "ଛତୁ ମଞ୍ଜି ଛତୁ ଚାଷ: ଲକ୍ଷ୍ମୀ ହୁଅନ୍ତି ସେଇଠି ଵଶ", image: rasmirekha_mushroom, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e", pdf: rasmirekha_mushroomPDF },
    { title: "Vermicompost Unit: Earns Much - Promotes Organic Farming", image: kanak_bio, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e", pdf: kanak_bioPDF },
    { title: "An inspiration for many women-Babita Meher", image: inspiration, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e", pdf: inspirationPDF },
    { title: "Empowering growth through mushroom business", image: empowering, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e", pdf: empoweringPDF },
  ];
  return (
    <div className="min-h-screen bg-gray-50 ">
      <h2 className="text-3xl font-bold text-left mb-6 text-gray-800">
        Horticulture
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

export default Horticulture;
