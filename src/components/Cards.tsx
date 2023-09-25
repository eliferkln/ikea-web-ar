import React from "react";
import Model from "./Model";
import { urls } from "./ModelDesc";
import { IPropsCards } from "./IProps";

const Cards: React.FC<IPropsCards> = ({ searchResults }) => {
  const openUrl = (url: string) => {
    window.open(url, "_blank");
  };

  const productsToDisplay = searchResults.length ? searchResults : urls;

  return (
    <div className="w-full pb-[10rem] px-4 bg-white relative">
      <div className="max-w-[1440px] mx-auto grid md:grid-cols-3 gap-8">
        {productsToDisplay.map((model: any, index: any) => (
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
