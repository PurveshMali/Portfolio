import { ArrowUpNarrowWide, ArrowUpRight } from "lucide-react";
import React from "react";
import ContactForm from "../components/ContactForm";

const Page5 = () => {
  return (
    <div className="w-full h-auto px-2 md:px-10 lg:px-20 md:mt-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row lg:flex-row gap-4 justify-between items-center px-2 md:px-10">
        <div className="flex flex-col md:flex-row  items-center w-full md:w-auto space-y-2 space-x-6 md:mb-0">
          <h1 className="text-2xl md:text-3xl text-[#B3B3B3] font-[font10]">
            <span className="text-[#E64500]">#</span>
            let's connect
          </h1>
          <div className=" md:block w-24 md:w-100 h-[1px] bg-[#E64500]"></div>
        </div>
      </div>

      {/* Contact form */}

      <ContactForm />
    </div>
  );
};

export default Page5;
