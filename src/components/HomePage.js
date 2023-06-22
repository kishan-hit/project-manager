import React from 'react';
import ThreeCircle from '../assets/ThreeCircle';
import LeftArrow from '../assets/LeftArrow';
import NavBar from './NavBar';
import Add from '../assets/Add';
import EllipseOne from '../assets/EllipseOne';
import TripleDot from '../assets/TripleDot';
import EllipseTwo from '../assets/EllipseTwo';
import EllipseThree from '../assets/EllipseThree';
import EllipseFour from '../assets/EllipseFour';
import Bulb from '../assets/Bulb';
import Search from '../assets/Search';
import Calendar from '../assets/Calendar';
import Chat from '../assets/Chat';
import Notification from '../assets/Notification';
import Image from '../assets/images/image 1.png';
import DownArrow from '../assets/DownArrow';
import Edit from '../assets/Edit';
import Attach from '../assets/Attach';
import AddTwo from '../assets/AddTwo';
import Image1 from '../assets/images/Ellipse 12.png';
import Image2 from '../assets/images/Ellipse 13.png';
import Image3 from '../assets/images/Ellipse 14.png';
import Image4 from '../assets/images/Ellipse 15.png';
import Filter from '../assets/Filter';
import DownArrowTwo from '../assets/DownArrowTwo';
import CalendarTwo from '../assets/CalendarTwo';
import Share from '../assets/Share';
import Rectangle from '../assets/Rectangle';
import LinearMenu from '../assets/LinearMenu';

