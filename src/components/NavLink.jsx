'use client'
import React from 'react';
import { usePathname } from 'next/navigation'
import Link from 'next/link';

const NavLink = ({href, children}) => {
    const path = usePathname();
    const isActive = path === href;
    return (
        <Link href={href} className={isActive? "text-orange-500":"text-gray-400"}>{children}</Link>
    );
};

export default NavLink;