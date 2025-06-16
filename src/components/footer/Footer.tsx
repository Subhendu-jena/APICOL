// import { Twitter, Facebook, Instagram, MapPin, Mail, Phone } from "lucide-react";
// // import MapComponent from './Map';
// import { CircleArrowOutDownRight } from "lucide-react";
// import { Youtube } from "lucide-react";
// import logo from "../../assets/logos/APICOL-Logo.png"
// // import foot from "../../assets/all/bg.png"
// export interface FooterLink {
//   text: string;
//   href: string;
//   target?: string;
// }
// const QuickLinks: FooterLink[] = [
//   { text: 'DA&FE', href:"https://agri.odisha.gov.in/",target:"_blank" },
//   { text: 'F&ARD', href: "https://fard.odisha.gov.in/",target:"_blank" },
//   { text: 'Agrisnet', href: "https://agrisnetodisha.ori.nic.in/",target:"_blank" },
//   { text: 'OSSC', href:"https://www.osscltd.in/",target:"_blank"},
//   { text: 'OSSOPCA', href:"https://wf.ossopca.nic.in/",target:"_blank" },
//   { text: 'OSCDC', href: "https://oscdc.nic.in/",target:"_blank" },
//   { text: 'OUAT', href: "https://ouat.ac.in/",target:"_blank" },
//   { text: 'OSAM Board', href: "https://osamb.odisha.gov.in/",target:"_blank" },
//   { text: 'APEDA', href: "https://apeda.gov.in/",target:"_blank" },
//   { text: 'MoFPI', href: "https://www.mofpi.gov.in/",target:"_blank" },
// ];

// const Footer = () => {
//   return (
//     <footer className="w-full relative  bg-gray-700 text-gray-200">
//       {/* Contact Info Bar */}
//       <div className="w-full z-10 absolute -top-14 overflow-hidden px-4">
//         <div className="w-full rounded-2xl mx-auto px-4 py-8 grid grid-cols-1 text-white md:grid-cols-3 justify-center   overflow-hidden pl-8  gap-10 bg-gray-800">
//           <div className="flex items-center  space-x-4 group transition-all duration-300">
//             <div className="p-2 border-4 border-orange-400 rounded-full bg-gray-800">
//               <MapPin className="w-6 h-6" />
//             </div>
//             <div>
//               <h3 className="font-semibold underline">Office Address</h3>
//               <p className="text-sm">Plot No. 326, OUAT Agriculture Farm Road, Baramunda, Bhubaneswar, Odisha, PIN-751003</p>
//             </div>
//           </div>

//           <div className="flex items-center space-x-4 group transition-all duration-300 hover:translate-y-1">
//             <div className="p-2 border-4 border-orange-400 rounded-full bg-gray-800">
//               <Mail className="w-6 h-6" />
//             </div>
//             <div>
//               <h3 className="font-semibold underline">Email</h3>
//               <p className=" text-sm">apicol96@yahoo.com</p>
//             </div>
//           </div>

//           {/* <div className="flex items-center space-x-4 group transition-all duration-300 hover:translate-y-1">
//             <div className="p-2 border-4 border-orange-400 rounded-full bg-gray-800">
//               <Phone className="w-6 h-6" />
//             </div>
//             <div>
//               <h3 className="font-semibold underline">Toll-Free</h3>
//               <p className="text-sm">674-2354125</p>
//             </div>
//           </div> */}

//           <div className="flex items-center space-x-4 group transition-all duration-300 hover:translate-y-1">
//             <div className="p-2 border-4 border-orange-400 rounded-full bg-gray-800">
//               <Phone className="w-6 h-6" />
//             </div>
//             <div>
//               <h3 className="font-semibold underline">Mobile Number</h3>
//               <p className="text-sm">+91 9437207150</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Footer Content */}
//       {/* <img
//         src={foot}
//         alt=""
//         className="absolute opacity-60 h-full  w-full  object-cover"
//       /> */}
//       <div className="w-full mx-auto pt-25 bg-[#101927]  px-12 relative ">
//         <div className="grid grid-cols-1 md:grid-cols-4  gap-8  ">
//           {/* Company Info */}
//           <div className=" space-y-6">
//             <div className="flex items-center space-x-2">
//               <img
//                 src={logo}
//                 alt="OFDC Logo"
//                 className="w-16 h-16 object-contain"
//               />
//               <h3 className="text-xl font-semibold">
//                Agricultural Promotion and Investment Corporation of Odisha Limited
//               </h3>
//             </div>
//             <p className="text-gray-100 text-[14px]">
//               Website content is managed by APICOL (The Agricultural Promotion &
//               Investment Corporation of Odisha Limited) Department of
//               Agriculture & farmers’ Empowerment
//             </p>
//             <div>
//               <h3 className="font-semibold underline">Office Address</h3>
//               <p className="text-[14px]">
//                 Plot No. 326, OUAT Agriculture Farm Road, Baramunda,
//                 Bhubaneswar, Odisha, PIN-751003
//               </p>
//             </div>
//             {/* <div>
//               {" "}
//               <h3 className="font-semibold underline">Contact</h3>
//               <div className=" flex space-x-4 text-[14px]">
//                 <p>674-2354125</p>
//                 <p className="">apicol96@yahoo.com</p>
//               </div>
//             </div> */}
//           </div>

