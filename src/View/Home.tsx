import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import { IPropsHome } from "./IProps";
import Slider from "../components/Slider";
import Search from "../components/Search";
import { model } from "../components/ModelDesc";
import Experience from "../components/Experience";

const Home: React.FC<IPropsHome> = ({ googleSignOut }) => {
  const [searchResults, setSearchResults] = useState<model[]>([]);

  return (
    <div>
      <Navbar signOut={googleSignOut} />
      <Slider />
      <Search setSearchResults={setSearchResults} />
      <Cards searchResults={searchResults} />
      <Experience />
      <Footer />
    </div>
  );
};

export default Home;
