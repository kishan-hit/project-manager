import React from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import MiddleBar from './MiddleBar';


function HomePage() {
    return (
        <div className='h-screen w-screen flex'>
            <Sidebar />
            <div className='w-[85%] flex flex-col'>
                <TopBar />
                <MiddleBar />
            </div>
        </div>
    )
}

export default HomePage