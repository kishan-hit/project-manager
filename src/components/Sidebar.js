import React from 'react'
import ThreeCircle from '../assets/ThreeCircle'
import LeftArrow from '../assets/LeftArrow'
import Add from '../assets/Add'
import EllipseOne from '../assets/EllipseOne'
import TripleDot from '../assets/TripleDot'
import EllipseTwo from '../assets/EllipseTwo'
import EllipseThree from '../assets/EllipseThree'
import EllipseFour from '../assets/EllipseFour'
import Bulb from '../assets/Bulb'
import NavBar from './NavBar'

function Sidebar() {
    return (
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
    )
}

export default Sidebar