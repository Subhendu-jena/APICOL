import { Twitter, Facebook, Instagram } from "lucide-react";
// import MapComponent from './Map';
import { CircleArrowOutDownRight } from "lucide-react";
import { Youtube } from "lucide-react";
import logo from "../../assets/logos/APICOL-Logo.png"
export interface FooterLink {
  text: string;
  href: string;
  target?: string;
}
const QuickLinks: FooterLink[] = [
  { text: 'About Us', href:"#" },
  { text: 'Apply Online', href: "#" },
  { text: 'Reports', href: "#" },
  { text: 'Downloads', href:"#"},
  { text: 'Gallery', href:"#" },
  { text: 'Contact Us', href: "#" },
];

const Footer = () => {
  return (
    <footer className="w-full relative  bg-gray-700 text-gray-200">
      {/* Contact Info Bar */}
      {/* <div className="w-full z-10 absolute -top-14 overflow-hidden px-4">
        <div className="w-full rounded-2xl mx-auto px-4 py-8 grid grid-cols-1 text-white md:grid-cols-3   overflow-hidden pl-8  gap-10 bg-gray-800">
          <div className="flex items-center  space-x-4 group transition-all duration-300">
            <div className="p-2 border-4 border-orange-400 rounded-full bg-gray-800">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold underline">Office Address</h3>
              <p className="">{data.address}</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 group transition-all duration-300 hover:translate-y-1">
            <div className="p-2 border-4 border-orange-400 rounded-full bg-gray-800">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold underline">Email</h3>
              <p className="">{data.officeEmail}</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 group transition-all duration-300 hover:translate-y-1">
            <div className="p-2 border-4 border-orange-400 rounded-full bg-gray-800">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold underline">Toll-Free</h3>
              <p className="">+91 {data.tollFree}</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 group transition-all duration-300 hover:translate-y-1">
            <div className="p-2 border-4 border-orange-400 rounded-full bg-gray-800">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold underline">Mobile Number</h3>
              <p className="">+91 {data.mobileNumber}</p>
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Footer Content */}
      {/* <img
        src="/foot.jpg"
        alt=""
        className="absolute opacity-60  w-full h-110 object-fill"
      /> */}
      <div className="w-full mx-auto pt-12   px-12 relative ">
        <div className="grid grid-cols-1 md:grid-cols-3  gap-12  ">
          {/* Company Info */}
          <div className=" space-y-6">
            <div className="flex items-center space-x-4">
              <img
                src={logo}
                alt="OFDC Logo"
                className="w-16 h-16 object-contain"
              />
              <h3 className="text-xl font-semibold">
               Agricultural Promotion and Investment Corporation of Odisha Limited
              </h3>
            </div>
            <p className="text-gray-100 text-10px">
              Website content is managed by APICOL (The Agricultural Promotion &
              Investment Corporation of Odisha Limited) Department of
              Agriculture & farmers’ Empowerment
            </p>
            <div>
              <h3 className="font-semibold underline">Office Address</h3>
              <p className="">
                Plot No. 326, OUAT Agriculture Farm Road, Baramunda,
                Bhubaneswar, Odisha, PIN-751003
              </p>
            </div>
            <div>
              {" "}
              <h3 className="font-semibold underline">Contact</h3>
              <div className=" flex space-x-4">
                <p>+91 000 0000 000</p>
                <p className="">apicol96@yahoo.com</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {QuickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target={link.target ? link.target : "_self"}
                    className="text-gray-100 hover:text-white transition-colors  text-sm duration-300 flex flex-row gap-2 items-center"
                  >
                    <div>
                      <CircleArrowOutDownRight size={16} />{" "}
                    </div>
                    <div>{link.text}</div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className=" rounded-2xl overflow-hidden">
            {/* <MapComponent height="300px" width="100%" /> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d59878.68358261181!2d85.8008194!3d20.2829697!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a786ac87447f%3A0xf9e98d6ae9e82e17!2sApicol!5e0!3m2!1sen!2sin!4v1748253648714!5m2!1sen!2sin"
              width="800"
              height="300"
              style={{ border: "0" }}
              loading="lazy"
            ></iframe>
            
            <div className="flex space-x-4 mt-10 md:mt-5 justify-end">
              <a
                href="#"
                className="p-2 hover:text-blue-400 transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 hover:text-blue-600 transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 hover:text-pink-600 transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 hover:text-gray-400 transition-colors duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-400 text-white pt-3 mt-1 text-sm">
          <div className="grid grid-cols-2 justify-between items-center mx-auto text-white md:flex md:space-x-4">
            <p className="">
              Copyright ©2025{" "}
              <a href="#" className="text-red-400">
                APICOL
              </a>{" "}
              Odisha, All Rights Reserved.
            </p>
            <p>
              Developed by <a className="text-red-400">QWEGLE</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
