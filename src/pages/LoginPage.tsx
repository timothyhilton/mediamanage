function LoginPage(){
    return(
        <div className="flex flex-col justify-center py-20 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-3xl font-extrabold leading-9 text-center text-gray-900 lg:text-5xl">
                    Sign in Below
                </h2>
                <p className="mt-4 text-sm leading-5 text-center text-gray-600 max-w">
                    or, you can
                    <a href="{{ route('register') }}" className="font-medium transition duration-150 ease-in-out text-wave-600 hover:text-wave-500 focus:outline-none focus:underline">
                        signup here
                    </a>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="px-4 py-8 bg-white border shadow border-gray-50 sm:rounded-lg sm:px-10">
                    <form action="#" method="POST">
                        <div>
                                <label className="block text-sm font-medium leading-5 text-gray-700">Username</label>
                                <div className="mt-1 rounded-md shadow-sm">
                                    <input id="username" type="username" name="username" required className="w-full form-input" />
                                </div>
                                <label className="block text-sm font-medium leading-5 text-gray-700">Email address</label>
                                <div className="mt-1 rounded-md shadow-sm">
                                    <input id="email" type="email" name="email" required className="w-full form-input" />
                                </div>
                        </div>

                        <div className="mt-6">
                            <label className="block text-sm font-medium leading-5 text-gray-700">
                                Password
                            </label>
                            <div className="mt-1 rounded-md shadow-sm">
                                <input id="password" type="password" name="password" required className="w-full form-input" />
                            </div>
                        </div>

                        <div className="flex items-center justify-between mt-6">
                            <div className="flex items-center">
                                <input id="remember" name="remember" type="checkbox" className="text-indigo-600 border-0 border-gray-300 rounded shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 rounded-xl" />
                                <label className="block ml-2 text-sm leading-5 text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm leading-5">
                                <a href="{{ route('password.request') }}" className="font-medium transition duration-150 ease-in-out text-wave-600 hover:text-wave-500 focus:outline-none focus:underline">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div className="mt-6">
                            <span className="block w-full rounded-md shadow-sm">
                                <button type="submit" className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-wave-600 hover:bg-wave-500 focus:outline-none focus:border-wave-700 focus:shadow-outline-wave active:bg-wave-700">
                                    Sign in
                                </button>
                            </span>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default LoginPage