//           {/* Quick Links */}
//           <div className="flex flex-col mx-auto">
//             <h3 className="text-xl font-semibold mb-6">Useful Links</h3>
//             <div className="flex gap-8 flex-wrap">
//         {
//           [...Array(Math.ceil(QuickLinks.length / 5))].map((_, colIndex) => (
//             <ul key={colIndex} className="space-y-4">
//               {
//                 QuickLinks.slice(colIndex * 5, colIndex * 5 + 5).map((link, index) => (
//                   <li key={index}>
//                     <a
//                       href={link.href}
//                       target={link.target || "_self"}
//                       className="text-gray-100 hover:text-white underline transition-colors text-sm duration-300 flex items-center gap-2"
//                     >
//                       <CircleArrowOutDownRight size={16} />
//                       <span>{link.text}</span>
//                     </a>
//                   </li>
//                 ))
//               }
//             </ul>
//           ))
//         }
//       </div>
//           </div>
// <div></div>
//           {/* Categories */}
//             {/* <MapComponent height="300px" width="100%" /> */}
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d59878.68358261181!2d85.8008194!3d20.2829697!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a786ac87447f%3A0xf9e98d6ae9e82e17!2sApicol!5e0!3m2!1sen!2sin!4v1748253648714!5m2!1sen!2sin"
//               width="340"
//               height="180"
//               style={{ border: "0" }}
//               loading="lazy"
//               className="rounded-2xl"
//             ></iframe>
// {/*
//             <div className="flex space-x-4 mt-10 md:mt-5 justify-end">
//               <a
//                 href="#"
//                 className="p-2 hover:text-blue-400 transition-colors duration-300"
//               >
//                 <Twitter className="w-5 h-5" />
//               </a>
//               <a
//                 href="#"
//                 className="p-2 hover:text-blue-600 transition-colors duration-300"
//               >
//                 <Facebook className="w-5 h-5" />
//               </a>
//               <a
//                 href="#"
//                 className="p-2 hover:text-pink-600 transition-colors duration-300"
//               >
//                 <Instagram className="w-5 h-5" />
//               </a>
//               <a
//                 href="#"
//                 className="p-2 hover:text-gray-400 transition-colors duration-300"
//               >
//                 <Youtube className="w-5 h-5" />
//               </a>
//             </div> */}
//         </div>

//         {/* Footer Bottom */}
//         <div className="border-t border-gray-400 text-white pt-3 mt-1 text-sm">
//           <div className="grid grid-cols-2 justify-between items-center mx-auto text-white md:flex md:space-x-4">
//             <p className="">
//               Copyright ©2025{" "}
//               <a href="#" className="text-red-400">
//                 APICOL
//               </a>{" "}
//               Odisha, All Rights Reserved.
//             </p>
//             <p>
//               Developed by <a className="text-red-400">QWEGLE</a>
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import {
  Mail,
  Twitter,
  Youtube,
  Facebook,
  Instagram,
  MapPin,
  Phone,
} from "lucide-react";
import logo from "../../assets/logos/APICOL-Logo.png"

interface FooterLink {
  text: string;
  href: string;
  target?: string;
}

