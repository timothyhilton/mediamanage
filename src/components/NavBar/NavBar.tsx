import { Link } from "react-router-dom"
import GuestBar from "./GuestBar"

function NavBar(props: any){
    return(
        <>
            <div className="px-8 mx-auto xl:px-5 max-w-7xl">
                <div className="flex items-center justify-between h-24 border-b-2 border-gray-100 md:justify-start md:space-x-6">
                    <div className="flex justify-end flex-grow -my-2 -mr-2 md:hidden">
                        <button type="button" className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500">
                            <svg className="w-6 h-6" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16"></path></svg>
                        </button>
                    </div>

                    <nav className="flex items-center justify-end flex-1 hidden w-full h-full space-x-10 md:flex">
                        <Link to="home" className="text-base font-medium leading-6 text-gray-500 transition duration-150 ease-in-out hover:text-blue-600 focus:outline-none focus:text-blue-600">
                            Home
                        </Link>
                        <div className="w-1 h-5 mx-10 border-r border-gray-300"></div>
                        <Link to="login" className="text-base font-medium leading-6 text-gray-500 whitespace-no-wrap hover:text-blue-600 focus:outline-none focus:text-gray-900">
                            Sign in
                        </Link>
                        <button className="drop-shadow-md">
                            <img src="/default-profile.jpg" className="h-10 rounded-full"/>
                        </button>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default NavBar