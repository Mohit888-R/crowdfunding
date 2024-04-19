import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";
import MainComponent from "../components/Home/MainComponent";
import Footer from "../components/Footer";


const Index = () => {
  return (
    <div className="">
     <MainComponent/>
     <Footer/>
    </div>
  );
};

export default Index;
