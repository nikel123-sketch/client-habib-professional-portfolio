import { useState } from "react";
import { FiDownload } from "react-icons/fi";
import { NavLink } from "react-router";
import { AnimatePresence, motion } from "framer-motion";

// client photo
import clientPhoto from "../../assets/2.png";

const Navber = () => {
  const [open, setOpen] = useState(false);

  // links
  const links = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/About" },
    { name: "Skills", path: "/skills" },
    { name: "Experience", path: "/experience" },
    // { name: "Certifications", path: "/certifications" },
    { name: "Contact", path: "/contact" },
  ];

  // mobile render links
  const renderLinks = links.map((link, index) => (
    <motion.li
      key={index}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.07 }}
      onClick={() => setOpen(false)}
    >
      <NavLink
        to={link.path}
        className={({ isActive }) =>
          `px-4 py-2 rounded-lg font-medium block transition-all duration-300 ${
            isActive
              ? "bg-blue-500 text-white font-bold"
              : "hover:bg-blue-100 hover:text-blue-600"
          }`
        }
      >
        {link.name}
      </NavLink>
    </motion.li>
  ));

  return (
    <div>
      <div className="navbar bg-neutral-900 text-white shadow-xl px-4 lg:px-8">
        {/* LEFT */}
        <div className="navbar-start">
          {/* MOBILE MENU */}
          <div className="relative lg:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="btn bg-indigo-600 hover:bg-indigo-700 btn-circle border-none"
            >
              <motion.div
                animate={open ? "open" : "closed"}
                className="w-6 h-6 flex flex-col justify-between"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 8 },
                  }}
                  className="h-0.5 w-full bg-white"
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                  }}
                  className="h-0.5 w-full bg-white"
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -8 },
                  }}
                  className="h-0.5 w-full bg-white"
                />
              </motion.div>
            </button>

            {/* MOBILE DROPDOWN */}
            <AnimatePresence>
              {open && (
                <motion.ul
                  initial={{ opacity: 0, y: -20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="absolute top-12 left-0 bg-neutral-800 text-white border border-blue-500 rounded-xl shadow-2xl p-4 space-y-2 z-50 w-52"
                >
                  {renderLinks}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          {/* CLIENT NAME + PHOTO */}
          <NavLink to="/">
            <motion.div
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              whileHover={{
                scale: 1.05,
                textShadow: "0px 0px 10px rgba(59,130,246,0.8)",
              }}
              className="flex items-center gap-3 ml-2"
            >
              <img
                className="rounded-full h-12 w-12 border-2 border-blue-500 object-cover"
                src={clientPhoto}
                alt="client"
              />

              <div>
                <h1 className="font-bold text-lg text-white">
                  Habib
                </h1>

                <p className="text-xs text-blue-400">
                  Banker | Data Entry Operator
                </p>
              </div>
            </motion.div>
          </NavLink>
        </div>

        {/* CENTER DESKTOP MENU */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            {links.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-blue-500 text-white"
                        : "hover:bg-blue-600 hover:text-white"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDE CV BUTTON */}
        <div className="navbar-end">
          <a
            href="https://drive.google.com/your-client-cv-link"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-blue-600 hover:bg-blue-700 text-white border-none shadow-lg flex items-center gap-2"
          >
            <FiDownload />
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navber;
