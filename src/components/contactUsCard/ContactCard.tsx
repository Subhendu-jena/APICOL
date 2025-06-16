import React from "react";
interface ContactCardProps {
  title: string;
}
const ContactCard: React.FC<ContactCardProps> = ({ title }) => {
  return (
    <div className=" flex items-center justify-center ">
      <div className="relative w-80 h-48 bg-yellow-200 rounded-2xl shadow-lg flex items-center justify-center text-green-600 font-semibold text-xl transition-transform duration-300 hover:scale-105">
        <div className="absolute top-0 z-10 right-0 w-20 h-10 bg-orange-500 clip-ribbon-top transition-all duration-300 hover:bg-orange-600 hover:rotate-3" />

        <div className="absolute bottom-0 z-10 left-0 w-20 h-10 bg-orange-500 clip-ribbon-bottom transition-all duration-300 hover:bg-orange-600 hover:-rotate-3" />
    <div className="mx-auto flex justify-center items-center p-10 ">

        {title}
    </div>
      </div>
    </div>
  );
};

export default ContactCard;
