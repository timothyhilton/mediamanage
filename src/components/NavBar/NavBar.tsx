import { Link } from "react-router-dom"
import { UserInfo } from "../../models/UserInfo"
import HamburgerIcon from "./SlideDrawer/HamburgerIcon"
import { useState } from "react";
import SlideDrawer from "./SlideDrawer/SlideDrawer";
import { AnimatePresence } from "framer-motion";
import UploadButton from "./UploadMenu/UploadButton";
import UploadModal from "./UploadMenu/UploadModal";

// navbar is only used when the user is logged in, otherwise it is substituted for GuestBar.tsx

interface NavBar extends UserInfo{
    token: string
}

function NavBar({ username, token }: NavBar){
    const [slideDrawerToggled, setSlideDrawerToggled] = useState(false);

    return(
        <div className="px-8 mx-auto xl:px-5 max-w-7xl">
            <div className="flex items-center justify-between h-24 border-b-2 border-gray-100 md:justify-start md:space-x-6">
                <nav className="flex items-center justify-end flex-1 w-full h-full space-x-10 md:flex">
                    <div className="mr-auto ml-3 flex items-center">
                        <HamburgerIcon
                            slideDrawerToggled={slideDrawerToggled}
                            setSlideDrawerToggled={setSlideDrawerToggled}
                        />
                        <div className="w-1 h-5 ml-7 mr-10 border-r border-gray-300"></div>
                        <Link to="home" className="font-semibold text-md leading-6 text-gray-500 transition duration-150 ease-in-out hover:text-blue-600 focus:outline-none focus:text-blue-600">
                            Home
                        </Link>
                    </div>
                    <SlideDrawer slideDrawerToggled={slideDrawerToggled} setSlideDrawerToggled={setSlideDrawerToggled}/>

                    <UploadModal token={token}/>
                    <div className="w-1 h-5 mx-10 border-r border-gray-300"></div>
                    <Link to={`users/${username}`}  className='flex items-center space-x-5'>
                        <div className=" text-gray-500 hover:text-gray-600 font-semibold text-md">
                            {username}
                        </div>
                        <button className="drop-shadow-md hover:drop-shadow-lg">
                            <img src="/default-profile.jpg" className="h-10 rounded-full"/>
                        </button>
                    </Link>
                </nav>
            </div>
        </div>
    )
}

export default NavBar