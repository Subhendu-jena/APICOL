import { FileText } from "lucide-react";
import React from "react";
import no_image from "../../assets/no_image.jpg";
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
    // <Link  target="_blank">
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
                  <hr className="mx-10 my-5" />
                  {description ||
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"}
                  {/* <motion.div
                    whileHover={{ opacity: [1, 0, 1] }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                    className="mx-auto my-5 flex justify-center items-center"
                  > */}
                  <div className="mx-auto my-5 flex justify-center items-center">

                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bottom-0 bg-gradient-to-r from-orange-600 to-orange-300 text-white rounded-lg font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all"
                      >
                      View PDF <FileText size={16} />
                    </a>
                      </div>
                  {/* </motion.div> */}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    // </Link>
  );
};

export default HoverCard;
