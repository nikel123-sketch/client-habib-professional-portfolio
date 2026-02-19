import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  const formattedDate = today.toLocaleString("en-US", {
    dateStyle: "full",
    timeStyle: "short",
  });

  return (
    <footer className="py-10 bg-black text-white border-t border-blue-600">
      {/* Client Name + Profession */}
      <div className="text-center mb-6">
        {/* Replace client name */}
        <h2 className="text-2xl font-bold text-blue-400">Md. Habib Hasan</h2>

        {/* Replace client profession */}
        <p className="text-gray-400 text-sm">Banker | Data Entry Operator</p>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 text-3xl mb-6">
        {/* Replace client Facebook */}
        <a
          href="https://www.facebook.com/your-client-facebook"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition duration-300 hover:scale-110"
        >
          <FaFacebook />
        </a>

        {/* Replace client LinkedIn */}
        <a
          href="https://www.linkedin.com/in/your-client-linkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition duration-300 hover:scale-110"
        >
          <FaLinkedin />
        </a>

        {/* Optional GitHub (remove if client not developer) */}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition duration-300 hover:scale-110"
        >
          <FaGithub />
        </a>
      </div>

      {/* Date & Time */}
      <p className="text-center text-gray-400 font-medium mb-2">
        {formattedDate}
      </p>

      {/* Copyright */}
      <p className="text-center text-gray-500 text-sm">
        © {year} All rights reserved by {/* Replace client name */}
        <span className="text-blue-400 font-semibold">Md. Habib Hasan</span>
      </p>

      {/* Developer credit (optional but professional) */}
      <p className="text-center text-gray-600 text-xs mt-2">
        Portfolio designed & developed with React & Tailwind CSS
      </p>
    </footer>
  );
};

export default Footer;
