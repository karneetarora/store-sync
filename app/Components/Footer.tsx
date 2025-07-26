'use client'

import Link from "next/link";

const Footer = () => {
    return(
        <footer className="footer flex flex-col  bottom-0 p-2 gap-2 sm:flex-row sm:justify-between">
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