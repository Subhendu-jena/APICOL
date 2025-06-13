import { Outlet, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { menuItems } from "../../variables/menu/menuItems";
import { useState } from "react";

export default function CustomLayout() {
  const location = useLocation();
  const currentPath = location.pathname;
  // Find parent section (e.g., "/about-us")
  const currentSection = menuItems.find(
    (item) => currentPath.startsWith(item.href) && item.dropdown
  );
  const sidebarItems = currentSection?.dropdown || [];


  console.log("Sidebar Items:", sidebarItems);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  function toggleMobileDropdown(index: any) {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  }
  return (
    <>
     <div className="bg-orange-700 text-white shadow-lg">
        <div className="container mx-auto px-4">
          {/* Desktop menu */}
          <div className="hidden md:flex justify-center items-center">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                <div className="flex items-center">
                  {item.href ? (
                    <Link
                      to={item.href}
                      className="px-3 py-3 cursor-pointer hover:bg-orange-800 block transition-colors duration-200 text-sm lg:text-base whitespace-nowrap text-white"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <div className="px-3 py-3 cursor-pointer hover:bg-orange-800 block transition-colors duration-200 text-sm lg:text-base whitespace-nowrap text-white">
                      {item.name}
                    </div>
                  )}
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
                      {item.dropdown.map((option:any, idx) => (
                        <Link
                          key={idx}
                          to={option.href}
                          target={option?.target  ? "_blank" : "_self"}
                          className="block px-6 py-3 bg-gray-100 text-gray-800 text-sm border-b border-gray-100 last:border-b-0 whitespace-nowrap hover:bg-orange-500  shadow-md hover:text-white"
                        >
                          {option.name}
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
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-4 mb-30">
      {/* Sidebar */}
      <div className="lg:col-span-1 bg-gray-100 px-4 py-4">
        <div className="rounded-2xl sticky top-8">
          <nav className="space-y-2">
            {sidebarItems &&
              sidebarItems.map((item: any) => {
                // console.log("Item:", item);
                return (
                  <Link
                    to={item.href}
                    key={item.name}
                    target={item.target ? "_blank" : "_self"}
                    className={`block px-4 py-3 text-black rounded-lg hover:bg-orange-500  shadow-md hover:text-white ${
                      currentPath === item.href
                        ? "bg-orange-600 text-white shadow-md"
                        : "text-gray-700 hover:bg-gray-100"
                    } `}
                  >
                    {item.name}
                  </Link>
                );
              })}
          </nav>
        </div>
      </div>

      {/* Content Area */}
      <div className="lg:col-span-3">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <Outlet />
        </div>
      </div>
    </div>
    </>
  );
}
