import React from "react";
import SuccessStoriesCard from "../../components/successStoriesCard/SuccessStoriesCard";
import krushi from "../../assets/successPDFS/integratedFarming/Smt. Preetinanda Baral-Integrated Farming.jpeg";
import krushi_image from "../../assets/successPDFS/integratedFarming/Preetinanda  Baral-Integrated  Farming_image.jpeg";
import women from "../../assets/successPDFS/integratedFarming/A Women Entrepreneur revolutionizing the Farm Business with.pdf";
import women_image from "../../assets/successPDFS/integratedFarming/A Women Entrepreneur revolutionizing the Farm Business with_image.jpeg";
import farm from "../../assets/successPDFS/integratedFarming/MKUY_Success Story_Bhadrak_Integrated Farming_Jhulani Bharati.pdf";
import farm_image from "../../assets/successPDFS/integratedFarming/MKUY_Success Story_Bhadrak_Integrated Farming_Jhulani Bharati_image.jpeg";
import blossoms from "../../assets/successPDFS/integratedFarming/Deogarh_Refrigerated Van_Sebati Pradhan.pdf";
import blossoms_image from "../../assets/successPDFS/integratedFarming/Deogarh_Refrigerated Van_Sebati Pradhan_image.jpeg";
const IntegratedFarming: React.FC = () => {
  const successStories = [
    { title: "ସମନ୍ୱିତ କୃଷି ସଭିଏଁ ଖୁସି", image: krushi_image, description: "", pdf: krushi },
    {
      title:
        "A Women Entrepreneur revolutionizing the Farm Business with Passion and Perseverance",
      image: women_image,
      description: "Mrs. Kiranbala Sahu, a self-motivated women entrepreneur, aged 36 hailing",
      pdf: women,
    },
    {
      title:
        "Diversifying Farm Income through Integrated Farming- A story of a Woman Entrepreneur",
      image: farm_image,
      description: "Jhulani Bharati, resides in the village of Kotasiri within the Bhandaripokhari",
      pdf: farm,
    },
    {
      title:
        "From Blossoms to Business: The Inspiring Journey of Mrs. Sevati Pradhan in Floriculture Entrepreneurship",
      image: blossoms_image,
      description: "Mrs. Sevati Pradhan, based in Bhatsing village under Barkote Block of Deogarh district",
      pdf: blossoms,
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50 ">
      <h2 className="text-3xl font-bold text-left mb-6 text-gray-800">
        Integrated Farming
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

export default IntegratedFarming;
