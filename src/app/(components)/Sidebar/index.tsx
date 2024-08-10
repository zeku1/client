"use client";
import { useAppDispatch, useAppSelector } from '@/app/redux';
import { setIsSideBarCollapsed } from '@/state';
import { Menu } from 'lucide-react'
import React from 'react'


const Sidebar = () => {
  const dispatch = useAppDispatch();
  const isSideBarCollapsed = useAppSelector(
    (state) => state.global.isSideBarCollapse
  );
  
  const toggleSidebar = () => {
    dispatch(setIsSideBarCollapsed(!isSideBarCollapsed));
  };

  const sidebarClassNames = `fixed flex flex-col ${
    isSideBarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
  } bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`;

  return (
    <div> 
      <div className={sidebarClassNames}>
        <div>logo</div>
        <h1 className={'font-extrabold text-2xl'}>ZEKESTOCK</h1>
      
        <button 
          className={`md:hidden px-3 bg-gray-100 rounded-full hover:bg-blue-100`}
          onClick={toggleSidebar}
        >
            <Menu className={`w-4 h-4`} />
        </button>
      </div>

      {/* LINKS */}
      <div className={`flex-frow mt-8`}>

      </div>

      {/* FOOTER */}
      <div>
        <p className={`text-center text-xs text-gray-500`}>
          &copy; 2024 Zekestock
        </p>
      </div>

    </div>
  )
}

export default Sidebar