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

function HomePage() {
    return (
        <div className='h-screen w-screen flex'>
            <div className='border border-gray-200 w-[15%] flex flex-col'>
                <div className='text-2xl flex items-center justify-between px-7 h-[4.5rem] border-b-[1px]'>
                    <div className='flex items-center space-x-2'>
                        <div className=''><ThreeCircle /></div>
                        <div className='text-[#0D062D] text-[20px] font-semibold'>
                            Project M.
                        </div>
                    </div>
                    <div className='cursor-pointer'><LeftArrow /></div>
                </div>
                <div className='px-3'>
                    <div className=''>
                        <NavBar />
                    </div>
                    <div className='border my-3'></div>
                    <div className='mt-3'>
                        <div className='flex items-center justify-between px-4 py-2'>
                            <div className='font-semibold text-[12px] text-[#787486]'>
                                MY PROJECTS
                            </div>
                            <div><Add /></div>
                        </div>
                        <div className='flex items-center justify-between px-4 py-2 bg-[#f5f5f5] rounded-lg'>
                            <div className='flex items-center space-x-3'>
                                <div className=''><EllipseOne /></div>
                                <div className='font-semibold text-black'>Mobile App</div>
                            </div>
                            <div className=''><TripleDot /></div>
                        </div>
                        <div className='flex items-center space-x-3 px-4 py-2 rounded-lg cursor-pointer hover:bg-[#f5f5f5]'>
                            <div className=''><EllipseTwo /></div>
                            <div className=''>Website Redesign</div>
                        </div>
                        <div className='flex items-center space-x-3 px-4 py-2 rounded-lg cursor-pointer hover:bg-[#f5f5f5]'>
                            <div className=''><EllipseThree /></div>
                            <div className=''>Design System</div>
                        </div>
                        <div className='flex items-center space-x-3 px-4 py-2 rounded-lg cursor-pointer hover:bg-[#f5f5f5]'>
                            <div className=''><EllipseFour /></div>
                            <div className=''>Wireframes</div>
                        </div>
                        <div className=''>
                            <div><Bulb /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[85%] flex flex-col'>
                <div className='h-[4.5rem] border-b-[1px]'>

                </div>
                <div className=''></div>
                <div className=''></div>
                <div className=''></div>
            </div>
        </div>
    )
}

export default HomePage