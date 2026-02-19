import React from "react";
import { motion } from "framer-motion";
import facebook from "../../assets/facebook.png";
import githup from "../../assets/github.png";
import youtube from "../../assets/youtube2.png";
import tiktok from "../../assets/tiktok.png";
import { FiDownload } from "react-icons/fi";
import Tilt from "react-parallax-tilt";
import pic from "../../assets/pic1.png";

const icons = [
  { icon: facebook, link: "https://www.facebook.com/" },
  { icon: githup, link: "https://github.com/" },
  { icon: youtube, link: "https://youtube.com/" },
  { icon: tiktok, link: "https://tiktok.com/" },
];

const Banner = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-6 md:gap-10 p-4 md:p-10 justify-center md:justify-between items-center overflow-hidden bg-black">
      {/* LEFT SIDE - CLIENT INFO */}
      <motion.div
        className="text-left bg-black backdrop-blur-md rounded-2xl p-6 w-full md:w-1/2 shadow-lg shadow-purple-600 border border-purple-500/20"
        initial={{ opacity: 0, y: -200 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
          {/* Professional Label */}
          <motion.h3
            className="mb-2 font-semibold text-lg text-purple-300"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            Professional Profile
          </motion.h3>

          {/* Name */}
          <motion.h1
            className="mb-3 font-extrabold text-4xl md:text-5xl
            bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400
            text-transparent bg-clip-text tracking-wide uppercase"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            MD HABIB HASAN
          </motion.h1>

          {/* Position */}
          <motion.h2
            className="font-bold text-2xl text-green-400"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            Data Entry Operator
          </motion.h2>

          {/* Organization */}
          <motion.p
            className="text-yellow-400 font-semibold text-lg mt-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Rajshahi Krishi Unnayan Bank (RAKUB)
          </motion.p>

          {/* Description */}
          <motion.p
            className="font-medium text-gray-300 leading-relaxed mt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Dedicated and detail-oriented banking professional currently serving
            as a Data Entry Operator at Rajshahi Krishi Unnayan Bank. Skilled in
            maintaining accurate banking records, ensuring data integrity, and
            managing official documentation with professionalism, discipline,
            and confidentiality.
          </motion.p>

          {/* Social Icons */}
          <motion.div
            className="flex gap-4 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {icons.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={item.icon}
                  className="rounded-full w-10 h-10 cursor-pointer hover:shadow-lg hover:shadow-purple-500 transition-all duration-300"
                  alt=""
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 mt-8">
            {/* Download CV */}
            <motion.a
              href="#"
              className="relative px-7 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 text-white overflow-hidden group"
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* gradient background */}
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 animate-gradient-x"></span>

              {/* glow */}
              <span className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 blur-lg opacity-40 group-hover:opacity-70 transition duration-500"></span>

              <FiDownload className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Download CV</span>
            </motion.a>

            {/* Contact Button */}
            <motion.button
              className="relative px-7 py-3 rounded-xl font-semibold border border-purple-500 text-purple-400 overflow-hidden group"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 bg-purple-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>

              <span className="relative z-10 group-hover:text-white transition duration-300">
                Contact Information
              </span>
            </motion.button>
          </div>
        </Tilt>
      </motion.div>

      {/* RIGHT SIDE IMAGE */}
      <motion.div
        className="w-[90%] md:w-1/2 flex justify-center md:justify-end"
        initial={{ opacity: 0, x: 120 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src={pic}
          alt="MD Habib Hasan"
          className="
            w-[280px]
            sm:w-[350px]
            md:w-[420px]
            lg:w-[480px]
            xl:w-[520px]
            rounded-[32px]
            shadow-[0_0_50px_rgba(168,85,247,0.6)]
            border border-purple-500/40
            object-cover
          "
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{
            scale: 1.05,
          }}
        />
      </motion.div>
    </div>
  );
};

export default Banner;
