import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="bg-black text-white py-16 px-6 md:px-16">
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Work Experience
      </motion.h1>

      <motion.div
        className="border border-green-500 rounded-2xl p-6 shadow-lg shadow-green-500/20 backdrop-blur-md"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-2xl font-semibold text-green-400">
          Data Entry Operator
        </h2>

        <p className="text-yellow-400 mt-1">
          Rajshahi Krishi Unnayan Bank (RAKUB)
        </p>

        <p className="text-gray-400 mt-1">Employment Type: Full Time</p>

        <ul className="mt-4 text-gray-300 list-disc pl-6 space-y-2">
          <li>Maintaining accurate banking data records</li>
          <li>Entering customer information securely</li>
          <li>Verifying and updating financial records</li>
          <li>Using office software and banking systems</li>
          <li>Ensuring data accuracy and confidentiality</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Experience;
