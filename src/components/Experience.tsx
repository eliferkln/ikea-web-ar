import React from "react";

const Experience = () => {
  const openUrl = (url: string) => {
    window.open(url, "_blank");
  };
  const url =
    "https://res.cloudinary.com/duotxzytv/image/upload/v1695118545/ikea/ikea/tabberas-koleksiyonu-skapakli-karistirma-kabi_wxjbrr.jpg";
  return (
    <div className="w-full bg-white pb-16  ">
      <div className="max-w-[1440px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] h-[400px] mx-auto my-4" src={url} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#6f89b45e] font-bold text-2xl ">
            Yetişkinler için eğlenceli bir koleksiyon
          </p>
          <h1 className="md:text-2xl sm:text-xl text-xl font-bold py-2">
            Yeni ve eğlenceli TABBERAS Koleksiyonu mutfakta aileniz ile birlikte
            geçireceğiniz zamanı en üst düzeye çıkarmak için tasarlandı.
          </h1>
          <p>
            Rengarenk yemek hazırlama ürünleri ile pastalarınızı daha lezzetli
            hale getirmenin tam zamanı. TABBERAS Koleksiyonu içerisinde bulunan
            yemek hazırlama ürünleri işlevsel olduğu kadar mutfağınıza canlılık
            da katacak. Spatulanın silikon ucu sayesinde karıştırma kapları
            içerisinde bulunan harçları rahatlıkla kek kalıplarına
            dökebilirsiniz.
          </p>
          <button
            className="bg-[#6f89b45e] text-white w-[300px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 hover:text-white"
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

export default Experience;
