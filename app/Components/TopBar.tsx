'use client'

const TopBar = () =>{

    return(
        <div className="topbar flex flex-row w-full justify-between">
            <div className="top-bar__logo">
              StoreSync
            </div>
            <div className="top-bar__title">
                <h1>My Website</h1>
            </div>
        </div>
    );
}; 

export default TopBar; 