import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import { IPropsHome } from "./IProps";
import Slider from "../components/Slider";
import Search from "../components/Search";
import { model, modelUrls } from "../components/ModelDesc";
import Experience from "../components/Experience";
import Drawer from "../components/Drawer";

const Home: React.FC<IPropsHome> = ({ googleSignOut }) => {
  const [searchResults, setSearchResults] = useState<model[]>([]);

  return (
    <div>
      <Navbar signOut={googleSignOut} />
      <Slider />
      <Search setSearchResults={setSearchResults} />
      <Cards searchResults={searchResults} />
      <Experience />
      {/* <Drawer /> */}
      {/* <Cards searchResults={modelUrls} /> */}
      <Footer />
    </div>
  );
};

export default Home;
