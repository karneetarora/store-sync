'use client'

import { Clear, Search } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Form from 'next/form'

interface Search{
    placeholder?: string, 
}

const SearchBar = ({placeholder = 'Search'}: Search) => {

    const [userInput, setUserInput] = useState(''); 

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleClear = () => {
        setUserInput('');
        handleSearch(""); //setting search to null and refresh results
    }; 

    const handleSearch = (term: string) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('search', term);
        } else {
            params.delete('search');
        }
        const newUrl = `${pathname}?${params.toString()}`;
        replace(newUrl);
    }
    
    return(
         <Form action={pathname}>
            <div className="searchBar">
                <TextField variant="outlined" placeholder={placeholder} name="query" value={userInput} className="p-2 md:w-sm" 
                    slotProps={{
                    input: {
                    endAdornment: <InputAdornment position="end">
                            <IconButton onClick={handleClear} title="Clear" aria-label="Clear" className={userInput !== '' ? '' : '!hidden'}>
                                <Clear/> 
                            </IconButton>
                        </InputAdornment>,
                    }}}
                    onChange={(e:any) => { setUserInput(e.target.value); handleSearch(e.target.value);}}
                    
                />
            </div>
         </Form>
    )

}; 

export default SearchBar; 