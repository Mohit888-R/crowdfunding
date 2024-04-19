import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import { createThirdwebClient, getContract, resolveMethod } from "thirdweb";
import { sepolia } from "thirdweb/chains";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Provider } from 'jotai';


const activeChain = "ethereum";
export const client = createThirdwebClient({
  clientId: `1a0a36c7686f3ecbfa5be812d9bc6fcf`
});



export const contract = getContract({
  client,
  chain: sepolia,
  address: "0x484Fa151601A3f24df2DF8B2d128CE2C2F76bdcD"
});

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <Provider>
    <ThirdwebProvider>
       <Navbar />
        <Component {...pageProps} />
    </ThirdwebProvider>
    </Provider>
  );
}

export default MyApp;
