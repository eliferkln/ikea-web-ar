import React from "react";
import {
  BiLogoLinkedin,
  BiLogoYoutube,
  BiLogoInstagram,
  BiLogoTwitter,
} from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer: React.FC = () => {
  const showToastMessage = () => {
    toast.success("Success!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const openUrl = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <>
      {" "}
      <ToastContainer />{" "}
      <div className="max-w-[1440px] mx-auto py-12 px-4 grid lg:grid-cols-2 gap-8 text-gray-300 justify-between border-t-2 border-[#dadada63]">
        <div className="max-w-[360px]">
          <img
            alt=""
            src="/assets/logo.png"
            className="h-20"
            onClick={() => openUrl("https://www.ikea.com.tr/")}
          />
          <p className="py-4">
            IKEA Aile Kart'ınızı kullanın, her alışverişinizde IKEA Aile Para
            kazanın, indirimli ürün fırsatlarını ve kampanyaları kaçırmayın.
          </p>
          <div className="flex justify-between md:w-[50%] my-6">
            <a href="https://www.linkedin.com/company/ikea/">
              <BiLogoLinkedin size={30} />
            </a>
            <a href="https://www.instagram.com/ikeaturkiye/">
              {" "}
              <BiLogoInstagram size={30} />
            </a>
            <a href="https://twitter.com/IKEATurkiye">
              <BiLogoTwitter size={30} />
            </a>
            <a href="https://www.youtube.com/user/IKEATurkiye">
              <BiLogoYoutube size={30} />
            </a>
          </div>
        </div>

        <div className="lg:col-span-1 flex flex-col items-center  mt-6 ">
          <div className="flex flex-col sm:flex-row items-center gap-4 ">
            <input
              className="p-3 flex w-60 rounded-md text-[#dadada63] border-2 border-[#dadada63]"
              type="email"
              placeholder="Email"
            />
            <button
              onClick={showToastMessage}
              className="bg-[#13426ca6] hover:bg-[#dadada63] hover:text-[#13426ca6]  text-white rounded-md font-medium w-[200px]  my-6 px-6 py-3 "
            >
              Contact Me!
            </button>
          </div>
          <p>
            Contact me for mail{" "}
            <span
              className="text-[#13426ca6] px-2"
              onClick={() =>
                openUrl("https://www.ikea.com.tr/kisisel-verilerin-korunmasi")
              }
            >
              Privacy Policy.
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
