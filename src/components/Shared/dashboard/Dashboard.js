import React, { useContext, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { UserContext } from '../../context/Context';
import avatarImg from "../../assets/images/avatar.png";
import Loading from '../Loading';


const Dashboard = () => {
    const [state] = useContext(UserContext);

     const { isUser } = useContext(UserContext);

   

    return (
        <div className="bg-accent">
            <div className='py-4 bg-secondary flex px-8'>
                <div className='w-1/2'>
                    <h3 className='text-xs text-white'>home / dashboard</h3>
                    <h3 className='text-lg lg:text-xl text-secondary font-bold mt-1'>Dashboard</h3>
                </div>
                <div className='w-1/2 '>
                    <h3 className='text-lg md:text-xl lg:text-3xl text-white font-bold my-1'>Welcome to your Dashboard</h3>
                </div>
            </div>
            <div className="drawer drawer-mobile lg:p-8 gap-x-5 ">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col bg-white rounded-md">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                    <div className="overflow-y-auto w-64  bg-white text-base-content rounded">
                        <div className='mx-auto mt-8 mb-4 p-2 flex justify-center '>
                            <div className="avatar">
                                <div className="w-24 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                                    <img src={avatarImg} alt='user name' />
                                </div>
                            </div>
                        </div>
                        <h3 className='text-center font-semibold'>{state?.isUser?.name}</h3>
                    <h3 className='text-center text-xs py-2'>{state?.isUser?.email}</h3>
                    {state?.isUser.role === "Driver" ? (
                     <h3 className='text-center text-xs py-2'>Driver</h3> 
                    ):(
                        <>
                      
                        {state?.isUser.isAdmin === true && state?.isUser.role === "Owner" ? (
                            <h3 className='text-center text-xs py-2'>  Admin</h3>
                         ):(
                            <h3 className='text-center text-xs py-2'>  Owner</h3>
                         )
                         
                         }
                           </>
                    )}
                    
                   
                        <div className="divider mb-0"></div>

                        {/* <!-- Sidebar content here --> */}

                        {state?.isUser.role === "Driver" && (<ul className='dashboard-links'>
                            <li>
                                <Link className='hover:text-primary active:text-primary focus:text-primary px-1' to="/dashboard/booking">My Booking</Link>
                            </li>
                            <li>
                                <Link className='hover:text-primary active:text-primary focus:text-primary px-1' to="/dashboard/review">My Review</Link>
                            </li>
                            <li>
                                <Link className='hover:text-primary active:text-primary focus:text-primary px-1' to="/dashboard/complain">Complain</Link>
                            </li>
                           
                        </ul>
                        )}
                        {state?.isUser?.role === "Owner" && (
                            <ul className='dashboard-links'>
                                <li>
                                    <Link className='hover:text-primary active:text-primary focus:text-primary px-1' to="/dashboard/addParking">New Parking zone</Link>
                                </li>
                                <li>
                                    <Link className='hover:text-primary active:text-primary focus:text-primary px-1' to="/dashboard/newParkingSpace">New Parking Space</Link>
                                </li>
                                <li>
                                    <Link className='hover:text-primary active:text-primary focus:text-primary px-1' to="/dashboard/review">My Review</Link>
                                </li>
                                <li>
                                <Link className='hover:text-primary active:text-primary focus:text-primary px-1' to="/dashboard/complain">Complain</Link>
                            </li>
                            </ul>
                        )}
                        {state?.isUser.isAdmin === true && state?.isUser.role === "Owner" && (
                            <ul className='dashboard-links'>
                               
                                <li>
                                    <Link className='hover:text-primary active:text-primary focus:text-primary px-1' to="/dashboard/user">All User</Link>
                                </li>
                                <li>
                                    <Link className='hover:text-primary active:text-primary focus:text-primary px-1' to="/dashboard/AllParking">ALL Parking </Link>
                                </li>
                                <li>
                                    <Link className='hover:text-primary active:text-primary focus:text-primary px-1' to="/dashboard/AllParkingSlot">All ParkingSlot</Link>
                                </li>
                                <li>
                                    <Link className='hover:text-primary active:text-primary focus:text-primary px-1' to="/dashboard/makeAdmin">Make Admin</Link>
                                </li>
                                 <li>
                                    <Link className='hover:text-primary active:text-primary focus:text-primary px-1' to="/dashboard/allcomplain">All Complain</Link>
                                </li> 
                            </ul>
                        )}


                    </ div>


                </div>
            </div>

        </div>
    );
};

export default Dashboard;