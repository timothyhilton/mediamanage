import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import ButtonLoading from "../components/ButtonLoading";
import ErrorMessage from "../components/Auth/ErrorMessage";

const apiUrl = import.meta.env.VITE_API_URL;

function LoginPage(props: any){
    const [data, setData] = useState({
        email: '',
        password: ''
    });
    const [registerButtonContents, setRegisterButtonContents] = useState(<p>Sign in</p>);
    const [errorMessageDiv, setErrorMessageDiv] = useState(<div />);
    const navigate = useNavigate();

    function handleFormChange(event: React.ChangeEvent<HTMLInputElement>) {
        setData(data => ({...data, [event.target.id]: event.target.value}));
    }

    function handleFormSubmit(){
        axios.post(`${apiUrl}/auth/login`, data, { headers: {"Content-Type": "application/json"}})
            .then(res => handleRes(res))
            .catch(err => handleError(err))
    }

    function handleError(err: AxiosError){
        try{
            setErrorMessageDiv(
                <ErrorMessage errors={
                    [err.response!.data]
                }/>
            )
        }
        catch{
            setErrorMessageDiv(
                <ErrorMessage errors={
                    [JSON.stringify(err)]
                }/>
            )
        }
    }

    function handleRes(res: AxiosResponse){
        props.setToken(res.data.token);
        navigate("/home");
    }


    return(
        <>
            <div className="sm:mx-auto sm:w-full sm:max-w-md sm:pt-10 mt-6">
                <h2 className="text-3xl font-extrabold leading-9 text-center text-gray-900 sm:mt-6 lg:text-5xl">
                    Sign in Below
                </h2>
                <p className="mt-4 text-sm leading-5 text-center text-gray-600 max-w">
                    or, you can{" "}
                    <a href="/register" className="font-medium transition duration-150 ease-in-out text-blue-600 hover:text-blue-500 focus:outline-none focus:underline">
                        signup here
                    </a>
                </p>
            </div>

            {errorMessageDiv}

            <div className="flex flex-col justify-center pb-10 sm:pb-20 sm:px-6 lg:px-8">
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="px-4 py-8 bg-white border shadow border-gray-50 sm:rounded-lg sm:px-10">
                        <form role="form" method="POST" action="hi">
                            <div className="">
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

                            <div className="flex items-center justify-between mt-6">
                                <div className="flex items-center">
                                    <input id="remember" name="remember" type="checkbox" className="text-indigo-600 border-0 border-gray-300 rounded shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50" />
                                    <label className="block ml-2 text-sm leading-5 text-gray-900">
                                        Remember me
                                    </label>
                                </div>

                                <div className="text-sm leading-5">
                                    <a href="{{ route('password.request') }}" className="font-medium transition duration-150 ease-in-out text-blue-600 hover:text-blue-500 focus:outline-none focus:underline">
                                        Forgot your password?
                                    </a>
                                </div>
                            </div>

                            <div className="flex flex-col items-center justify-center text-sm leading-5">
                                <span className="block w-full mt-5 rounded-md shadow-sm">
                                    <button type="button" onClick={handleFormSubmit} className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700">
                                        {registerButtonContents}
                                    </button>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage