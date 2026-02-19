import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { Facebook, Phone, Mail } from "lucide-react";

const Contact = () => {
  // CLIENT CONTACT INFO
  const contacts = [
    {
      name: "Email",
      icon: <Mail size={22} />,
      link: "mailto:client@email.com",
    },
    {
      name: "Phone",
      icon: <Phone size={22} />,
      link: "tel:+8801XXXXXXXXX",
    },
    {
      name: "Facebook",
      icon: <Facebook size={22} />,
      link: "https://facebook.com/",
    },
  ];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleform = (data) => {
    const message = `
New Portfolio Contact Message

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Message: ${data.comment}
`;

    // CLIENT WhatsApp number
    const whatsappNumber = "8801XXXXXXXXX";

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");

    toast.success("Message sent successfully", {
      style: {
        background: "#111",
        color: "#fff",
        border: "1px solid #06b6d4",
      },
    });

    reset();
  };

  return (
    <section className="py-24 px-4 bg-black">
      <Toaster position="top-right" />

      {/* Heading */}
      <motion.div
        className="text-center text-white max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2
          className="text-4xl font-bold mb-4
        bg-gradient-to-r from-cyan-400 to-blue-500
        text-transparent bg-clip-text"
        >
          Contact Information
        </h2>

        <p className="text-gray-400">
          For professional inquiries, please contact using the information
          below.
        </p>
      </motion.div>

      {/* CONTACT ICONS */}
      <div className="flex justify-center gap-6 mb-16">
        {contacts.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 flex items-center justify-center
            rounded-full border border-cyan-400
            hover:bg-cyan-400 hover:text-black
            transition"
          >
            {item.icon}
          </a>
        ))}
      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit(handleform)}
        className="max-w-xl mx-auto bg-black border border-cyan-400
        rounded-3xl p-8 space-y-6"
      >
        <h2 className="text-center text-2xl text-white font-bold">
          Send Message
        </h2>

        {/* Name */}
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-4 bg-black border border-gray-600
          rounded-xl text-white"
          {...register("name", { required: "Name required" })}
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-4 bg-black border border-gray-600
          rounded-xl text-white"
          {...register("email", { required: "Email required" })}
        />

        {/* Phone */}
        <input
          type="text"
          placeholder="Phone"
          className="w-full p-4 bg-black border border-gray-600
          rounded-xl text-white"
          {...register("phone", { required: "Phone required" })}
        />

        {/* Message */}
        <textarea
          rows="4"
          placeholder="Message"
          className="w-full p-4 bg-black border border-gray-600
          rounded-xl text-white"
          {...register("comment", { required: "Message required" })}
        ></textarea>

        <button
          type="submit"
          className="w-full py-4 bg-cyan-500 rounded-xl
          hover:bg-cyan-600 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
