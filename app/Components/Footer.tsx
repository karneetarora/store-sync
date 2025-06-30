'use client'

import Link from "next/link";

const Footer = () => {
    return(
        <footer className="flex flex-col fixed bottom-0 py-2 gap-1 w-full sm:relative sm:flex-row sm:justify-between sm:col-span-10 sm:col-start-3">
            <div className="footerLinks flex flex-row gap-8 justify-center sm:gap-4">
                <Link href={''} className="text-xs whitespace-nowrap sm:text-sm text-gray-400 hover:text-gray-500">
                    Privacy Policy
                </Link>
                <Link href={''} className="text-xs whitespace-nowrap sm:text-sm text-gray-400 hover:text-gray-500">
                    Terms of Service
                </Link>    
            </div>
            <p className="text-xs text-center text-gray-400 flex-grow sm:text-sm  sm:text-right">
                © 2024 StoreSync, Inc. All rights reserved.
            </p>
        </footer>
    )
}; 

export default Footer; 