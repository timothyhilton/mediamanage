function GuestBar(){
    return(
        <>
            <nav className="flex items-center justify-end flex-1 hidden w-full h-full space-x-10 md:flex">
                <a href={""/* todo: put something of substance here */} className="text-base font-medium leading-6 text-gray-500 transition duration-150 ease-in-out hover:text-blue-600 focus:outline-none focus:text-blue-600">
                    Pricing
                </a>
                <div className="w-1 h-5 mx-10 border-r border-gray-300"></div>
                <a href="login" className="text-base font-medium leading-6 text-gray-500 whitespace-no-wrap hover:text-blue-600 focus:outline-none focus:text-gray-900">
                    Sign in
                </a>
                <span className="inline-flex rounded-md shadow-sm">
                    <a href="register" className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap transition duration-150 ease-in-out border border-transparent rounded-md bg-blue-500 hover:bg-blue-600 focus:outline-none focus:border-indigo-700 active:bg-blue-700">
                        Sign up
                    </a>
                </span>
            </nav>
        </>
    )
}

export default GuestBar