import React, { useRef, useState } from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import { menuItems } from "../../variables/menu/menuItems";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useTextSize } from "../../variables/textSizeContext";

const PrimeLayout: React.FC = () => {
  const location = useLocation();
  // const currentPath = location.pathname;
  const currentPath = `${location.pathname}${location.search}`;
  const submenuRef = useRef<HTMLDivElement>(null);
  const [alignRight, setAlignRight] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const [showSubmenu2, setShowSubmenu2] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );
  // const [openSidebarDropdownIndex, setOpenSidebarDropdownIndex] = useState<
  //   number | null
  // >(null);

  const checkOverflow = () => {
    if (submenuRef.current) {
      const rect = submenuRef.current.getBoundingClientRect();
      const isOverflowing = rect.right > window.innerWidth;
      setAlignRight(isOverflowing);
    }
  };
  // useEffect(() => {
  //   const observer = new ResizeObserver(() => {
  //     checkOverflow();
  //   });

  //   if (submenuRef.current) {
  //     observer.observe(submenuRef.current);
  //     checkOverflow(); // initial check
  //   }

  //   return () => observer.disconnect();
  // }, []);

  // Find current section and its sidebar children
  const currentSection = menuItems.find(
    (item) => currentPath.startsWith(item.href) && item.dropdown
  );
  const sidebarItems = currentSection?.dropdown || [];

  const toggleMobileDropdown = (index: number) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };
