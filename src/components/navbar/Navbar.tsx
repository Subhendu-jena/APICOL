import { Link } from "react-router-dom";
import apicol from "../../assets/logos/APICOL-Logo.png";
import odishaGov from "../../assets/logos/Seal_of_Odisha.svg";
import SlideInFromLeft from "../animation/SlideInFromLeft";
import SlideInFromRight from "../animation/SlideInFromRight";
import { paths } from "../../route/path";

export default function Header() {
  return (
    <header className=" top-0 z-50">
      <div className="bg-orange-800 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div>
            <span >ଓଡିଶା ସରକାର</span>
              <span className="mx-4">|</span>
            <span>Government of Odisha</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex space-x-2">
              <Link to="#" className="text-sm hover:text-gray-300">
                A-
              </Link>
              <Link to="#" className="text-sm hover:text-gray-300">
                A
              </Link>
              <Link to="#" className="text-sm hover:text-gray-300">
                A+
              </Link>
            </div>
            <div className="flex space-x-2 items-center">
              <Link to="#" className="text-sm hover:text-gray-300">
                Activities
              </Link>
              <span>|</span>
              <Link to="https://grievance-ms-frontend.onrender.com" target="_blank" className="text-sm hover:text-gray-300">
                Grievance Portal
              </Link>
              <span>|</span>
              {/* <Link
                to="https://rtiodisha.gov.in/pa/T1RJLzIzLzgzLzE5"
                className="text-sm hover:text-gray-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                RTI
              </Link>
              <span>|</span> */}
              <Link to="/contact-us/" className="text-sm hover:text-gray-300">
                Contact Us
              </Link>
              <span>|</span>
              <Link to="#" className="text-sm hover:text-gray-300">
                ଓଡିଆ
              </Link>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/apicolodisha/about/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-gray-300"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://x.com/APICOLBBSR"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-gray-300"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.youtube.com/@apicolbhubaneswar7511"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-gray-300"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                href="https://www.facebook.com/apicolodisha/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-gray-300"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* </ScrollAnimate> */}

      {/* Logos */}
      <div className="bg-white py-4 shadow-md flex">
        <div className="container mx-auto px-4 flex flex-row md:flex-row justify-between items-center">
          <SlideInFromLeft>
            <Link to={paths.home}>
              <div className="flex items-center mb-4 md:mb-0 ">
                <img
                  src={apicol}
                  alt="APICOL Logo"
                  className="mr-4 w-20 h-20"
                />
                <div className="hidden sm:block md:block">
                  <h3 className="text-lg font-bold">
                    ଓଡ଼ିଶା କୃଷି ପ୍ରୋତ୍ସାହନ ଏବଂ ପୁଞ୍ଜି ଲଗାଣ ନିଗମ ଲିଃ <br />
                    The Agricultural Promotion and Investment <br />
                    Corporation of Odisha Limited (APICOL)
                  </h3>
                </div>
              </div>
            </Link>
          </SlideInFromLeft>
          <SlideInFromRight>
            <div className="flex items-center ">
              <img
                src={odishaGov}
                alt="Odisha Government Logo"
                className="mr-4 w-20 h-20"
              />
              <div className="hidden md:block">
                <h3 className="text-lg font-bold">
                  କୃଷି ଓ କୃଷକ ସଶକ୍ତିକରଣ ବିଭାଗ, ଓଡିଶା ସରକାର <br />
                  Department of Agriculture and Farmers' Empowerment <br />
                  Government Of Odisha
                </h3>
              </div>
            </div>
          </SlideInFromRight>
        </div>
      </div>

      {/* Navigation Menu */}
    </header>
  );
}
