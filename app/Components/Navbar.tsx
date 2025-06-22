'use client'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from "next/link";
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/libs/constants';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('');
    const sidebarWidth = menuOpen ? 'w-screen' : 'hidden';

    const handleSelection = (link:any) =>{
        if(menuOpen)
            setMenuOpen(false);
        setActiveTab(link.href);
    };

    const pathname = usePathname(); 
    const pageName = pathname.replace('/', '').split(/(?=[A-Z])/).join(' ');

    return (
        <div className={`navbar px-2 sm:block sm:col-span-2 ${menuOpen && `h-screen`}`}>
            {!menuOpen && 
               <div className="flex flex-row gap-2">
                    <button title='Navigation' className='block sm:hidden' onClick={() =>{setMenuOpen(true)}}>
                        <MenuIcon />
                    </button> 
                    <h2 className='sm:hidden'>{pageName}</h2>
               </div>
            } 
                <div className={`${sidebarWidth} sm:block`}>
                    <div className="flex flex-row justify-between w-9/10 my-4 sm:hidden">
                        <h2>Navigation</h2>
                        <button title='Close Navigation' onClick={() =>{setMenuOpen(false)}}>
                            <CloseIcon />
                        </button>
                    </div>
                    <div className='hidden sm:block' style={{width: '100%', height: '48px', backgroundColor: 'wheat'}}>Logo img here</div>
                    <div className="links flex flex-col">
                        {NAV_LINKS.map((link, index) => (
                            <Link key={index} href={link.href} className={`flex justify-between w-9/10 p-2 ${activeTab === link.href && 'bg-stone-300'} `} onClick={()=>handleSelection(link)}>
                                {link.page_name}
                                {link.icon}
                            </Link>
                        ))}
                    </div>

                </div>
        </div>
    )
}

export default Navbar;