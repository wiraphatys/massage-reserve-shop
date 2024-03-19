"use client"

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'

function Navbar() {

    const router = useRouter()

    const handleSignOut = () => {

        Swal.fire({
            title: "Log Out Confirmation",
            text: "Are you sure to log out ?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Logout",
            cancelButtonText: "Cancel"
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem('token')

                Swal.fire({
                    title: "Log Out",
                    text: "log out successfully",
                    icon: "success",
                    timer: 1500
                })

                setTimeout(() => {
                    router.push('/signin')
                }, 1000)
            }
        })
    }
    

    const [isLoggedIn, setIsLoggedIn] = useState(false);


    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, [isLoggedIn]);

    return (
        <>
            <div className="navbar bg-emerald-900 text-gray-300 sticky top-0 z-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl" href='/'>MRS</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href='/'>Home</a></li>
                        <li><a href='/massages'>Massages</a></li>
                        <li><a href='/reservations'>Reservation</a></li>
                        <li><a>Contact</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {isLoggedIn && (

                        <button className='btn btn-error btn-outline btn-sm'
                            onClick={handleSignOut}
                        >
                            Log Out
                        </button>

                    )}
                </div>
            </div>
        </>
    )
}

export default Navbar


{/* <div className="dropdown dropdown-end mr-2">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-gray-200 rounded-box w-30">
                            <li><a>Profile</a></li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div> */}