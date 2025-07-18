import React from "react";
import SuccessStoriesCard from "../../components/successStoriesCard/SuccessStoriesCard";
// import image1 from "../../assets/agri/aa1.avif";
// import image2 from "../../assets/agri/a2.avif";
// import image3 from "../../assets/agri/a3.avif";
// import image4 from "../../assets/agri/a4.avif";
// import image5 from "../../assets/agri/a5.avif";
// import image6 from "../../assets/agri/a6.avif";
// import image7 from "../../assets/agri/a7.avif";
// import image8 from "../../assets/agri/aa8.avif";
// import image9 from "../../assets/agri/a9.avif";
// import image10 from "../../assets/agri/a10.avif";
// import image11 from "../../assets/agri/a11.avif";
// import image12 from "../../assets/agri/a12.avif";
// import image13 from "../../assets/agri/a13.avif";
// import image14 from "../../assets/agri/a14.avif";
// import seed from "../../assets/successPDFS/1.MKUY_Success Story_Subernapur_Mushroom Spawn Production Unit_Babita Meher (1).pdf";
// import oraganic from "../../assets/successPDFS/2.MKUY_Success Story_Jharsuguda_Ice Plant_Nalinikanta Bhoi.pdf";
import seedProcessing from "../../assets/successPDFS/agriculture/bhulaxmi_image.jpeg";
import seedProcessingPDF from "../../assets/successPDFS/agriculture/Bhulaxmi Seeds.pdf";
import innovate from "../../assets/successPDFS/agriculture/Innovate_image.jpeg";
import innovatePDF from "../../assets/successPDFS/agriculture/Innovate. Automate. Succeed.pdf";
import farmer from "../../assets/successPDFS/agriculture/From Farmer to Flourishing_Image.jpeg";
import farmerPDF from "../../assets/successPDFS/agriculture/From Farmer to Flourishing Entrepreneur.pdf";
import MKUY from "../../assets/successPDFS/agriculture/MKUY paving way towards Farm_image.jpeg";
import MKUYPDF from "../../assets/successPDFS/agriculture/MKUY paving way towards Farm Mechanization through Women Entrepreneurship.pdf";
import Empowering from "../../assets/successPDFS/agriculture/Empowering Growth_image.jpeg";
import EmpoweringPDF from "../../assets/successPDFS/agriculture/Empowering Growth, Nurturing Seeds.pdf";
const Agriculture: React.FC = () => {
  // const successStories = [
  //   {
  //     title: "Seed Processing: A Lucrative Agri Enterprise",
  //     image: image1,
  //     description:
  //       "This is a seed processing unit with processing capacity of 5 MT seeds per hour running successfully at Barapali.",
  //       pdf: seed
  //   },
  //   {
  //     title: "Organic Vegetable Farming in Kandhamal",
  //     image: image2,
  //     description:
  //       "Farmers in Kandhamal have adopted organic farming, yielding higher profits and healthier produce while preserving the environment.",
  //       pdf: oraganic
  //   },
  //   {
  //     title: "Mushroom Cultivation in Mayurbhanj",
  //     image: image3,
  //     description:
  //       "Women-led SHGs in Mayurbhanj have turned mushroom farming into a profitable home-based business.",
  //   },
  //   {
  //     title: "Apiculture Boosts Rural Income",
  //     image: image4,
  //     description:
  //       "Bee-keeping in Balangir has empowered farmers to diversify income through honey production and pollination services.",
  //   },
  //   {
  //     title: "Aquaponics: A Modern Farm in Bhubaneswar",
  //     image: image5,
  //     description:
  //       "A young entrepreneur set up a successful aquaponics system combining fish and vegetable farming with zero waste.",
  //   },
  //   {
  //     title: "Dairy Farming in Ganjam",
  //     image: image6,
  //     description:
  //       "A cooperative dairy model in Ganjam ensures fair prices and has significantly improved farmers' livelihoods.",
  //   },
  //   {
  //     title: "Drip Irrigation in Nuapada",
  //     image: image7,
  //     description:
  //       "Smart water management through drip irrigation has doubled yields and conserved water in drought-prone areas.",
  //   },
  //   {
  //     title: "Millet Mission: Revival in Koraput",
  //     image: image8,
  //     description:
  //       "Koraput farmers are reviving millet cultivation, gaining both nutrition and market value through government support.",
  //   },
  //   {
  //     title: "Poultry Farming by Women SHGs",
  //     image: image9,
  //     description:
  //       "Women-led poultry units in Keonjhar have created sustainable income and employment in the community.",
  //   },
  //   {
  //     title: "Solar Pumps for Irrigation",
  //     image: image10,
  //     description:
  //       "Renewable energy-powered solar pumps have reduced dependency on diesel and improved irrigation reliability in rural belts.",
  //   },
  //   {
  //     title: "Agri-Tech Adoption by Young Farmers",
  //     image: image11,
  //     description:
  //       "Youth in Bargarh are using mobile apps and IoT devices to manage crops, increasing efficiency and profits.",
  //   },
  //   {
  //     title: "Tissue Culture Banana in Cuttack",
  //     image: image12,
  //     description:
  //       "Progressive farmers in Cuttack have adopted tissue culture techniques to grow disease-free, high-yield banana crops.",
  //   },
  //   {
  //     title: "Agro-Forestry in Rayagada",
  //     image: image13,
  //     description:
  //       "Tribal farmers are integrating tree crops with food crops, improving long-term soil fertility and economic returns.",
  //   },
  //   {
  //     title: "Cold Storage Initiative in Kalahandi",
  //     image: image14,
  //     description:
  //       "Setting up of rural cold storage facilities has drastically reduced post-harvest losses and ensured better prices for farmers.",
  //   },
  // ];

  const successStories = [
    {
      title: "Seed Processing: A Lucrative Agri Enterprise",
      image: seedProcessing,
      description:
        "This is a seed processing unit with processing capacity of 5 MT seeds per hour running successfully at Barapali.",
      pdf: seedProcessingPDF,
    },
    {
      title:
        "Innovate. Automate. Succeed : The Entrepreneur's Journey",
      image: innovate,
      description:
        "Victory comes from finding opportunities in problems”. This line best suits to Mrs.Kalpana Pradhan",
      pdf: innovatePDF,
    },
    {
      title: "From Farmer to Flourishing Entrepreneur",
      image: farmer,
      description:
        "Asharam Kalar's Journey in the Pulses Processing and Derivatives Industry through MKUY",
      pdf: farmerPDF,
    },
    {
      title: "MKUY paving way towards Farm Mechanization",
      image: MKUY,
      description:
        "“Victory comes from finding opportunities in problems”. This line best suits to Mrs.Kalpana Pradhan",
      pdf: MKUYPDF,
    },
    {
      title: "Empowering Growth, Nurturing Seeds:A Trailblazing Entrepreneur in Seed Processing",
      image: Empowering,
      description:
        "“Victory comes from finding opportunities in problems”. This line best suits to Mrs.Kalpana Pradhan",
      pdf: EmpoweringPDF,
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50 ">
      <h2 className="text-3xl font-bold text-left mb-6 text-gray-800">
        Agriculture
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

export default Agriculture;
