import React, { useState } from 'react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from '../ui/sheet'
import { Button } from '../ui/button'
import { Input } from '../ui/input';
import {donateToCampaign} from '../../lib/utils/index';

function Payments({ contract, campaignId }:{ contract:any, campaignId:any }) {
    const [amount, setAmount] = useState('');
    const [loading, setLoading] = useState(false);

    const donate = async()=>{
        try {
            setLoading(true);
            await donateToCampaign(campaignId, amount);
            alert('Donation successful!');
        } catch (error) {
            console.error('Donation error:', error);
            alert('Donation failed: ' + error);
        } finally {
            setLoading(false);
        }
    }
    return (
        <Sheet>
            <SheetTrigger>
                <Button variant={'default'} className='border rounded-full text-white bg-green-600 hover:bg-green-600/60 '>Donate</Button>
            </SheetTrigger>
            <SheetContent className='bg-white text-black'>
                <SheetHeader>Donator is always equal to god</SheetHeader>
                <SheetDescription className='flex flex-col'>
                    <Input
                        type="text"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Amount in ETH"
                        disabled={loading}
                    />
                    <Button onClick={donate} className='border p-2 mt-4 rounded-full bg-green-500 hover:bg-green-500/60' disabled={loading}>
                        {loading ? 'Processing...' : 'Donate'}
                    </Button>
                </SheetDescription>
            </SheetContent>
        </Sheet>
    )
}

export default Payments;
