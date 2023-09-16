import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { IPropsNavbar } from "./IProps";

const Navbar: React.FC<IPropsNavbar> = ({ signOut }) => {
  const [nav, setNav] = useState<boolean>(false);

  const handleNav = () => {
    setNav(!nav);
  };
  const openUrl = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1440px] mx-auto px-4 text-white z-10 border-b-2 border-[#dadada63]">
      <img
        alt=""
        src="/assets/logo.png"
        className="h-20"
        onClick={() => openUrl("https://www.ikea.com.tr/")}
      />
      <ul className="hidden md:flex">
        <li
          className="p-6 text-[#13426ca6]  "
          onClick={() => openUrl("https://www.ikea.com.tr/")}
        >
          Home
        </li>
        <li
          className="p-6 text-[#13426ca6] "
          onClick={() => openUrl(" https://www.ikea.com.tr/hizmetler")}
        >
          About
        </li>
        <li
          className="p-6 text-[#13426ca6] "
          onClick={() =>
            openUrl("https://www.ikea.com.tr/musteri-hizmetleri/bize-ulasin")
          }
        >
          Contact
        </li>
        <li className="p-6 text-[#13426ca6] " onClick={signOut}>
          Sign-Out
        </li>
      </ul>
      <div
        onClick={handleNav}
        className="block md:hidden z-10 text-[#13426ca6]"
      >
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-10"
            : "ease-in-out duration-500 fixed left-[-100%] z-10"
        }
      >
        <img
          alt=""
          src="/assets/logo.png"
          className="w-24 my-4 mx-auto"
          onClick={() => openUrl("https://www.ikea.com.tr/")}
        />
        <li
          className="p-4 border-b border-gray-600"
          onClick={() => openUrl("https://www.ikea.com.tr/")}
        >
          Home
        </li>
        <li
          className="p-4 border-b border-gray-600"
          onClick={() => openUrl(" https://www.ikea.com.tr/hizmetler")}
        >
          About
        </li>
        <li
          className="p-4"
          onClick={() =>
            openUrl("https://www.ikea.com.tr/musteri-hizmetleri/bize-ulasin")
          }
        >
          Contact
        </li>
        <li className="p-4 " onClick={signOut}>
          Sign-Out
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
