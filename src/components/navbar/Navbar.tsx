import React, { useState, useEffect } from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  FileText,
  ZoomIn,
  ZoomOut,
  Globe,
  Search,
} from "lucide-react";
import { Menu, X, ChevronDown } from "lucide-react";
import seal from "../../assets/logos/Seal_of_Odisha.svg.svg";
import apicol from "../../assets/logos/APICOL-Logo.png";
const MainNav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", hasSubmenu: false },
    { name: "About Us", hasSubmenu: false },
    { name: "Schemes", hasSubmenu: false },
    { name: "Apply Online", hasSubmenu: false },
    { name: "Success Stories", hasSubmenu: false },
    { name: "Reports", hasSubmenu: false },
    { name: "Notices", hasSubmenu: false },
    { name: "Downloads", hasSubmenu: false },
    { name: "Gallery", hasSubmenu: false },
  ];

  return (
    <div className="bg-black shadow-md">
      <div className="container mx-auto">
        {/* Top Section with Logos */}
        <div className="flex justify-between items-center py-4 px-30 border-b">
          {/* <Logo type="primary" />
          <Logo type="secondary" className="hidden md:block" /> */}
          <div className="flex items-center gap-2">
            <img src={apicol} alt="" className="w-20 h-20" />
            <p className="text-white text-[14px] font-bold">
              ଓଡ଼ିଶା କୃଷି ପ୍ରୋତ୍ସାହନ ଏବଂ ପୁଞ୍ଜି ଲଗାଣ ନିଗମ ଲିଃ
              <br /> The Agricultural Promotion and Investment <br />
              Corporation of Odisha Limited (APICOL)
            </p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-white text-[14px] font-bold text-right">
              କୃଷି ଓ କୃଷକ ସଶକ୍ତିକରଣ ବିଭାଗ, ଓଡିଶା ସରକାର
              <br />
              Department of Agriculture and Farmers' Empowerment
              <br />
              Government Of Odisha
            </p>
            <img src={seal} alt="" className="w-20 h-20" />
          </div>
        </div>

        {/* Navigation Section */}
        <div className="">
          {/* Mobile Menu Button */}
          <div className="md:hidden flex justify-end">
            <button
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex justify-center">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href="#"
                  className="flex items-center  text-gray-200 hover:text-orange-500 py-2 transition-colors font-medium text-[12px]"
                >
                  <span>{item.name}

                  </span>
                  <span className="mx-2 text-white hover:text-white">|</span>
                  {item.hasSubmenu && (
                    <ChevronDown
                      size={14}
                      className="group-hover:transform group-hover:rotate-180 transition-transform"
                      />
                  )}  
                </a>
                {item.hasSubmenu && (
                  <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg rounded-lg mt-1 py-2">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-100"
                    >
                      Submenu Item 1
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-100"
                    >
                      Submenu Item 2
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-100"
                    >
                      Submenu Item 3
                    </a>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4">
              {menuItems.map((item) => (
                <div key={item.name}>
                  <a
                    href="#"
                    className="flex items-center justify-between px-4 py-2 text-gray-200 hover:bg-gray-100"
                  >
                    <span>{item.name}</span>
                    {item.hasSubmenu && <ChevronDown size={16} />}
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
const TopBar: React.FC = () => {
  const [fontSize, setFontSize] = useState<number>(16);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  const increaseFontSize = () => {
    if (fontSize < 24) {
      setFontSize((prevSize) => prevSize + 1);
    }
  };

  const decreaseFontSize = () => {
    if (fontSize > 14) {
      setFontSize((prevSize) => prevSize - 1);
    }
  };

  return (
    <div className="bg-orange-500 text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center  px-4">
          {/* Left Section */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Globe size={16} />
              <span className="text-[14px]">Screen Reader</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-[14px]">Text Size:</span>
              <button
                onClick={decreaseFontSize}
                className="p-1 hover:bg-[#2c5aa7] rounded transition-colors"
                aria-label="Decrease font size"
              >
                <ZoomOut size={14} />
              </button>
              <button
                onClick={increaseFontSize}
                className="p-1 hover:bg-[#2c5aa7] rounded transition-colors"
                aria-label="Increase font size"
              >
                <ZoomIn size={14} />
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="hover:text-gray-200 transition-colors text-[14px] flex items-center space-x-1"
              >
                <FileText size={14} />
                <span>RTI</span>
              </a>
              <a
                href="#"
                className="hover:text-gray-200 transition-colors text-[14px] flex items-center space-x-1"
              >
                <Search size={14} />
                <span>Search</span>
              </a>
            </div>
            <div className="h-4 w-px bg-white/30" />
            <div className="flex items-center space-x-3">
              <a
                href="#"
                className="hover:text-gray-200 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={14} />
              </a>
              <a
                href="#"
                className="hover:text-gray-200 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={14} />
              </a>
              <a
                href="#"
                className="hover:text-gray-200 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={14} />
              </a>
              <a
                href="#"
                className="hover:text-gray-200 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Navbar: React.FC = () => {
  return (
    <>
      <TopBar />
      <MainNav />
    </>
  );
};

export default Navbar;
