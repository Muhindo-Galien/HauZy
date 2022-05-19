import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const Presentation = () => {
  return (
    <div className="flex flex-row bg-black sm:w-full">
      <div className="bg-black text-white">
        <div>
          <p
            className="
                        text-7xl px-20 mt-40 xl:mt-28 lg:text-5xl
                        lg:mt-10 lg:w-[600px] lg:z-30
                        md:w-[500px] md:mt-5 md:text-4xl
                        md:px-10 xsm:px-5 sm:px-5 xsm:text-3xl sm:text-3xl
                        xsm:mt-5 sm:mt-5 font-Poppins"
          >
            Rent and sell your property without comissions
          </p>
          <p className="pl-32 mt-10 font-Mulish md:pl-16 md:mt-5 xsm:pl-5 sm:pl-5">
            Architect your future through <br />
            scalable and low-cost household investments.
            <br />
            And save thousands.
          </p>
        </div>
        <div className="pl-32 md:pl-16 mt-10 font-Poppins flex flex-row xsm:flex-col sm:flex-col xsm:pl-5 sm:pl-5 xsm:pr-5 sm:pr-5">
          <button className="pl-5 pr-1 py-4 border-white border xsm:w-full sm:w-full">
            <BsArrowUpRight className="float-right ml-20 -mt-2 mr-1 font-Poppins" />
            <span className="xsm:float-left sm:float-left">Rent</span>
          </button>
          <button className="pl-5 pr-1 py-4 border-white border ml-5 xsm:ml-0 sm:ml-0 xsm:mt-5 sm:mt-5">
            <BsArrowUpRight className="float-right ml-20 -mt-2 mr-1 " />
            <span className="xsm:float-left sm:float-left">Sell</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
