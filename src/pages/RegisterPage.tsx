import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

const apiUrl = import.meta.env.VITE_API_URL;

function RegisterPage(){
    const [data, setData] = useState({
        username:'',
        email:'',
        password:'',
        password_confirmation:'',
    });
    const [errorMessage, setErrorMessage] = useState({});
    const navigate = useNavigate();

    function handleFormChange(event: React.ChangeEvent<HTMLInputElement>) {
        setData(data => ({...data, [event.target.id]: event.target.value}));
        console.log(data);
    }

    function handleFormSubmit(){
        if(data.password == data.password_confirmation){
            axios.post(`${apiUrl}/auth/register`, data, { headers: {"Content-Type": "application/json"}})
                .then(res => {
                    console.log(res);
                    navigate("/home");
                })
                .catch(err => console.log(err.response.data));
        }
        else{
            setErrorMessage("Passwords do not match!");
        }
    }

    useEffect(()=>{
        console.log(errorMessage);
    }, [errorMessage])

    return(
        <>
            <div className="sm:mx-auto sm:w-full sm:max-w-md sm:pt-10">
                <h2 className="text-3xl font-extrabold leading-9 text-center text-gray-900 sm:mt-6 lg:text-5xl">
                    Sign up Below
                </h2>
                <p className="mt-4 text-sm leading-5 text-center text-gray-600 max-w">
                    or, you can{" "}
                    <a href="/login" className="font-medium transition duration-150 ease-in-out text-blue-600 hover:text-blue-500 focus:outline-none focus:underline">
                        login here
                    </a>
                </p>
            </div>

            <div className="flex flex-col justify-center pb-10 sm:pb-20 sm:px-6 lg:px-8">
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="px-4 py-8 bg-white border shadow border-gray-50 sm:rounded-lg sm:px-10">
                        <form role="form" method="POST" action="hi">
                            <div className="pb-3 sm:border-b sm:border-gray-200">
                                <h3 className="text-lg font-medium leading-6 text-gray-900">
                                    Profile
                                </h3>
                                <p className="max-w-2xl mt-1 text-sm leading-5 text-gray-500">
                                    Information about your account.
                                </p>
                            </div>
                            <div className="mt-6">
                                <label className="block text-sm font-medium leading-5 text-gray-700">
                                    Username
                                </label>
                                <div className="mt-1 rounded-md shadow-sm">
                                    <input id="username" type="text" name="username" onChange={handleFormChange} required className="w-full form-input"/>
                                </div>
                            </div>
                            <div className="mt-6">
                                <label className="block text-sm font-medium leading-5 text-gray-700">
                                    Email Address
                                </label>
                                <div className="mt-1 rounded-md shadow-sm">
                                    <input id="email" type="email" name="email" onChange={handleFormChange} required className="w-full form-input"/>
                                </div>
                            </div>

                            <div className="mt-6">
                                <label className="block text-sm font-medium leading-5 text-gray-700">
                                    Password
                                </label>
                                <div className="mt-1 rounded-md shadow-sm">
                                    <input id="password" type="password" name="password" onChange={handleFormChange} required className="w-full form-input"/>
                                </div>
                            </div>

                            <div className="mt-6">
                                <label className="block text-sm font-medium leading-5 text-gray-700">
                                    Confirm Password
                                </label>
                                <div className="mt-1 rounded-md shadow-sm">
                                    <input id="password_confirmation" type="password" name="password_confirmation" onChange={handleFormChange} required className="w-full form-input"/>
                                </div>
                            </div>

                            <div className="flex flex-col items-center justify-center text-sm leading-5">
                                <span className="block w-full mt-5 rounded-md shadow-sm">
                                    <button type="button" onClick={handleFormSubmit} className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700">
                                        Register
                                    </button>
                                </span>
                                <div className="flex items-center justify-between mt-6">
                                    <p className="mt-3 font-medium focus:underline">Already have an account?</p>
                                    <p className="text-white">_</p> {/* todo: make this better */}
                                    <a href="/login" className="mt-3 font-medium text-blue-600 hover:text-blue-500 focus:underline">
                                        Login here
                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterPage