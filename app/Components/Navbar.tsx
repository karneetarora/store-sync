'use client'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from "next/link";
import { useEffect, useState } from 'react';
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

    useEffect(() => {
        if(pathname.includes(activeTab)){
            setActiveTab(pathname);
        }
    }, []);


    return (
        <div className={`navbar sm:block sm:col-span-2 sm:row-span-full sm:!sticky sm:!top-0 ${menuOpen && `overflow-y-hidden`}`} style={{boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
            {!menuOpen && 
               <div className="flex flex-row gap-2 my-2">
                    <button title='Navigation' className='block sm:hidden' onClick={() =>{setMenuOpen(true)}}>
                        <MenuIcon />
                    </button> 
                    <h2 className='text-xl font-bold sm:hidden'>{pageName}</h2>
               </div>
            } 
                <div className={`${sidebarWidth} sm:block`}>
                    <div className="flex flex-row justify-between w-9/10 my-4 sm:hidden">
                        <h2>Navigation</h2>
                        <button title='Close Navigation' onClick={() =>{setMenuOpen(false)}}>
                            <CloseIcon />
                        </button>
                    </div>
                    {/* <Link href={'/'} title='Back to Home' className='hidden sm:block mb-2'>
                        <img src="\logo2.jpg" alt="logo" className="w-full h-24" />
                    </Link> */}
                    <div className="links flex flex-col px-2">
                        {NAV_LINKS.map((link, index) => (
                            <Link key={index} href={link.href} className={`flex w-9/10 justify-between p-2 ${activeTab === link.href && 'bg-stone-300'} sm:text-xs sm:w-full md:text-sm `} onClick={()=>handleSelection(link)}>
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