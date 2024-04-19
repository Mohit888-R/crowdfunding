// pages/campaigns.js

import { useEffect, useState } from 'react';
import { getCampaigns } from '../lib/utils/index';
import Image from "next/image"
import Payments from '../components/Dialog/PaymentSheet';
import { Card,CardContent,CardHeader,CardDescription,CardFooter } from '../components/ui/card';
import { Grid } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '../components/ui/sheet';


export default function Campaigns() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    async function fetchCampaigns() {
      const fetchedCampaigns = await getCampaigns();
      setCampaigns(fetchedCampaigns);
    }
    fetchCampaigns();
  }, []);


  console.log("campaigns", campaigns);
  const contractAddress = '0x484Fa151601A3f24df2DF8B2d128CE2C2F76bdcD';

  return (
    <div>
      <h1 className='text-[28px] font-semibold text-center py-8'>All Campaigns</h1>
      <div className='justify-center gap-4' style={{display:'grid', gridTemplateColumns: 'auto auto auto'}}>
        {campaigns &&
          campaigns.map((item, index) => (
            <Card key={index} className='border w-4/12 h-96 overflow-y-hidden ' style={{height:'450px', width:'400px'}}>
              <CardContent className={'flex flex-col h-full'}>
                <CardHeader className={'flex justify-center'} style={{height:'200px', width:'400px'}}>
                  <Image src={item.image} width={250} height={50} className=' w-[300px] h-full m-auto  shadow-lg  rounded-lg' style={{objectFit:'cover',overflow:'hidden'}} alt="" />
                </CardHeader>
                <CardDescription className={'h-1/2'}>
                  <div style={{height:'20px',overflow:'hidden'}} className='truncate'><b> Title :</b> {item.title}</div>
                  <div  style={{minHeight:'20px', maxHeight:'60px',overflow:'hidden',textOverflow: 'ellipsis'}}><b> Description :</b> {(item.description)}
                  </div>
                  <Sheet>
                  <SheetTrigger className='font-light text-[10px] flex justify-end cursor-pointer' style={{color:'green'}}>Read more</SheetTrigger>
              <SheetContent className='flex h-screen  flex-col py-8 px-4 bg-white' style={{overflowY:'auto'}}>
                <span className='font-bold text-center'>Description </span>
                <span> 
                  {item.description}
                  </span>
              </SheetContent>
                  </Sheet>
                  <div className='flex flex-col' style={{height:'60px'}}>
                  <span ><b> Target :</b>  {parseInt(item[3]._hex)} </span>
                  <span><b> Date : </b>  {parseInt(item[4]._hex)} </span>
                  <span><b> Collected :</b>  {parseInt(item[5]._hex)} </span>

                  </div>

                </CardDescription>
                <CardFooter style={{height:'100px', display:'flex', justifyContent:'center',marginTop:'20px'}} >
                  <div className='inline-flex justify-center '>
                    <Payments contract={contractAddress} campaignId={index} />
                  </div>
                </CardFooter>
              </CardContent>
            </Card>
          ))
        }
      </div>
    </div>
  );
}


