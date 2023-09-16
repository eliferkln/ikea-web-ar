import React from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import { IPropsHome } from "./IProps";

const Home: React.FC<IPropsHome> = ({ googleSignOut }) => {
  return (
    <div>
      <Navbar signOut={googleSignOut} />
      <Cards />
      <Footer />
    </div>
  );
};

export default Home;
