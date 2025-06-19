import React from 'react';
import ModelDprCard from '../../components/modelDprCard/ModelDprCard';

import aquaShop_500 from '../../assets/pdfs/MODELDPR/Fishery/Aqua Shop500.pdf';
import aquaShop_1000 from '../../assets/pdfs/MODELDPR/Fishery/Aqua Shop1000.pdf';
import bio_floc_10_BF from '../../assets/pdfs/MODELDPR/Fishery/Bio-Floc- 10 Tanks Bank Finance.pdf';
import bio_floc_25_BF from '../../assets/pdfs/MODELDPR/Fishery/Bio-Floc- 25 Tanks Bank Finance.pdf';
import bio_floc_50_BF from '../../assets/pdfs/MODELDPR/Fishery/Bio-Floc- 50 Tanks Self- Finance.pdf';
import bio_floc_10_SF from '../../assets/pdfs/MODELDPR/Fishery/Bio-Floc-10 Tanks Self-Finance.pdf';
import bio_floc_25_SF from '../../assets/pdfs/MODELDPR/Fishery/Bio-Floc-25 Tanks Self-Finance.pdf';
import fish_seed_10M_BF from '../../assets/pdfs/MODELDPR/Fishery/Fish Seed Hatchery - 10 million Fry- Bank Finance.pdf';
import fish_seed_10M_SF from '../../assets/pdfs/MODELDPR/Fishery/Fish Seed Hatchery- 10 million Fry- Self-Finance.pdf';
import fish_seed_hatchery from '../../assets/pdfs/MODELDPR/Fishery/Fish Seed Hatchery.pdf';
import pearl_culture_BF from '../../assets/pdfs/MODELDPR/Fishery/Freshwater Pearl Culture- 1 acre- Bankable.pdf';
import pearl_culture_SF from '../../assets/pdfs/MODELDPR/Fishery/Freshwater Pearl Culture- 1 acre- Self-Finance.pdf';
import ice_plant_40MT_BF from '../../assets/pdfs/MODELDPR/Fishery/Ice Plant-40 MT-Bank Finance.pdf';
import ice_plant_40MT_SF from '../../assets/pdfs/MODELDPR/Fishery/Ice Plant-40 MT-Self Finance.pdf';
import ice_plant from '../../assets/pdfs/MODELDPR/Fishery/Ice Plant.pdf';
import ice_plant_SF from '../../assets/pdfs/MODELDPR/Fishery/Ice Plant-Self-Finance.pdf';
import protein_fish_feed from '../../assets/pdfs/MODELDPR/Fishery/Insect Based Protein Fish Feed Unit-Black Soldier Fly (BSF)-10 TPD-Bank Finance.pdf';
import isulated_van from '../../assets/pdfs/MODELDPR/Fishery/Insulated Van.pdf';
import intra_fish_seed_hatchery from '../../assets/pdfs/MODELDPR/Fishery/Intra Sector-Fish Seed Hatchery-Prawn Seed Hatchery-Commercial Fish Farming-Bank Finance.pdf';
import ornamental_fish_breeding from '../../assets/pdfs/MODELDPR/Fishery/Ornamental Fish Breeding & Marketing Bank Finance.pdf';
import shrimp_breeding from '../../assets/pdfs/MODELDPR/Fishery/Shrimp Farming-5 Acre WSA-(10 nos 0.5 ac WSA each).pdf';

const DPRFishery: React.FC = () => {
  const data = [
    { title: 'Aqua Shop (500 sq. ft.)', description: 'Small-scale aquaculture input and equipment shop.', link: aquaShop_500 },
    { title: 'Aqua Shop (1000 sq. ft.)', description: 'Large aquaculture store with expanded capacity.', link: aquaShop_1000 },
    { title: 'Bio-Floc (10 Tanks, Bank Finance)', description: '10 tank bio-floc fish farming model with bank financing.', link: bio_floc_10_BF },
    { title: 'Bio-Floc (25 Tanks, Bank Finance)', description: '25 tank bio-floc setup designed for institutional financing.', link: bio_floc_25_BF },
    { title: 'Bio-Floc (50 Tanks, Self Finance)', description: 'Large self-financed bio-floc farming model.', link: bio_floc_50_BF },
    { title: 'Bio-Floc (10 Tanks, Self Finance)', description: 'Entry-level self-financed bio-floc aquaculture model.', link: bio_floc_10_SF },
    { title: 'Bio-Floc (25 Tanks, Self Finance)', description: 'Medium-scale self-funded bio-floc setup.', link: bio_floc_25_SF },
    { title: 'Fish Seed Hatchery (10M Fry, Bank Finance)', description: 'Hatchery project for 10 million fry with bank loan model.', link: fish_seed_10M_BF },
    { title: 'Fish Seed Hatchery (10M Fry, Self Finance)', description: 'Self-financed seed hatchery model with 10M fry capacity.', link: fish_seed_10M_SF },
    { title: 'General Fish Seed Hatchery', description: 'Comprehensive DPR for a fish seed hatchery.', link: fish_seed_hatchery },
    { title: 'Freshwater Pearl Culture (Bank Finance)', description: 'Bankable model for freshwater pearl farming on 1 acre.', link: pearl_culture_BF },
    { title: 'Freshwater Pearl Culture (Self Finance)', description: 'Pearl farming DPR for entrepreneurs without financing.', link: pearl_culture_SF },
    { title: 'Ice Plant (40 MT, Bank Finance)', description: 'Bank-financed cold storage and ice plant with 40MT capacity.', link: ice_plant_40MT_BF },
    { title: 'Ice Plant (40 MT, Self Finance)', description: 'Self-financed cold storage DPR for aquaculture.', link: ice_plant_40MT_SF },
    { title: 'General Ice Plant', description: 'Ice production and preservation plant for fish value chain.', link: ice_plant },
    { title: 'Ice Plant (Self Finance)', description: 'Alternative ice plant DPR for individual entrepreneurs.', link: ice_plant_SF },
    { title: 'Insect-based Fish Feed (BSF)', description: 'Bankable fish feed production unit using Black Soldier Fly larvae.', link: protein_fish_feed },
    { title: 'Insulated Van', description: 'Mobile cold-chain logistics for fish transportation.', link: isulated_van },
    { title: 'Integrated Hatchery & Farming', description: 'Prawn hatchery, seed hatchery & farming - all in one DPR.', link: intra_fish_seed_hatchery },
    { title: 'Ornamental Fish Breeding', description: 'Breeding, marketing and export model for ornamental fishes.', link: ornamental_fish_breeding },
    { title: 'Shrimp Farming (5 Acre WSA)', description: 'High-yield shrimp farming setup across 5 acres.', link: shrimp_breeding },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6 md:px-12">
      <h2 className="text-3xl font-bold text-left mb-10 text-gray-800">Model DPRs – Fishery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <ModelDprCard
            key={index}
            title={item.title}
            description={item.description}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default DPRFishery;
