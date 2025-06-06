// import React, { useState, useEffect } from "react";
// import {
//   Facebook,
//   Twitter,
//   Instagram,
//   Linkedin,
//   FileText,
//   ZoomIn,
//   ZoomOut,
//   Globe,
//   Search,
// } from "lucide-react";
// import { Menu, X, ChevronDown } from "lucide-react";
// import seal from "../../assets/logos/Seal_of_Odisha.svg.svg";
// import apicol from "../../assets/logos/APICOL-Logo.png";
// const MainNav: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const menuItems = [
//     { name: "Home", hasSubmenu: false },
//     { name: "About Us", hasSubmenu: false },
//     { name: "Schemes", hasSubmenu: false },
//     { name: "Apply Online", hasSubmenu: false },
//     { name: "Success Stories", hasSubmenu: false },
//     { name: "Reports", hasSubmenu: false },
//     { name: "Notices", hasSubmenu: false },
//     { name: "Downloads", hasSubmenu: false },
//     { name: "Gallery", hasSubmenu: false },
//   ];

//   return (
//     <div className="bg-black shadow-md">
//       <div className="container mx-auto">
//         {/* Top Section with Logos */}
//         <div className="flex justify-between items-center py-4 px-30 border-b">
//           {/* <Logo type="primary" />
//           <Logo type="secondary" className="hidden md:block" /> */}
//           <div className="flex items-center gap-2">
//             <img src={apicol} alt="" className="w-20 h-20" />
//             <p className="text-white text-[14px] font-bold">
//               ଓଡ଼ିଶା କୃଷି ପ୍ରୋତ୍ସାହନ ଏବଂ ପୁଞ୍ଜି ଲଗାଣ ନିଗମ ଲିଃ
//               <br /> The Agricultural Promotion and Investment <br />
//               Corporation of Odisha Limited (APICOL)
//             </p>
//           </div>
//           <div className="flex items-center gap-2">
//             <p className="text-white text-[14px] font-bold text-right">
//               କୃଷି ଓ କୃଷକ ସଶକ୍ତିକରଣ ବିଭାଗ, ଓଡିଶା ସରକାର
//               <br />
//               Department of Agriculture and Farmers' Empowerment
//               <br />
//               Government Of Odisha
//             </p>
//             <img src={seal} alt="" className="w-20 h-20" />
//           </div>
//         </div>

//         {/* Navigation Section */}
//         <div className="">
//           {/* Mobile Menu Button */}
//           <div className="md:hidden flex justify-end">
//             <button
//               className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//             >
//               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex justify-center">
//             {menuItems.map((item) => (
//               <div key={item.name} className="relative group">
//                 <a
//                   href="#"
//                   className="flex items-center  text-gray-200 hover:text-orange-500 py-2 transition-colors font-medium text-[12px]"
//                 >
//                   <span>{item.name}

//                   </span>
//                   <span className="mx-2 text-white hover:text-white">|</span>
//                   {item.hasSubmenu && (
//                     <ChevronDown
//                       size={14}
//                       className="group-hover:transform group-hover:rotate-180 transition-transform"
//                       />
//                   )}  
//                 </a>
//                 {item.hasSubmenu && (
//                   <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg rounded-lg mt-1 py-2">
//                     <a
//                       href="#"
//                       className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-100"
//                     >
//                       Submenu Item 1
//                     </a>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-100"
//                     >
//                       Submenu Item 2
//                     </a>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-100"
//                     >
//                       Submenu Item 3
//                     </a>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </nav>

//           {/* Mobile Navigation */}
//           {isMenuOpen && (
//             <div className="md:hidden mt-4">
//               {menuItems.map((item) => (
//                 <div key={item.name}>
//                   <a
//                     href="#"
//                     className="flex items-center justify-between px-4 py-2 text-gray-200 hover:bg-gray-100"
//                   >
//                     <span>{item.name}</span>
//                     {item.hasSubmenu && <ChevronDown size={16} />}
//                   </a>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };
// const TopBar: React.FC = () => {
//   const [fontSize, setFontSize] = useState<number>(16);

//   useEffect(() => {
//     document.documentElement.style.fontSize = `${fontSize}px`;
//   }, [fontSize]);

//   const increaseFontSize = () => {
//     if (fontSize < 24) {
//       setFontSize((prevSize) => prevSize + 1);
//     }
//   };

//   const decreaseFontSize = () => {
//     if (fontSize > 14) {
//       setFontSize((prevSize) => prevSize - 1);
//     }
//   };

