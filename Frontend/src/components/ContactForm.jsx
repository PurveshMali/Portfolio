import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Loader } from "lucide-react";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccess("");
    setError("");

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const toastId = toast.loading("Sending...");

    const request = axios.post("https://portfolio-ok7h.onrender.com/api/contact", formData);

    // Ensure loader is visible for at least 3 seconds
    await Promise.all([request, delay(3000)])
      .then(([res]) => {
        if (res.status === 201) {
            toast.success("Message sent successfully!", { id: toastId });
          setFormData({ name: "", email: "", message: "" });
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something went wrong. Please try again.", { id: toastId });
        setError("Something went wrong. Please try again.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="md:mt-5 w-full flex justify-center items-center  p-4">
      <div className="w-full md:w-3/4 p-1 border-2 border-[#2b2b2b] rounded-3xl h-full flex flex-col justify-center items-center">
        <div className="w-full flex justify-start border-1 border-[#f2f2f281] items-center py-6 px-6 bg-gradient-to-r from-[#f2f2f23b] via-[#f2f2f281] to-[#f2f2f23b] rounded-t-3xl h-10 ">
          <div className="flex items-center space-x-1 md:flex">
            <div className="bg-orange-500 w-3 h-3 rounded-full"></div>
            <div className="bg-yellow-500 w-3 h-3 rounded-full"></div>
            <div className="bg-green-500 w-3 h-3 rounded-full"></div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center bg-[#0E0E10] rounded-b-3xl h-full border-1 border-[#f2f2f281]">
          <div className="w-full md:w-1/2 flex flex-col space-y-4 justify-left items-top h-full px-6 py-10 ">
            <h1 className="text-4xl text-[#B3B3B3] font-sans font-bold">
              Lets Talk
            </h1>
            <p className="text-[#B3B3B3] font-sans font-normal text-sm">
              Whether you’re looking to build a new website, improve your
              existing platform, or bring a unique project to life, I’m here to
              help.
            </p>
            <form
              onSubmit={handleSubmit}
              className="w-full h-full flex flex-col space-y-4 justify-start items-top"
            >
              <label
                htmlFor="name"
                className="text-[#B3B3B3] font-sans text-md font-medium"
              >
                Full name
              </label>
              <input
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full h-10 bg-[#1C1C1E] border-1 border-[#f2f2f217] rounded-md px-4 text-[#7f7f7f] font-sans font-normal text-sm placeholder-[#7f7f7f] focus:outline-none focus:ring-1 focus:ring-[#484848] transition-all duration-100 ease-in-out shadow-xl shadow-[#000000]"
                type="text"
                required
              />

              <label
                htmlFor="name"
                className="text-[#B3B3B3] font-sans text-md font-medium"
              >
                Email address
              </label>
              <input
                value={formData.email}
                onChange={handleChange}
                id="email"
                placeholder="example@ex.com"
                className="w-full h-10 bg-[#1C1C1E] border-1 border-[#f2f2f217] rounded-md px-4 text-[#7f7f7f] font-sans font-normal text-sm placeholder-[#7f7f7f] focus:outline-none focus:ring-1 focus:ring-[#484848] transition-all duration-100 ease-in-out shadow-xl shadow-[#000000]"
                type="email"
                required
              />

              <label
                htmlFor="message"
                className="text-[#B3B3B3] font-sans text-md font-medium"
              >
                Your message
              </label>
              <textarea
                value={formData.message}
                onChange={handleChange}
                placeholder="Share your thoughts or inquiries..."
                rows={10}
                cols={50}
                id="message"
                className="w-full bg-[#1C1C1E] border-1 border-[#f2f2f217] rounded-md px-4 py-3 text-[#7f7f7f] font-sans font-normal text-sm placeholder-[#7f7f7f] focus:outline-none focus:ring-1 focus:ring-[#484848] transition-all duration-100 ease-in-out  shadow-xl shadow-[#000000]"
                type="text"
              ></textarea>

              <button
                disabled={isLoading}
                className="w-full h-10 flex items-center justify-center space-x-4 bg-[#3A3A49] rounded-md text-[#ffffff] font-sans font-bold text-sm hover:bg-[#3a3a49dc] transition-all duration-100 ease-in-out shadow-xl shadow-[#000000] mt-2 border-1 border-[#2e2e2e] disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <Loader className="animate-spin" size={20} />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowUpRight className="text-[#ffffff] ml-2" size={20} />
                  </>
                )}
              </button>
            </form>
            {success && (
              <p className="text-green-500 font-medium mt-2">{success}</p>
            )}
            {error && <p className="text-red-500 font-medium mt-2">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
