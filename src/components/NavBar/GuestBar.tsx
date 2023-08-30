import { Link } from "react-router-dom"

function GuestBar(){
    return(
        <>
            <div className="px-8 mx-auto xl:px-5 max-w-7xl">
                <div className="flex items-center justify-between h-24 border-b-2 border-gray-100 md:justify-start md:space-x-6">
                    <nav className="flex items-center justify-end flex-1 w-full h-full space-x-10 md:flex">
                        <Link to="login" className="text-base font-medium leading-6 text-gray-500 whitespace-no-wrap hover:text-blue-600 focus:outline-none focus:text-gray-900">
                            Sign in
                        </Link>
                        <span className="inline-flex rounded-md shadow-sm">
                            <Link to="register" className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap transition duration-150 ease-in-out border border-transparent rounded-md bg-blue-500 hover:bg-blue-600 focus:outline-none focus:border-indigo-700 active:bg-blue-700">
                                Sign up
                            </Link>
                        </span>
                    </nav>

                </div>
            </div>
        </>
    )
}

export default GuestBar