// Page.tsx

"use client"

import MassageList from '@/components/MassageList';
import React, { useState } from 'react';

function Page() {
    const [page, setPage] = useState(1); // Start from page 1

    const decreasePage = () => {
        if (page > 1) setPage(page - 1); // Ensure page doesn't go below 1
    };

    const increasePage = () => {
        setPage(page + 1);
    };

    return (
        <div className="bg-emerald-100">
            <div className='container mx-auto lg:w-1/2 min-h-screen'>
                <MassageList page={page} />
                <div className='join grid grid-cols-2 pb-8'>
                    <button className='join-item btn btn-outline btn-error' onClick={decreasePage}>Previous</button>
                    <button className='join-item btn btn-outline btn-success' onClick={increasePage}>Next</button>
                </div>
            </div>
        </div>
    );
}

export default Page;