const QuickLinks: FooterLink[] = [
  { text: "DA&FE", href: "https://agri.odisha.gov.in/", target: "_blank" },
  { text: "F&ARD", href: "https://fard.odisha.gov.in/", target: "_blank" },
  {
    text: "Agrisnet",
    href: "https://agrisnetodisha.ori.nic.in/",
    target: "_blank",
  },
  { text: "OSSC", href: "https://www.osscltd.in/", target: "_blank" },
  { text: "OSSOPCA", href: "https://wf.ossopca.nic.in/", target: "_blank" },
  { text: "OSCDC", href: "https://oscdc.nic.in/", target: "_blank" },
  { text: "OUAT", href: "https://ouat.ac.in/", target: "_blank" },
  {
    text: "OSAM Board",
    href: "https://osamb.odisha.gov.in/",
    target: "_blank",
  },
  { text: "APEDA", href: "https://apeda.gov.in/", target: "_blank" },
  { text: "MoFPI", href: "https://www.mofpi.gov.in/", target: "_blank" },
];

const social = [
  { logo: <Twitter/>, href: "https://x.com/APICOLBBSR" },
  { logo: <Facebook/>, href: "https://www.facebook.com/apicolodisha/" },
  { logo: <Instagram/>, href: "https://www.instagram.com/apicolodisha/" },
  { logo: <Youtube/>, href: "https://www.youtube.com/@Apicolodisha" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-200">
      {/* Grievance Contact Bar */}
      <div className="w-full z-10 -mt-14 px-4">
        <div className="max-w-7xl mx-auto rounded-2xl px-6 py-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6 bg-orange-600">
          {[
            {
              icon: <MapPin className="w-6 h-6" />,
              title: "Office Address",
              content: "Plot No. 326, OUAT Agriculture Farm Road, Baramunda, Bhubaneswar, Odisha, PIN-751003",
            },
            {
              icon: <Mail className="w-6 h-6" />,
              title: "Email Support",
              content: "apicol96@yahoo.com",
            },
            {
              icon: <Phone className="w-6 h-6" />,
              title: "Mobile Number",
              content: "+91 9437207150",
            },
            
          ].map(({ icon, title, content }, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 hover:translate-y-1 transition-all"
            >
              <div className="p-2 border-4 border-orange-300 rounded-full bg-orange-700 text-white">
                {icon}
              </div>
              <div>
                <h3 className="font-semibold underline">{title}</h3>
                <p className="text-sm">{content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="w-full px-4 pt-15 pb-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between flex-wrap gap-12 px-4">
          {/* Logo & Description */}
          <div className="space-y-4 max-w-md">
            <div className="flex items-center space-x-4">
              <img
                src={logo}
                alt="Logo"
                className="w-12 h-12 object-contain"
              />
              <h3 className="text-lg font-semibold">
                Agricultural Promotion and Investment Corporation of Odisha
                Limited
              </h3>
            </div>
            <p className="text-gray-400 text-[14px]">
              Website content is managed by APICOL (The Agricultural Promotion &
              Investment Corporation of Odisha Limited) Department of
              Agriculture & farmers’ Empowerment
            </p>
            <div className="flex space-x-3">
              {social.map((Icon: any, idx) => (
                <a
                  key={idx}
                  href={Icon.href}
                  target="_blank"
                  className="text-gray-400 hover:text-white"
                >{Icon.logo}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col mx-auto">
            <h3 className="text-xl font-semibold mb-6">Useful Links</h3>
            <div className="flex gap-8 flex-wrap">
              {[...Array(Math.ceil(QuickLinks.length / 5))].map(
                (_, colIndex) => (
                  <ul key={colIndex} className="space-y-4">
                    {QuickLinks.slice(colIndex * 5, colIndex * 5 + 5).map(
                      (link, index) => (
                        <li key={index}>
                          <a
                            href={link.href}
                            target={link.target || "_self"}
                            className="text-gray-400 hover:text-white flex items-center"
                          >
                            <span className="w-2 h-2 bg-orange-600 rounded-full mr-2"></span>
                            <span>{link.text}</span>
                          </a>
                        </li>
                      )
                    )}
                  </ul>
                )
              )}
            </div>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d59878.68358261181!2d85.8008194!3d20.2829697!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a786ac87447f%3A0xf9e98d6ae9e82e17!2sApicol!5e0!3m2!1sen!2sin!4v1748253648714!5m2!1sen!2sin"
            width="340"
            height="180"
            style={{ border: "0" }}
            loading="lazy"
            className="rounded-2xl"
          ></iframe>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div>
            <p className="text-gray-400">© 2024 APICOL</p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
