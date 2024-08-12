// "use client";
import { useAppDispatch, useAppSelector } from '@/app/redux';
import { setIsSideBarCollapsed } from '@/state';
import { Icon, Layout, LucideIcon, Menu } from 'lucide-react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

interface SidebarlinkProps {
    href: string;
    icon: LucideIcon;
    label: string;
    isCollapsed: boolean;
  }
  
const SidebarLink = ({
    href,
    icon: Icon,
    label,
    isCollapsed,
  }: SidebarlinkProps) => {
    const pathname = usePathname();
    const isActive = pathname === href || (pathname === "/" && href === "/dashboard");
  
    return (
      <Link href={href}>
        <div className={`cursor-pointer flex items-center ${
          isCollapsed ? "justify-center py-4": "justify-start px-8 py-4"} 
          hover: text-blue-500 hover:bg-blue-100 gap-3 transition-colors ${
          isActive ? "bg-blue-20 text-white": ""}`}
        >
          <Icon className={`w-6 h-6 !text-gray-700`} />
  
          <span className={`${isCollapsed ? "hidden" : "block"}
            font-medium text-gray-700`}
          >
            {label}
          </span>
        </div>
      </Link>
    );
  };


  export default SidebarLink;