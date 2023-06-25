import React from 'react'
import Search from '../assets/Search'
import Calendar from '../assets/Calendar'
import Chat from '../assets/Chat'
import Notification from '../assets/Notification'
import DownArrow from '../assets/DownArrow'
import Image from '../assets/images/image 1.png';

function TopBar() {
    return (
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
    )
}

export default TopBar