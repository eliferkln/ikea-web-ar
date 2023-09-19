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
            Yetişkinler için eğlenceli bir koleksiyon
          </p>
          <p>
            Rengarenk yemek hazırlama ürünleri ile pastalarınızı daha lezzetli
            hale getirmenin tam zamanı. TABBERAS Koleksiyonu içerisinde bulunan
            yemek hazırlama ürünleri işlevsel olduğu kadar mutfağınıza canlılık
            da katacak. Spatulanın silikon ucu sayesinde karıştırma kapları
            içerisinde bulunan harçları rahatlıkla kek kalıplarına
            dökebilirsiniz.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <button
            className="bg-[#fcd500] text-white w-[300px] rounded-md font-medium my-6 mx-auto md:mx-0 py-4 hover:text-white"
            onClick={() =>
              openUrl("https://www.ikea.com.tr/kategori/tabberas-koleksiyonu")
            }
          >
            TABBERAS Koleksiyonunu inceleyin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
