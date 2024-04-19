// pages/createCampaign.js

import { useState } from 'react';
import { createCampaign } from '../lib/utils/index';
import { Button } from '../components/ui/button';
import { atom, useAtom } from "jotai";
import {addressOwnerAtom} from '../components/Navbar';

export default function CreateCampaign() {
  const [title, setTitle] = useState('');
  const [address, setAddress] = useAtom(addressOwnerAtom);
  const [description, setDescription] = useState('');
  const [target, setTarget] = useState();
  const [deadline, setDeadline] = useState();
  const [collectedamount, setCollectedAmount] = useState();
  const [image, setImage] = useState('');
  

  async function handleSubmit(e) {
    e.preventDefault();
    await createCampaign(address, title, description, target, deadline, collectedamount, image);
    // Optionally, redirect the user to another page after campaign creation
  }

  return (
    <div className='flex flex-col  space-y-4 my-8 mt-28'>
      <h1 className='text-[24px] font-semibold text-center'>Create a New Campaign</h1>
      <form onSubmit={handleSubmit} className='flex flex-col space-y-4 w-6/12 m-auto justify-center'>
        <div className='flex flex-col'>
          <label>Owner Address : </label>
        <input type="text" placeholder="owner" value={address} className='border h-10 px-2' style={{paddingLeft:'6px'}} disabled/>
        </div>
        <div className='flex flex-col'>
          <label>Title : </label>
        <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} className='border h-10 px-2' style={{paddingLeft:'6px'}}/>
        </div>

        <div className='flex flex-col'>
          <label>Description : </label>
        <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} className='border h-[5rem] px-2' style={{paddingLeft:'6px',height:'100px'}}/>
       </div>

       <div className='flex flex-col'>
          <label>Target Amount : </label>
        <input type="number" placeholder="Target Amount" value={target} onChange={e => setTarget(e.target.value)} className='border h-10 px-2' style={{paddingLeft:'6px'}}/>
       </div>
       
       <div className='flex flex-col'>
          <label>Deadline : </label>
        <input type="number" placeholder="Deadline" value={deadline} onChange={e => setDeadline(e.target.value)} className='border h-10 px-2' style={{paddingLeft:'6px'}}/>
        </div>

        <div className='flex flex-col'>
          <label>Collected Amount : </label>
        <input type="number" placeholder="collected Amount" value={collectedamount} onChange={e => setCollectedAmount(e.target.value)} className='border h-10 px-2' style={{paddingLeft:'6px'}}/>
        </div>

        <div className='flex flex-col'>
          <label>Image : </label>
        <input type="text" placeholder="Image URL" value={image} onChange={e => setImage(e.target.value)} className='border h-10 px-2' style={{paddingLeft:'6px'}}/>
        </div>
        <Button variant={'default'} className='text-[18px] bg-green-600 border inline-block w-4/12 m-auto rounded-full ' type="submit">Create Campaign</Button>
      </form>
    </div>
  );
}
