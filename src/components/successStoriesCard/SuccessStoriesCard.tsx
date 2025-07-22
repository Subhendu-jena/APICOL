import { Eye } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import no_image from '../../assets/no_image.jpg'

interface HoverCardProps {
  image?: string;
  title: string;
  description?: string;
  link?: string;
}

const HoverCard: React.FC<HoverCardProps> = ({
  image,
  title,
  description,
  link = "#",
}) => {
  return (
    <Link to={link} target="_blank">
      <div className="relative overflow-hidden rounded-xl shadow-lg group h-[320px] w-full">
        {/* Image */}
        <img
          src={image ?? no_image}
          alt={title}
          className="w-full h-full object-cover transition duration-500 group-hover:blur-sm"
        />

        {/* Text Overlay */}
        <div className="absolute bottom-0 left-0 w-full bg-white/80 backdrop-blur-md transition-all duration-500 group-hover:h-2/3 h-20 px-4 py-3 overflow-hidden">
          <div className="transition-transform duration-500 group-hover:-translate-y-1">
            <h3 className="text-[14px]/4 text-center font-semibold text-gray-900">
              {title}
            </h3>

            {description && (
              <>
                {" "}
                <p className="text-[12px]/4 text-gray-700 text-center text-clamp-3 hidden group-hover:block ">
                <hr  className="mx-10 my-5"/>
                  {description}
                <Eye  className="mx-auto my-5 flex justify-center items-center"/>
                </p>
                </>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HoverCard;
