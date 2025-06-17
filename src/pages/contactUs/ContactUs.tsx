import {  LocateIcon, Mail, Phone } from "lucide-react";
import React, { useState } from "react";
import Apicol from "./Apicol";
import CDAO from "./CDAO";
import CDVO from "./CDVO";

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialForm: ContactForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export const ContactUs: React.FC = () => {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [errors, setErrors] = useState<Partial<ContactForm>>({});
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState("apicol");

  const gradientBackground = "bg-gradient-to-r from-[#ff8008] to-[#ffc837]";
  const gradientBackgroundHover = "bg-gradient-to-r from-[#514A9D] to-[#24C6DC]";
/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  
  const tabClasses = (tab: string) =>
    `w-full py-4 px-24 font-medium rounded-4xl transition-all duration-300 ${
      activeTab === tab
        ? `${gradientBackgroundHover} text-white shadow-lg transform scale-105`
        : `${gradientBackground}  text-white shadow-lg transform scale-105 `
    }`;
  const tabs = [
    { key: "apicol", label: "APICOL Scheme Officers" },
    { key: "nodal", label: "District Nodal Officers" },
    { key: "coordinator", label: "District Coordinators" },
  ];
  const validate = (): boolean => {
    const errs: Partial<ContactForm> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      errs.email = "Valid email is required";
    if (!form.subject.trim()) errs.subject = "Subject is required";
    if (!form.message.trim()) errs.message = "Message is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // TODO: Send data to API
    console.log("Form submitted:", form);
    setSubmitted(true);
    setForm(initialForm);
  };
  const data = [
    {
      name: "Location",
      icons: <LocateIcon />,
      text: "Plot No. 326, OUAT Agriculture Farm Road, Baramunda, Bhubaneswar, Odisha, PIN-751003",
    },
    {
      name: "Email us",
      icons: <Mail />,
      text: "apicol96@yahoo.com",
    },
    {
      name: "Call us",
      icons: <Phone />,
      text: "+91-674-2354125",
    },
  ];
  return (
    <>
      {/* <div className="text-3xl font-bold">Contact Us</div> */}
      <div>
        {" "}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d59878.68358261181!2d85.8008194!3d20.2829697!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a786ac87447f%3A0xf9e98d6ae9e82e17!2sApicol!5e0!3m2!1sen!2sin!4v1748253648714!5m2!1sen!2sin"
          //   width="1280"
          //   height="300"
          className="w-full h-100"
          style={{ border: "0" }}
          loading="lazy"
        ></iframe>
      </div>
      <div className="py-10 bg-gray-50 flex items-center justify-center mb-20">
        <div className="max-w-6xl w-full bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            {/* Info Side */}
            <div className="md:w-1/2 bg-gray-600 text-white p-8">
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
              <p className="mb-6">
                Have questions, feedback or need support? We’d love to hear from
                you. Fill out the form and we’ll be in touch soon.
              </p>
              {/* <ul className="space-y-3">
                <li>
                  <strong>Email:</strong> support@yourdomain.com
                </li>
                <li>
                  <strong>Phone:</strong> +1 (123) 456-7890
                </li>
                <li>
                  <strong>Address:</strong> 1234 Elm Street, City, Country
                </li>
              </ul> */}
              <div className="space-y-2">
                {data.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-5 gap-4 p-4 bg-orange-50 rounded-xl shadow-sm hover:shadow-md transition"
                  >
                    <div className="col-span-1 h-12 w-12 bg-orange-200 rounded-full flex items-center justify-center text-orange-600 text-xl">
                      {item.icons}
                    </div>
                    <div className="col-span-4">
                      <h1 className="font-semibold text-orange-800 mb-1">
                        {item.name}
                      </h1>
                      <p className="text-gray-700 text-sm">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Side */}
            <div className="md:w-1/2 p-8">
              {submitted && (
                <div className="mb-6 p-4 bg-green-100 text-green-700 rounded">
                  Thank you! Your message has been sent.
                </div>
              )}
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <h1 className="text-3xl font-bold">Send us A Message</h1>
                  </div>
                  {/* Name */}
                  <div>
                    <label className="block mb-1 font-medium">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring ${
                        errors.name
                          ? "border-red-500 focus:ring-red-200"
                          : "border-gray-300 focus:ring-indigo-200"
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-red-500 text-sm">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block mb-1 font-medium">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring ${
                        errors.email
                          ? "border-red-500 focus:ring-red-200"
                          : "border-gray-300 focus:ring-indigo-200"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-red-500 text-sm">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block mb-1 font-medium">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring ${
                        errors.subject
                          ? "border-red-500 focus:ring-red-200"
                          : "border-gray-300 focus:ring-indigo-200"
                      }`}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-red-500 text-sm">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block mb-1 font-medium">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring ${
                        errors.message
                          ? "border-red-500 focus:ring-red-200"
                          : "border-gray-300 focus:ring-indigo-200"
                      }`}
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-red-500 text-sm">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full py-3 bg-orange-600 text-white font-semibold rounded hover:bg-orange-700 transition"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    <div className="max-w-7xl mx-auto ">
        {/* Tabs */}
        <div className="flex flex-wrap justify-between px-auto">
          {tabs.map(({ key, label }) => (
              <div className="justify-center">
                <button
                  key={key}
                  className={tabClasses(key)}
                  onClick={() => setActiveTab(key)}
                >
                  {label}
                </button>
                {activeTab === key && (
                  <div className="">
                    <div className={`w-0 h-0  border-l-20 border-r-20 border-t-20 border-l-transparent border-r-transparent ${gradientBackground} mx-auto`}></div>
                  </div>
                )}
              </div>
          ))}
        </div>
        {/* Tab Content */}
        <div className="w-full">
          {activeTab === "apicol" && <Apicol />}
          {activeTab === "nodal" && <CDAO />}
          {activeTab === "coordinator" && <CDVO />}
        </div>
      </div>
  
    </>
  );
};
