// MassageList.tsx

"use client"

import getMassages from '@/libs/getMassages';
import config from '@/utils/config';
import React, { useEffect, useState } from 'react';

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
    
    return (
        <>
            <p className='font-bold text-3xl text-center pt-4 mb-8'>Massage List</p>
            <div>
                {massageList.map((massage: MassageItem) => (
                    <div key={massage._id} 
                    className='border p-4 my-4 rounded-xl hover:shadow-lg transition duration-300 
                    ease-in-out transform hover:scale-105 bg-white'>
                        <h2 className='font-bold text-lg'>{massage.name}</h2>
                        <p className='text-gray-600'>{massage.address}, {massage.province}</p>
                        <p className='text-gray-600'>Tel: {massage.tel}</p>
                        <p className='text-gray-600'>Open: {massage.openTime} - Close: {massage.closeTime}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default MassageList;
