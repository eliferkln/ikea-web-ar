import React from "react";

const Experience = () => {
  const openUrl = (url: string) => {
    window.open(url, "_blank");
  };
  const url =
    "https://res.cloudinary.com/duotxzytv/image/upload/v1695118545/ikea/ikea/tabberas-koleksiyonu-skapakli-karistirma-kabi_wxjbrr.jpg";
  return (
    <div className="w-full bg-white py-16  ">
      <div className="max-w-[1440px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] h-[400px] mx-auto my-4" src={url} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#fcd500] font-bold text-2xl ">
          A playful collection for grown-ups
          </p>
          <h1 className="md:text-2xl sm:text-xl text-xl font-bold py-2">
          The new and eclectic TABBERAS collection is designed to maximise the family time in the kitchen.
          </h1>
          <p>
          It's time to make your cakes more delicious with colourful preparation products.
          The preparation products in the TABBERAS Collection will add vibrancy to your kitchen as well as being functional.
          Thanks to the silicone tip of the turner, you can easily pour the mortars in the mixing bowls into the tins and moulds.
          </p>
          <button
            className="bg-[#6f89b45e] text-white w-[300px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 hover:text-white"
            onClick={() =>
              openUrl("https://www.ikea.com.tr/kategori/tabberas-koleksiyonu")
            }
          >
            See all TABBERAS Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default Experience;