const {textSize} = useTextSize();
  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Navbar */}
      <Navbar />
      <div className="bg-orange-700 text-white shadow-lg">
        <div className="container mx-auto px-4">
          {/* Desktop Navbar */}
          <div className="hidden md:flex justify-center items-center">
            {menuItems.map((item, index) => {
              const isActive =
                currentPath === item.href ||
                item.dropdown?.some(
                  (sub: any) =>
                    currentPath === sub.href ||
                    sub.children?.some(
                      (child: any) => currentPath === child.href
                    )
                );
              return (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => {
                    setIsHovered(true);
                    checkOverflow();
                  }}
                  onMouseLeave={() => {
                    setIsHovered(false);
                    setAlignRight(false);
                  }}
                >
                  <div className="flex items-center">
                    {item.href ? (
                      <Link
                        to={item.href}
                        target={item.target ? "_blank" : "_self"}
                        className={`flex items-center px-3 py-3 ${
                          isActive && "bg-orange-900 text-white"
                        }  hover:bg-orange-800 text-[15px] text-white cursor-pointer gap-1`}
                          style={{ fontSize: `${textSize - 1}px` }}
                      >
                        {item.name}
                        {item.dropdown && (
                          <ChevronDown
                            size={16}
                            className="transition-transform duration-200 group-hover:rotate-180"
                          />
                        )}
                      </Link>
                    ) : (
                      <div className="px-3 py-3 text-sm lg:text-base">
                        {item.name}
                      </div>
                    )}
                  </div>

                  {/* First-level Dropdown */}
                  {item.dropdown && (
                    <div className="absolute left-0 top-full overflow-visible z-50 hidden group-hover:block min-w-[250px]">
                      <div
                        className="bg-white shadow-lg rounded-b-lg overflow-visible"
                        onMouseLeave={() => setShowSubmenu2(false)}
                      >
                        {item.dropdown.map((option: any, idx: number) => (
                          <div key={idx} className="relative group">
                            {option.children ? (
                              <>
                                <Link
                                  to={option.href}
                                  target={option.target ? "_blank" : "_self"}
                                  onMouseEnter={() => setShowSubmenu2(true)}
                                  className="px-6 py-3 bg-gray-100 text-gray-800 text-sm hover:bg-orange-500 hover:text-white flex justify-between items-center"
                                >
                                  {option.name}
                                  <ChevronRight size={16} />
                                </Link>
                                <div
                                  ref={submenuRef}
                                  className={`absolute top-0 min-w-[250px] z-50 transition-all overflow-hidden duration-200 
                                  ${alignRight ? "right-full" : "left-full"}
                                  ${
                                    isHovered
                                      ? "opacity-100 visible"
                                      : "opacity-0 invisible"
                                  } 
                                    `}
                                  // className="absolute left-full top-0 hidden group-hover:block min-w-[250px] z-50"
                                >
                                  <div className="bg-white shadow-lg rounded-b-lg overflow-hidden">
                                    {showSubmenu2 &&
                                      option.children.map(
                                        (subItem: any, subIdx: number) => (
                                          <Link
                                            key={subIdx}
                                            to={subItem.href}
                                            onClick={() =>
                                              setShowSubmenu2(false)
                                            }
                                            target={
                                              subItem.target
                                                ? "_blank"
                                                : "_self"
                                            }
                                            className="block px-6 py-3 bg-gray-100 text-gray-800 text-sm hover:bg-orange-500 hover:text-white"
                                          >
                                            {subItem.name}
                                          </Link>
                                        )
                                      )}
                                  </div>
                                </div>
                              </>
                            ) : (
                              <Link
                                to={option.href}
                                target={option.target ? "_blank" : "_self"}
                                onClick={(e) => {
                                  if (option.target === "_blank") {
                                    const confirmed = window.confirm(
                                      "Are you sure you want to leave this page?"
                                    );
                                    if (!confirmed) {
                                      e.preventDefault(); // Cancel the navigation
                                    }
                                  }
                                }}
                                className="px-6 py-3 bg-gray-100 text-gray-800 text-sm hover:bg-orange-500 hover:text-white flex justify-between items-center"
                              >
                                {option.name}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile Navbar */}
          <div className="md:hidden flex justify-between items-center py-3">
            <div className="font-bold">Menu</div>
            <button
              className="text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
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

          {/* Mobile Dropdown Menu */}
          <div
            className={`md:hidden bg-orange-800 transition-all duration-300 ease-in-out overflow-hidden ${
              mobileMenuOpen ? "max-h-screen" : "max-h-0"
            }`}
          >
            <nav className="flex flex-col py-2">
              {menuItems.map((item, idx) => (
                <div
                  key={idx}
                  className="border-b border-orange-600 last:border-b-0"
                >
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
                      {item.dropdown.map((sub: any, subIdx: number) => (
                        <Link
                          key={subIdx}
                          to={sub.href}
                          className="block px-4 py-2 text-sm text-white hover:bg-orange-600"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {sub.name}
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

      {/* Main Content */}
      <main className="w-full flex-1 ">
        {sidebarItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-4 mb-30 ">
            {/* Sidebar */}
            <div className="lg:col-span-1 bg-gray-100 px-4 py-4">
              <div className="rounded-2xl sticky top-8">
                <nav className="space-y-2 hidden md:block">
                  {sidebarItems.map((item: any, idx: number) => {
                    // const isActive =
                    //   currentPath === item.href ||
                    //   (currentPath === currentSection?.href && idx === 0);
                    const isActive =
                      currentPath === item.href ||
                      item.children?.some(
                        (child: any) => child.href === currentPath
                      ) ||
                      (currentPath === currentSection?.href && idx === 0);
                    return (
                      <div key={item.name} className="relative group">
                        <Link
                          to={item.href || item.name}
                          target={item.target ? "_blank" : "_self"}
                          // onClick={() =>
                          //   setOpenSidebarDropdownIndex(
                          //     openSidebarDropdownIndex === idx ? null : idx
                          //   )
                          // }
                          className={`block px-4 py-3 rounded-lg shadow-md ${
                            isActive
                              ? "bg-orange-600 text-white"
                              : "text-gray-700 hover:bg-orange-500 hover:text-white"
                          } flex justify-between items-center`}
                        >
                          {item.name}
                          {item.children && (
                            <ChevronRight
                              className={`w-4 h-4 ml-2 transform transition-transform duration-200 `}
                              // ${openSidebarDropdownIndex === idx ? "rotate-90" : ""}
                            />
                          )}
                        </Link>

                        {/* Second-level Dropdown */}
                        {/* {item.children && openSidebarDropdownIndex === idx && (
                          <div className="  bottom-0 z-50  ml-4 min-w-[200px]">
                            <div className="   overflow-hidden"> */}
                        {item.children &&
                          item.children.map((subItem: any) => {
                            // const isActive =
                           
                            //   (currentPath === currentSection?.href &&
                            //     idx === 0)   ||  currentPath === subItem.href;
                            const isActive = currentPath === subItem.href;
                            
                            return (
                              <Link
                                to={subItem.href}
                                key={subItem.name}
                                // className="block px-4 py-2 m-1 rounded-lg text-sm text-gray-700 hover:bg-orange-500 hover:text-white"
                                className={`block m-2 ml-10 px-5 py-2  rounded-lg text-sm  ${
                                  isActive
                                    ? "bg-orange-600 text-white"
                                    : "text-gray-700 hover:bg-orange-500 hover:text-white"
                                } flex justify-between items-center`}
                              >
                                {subItem.name}
                              </Link>
                            );
                          })}
                      </div>
                      //   </div>
                      // )}
                      // </div>
                    );
                  })}
                </nav>
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-3">
              <div className="">
                <Outlet />
              </div>
            </div>
          </div>
        ) : (
          <Outlet />
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PrimeLayout;
