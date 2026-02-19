import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import pic from "../../assets/pic1.png";

const About = () => {
  return (
    <div className="bg-black">
      <div className="flex flex-col md:flex-col lg:flex-row gap-6 md:gap-10 p-4 md:p-16 justify-center md:justify-between items-center overflow-hidden ">
        {/* Left Image */}
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

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
          className="w-full backdrop-blur-md rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl shadow-purple-500/20 mt-6 border border-green-500 "
        >
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white"
          >
            About Me
          </motion.h1>

          {/* Client Name */}
          <motion.h1
            className="font-extrabold text-3xl sm:text-4xl md:text-5xl
            bg-gradient-to-r from-purple-300 via-indigo-300 to-pink-300
            text-transparent bg-clip-text tracking-wide uppercase
            transition-transform duration-500 hover:scale-105"
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            MD HABIB HASAN
          </motion.h1>

          {/* Client Role */}
          <motion.h1
            className="font-bold text-2xl text-white mt-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            Data Entry Operator | Banking Professional
          </motion.h1>

          {/* Company */}
          <motion.h2
            className="font-semibold text-lg text-green-400 mt-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            Rajshahi Krishi Unnayan Bank (RAKUB)
          </motion.h2>

          {/* Description Tilt */}
          <div className="shadow-md shadow-sky-400 rounded-3xl">
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              transitionSpeed={1000}
              scale={1.03}
              gyroscope={true}
              className="rounded-3xl"
            >
              <p className="text-gray-300 p-5 rounded-3xl backdrop-blur-md border border-green-400 mt-3 hover:shadow-sm leading-relaxed">
                MD Habib Hasan is a dedicated and detail-oriented banking
                professional currently working as a Data Entry Operator at
                Rajshahi Krishi Unnayan Bank (RAKUB). He has strong experience
                in banking data management, maintaining accurate financial
                records, and ensuring secure and efficient handling of customer
                information. He is highly skilled in computer operations,
                Microsoft Office applications, and banking software systems. His
                commitment to accuracy, confidentiality, and efficiency makes
                him a reliable and valuable professional in the banking sector.
                He continuously focuses on improving his technical and
                professional skills to contribute effectively to organizational
                success and maintain high standards of data integrity and
                operational excellence.
              </p>
            </Tilt>
          </div>

          {/* Contact Button */}
          <Link to="/Contact">
            <motion.h2
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-4 font-bold text-xl sm:text-2xl lg:text-3xl"
            >
              <motion.button
                className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-lg shadow-blue-500/40 font-medium transition duration-300"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact
              </motion.button>
            </motion.h2>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
