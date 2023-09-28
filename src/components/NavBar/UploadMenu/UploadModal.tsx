import { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from 'react-modal';
import axios from "axios";
import { UserInfo } from "../../../models/UserInfo";
import ErrorMessage from "../../Auth/ErrorMessage";
import ButtonLoading from "../../ButtonLoading";
import { Video } from "../../../models/Video";
import { TokenProp } from "../../../models/TokenProp";

const apiUrl = import.meta.env.VITE_API_URL;

export default function UploadModal({ token }: { token: string}){
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
            <div className="cursor-pointer">
            <svg className="w-8 cursor-pointer" onClick={toggleModal} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.71 6.71 11 5.41V17a1 1 0 0 0 2 0V5.41l1.29 1.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-3-3a1 1 0 0 0-1.42 0l-3 3a1 1 0 0 0 1.42 1.42ZM18 9h-2a1 1 0 0 0 0 2h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h2a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3Z"/></svg>
            </div>
            

            <Modal
                isOpen={isModalOpen}
                onRequestClose={toggleModal}
                contentLabel="Example Modal"
                className={"bg-white sm:w-full flex flex-col mt-[5rem] md:mt-0 sm:mx-auto sm:max-w-md md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 border-none focus:border-none"}
            >
                <VideoUpload />
            </Modal>
        </div>
    )
}

function VideoUpload({ token }: TokenProp){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [errDiv, setErrDiv] = useState(<div />)

    const[postVideoButtonContents, setPostVideoButtonContents] = useState(<p>Post Video</p>);

    function postVideo(video: any){
        video.file = video.file[0]
        console.log(video)
        setPostVideoButtonContents(<ButtonLoading />);

        let config = {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${token}`
            }
        }

        axios.post(`${apiUrl}/video`, video, config)
            .then(res => handleRes(res))
            .catch(err => handleErr(err));
    }

    function handleErr(err: any){
        console.log(err);
        setErrDiv(
            <ErrorMessage errors={
                [JSON.stringify(err.response!.data)]
            }/>
        )
        setPostVideoButtonContents(<p>Post Video</p>);
    }

    function handleRes(res: any){
        console.log(res);
        setPostVideoButtonContents(<p>Post Video</p>);
    }

    return (
        <div className="px-4 py-8 bg-white border shadow border-gray-50 sm:rounded-lg sm:px-10">

        <div className="mt-[-1.1rem] mb-8">{errDiv}</div>

        <form onSubmit={handleSubmit(postVideo)}>

            <div className="mt-[-1.2rem] mb-6">
                <label className="block text-sm font-medium leading-5 text-gray-700">
                    Video File
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                    <input {...register("file")} className="w-full form-input" type="file"/>
                </div>
            </div>

            <div className="">
                <label className="block text-sm font-medium leading-5 text-gray-700">
                    Title
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                    <input {...register("title")} className="w-full form-input"/>
                </div>
            </div>

            <div className="mt-6">
                <label className="block text-sm font-medium leading-5 text-gray-700">
                    Description
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                    <input {...register("description")} className="w-full form-input"/>
                </div>
            </div>

            <div className="mt-3 flex flex-col items-center justify-center text-sm leading-5">
                <span className="block w-full mt-5 rounded-md shadow-sm">
                    <button type="submit" className="font-semibold flex justify-center w-full px-4 py-2 text-sm text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700">
                        {postVideoButtonContents}
                    </button>
                </span>
            </div>
        </form>
    </div>
    )
}