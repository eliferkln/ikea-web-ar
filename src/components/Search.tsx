import React, { useState } from "react";
import { urls } from "./ModelDesc";
import { IPropsSearch } from "./IProps";

const Search: React.FC<IPropsSearch> = ({ setSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    const results = urls.filter((item: any) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="flex  w-full max-w-[1400px]  py-[4rem] px-4 bg-white items-center mx-auto grid md:grid-cols-2  ">
      <h2 className="text-2xl font-bold   text-[#fcd500] ">
        IKEA ile düzenli evler - Yeni Ürünler
      </h2>
      <div className="flex gap-4">
        <input
          className="bg-gray-50 border border-[#6f89b45e] rounded-md text-sm w-full indent-2 p-4 outline-none focus:border-[#3567b980] focus:ring-1 rounded-tl rounded-bl"
          type="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="bg-[#6f89b45e] px-12 py-4 text-white rounded-tr rounded-md  disabled:bg-gray-400"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
