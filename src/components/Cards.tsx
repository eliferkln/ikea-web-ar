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
    name: "Koltuk",
    price: "$242",
    url: "https://www.ikea.com.tr/?gclid=Cj0KCQjw9fqnBhDSARIsAHlcQYTeI-ow3z4UQfur3fMogxjIvff8qMOwkSU5E679BfSb52XQQNPkLa0aAuewEALw_wcB",
  },
  {
    androidurl: "/assets/ikea2.glb",
    iosurl: "/assets/ikea2.usdz",
    name: "Lamba",
    price: "579 TL",
    url: "https://www.ikea.com.tr/urun/tertial-koyu-gri-17-cm-calisma-lambasi-50355395",
  },
  {
    androidurl: "/assets/ikea1.glb",
    iosurl: "/assets/ikea1.usdz",
    name: "Koltuk",
    price: "$242",
    url: "https://www.ikea.com.tr/?gclid=Cj0KCQjw9fqnBhDSARIsAHlcQYTeI-ow3z4UQfur3fMogxjIvff8qMOwkSU5E679BfSb52XQQNPkLa0aAuewEALw_wcB",
  },
  {
    androidurl: "/assets/ikea2.glb",
    iosurl: "/assets/ikea2.usdz",
    name: "Lamba",
    price: "$100",
    url: "https://www.ikea.com.tr/?gclid=Cj0KCQjw9fqnBhDSARIsAHlcQYTeI-ow3z4UQfur3fMogxjIvff8qMOwkSU5E679BfSb52XQQNPkLa0aAuewEALw_wcB",
  },
  {
    androidurl: "/assets/ikea1.glb",
    iosurl: "/assets/ikea1.usdz",
    name: "Koltuk",
    price: "$242",
    url: "https://www.ikea.com.tr/?gclid=Cj0KCQjw9fqnBhDSARIsAHlcQYTeI-ow3z4UQfur3fMogxjIvff8qMOwkSU5E679BfSb52XQQNPkLa0aAuewEALw_wcB",
  },
  {
    androidurl: "/assets/ikea2.glb",
    iosurl: "/assets/ikea2.usdz",
    name: "Lamba",
    price: "$100",
    url: "https://www.ikea.com.tr/?gclid=Cj0KCQjw9fqnBhDSARIsAHlcQYTeI-ow3z4UQfur3fMogxjIvff8qMOwkSU5E679BfSb52XQQNPkLa0aAuewEALw_wcB",
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
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
