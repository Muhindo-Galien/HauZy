import React from "react";
import useResponsive from "../../../../../hooks/useResponsive";
import { CgMenuRightAlt } from "react-icons/cg";

const Menu = () => {
  const [isMobile] = useResponsive();

  return (
    <>
      {!isMobile ? (
        <div className="text-white flex flex-row justify-around items-center w-full font-Mulish lg:w-[700px] lg:z-10 md:w-[700px] md:z-10">
          <p className="cursor-pointer">Real Estate</p>
          <p className="cursor-pointer">Invest</p>
          <p className="cursor-pointer">Contact</p>
          <p className="cursor-pointer md:font-Poppins">About us</p>
          <button className="bg-white text-black px-5 py-2 rounded-md font-Poppins">
            Sign in
          </button>
        </div>
      ) : (
        <CgMenuRightAlt className="text-4xl mx-4" />
      )}
    </>
  );
};

export default Menu;
