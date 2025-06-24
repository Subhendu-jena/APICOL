import React, { useState } from "react";
import ModelDprCard from "../../components/modelDprCard/ModelDprCard";

import agroTractor from "../../assets/pdfs/MODELDPR/agriculture/Agro_Service_Center_Tractor_based.pdf";
import agroHarvest from "../../assets/pdfs/MODELDPR/agriculture/Agro_Service_Center_combine_harvester_based.pdf";
import bakeryAndConfectionary from "../../assets/pdfs/MODELDPR/agriculture/Bakery_and_Confectionery.pdf";
import crop from "../../assets/pdfs/MODELDPR/agriculture/Crop_residue based_products.pdf";
import ground from "../../assets/pdfs/MODELDPR/agriculture/Groundnut_Processing.pdf";
import jute from "../../assets/pdfs/MODELDPR/agriculture/Jute_Based_Industry.pdf";
import maize from "../../assets/pdfs/MODELDPR/agriculture/Maize_Processing_Unit.pdf";
import millet from "../../assets/pdfs/MODELDPR/agriculture/Millet_Processing.pdf";
import oil from "../../assets/pdfs/MODELDPR/agriculture/Oil_Extraction_Mill.pdf";
import pulses from "../../assets/pdfs/MODELDPR/agriculture/Oil_Extraction_Mill.pdf";
import seed from "../../assets/pdfs/MODELDPR/agriculture/Seed_Processing_Unit.pdf";
import soya from "../../assets/pdfs/MODELDPR/agriculture/Soya_Chunk_Processing.pdf";

const DPRAgriculture: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const data = [
    {
      title: "Agro Service Center (Tractor based)",
      description:
        "Detailed project report for establishing a tractor-based agro service center to support small farmers with machinery access.",
      link: agroTractor,
    },
    {
      title: "Agro Service Center (Combine Harvester based)",
      description:
        "Comprehensive guide on setting up a combine harvester-based agro center to improve harvesting efficiency.",
      link: agroHarvest,
    },
    {
      title: "Bakery and Confectionery",
      description:
        "Step-by-step plan for launching a bakery and confectionery unit with insights into equipment and production.",
      link: bakeryAndConfectionary,
    },
    {
      title: "Crop Residue Based Products",
      description:
        "DPR on converting agricultural waste into useful products, promoting sustainability and rural entrepreneurship.",
      link: crop,
    },
    {
      title: "Groundnut Processing",
      description:
        "Project report outlining the setup of a groundnut processing unit for oil and snack production.",
      link: ground,
    },
    {
      title: "Jute Based Industry",
      description:
        "Business plan for a jute-based industry focusing on eco-friendly products like bags and handicrafts.",
      link: jute,
    },
    {
      title: "Maize Processing Unit (Flour)",
      description:
        "Guidelines for establishing a maize flour processing unit, targeting rural and urban consumer markets.",
      link: maize,
    },
    {
      title: "Millet Processing",
      description:
        "DPR for millet processing to support the value chain of this highly nutritious and climate-resilient crop.",
      link: millet,
    },
    {
      title: "Oil Extraction Mill",
      description:
        "Complete report on setting up a small-scale edible oil extraction mill with financial and technical details.",
      link: oil,
    },
    {
      title: "Pulses Processing Unit",
      description:
        "Comprehensive DPR for starting a pulse milling unit to cater to the increasing demand for processed pulses.",
      link: pulses,
    },
    {
      title: "Seed Processing Unit",
      description:
        "Project document for a seed processing unit to ensure quality and availability of certified seeds.",
      link: seed,
    },
    {
      title: "Soya Chunk Processing",
      description:
        "DPR for a soya chunk processing unit focusing on protein-rich food production for vegetarian markets.",
      link: soya,
    },
  ];
  const filteredData = data.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold text-left mb-10 text-gray-800">
          Model DPRs – Agriculture
        </h2>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Search reports..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-auto max-w-md px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <ModelDprCard
              key={index}
              title={item?.title}
              description={item?.description || ""}
              link={item.link}
            />
          ))
        ) : (
          <p className="text-gray-500 col-span-full">No reports found.</p>
        )}
      </div>
    </>
  );
};

export default DPRAgriculture;
