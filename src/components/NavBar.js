import React from 'react';
import Home from '../assets/Home';
import Message from '../assets/Message';
import Task from '../assets/Task';
import Member from '../assets/Member';
import Settings from '../assets/Settings';

function NavBar() {
    return (
        <div className='flex flex-col '>
            <div className='flex mt-3 space-x-3 px-5 py-1 cursor-pointer rounded-lg hover:bg-[#f5f5f5]'>
                <div className=''>
                    <Home />
                </div>
                <div className=''>Home</div>
            </div>
            <div className='flex mt-3 space-x-3 px-4 py-1 cursor-pointer rounded-lg hover:bg-[#f5f5f5]'>
                <div className=''>
                    <Message />
                </div>
                <div className=''>Messages</div>
            </div>
            <div className='flex mt-3 space-x-3 px-4 py-1 cursor-pointer rounded-lg hover:bg-[#f5f5f5]'>
                <div className=''>
                    <Task />
                </div>
                <div className=''>Tasks</div>
            </div>
            <div className='flex mt-3 space-x-3 px-4 py-1 cursor-pointer rounded-lg hover:bg-[#f5f5f5]'>
                <div className=''>
                    <Member />
                </div>
                <div className=''>Members</div>
            </div>
            <div className='flex mt-3 space-x-3 px-4 py-1 cursor-pointer rounded-lg hover:bg-[#f5f5f5]'>
                <div className=''>
                    <Settings />
                </div>
                <div className=''>Settings</div>
            </div>
        </div>
    )
}

export default NavBar