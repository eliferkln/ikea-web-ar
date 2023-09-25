import React from "react";

const Drawer = () => {
  const openUrl = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <div className="w-full bg-white py-24  ">
      <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 gap-8 ">
        <div className="flex flex-col justify-center gap-8">
          <p className="text-[#6f89b45e] font-bold text-2xl ">
          A playful collection for grown-ups
          </p>
          <p>
          It's the perfect time to make your cakes even more delicious with colorful cooking preparation products.
          The TABBERAS Collection offers functional cooking preparation items that will not only serve their purpose but also add vibrancy to your kitchen. 
          Thanks to the silicone tip of the spatula, you can easily pour mixtures from mixing bowls into cake molds.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <button
            className="bg-[#fcd500] text-white w-[300px] rounded-md font-medium my-6 mx-auto md:mx-0 py-4 hover:text-white"
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

export default Drawer;
