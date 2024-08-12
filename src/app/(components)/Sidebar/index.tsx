"use client";
import { useAppDispatch, useAppSelector } from '@/app/redux';
import { setIsSideBarCollapsed } from '@/state';
import SidebarLink from '@/app/(components)/Sidebar/link';
import { Archive, CircleDollarSign, Clipboard, Layout, Menu, SlidersHorizontal, User } from 'lucide-react'
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
    <div className={sidebarClassNames}> 
      <div className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${
          isSideBarCollapsed ?  "px-5" : "px-8"
        }`}>
        <div>logo</div>
        <h1 className={`${ isSideBarCollapsed ? "hidden" : "block" } font-extrabold text-2xl`}>ZEKESTOCK</h1>
      
        <button 
          className={`md:hidden px-3 bg-gray-100 rounded-full hover:bg-blue-100`}
          onClick={toggleSidebar}
        >
            <Menu className={`w-4 h-4`} />
        </button>
      </div>

      {/* LINKS */}
      <div className={`flex-grow mt-8`}>
        <SidebarLink 
          href="/dashboard" 
          icon={Layout} label="Dashboard" 
          isCollapsed={isSideBarCollapsed}
        />
        <SidebarLink 
          href="/inventory" 
          icon={Archive} label="Inventory" 
          isCollapsed={isSideBarCollapsed}
        />
        <SidebarLink 
          href="/products" 
          icon={Clipboard} label="Products" 
          isCollapsed={isSideBarCollapsed}
        />
        <SidebarLink 
          href="/users" 
          icon={User} label="Users" 
          isCollapsed={isSideBarCollapsed}
        />
        <SidebarLink 
          href="/settings" 
          icon={SlidersHorizontal} label="Settings" 
          isCollapsed={isSideBarCollapsed}
        />
        <SidebarLink 
          href="/expenses" 
          icon={CircleDollarSign} label="Expenses" 
          isCollapsed={isSideBarCollapsed}
        />
      </div>

      {/* FOOTER */}
      <div className={`${isSideBarCollapsed ? "hidden" : "block"} mb-10`}>
        <p className={`text-center text-xs text-gray-500`}>
          &copy; 2024 Zekestock
        </p>
      </div>

    </div>
  )
}

export default Sidebar