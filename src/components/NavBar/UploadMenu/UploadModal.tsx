import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import ErrorMessage from "../../Auth/ErrorMessage";
import ButtonLoading from "../../ButtonLoading";
import { TokenProp } from "../../../models/TokenProp";

const apiUrl = import.meta.env.VITE_API_URL;

export default function UploadModal({ token }: TokenProp){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [errDiv, setErrDiv] = useState(<div />)

    const[postVideoButtonContents, setPostVideoButtonContents] = useState(<p>Post Video</p>);

    function postVideo(video: any){
        video.file = video.file[0];

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

            <div className="mt-[-1.7rem] mb-6">
                <label className="block text-sm font-medium leading-5 text-gray-700">
                    Video File
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                    <input {...register("file")} className="w-full form-input file:hidden hover:bg-gray-200 bg-gray-100" type="file"/>
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