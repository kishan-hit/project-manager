import React from 'react'
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

function MiddleBar() {
    return (
        <div className='w-full px-10'>
            <div className='flex items-center justify-between w-full my-10'>
                <div className='flex items-center justify-center space-x-3'>
                    <div className='text-black text-[46px] leading-[56px] font-semibold pb-3'>
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
                <div className='flex space-x-3 items-center justify-center'>
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
    )
}

export default MiddleBar