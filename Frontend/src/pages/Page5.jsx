import { ArrowUpNarrowWide, ArrowUpRight } from "lucide-react";
import React from "react";

const Page5 = () => {
  return (
    <div className="w-full h-auto py-10 md:px-10 lg:px-20 md:mt-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center px-2 md:px-10">
        <div className="flex items-center space-x-4 w-full md:w-auto mb-6 md:mb-0">
          <h1 className="text-2xl md:text-3xl text-[#B3B3B3] font-[font10]">
            <span className="text-[#E64500]">#</span>
            let's connect
          </h1>
          <div className="hidden md:block w-24 md:w-100 h-[1px] bg-[#E64500]"></div>
        </div>
      </div>

      {/* Contact form */}

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
                existing platform, or bring a unique project to life, I’m here
                to help.
              </p>
              <form
                action=""
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
                  placeholder="Share your thoughts or inquiries..."
                  rows={10}
                  cols={50}
                  id="message"
                  className="w-full bg-[#1C1C1E] border-1 border-[#f2f2f217] rounded-md px-4 py-3 text-[#7f7f7f] font-sans font-normal text-sm placeholder-[#7f7f7f] focus:outline-none focus:ring-1 focus:ring-[#484848] transition-all duration-100 ease-in-out  shadow-xl shadow-[#000000]"
                  type="text"
                ></textarea>

                <button className="w-full h-10 flex items-center justify-center space-x-4 bg-[#3A3A49] rounded-md text-[#ffffff] font-sans font-bold text-sm hover:bg-[#3a3a49dc] transition-all duration-100 ease-in-out shadow-xl shadow-[#000000] mt-2 border-1 border-[#2e2e2e]">
                    Send Message
                    <ArrowUpRight className="text-[#ffffff] ml-2" size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page5;
