"use client"

import config from '@/utils/config';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import Loading from '@/components/Loading';

interface resvItem {
  massage: {
    address: string;
    name: string;
    tel: string;
  };
  user: string
  resvDate: string;
  _id: string;
}

interface ResponseResvJSON {
  success: boolean;
  data: resvItem[];
}

interface UserRole {
  _id: string,
  role: string
}

interface ResponseUserJSON {
  success: boolean;
  data: UserRole
}

interface ResponseDelJSON {
  success: boolean;
  data: Object
}

function ReservationPage() {
  const [resvList, setResvList] = useState<resvItem[]>([]);
  const [user, setUser] = useState<UserRole>(Object);
  const [loading, setLoading] = useState<boolean>(true)

  const router = useRouter();

  useEffect(() => {
    fetchData();
    fetchUserRole();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await axios.get<ResponseResvJSON>(`${config.api}/reservations`, config.headers());
      if (response.data.success === true) {
        setResvList(response.data.data);
      }
    } catch (err: any) {
      console.log(err.message);
    } finally {
      setLoading(false)
    }
  };

  const fetchUserRole = async () => {
    try {
      const response = await axios.get<ResponseUserJSON>(`${config.api}/auth/me`, config.headers());
      if (response.data.success === true) {
        setUser(response.data.data)
      }
    } catch (err: any) {
      console.log(err.message)
    }
  }

  // Function to format the reservation date to show only the date part
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options = { month: '2-digit' as const, day: '2-digit' as const, year: 'numeric' as const };
    return date.toLocaleDateString(undefined, options);
  };

  const handleEditClick = (rid: string) => {
    router.push(`/reservations/edit/${rid}`)
  }

  const handleDelete = (rid: string) => {
    Swal.fire({
      title: "Delete Confirmation",
      text: "Are you sure to delete this reservation",
      icon: "question",
      showCancelButton: true,
      cancelButtonText: "Cancel",
      confirmButtonText: "Delete"
    }).then(async (res) => {
      if (res.isConfirmed) {
        try {
          const response = await axios.delete<ResponseDelJSON>(`${config.api}/reservations/${rid}`, config.headers())
          if (response.data.success === true) {
            Swal.fire({
              title: "Deleted Reservation",
              text: "reservation has been deleted.",
              icon: 'success',
              timer: 2000
            })

            // delete target item from array resvList
            setResvList(prevList => prevList.filter(item => item._id !== rid))

            // router.push("/massages")
          }
        } catch (err) {
          Swal.fire({
            title: "Deleting Error",
            text: `delete failed: ${err}`,
            icon: 'error',
            timer: 2000
          })
        }
      }
    })
  }

  return (
    <>
      {
        loading ? (
          <Loading />
        ) : (
            <>
              <div className='bg-emerald-100 pb-10'>
                <div className='container mx-auto lg:w-1/2 min-h-screen px-10 lg:px-0 pt-10'>
                  <p className='text-center text-emerald-900 text-2xl font-bold py-4'>Reservation History</p>

                  {
                    resvList.length === 0 ? (
                      <div className="border p-4 px-8 mt-4 rounded-xl hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 bg-white flex justify-between">
                        <p className='font-semibold mt-1'>Reservation in history is empty.</p>
                        <a className="btn btn-sm btn-accent text-white" href="/massages">make new reservation</a>
                      </div>
                    ) : ''
                  }

                  {resvList.map((reservation) => (
                    <div key={reservation._id} className='border p-4 mt-4 rounded-xl hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 bg-white'>
                      <h2 className='font-bold text-lg'>{reservation.massage.name}</h2>
                      <p className='text-gray-600 my-2'>
                        <LocationOnIcon className='text-teal-400' /> {reservation.massage.address}
                      </p>
                      <p className='text-gray-600 my-2'>
                        <LocalPhoneIcon className='text-teal-400' /> {reservation.massage.tel}
                      </p>
                      <p className='text-gray-600 my-2'>
                        <CalendarMonthIcon className='text-teal-400' /> {formatDate(reservation.resvDate)}
                      </p>
                      {
                        user.role === "admin" ?
                          <p className='text-gray-600 my-2'>
                            <PersonIcon className='text-teal-400' /> {reservation.user}
                          </p>
                          : ''
                      }
                      <button className='text-white btn btn-accent btn-sm rounded-md mt-2 mr-4'
                        onClick={() => handleEditClick(reservation._id)}
                      >Edit</button>

                      <button className='text-white btn btn-error btn-sm btn-outline rounded-md mt-2'
                        onClick={() => handleDelete(reservation._id)}
                      >Delete</button>
                    </div>
                  ))}
                </div>
              </div>
            </>
        )
      }
    </>
  );
}

export default ReservationPage;