function HomePage() {
    return (
        <div className='h-screen w-screen flex'>
            <div className='border border-gray-200 w-[15%] flex flex-col'>
                <div className='text-2xl flex items-center justify-between px-7 h-[4rem] border-b-[1px]'>
                    <div className='flex items-center space-x-2'>
                        <div className=''><ThreeCircle /></div>
                        <div className='text-[#0D062D] text-[20px] font-semibold'>
                            Project M.
                        </div>
                    </div>
                    <div className='cursor-pointer'><LeftArrow /></div>
                </div>
                <div className='px-3'>
                    <NavBar />
                    <div className='border my-3'></div>
                    <div className='mt-3'>
                        <div className='flex items-center justify-between px-4 py-1'>
                            <div className='font-semibold text-[12px] text-[#787486]'>
                                MY PROJECTS
                            </div>
                            <div><Add /></div>
                        </div>
                        <div className='flex items-center justify-between px-4 py-1 bg-[#f5f5f5] rounded-lg'>
                            <div className='flex items-center space-x-3'>
                                <div className=''><EllipseOne /></div>
                                <div className='font-semibold text-black'>Mobile App</div>
                            </div>
                            <div className=''><TripleDot /></div>
                        </div>
                        <div className='flex items-center space-x-3 px-4 py-1 rounded-lg cursor-pointer hover:bg-[#f5f5f5]'>
                            <div className=''><EllipseTwo /></div>
                            <div className=''>Website Redesign</div>
                        </div>
                        <div className='flex items-center space-x-3 px-4 py-1 rounded-lg cursor-pointer hover:bg-[#f5f5f5]'>
                            <div className=''><EllipseThree /></div>
                            <div className=''>Design System</div>
                        </div>
                        <div className='flex items-center space-x-3 px-4 py-1 rounded-lg cursor-pointer hover:bg-[#f5f5f5]'>
                            <div className=''><EllipseFour /></div>
                            <div className=''>Wireframes</div>
                        </div>
                        <div className='mt-8'>
                            <div className='bg-[#f5f5f5] rounded-lg px-6 pb-4 flex flex-col items-center'>
                                <div className='flex -mt-[25px] items-center justify-center rounded-full bg-[#f5f5f5] h-[50px] w-[50px]'>
                                    <Bulb />
                                </div>
                                <div className='text-center text-black text-[14px] my-2 font-medium'>
                                    Thoughts Time
                                </div>
                                <div className='text-center text-[12px] my-2 leading-[14.52px] px-4 py-2'>
                                    We don't have any notice for you, till then you can share your thoughts with your peers.
                                </div>
                                <div className='flex items-center justify-center text-black text-[14px] my-2 font-medium h-[30px]  bg-white rounded-sm px-2 cursor-pointer'>
                                    Write a message
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[85%] flex flex-col'>
                <div className='h-[4rem] border-b-[1px] flex items-center justify-between px-6'>
                    <div className='relative'>
                        <div className='absolute flex items-center justify-center px-2 h-full'>
                            <Search />
                        </div>
                        <input type='text' placeholder='Search for anything...' className='h-[44px] bg-[#f5f5f5] text-[17px] w-[417px] rounded-md outline-none pl-10' />
                    </div>
                    <div className='flex items-center space-x-10'>
                        <div className='flex space-x-6'>
                            <div className='cursor-pointer'>
                                <Calendar />
                            </div>
                            <div className='cursor-pointer'>
                                <Chat />
                            </div>
                            <div className='cursor-pointer'>
                                <Notification />
                            </div>
                        </div>
                        <div className='flex space-x-4 items-center'>
                            <div className='flex flex-col space-y-2'>
                                <div className='text-[19px] leading-[19px] text-right text-[#0D062D]'>
                                    Anima Agrawal
                                </div>
                                <div className='text-[17px] leading-[17px] text-right text-[#787486]'>
                                    U.P, India
                                </div>
                            </div>
                            <div className='rounded-full overflow-hidden h-fit w-fit'>
                                <img src={Image} alt='failed to load' />
                            </div>
                            <DownArrow />
                        </div>
                    </div>
                </div>
                <div className='w-full px-10'>
                    <div className='flex items-center justify-between w-full my-10'>
                        <div className='flex items-center justify-center space-x-3'>
                            <div className='text-black text-[46px] leading-[56px] font-semibold'>
                                Mobile App
                            </div>
                            <div className='cursor-pointer'>
                                <Edit />
                            </div>
                            <div className='cursor-pointer'>
                                <Attach />
                            </div>
                        </div>
                        <div className='flex items-center justify-center space-x-3'>
                            <div className='cursor-pointer'>
                                <AddTwo />
                            </div>
                            <div className='text-[#5030E5] h-[19px] leading-[19px] font-[500]'>
                                Invite
                            </div>
                            <div className='flex -space-x-2'>
                                <img src={Image1} alt='error loading' />
                                <img src={Image2} alt='error loading' />
                                <img src={Image3} alt='error loading' />
                                <img src={Image4} alt='error loading' />
                                <div className='flex items-center justify-center text-[15px] text-[#D25B68] font-medium rounded-full bg-[#F4D7DA] h-[38px] w-[38px] border border-white'>
                                    +2
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex justify-between'>
                        <div className='flex space-x-3'>
                            <div className='h-[40px] w-[122px] border-2 border-[#787486] border-solid rounded-[6px] flex items-center justify-between px-4'>
                                <div className='cursor-pointer'>
                                    <Filter />
                                </div>
                                <div className='text-[#787486] text-[16px]'>Filter</div>
                                <div className='cursor-pointer'>
                                    <DownArrowTwo />
                                </div>
                            </div>
                            <div className='h-[40px] w-[122px] border-2 border-[#787486] border-solid rounded-[6px] flex items-center justify-between px-4'>
                                <div className='cursor-pointer'>
                                    <CalendarTwo />
                                </div>
                                <div className='text-[#787486] text-[16px]'>Today</div>
                                <div className='cursor-pointer'>
                                    <DownArrowTwo />
                                </div>
                            </div>
                        </div>
                        <div className='flex space-x-3'>
                            <div className='h-[40px] w-[97px] border-2 border-[#787486] border-solid rounded-[6px] flex items-center justify-between px-4'>
                                <div className='cursor-pointer'>
                                    <Share />
                                </div>
                                <div className='text-[#787486] text-[16px]'>Share</div>
                            </div>
                            <div className='h-[90%] border-r border-[#787486] border-solid'></div>
                            <div className='cursor-pointer'><Rectangle /></div>
                            <div className='cursor-pointer'><LinearMenu /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage