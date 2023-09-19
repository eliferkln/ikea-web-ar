import React from "react";
import Model from "./Model";

interface model {
  androidurl: string;
  iosurl: string;
  name: string;
  price: string;
  url: string;
}
const urls: model[] = [
  {
    androidurl: "/assets/ikea1.glb",
    iosurl: "/assets/ikea1.usdz",
    name: "Telefon Standı",
    price: "29.99₺",
    url: "https://www.ikea.com.tr/urun/bergenes-bambu-telefon-tablet-standi-10457999",
  },
  {
    androidurl: "/assets/ikea2.glb",
    iosurl: "/assets/ikea2.usdz",
    name: "Lamba",
    price: "579₺",
    url: "https://www.ikea.com.tr/urun/tertial-koyu-gri-17-cm-calisma-lambasi-50355395",
  },
  {
    androidurl: "/assets/ikea3.glb",
    iosurl: "/assets/ikea3.usdz",
    name: "Şifonyer",
    price: "5299₺",
    url: "https://www.ikea.com.tr/urun/hemnes-beyaz-vernik-108x96-cm-3-cekmeceli-sifonyer-80424745",
  },
  {
    androidurl: "/assets/ikea4.glb",
    iosurl: "/assets/ikea4.usdz",
    name: "Açık Raf Ünitesi",
    price: "4599₺",
    url: "https://www.ikea.com.tr/urun/vittsjo-venge-cam-100x36x175-cm-acik-raf-unitesi-20213312",
  },
  {
    androidurl: "/assets/ikea5.glb",
    iosurl: "/assets/ikea5.usdz",
    name: "Sandalye",
    price: "749₺",
    url: "https://www.ikea.com.tr/urun/askholmen-acik-kahverengi-katlanabilir-sandalye-50240031",
  },
  {
    androidurl: "/assets/ikea6.glb",
    iosurl: "/assets/ikea6.usdz",
    name: "Tabure",
    price: "229₺",
    url: "https://www.ikea.com.tr/urun/marius-siyah-tabure-10135659",
  },
];

const Cards: React.FC = () => {
  const openUrl = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <div className="w-full py-[10rem] px-4 bg-white relative">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {urls.map((model, index) => (
          <div
            className="w-full flex flex-col items-center bg-[#6f89b45e] rounded-lg hover:scale-105 duration-300"
            key={index}
          >
            <Model iosSrc={model.iosurl} glbSrc={model.androidurl} />
            <div className="w-full flex flex-col p-4 my-4 rounded-lg relative">
              <h2 className="text-2xl font-bold text-center mb-2 text-white">
                {model.name}
              </h2>
              <p className="text-center text-2xl font-bold mb-2 text-white">
                {model.price}
              </p>
              <button
                onClick={() => openUrl(model.url)}
                className="bg-[#3567b980] w-[200px] rounded-md font-medium mx-auto px-6 py-3 hover:text-[#082b64bd] text-white"
              >
                Satın Al
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
