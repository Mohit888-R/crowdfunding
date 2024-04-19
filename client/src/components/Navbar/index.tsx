import { Bell, Bookmark, LogIn, SearchIcon, User } from "lucide-react";
import SearchBar from "./SearchBar";
// import Login from "../Auth/LoginPopup";
// import LoginPopup from "../Auth/LoginPopup";
import { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import coinCare from '../../public/assets/coincare_logo.png';
import { connectWallet } from "../../lib/utils/index";
import { atom, useAtom } from "jotai";
import {atomWithStorage} from 'jotai/utils';

export const addressOwnerAtom = atomWithStorage<string | undefined>('address','');

  


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [address, setAddress] = useAtom<string|undefined>(addressOwnerAtom);

    const handleConnectWallet = async () => {
        const addr = await connectWallet();
        setAddress(addr);
    }
    function disconnectWallet() {
        setAddress("");
    }
    return (
        <div className=" border-b border-gray-500  bg-black shadow-md text-white">
            {/* logo */}
            <div className="flex items-center justify-between w-11/12 m-auto">
                <div className="flex items-center gap-4 py-8">
                    <Link href={'/'} className="flex items-center gap-4">
                        <Image src={coinCare} width={100} height={100} alt="coincare_logo" />
                        <div className='flex flex-col text-white'>
                            <span className="text-[1em]  font-normal select-none uppercase "> CoinCare</span>
                            <span className="text-[1em]  font-normal select-none uppercase "> Fundraiser</span>
                        </div>
                    </Link>
                </div>

                {/* <SearchBar /> */}
                <div className="py-8">
                    {/* <Button className=" mx-4 uppercase border border-black text-[20px] font-medium">
                        About Us
                    </Button> */}
                    <Button className=" mx-4 uppercase border border-black text-[20px] font-medium">
                        <Link href={'/campaigns'} className="text-white">
                            Charity List
                        </Link>
                    </Button>
                    <Button className="border border-black relative mx-4 uppercase text-[20px] font-medium">
                        <Link href={'/createcampaign'} className="text-white">
                            Create Charity <span className="text-[8px] absolute top-0 -right-2 px-1  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">new</span>
                        </Link>
                    </Button>
                </div>
                <div className="flex items-center w-2/12 justify-between">
                    {!address && <Button variant={'default'} onClick={handleConnectWallet} className="border hover:bg-red-600/90 h-[3.5rem] w-48 border-black bg-red-600 uppercase text-[16px] font-medium">
                        {address ? 'Connected: ' + address.substring(0, 6) + '...' + address.slice(-4) : 'Connect Wallet'}
                    </Button>}
                    {address && (
                        <>
                            {/* <p>Connected Address: {address}</p> */}
                            <Button className="border hover:bg-red-600/90 h-[3.5rem] w-48 border-black bg-red-600 uppercase text-[16px] font-medium" onClick={disconnectWallet}>Disconnect Wallet</Button>
                        </>
                    )}
                    <Button variant={'default'}>
                        <SearchIcon className="text-red-500 w-12 h-8 rotate-90" />
                    </Button>
                </div>

            </div>
        </div>
    )
}

export default Navbar;