// MassageList.tsx

"use client"

import getMassages from '@/libs/getMassages';
import config from '@/utils/config';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WatchLaterIcon from '@mui/icons-material/WatchLater';

interface MassageItem {
    _id: string;
    name: string;
    address: string;
    province: string;
    tel: string;
    openTime: string;
    closeTime: string;
}

interface ResponseJSON {
    success: boolean;
    count: number;
    pagination: { prev?: { page: number; limit: number }; next?: { page: number; limit: number } };
    data: MassageItem[];
}

function MassageList({ page }: { page: number }) {

    const router = useRouter()

    const [massageList, setMassageList] = useState<MassageItem[]>([])

    useEffect(() => {
        fetchData()
    }, [page])

    const fetchData = async () => {
        try {
            const response: ResponseJSON = await getMassages({ url: `${config.api}/massages?page=${page}` });
            setMassageList(response.data);
        } catch (e) {
            console.log("Error: ", e);
        }
    };

    const handleClickBtn = async (massageID: string) => {
        router.push(`/reserve/${massageID}`)
    }
    
    return (
        <>
            <p className='font-bold text-3xl text-center pt-6 pb-4 text-emerald-900'>Massage List</p>
            {/* <hr className='border-1 border-emerald-600' /> */}
            <div>
                {massageList.map((massage: MassageItem) => (
                    <div key={massage._id} id={massage._id}
                    className='border p-4 my-4 rounded-xl hover:shadow-lg transition duration-300 
                    ease-in-out transform hover:scale-105 bg-white'>
                        <h2 className='font-bold text-lg'>{massage.name}</h2>
                        <p className='text-gray-600 my-2'>
                            <LocationOnIcon className='text-teal-400' /> {massage.address}, {massage.province}
                        </p>
                        <p className='text-gray-600 my-2'>
                            <LocalPhoneIcon className='text-teal-400' /> {massage.tel}
                        </p>
                        <p className='text-gray-600 my-2'>
                            <WatchLaterIcon className='text-teal-400' /> {massage.openTime} - {massage.closeTime}
                        </p>
                        <button className='text-white btn btn-accent btn-sm rounded-md mt-2'
                            onClick={() => handleClickBtn(massage._id)}
                        >Reserve</button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default MassageList;