//   return (
//     <div className="bg-orange-500 text-white">
//       <div className="container mx-auto">
//         <div className="flex flex-col md:flex-row justify-between items-center  px-4">
//           {/* Left Section */}
//           <div className="flex items-center space-x-6">
//             <div className="flex items-center space-x-2">
//               <Globe size={16} />
//               <span className="text-[14px]">Screen Reader</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <span className="text-[14px]">Text Size:</span>
//               <button
//                 onClick={decreaseFontSize}
//                 className="p-1 hover:bg-[#2c5aa7] rounded transition-colors"
//                 aria-label="Decrease font size"
//               >
//                 <ZoomOut size={14} />
//               </button>
//               <button
//                 onClick={increaseFontSize}
//                 className="p-1 hover:bg-[#2c5aa7] rounded transition-colors"
//                 aria-label="Increase font size"
//               >
//                 <ZoomIn size={14} />
//               </button>
//             </div>
//           </div>

//           {/* Right Section */}
//           <div className="flex items-center space-x-6">
//             <div className="flex items-center space-x-4">
//               <a
//                 href="#"
//                 className="hover:text-gray-200 transition-colors text-[14px] flex items-center space-x-1"
//               >
//                 <FileText size={14} />
//                 <span>RTI</span>
//               </a>
//               <a
//                 href="#"
//                 className="hover:text-gray-200 transition-colors text-[14px] flex items-center space-x-1"
//               >
//                 <Search size={14} />
//                 <span>Search</span>
//               </a>
//             </div>
//             <div className="h-4 w-px bg-white/30" />
//             <div className="flex items-center space-x-3">
//               <a
//                 href="#"
//                 className="hover:text-gray-200 transition-colors"
//                 aria-label="Facebook"
//               >
//                 <Facebook size={14} />
//               </a>
//               <a
//                 href="#"
//                 className="hover:text-gray-200 transition-colors"
//                 aria-label="Twitter"
//               >
//                 <Twitter size={14} />
//               </a>
//               <a
//                 href="#"
//                 className="hover:text-gray-200 transition-colors"
//                 aria-label="Instagram"
//               >
//                 <Instagram size={14} />
//               </a>
//               <a
//                 href="#"
//                 className="hover:text-gray-200 transition-colors"
//                 aria-label="LinkedIn"
//               >
//                 <Linkedin size={14} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// const Navbar: React.FC = () => {
//   return (
//     <>
//       <TopBar />
//       <MainNav />
//     </>
//   );
// };

// export default Navbar;





