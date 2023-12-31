import { useState } from "react";
import { UserInfo } from "../../models/UserInfo";
import { useForm } from "react-hook-form";
import ButtonLoading from "../ButtonLoading";
import Modal from 'react-modal';
import axios from "axios";
import ErrorMessage from "../Auth/ErrorMessage";

const apiUrl = import.meta.env.VITE_API_URL;

interface ChangeInfoButtonProps{
    username?: string,
    email?: string,
    token: string
}

function ChangeInfoButton({ username, email, token }: ChangeInfoButtonProps){
    const [isModalOpen, setisModalOpen] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [submitButtonContent, setSubmitButtonContents] = useState(<p>Submit Changes</p>);
    const [errDiv, setErrDiv] = useState(<div />)

    function toggleModal() {
        setisModalOpen(!isModalOpen);
    }

    function onSubmit(info: UserInfo){
        console.log(info)
        setSubmitButtonContents(<ButtonLoading />);

        let config = {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${token}`
            }
        }

        axios.post(`${apiUrl}/auth/accountinfo`, info, config)
            .then(res => setSubmitButtonContents(<p>Submit Changes</p>))
            .catch(res => setErrDiv(<ErrorMessage errors={[res.response.title]}/>))
    }

    return(
        <div>
            <button 
                onClick={toggleModal}
                className="flex justify-center w-fit px-4 py-2 text-sm font-medium text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-slate-600 hover:bg-slate-500 focus:outline-none focus:border-slate-700 focus:shadow-outline-blue active:bg-slate-700"
            >
                Change account info
            </button>

            <Modal
                isOpen={isModalOpen}
                onRequestClose={toggleModal}
                contentLabel="Account information changer"
                className={"bg-white sm:w-full flex flex-col mt-[5rem] md:mt-0 sm:mx-auto sm:max-w-md md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2"}
            >
                <div className="px-4 py-8 bg-white border shadow border-gray-50 sm:rounded-lg sm:px-10">

                    <h1 className="text-2xl font-bold">
                        Change account settings below
                    </h1>

                    {errDiv}

                    <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
                        <div className="">
                            <label className="block text-sm font-medium leading-5 text-gray-700">
                                Username
                            </label>
                            <div className="mt-1 rounded-md shadow-sm">
                                <input defaultValue={username} {...register("username")} className="w-full form-input"/>
                            </div>
                        </div>

                        <div className="mt-6">
                            <label className="block text-sm font-medium leading-5 text-gray-700">
                                Email
                            </label>
                            <div className="mt-1 rounded-md shadow-sm">
                                <input defaultValue={email} {...register("email")} className="w-full form-input"/>
                            </div>
                        </div>

                        <div className="mt-3 flex flex-col items-center justify-center text-sm leading-5">
                            <span className="block w-full mt-5 rounded-md shadow-sm">
                                <button type="submit" className="font-semibold flex justify-center w-full px-4 py-2 text-sm text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700">
                                    {submitButtonContent}
                                </button>
                            </span>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default ChangeInfoButton