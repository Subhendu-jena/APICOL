import React from 'react';
import ModelDprCard from '../../components/modelDprCard/ModelDprCard';

import milk_2kl from '../../assets/pdfs/MODELDPR/ah&vs/2_KL_Milk_Processing_Unit.pdf';
import milk_10kl from '../../assets/pdfs/MODELDPR/ah&vs/10_KL_Milk_Processing_Unit.pdf';
import iceCream_500LPH from '../../assets/pdfs/MODELDPR/ah&vs/500LPH_Ice_Cream_Plant.pdf';
import breeder from '../../assets/pdfs/MODELDPR/ah&vs/Commercial_Breeder_Farm.pdf';
import broiler_10k from '../../assets/pdfs/MODELDPR/ah&vs/Commercial_Broiler_Farm_10000EC.pdf';
import dairy_8cows from '../../assets/pdfs/MODELDPR/ah&vs/Commercial Dairy Farming_8 Cows.pdf';
import diary_10 from '../../assets/pdfs/MODELDPR/ah&vs/Commercial Dairy Farming_10 Cows.pdf';
import duck_1k from '../../assets/pdfs/MODELDPR/ah&vs/Commercial Duck Farming (1000).pdf';
import goat_50 from '../../assets/pdfs/MODELDPR/ah&vs/Commercial Goat Farming (50+3).pdf';
import goat_100 from '../../assets/pdfs/MODELDPR/ah&vs/Commercial Goat Farming (100+5).pdf';
import modern from '../../assets/pdfs/MODELDPR/ah&vs/Commercial Modern Slaughtering House.pdf';
import pig from '../../assets/pdfs/MODELDPR/ah&vs/Commercial Pig Farming (50+5).pdf';
import sheep from '../../assets/pdfs/MODELDPR/ah&vs/Commercial Sheep Farming (100+5).pdf';
import egg from '../../assets/pdfs/MODELDPR/ah&vs/Egg_Processing _Egg_Powder.pdf';
import feed from '../../assets/pdfs/MODELDPR/ah&vs/Feed Plant_Cattle and Poultry.pdf';
import meat from '../../assets/pdfs/MODELDPR/ah&vs/Meat Proessing.pdf';
import milk from '../../assets/pdfs/MODELDPR/ah&vs/Milk Tanker.pdf';
import refrigerated from '../../assets/pdfs/MODELDPR/ah&vs/Refrigerated Van.pdf';
import sfDairy8 from '../../assets/pdfs/MODELDPR/ah&vs/Self Finance_Commercial Dairy Farming_8 Cows.pdf';
import sfDairy10 from '../../assets/pdfs/MODELDPR/ah&vs/Self Finance_Commercial Dairy Farming_10 Cows.pdf';
import sfGoat from '../../assets/pdfs/MODELDPR/ah&vs/Self Finance_Commercial Goat Farming (50+3).pdf';

const DPRAHandVS: React.FC = () => {
  const data = [
    { title: '2 KL Milk Processing Unit', description: 'Setup for milk processing at 2 kiloliters capacity.', link: milk_2kl },
    { title: '10 KL Milk Processing Unit', description: 'Large scale milk processing plant with 10 kiloliters capacity.', link: milk_10kl },
    { title: 'Ice Cream Plant (500 LPH)', description: 'Plant design for 500 liters/hour ice cream production.', link: iceCream_500LPH },
    { title: 'Commercial Breeder Farm', description: 'Infrastructure and cost of a breeder poultry farm.', link: breeder },
    { title: 'Commercial Broiler Farm (10,000 EC)', description: 'High-capacity broiler farm for 10,000 bird units.', link: broiler_10k },
    { title: 'Dairy Farming (8 Cows)', description: 'Model DPR for small-scale dairy farming with 8 cows.', link: dairy_8cows },
    { title: 'Dairy Farming (10 Cows)', description: 'Model DPR for dairy farming setup with 10 cows.', link: diary_10 },
    { title: 'Duck Farming (1000)', description: 'Model project for commercial duck farming for 1000 birds.', link: duck_1k },
    { title: 'Goat Farming (50+3)', description: 'Small-scale goat farming with 50 goats and 3 bucks.', link: goat_50 },
    { title: 'Goat Farming (100+5)', description: 'Mid-scale goat farming project with 100 goats and 5 bucks.', link: goat_100 },
    { title: 'Modern Slaughter House', description: 'DPR for a hygienic, modern slaughtering facility.', link: modern },
    { title: 'Pig Farming (50+5)', description: 'Model pig farming unit for commercial production.', link: pig },
    { title: 'Sheep Farming (100+5)', description: 'Setup for raising 100 sheep with 5 rams.', link: sheep },
    { title: 'Egg Processing Unit', description: 'Unit for processing eggs into egg powder.', link: egg },
    { title: 'Feed Plant', description: 'Cattle and poultry feed production unit.', link: feed },
    { title: 'Meat Processing Unit', description: 'Commercial meat processing setup.', link: meat },
    { title: 'Milk Tanker', description: 'Design for hygienic milk transportation tanker.', link: milk },
    { title: 'Refrigerated Van', description: 'Insulated van for dairy and meat transport.', link: refrigerated },
    { title: 'Self-Financed Dairy Farming (8 Cows)', description: 'DPR for self-funded dairy farming with 8 cows.', link: sfDairy8 },
    { title: 'Self-Financed Dairy Farming (10 Cows)', description: 'Self-financed model for 10 cow dairy unit.', link: sfDairy10 },
    { title: 'Self-Financed Goat Farming (50+3)', description: 'DPR for goat farming without subsidy support.', link: sfGoat },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6 md:px-12">
      <h2 className="text-3xl font-bold text-left mb-10 text-gray-800">Model DPRs – AH&VS</h2>
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

export default DPRAHandVS;
