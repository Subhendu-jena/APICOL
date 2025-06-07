// import React from "react";
// import { Star } from "lucide-react";
// interface CardProps {
//   cardata: {
//     image?: string;
//     heading: string;
//     description: string;
//     name: string;
//     designation: string;
//   };
// }
// const TestimonialCard: React.FC<CardProps> = ({cardata}) => {
//   return (
//     <div className="bg-[#111] text-black h-[250px] rounded-xl p-6 flex flex-col sm:flex-row items-center gap-6 border border-black/20 max-w-2xl mx-auto">
//       {/* Image */}
//       <div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
//         <img
//           src="https://i.pravatar.cc/300"
//           alt="User"
//           className="w-full h-full object-cover grayscale"
//         />
//       </div>

//       {/* Content */}
//       <div className="flex-1 space-y-4">
//         <h2 className="text-xl font-semibold text-left">{cardata.heading}</h2>
//         <p className="text-gray-300 text-left text-sm">
//           {cardata.description ||
//           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
//         </p>

//         {/* Stars */}
//         <div className="flex text-green-400">
//           {Array.from({ length: 5 }).map((_, i) => (
//             <Star key={i} fill="currentColor" className="w-5 h-5" />
//           ))}
//         </div>

//         {/* Name */}
//         <div>
//           <h3 className="font-semibold text-left">{cardata.name}</h3>
//           <p className="text-gray-400 text-sm text-left">{cardata.designation}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestimonialCard;



import React from "react";

interface TestimonialCardProps {
  image: string;
  name: string;
  title: string;
  quote: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  image,
  name,
  title,
  quote,
}) => {
  return (
    <div className="max-w-md mx-auto bg-gray-300 rounded-lg shadow-lg text-center p-6 relative">
      
      {/* Profile Image */}
      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white absolute -top-12 left-1/2 transform -translate-x-1/2">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="mt-16">
        <p className="text-gray-600 text-sm italic">
          <span className="text-orange-500 text-xl font-bold mr-1">“</span>
          {quote}
          <span className="text-orange-500 text-xl font-bold ml-1">”</span>
        </p>
        <h3 className="mt-4 font-bold text-orange-600">{name}</h3>
        <p className="text-sm text-gray-500">{title}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