import { useState } from "react";
import { Link } from "react-router-dom";
import ScrollAnimate from "../animation/scrollAnimate";
import apicol from "../../assets/logos/APICOL-Logo.png"
import odishaGov from "../../assets/logos/Seal_of_Odisha.svg"
import SlideInFromLeft from "../animation/SlideInFromLeft";
import SlideInFromRight from "../animation/SlideInFromRight";
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const menuItems = [
    { name: "Home", href: "/" },
    {
      name: "About us",
      href: "/about-us",
      dropdown: [
        "About APICOL",
        "Board of Directors",
        "Organogram",
        "Managing Director's message",
        "RTI",
      ],
    },
    {
      name: "Schemes",
      href: "#",
      dropdown: [
        "Mukhyamantri Krushi Udyog Yojana (MKUY)",
        "Financial assistance to Cold storages",
        "Agriculture Entrepreneurship Promotion Scheme (AEPS)",
        "Prime Minister Formalization of Micro Food Processing Enterprises (PMFME)",
        "Agriculture Export Policy (AEP)",
      ],
    },
    {
      name: "Apply Online",
      href: "#",
      dropdown: [
        "Mukhyamantri Krushi Udyog Yojana (MKUY)",
        "Financial assistance to Cold storages",
        "Agriculture Entrepreneurship Promotion Scheme (AEPS)",
        "Prime Minister Formalization of Micro Food Processing Enterprises (PMFME)",
        "Agriculture Export Policy (AEP)",
      ],
    },
    {
      name: "Success Stories",
      href: "#",
      dropdown: [
        "Agriculture",
        "Horticulture",
        "Animal Resource Development",
        "Fishery",
        "Integrated Farming",
      ],
    },
    {
      name: "Reports",
      href: "#",
      dropdown: ["Annual Reports", "Study Reports"],
    },
    { name: "Notices", href: "/notice" },
    {
      name: "Downloads",
      href: "#",
      dropdown: [
        "Model DPR",
        "Brief Project Profile",
        "Presentations",
        "Technical information",
        "Mobile Apps",
        "District Managers' List",
        "District Nodal Officers List",
        "Block Level Officers List",
        "Suppliers' List",
        "Bankers' List",
      ],
    },
    { name: "Entrepreneurs", href: "/ent" },
    {
      name: "Gallery",
      href: "#",
      dropdown: ["Photos", "Videos"],
    },
  ];

  function toggleMobileDropdown(index: any) {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  }

  return (
    <header className=" top-0 z-50">
      {/* Top Banner */}
       <ScrollAnimate animationClass="animate-fade-in">
      <div className="bg-orange-800 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div>
            <span className="mr-4">ଓଡିଶା ସରକାର</span>
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
              <Link to="#" className="text-sm hover:text-gray-300">
                Entrepreneurs' Corner
              </Link>
              <span>|</span>
              <Link
                to="https://rtiodisha.gov.in/pa/T1RJLzIzLzgzLzE5"
                className="text-sm hover:text-gray-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                RTI
              </Link>
              <span>|</span>
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
      </ScrollAnimate>

      {/* Logos */}
      <div className="bg-white py-4 shadow-md">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <SlideInFromLeft>
          <div className="flex items-center mb-4 md:mb-0 slide-in-left">
            <img
              src={apicol}
              alt="APICOL Logo"
              className="mr-4 w-20 h-20"
            />
            <div>
              <h3 className="text-lg font-bold">
                ଓଡ଼ିଶା କୃଷି ପ୍ରୋତ୍ସାହନ ଏବଂ ପୁଞ୍ଜି ଲଗାଣ ନିଗମ ଲିଃ <br />
                The Agricultural Promotion and Investment <br />
                Corporation of Odisha Limited (APICOL)
              </h3>
            </div>
          </div>
          </SlideInFromLeft>
          <SlideInFromRight>
          <div className="flex items-center slide-in-right">
            <img
              src={odishaGov}
              alt="Odisha Government Logo"
              className="mr-4 w-20 h-20"
            />
            <div>
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
      <div className="bg-orange-700 text-white shadow-lg">
        <div className="container mx-auto px-4">
          {/* Desktop menu */}
          <div className="hidden md:flex justify-center items-center">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                <div className="flex items-center">
                  <Link
                    to={item.href}
                    className="px-3 py-3 hover:bg-orange-800 block transition-colors duration-200 text-sm lg:text-base whitespace-nowrap"
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <svg
                      className="w-4 h-4 ml-1 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </div>

                {item.dropdown && (
                  <div className="absolute left-0 top-full z-50 hidden group-hover:block min-w-[250px]">
                    <div className="bg-white shadow-lg rounded-b-lg overflow-hidden mt-0">
                      {item.dropdown.map((option, idx) => (
                        <Link
                          key={idx}
                          to="#"
                          className="block px-6 py-3 hover:bg-gray-100 text-gray-800 text-sm border-b border-gray-100 last:border-b-0 whitespace-nowrap"
                        >
                          {option}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden flex justify-between items-center py-3">
            <div className="font-bold">Menu</div>
            <button
              className="text-white p-1 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile menu */}
          <div
            className={`md:hidden bg-orange-800 transition-all duration-300 ease-in-out overflow-hidden ${
              mobileMenuOpen ? "max-h-screen" : "max-h-0"
            }`}
          >
            <nav className="flex flex-col py-2">
              {menuItems.map((item, idx) => (
                <div key={idx} className="border-b border-orange-600 last:border-b-0">
                  <div className="flex justify-between items-center">
                    <Link
                      to={item.href}
                      className="px-4 py-3 block hover:bg-orange-700 flex-grow"
                      onClick={() => !item.dropdown && setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <button
                        className="px-4 py-3 text-white hover:bg-orange-700"
                        onClick={() => toggleMobileDropdown(idx)}
                        aria-expanded={openDropdownIndex === idx}
                      >
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${
                            openDropdownIndex === idx ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    )}
                  </div>

                  {item.dropdown && openDropdownIndex === idx && (
                    <div className="pl-6 bg-orange-700">
                      {item.dropdown.map((sub, subIdx) => (
                        <Link
                          key={subIdx}
                          to="#"
                          className="block px-4 py-2 text-sm text-white hover:bg-orange-600"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {sub}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}