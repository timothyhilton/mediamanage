import axios from "axios";
import { useState, useEffect } from "react";
import { Video } from "../models/Video"
import GoogleAuth from "../services/GoogleAuth";
import ButtonLoading from "./ButtonLoading";

const apiUrl = import.meta.env.VITE_API_URL;

function VideoUpload(props: any){
    const [video, setVideo] = useState({
            title: '',
            description: '',
            file: new File([""], "")
    } as Video )

    const[postVideoButtonContents, setPostVideoButtonContents] = useState(<p>Post Video</p>);

    const googleAuth = new GoogleAuth();

    function handleFormChange(event: React.ChangeEvent<HTMLInputElement>) {
        if(event.target.type == "file") {
            setVideo(video => ({...video, [event.target.id]: event.target.files![0]}));
        } 
        else {
            setVideo(video => ({...video, [event.target.id]: event.target.value}));
        }
    }

    function handleFormSubmit(){
        postVideo();
    }

    async function postVideo(){
        setPostVideoButtonContents(<ButtonLoading />);

        const formData = new FormData();
        formData.append("title", video.title);
        formData.append("description", video.description);
        formData.append("file", video.file);

        let config = {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${props.token}`
            }
        }

        axios.post(`${apiUrl}/video`, formData, config)
            .then(res => handleRes(res))
            .catch(err => handleErr(err));
    }

    function handleErr(err: any){
        console.log(err);
        setPostVideoButtonContents(<p>Post Video</p>);
    }

    function handleRes(res: any){
        console.log(res);
        setPostVideoButtonContents(<p>Post Video</p>);
    }

    return (
        <div className="w-full max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={() => handleFormSubmit}>
                <h2 className="block text-gray-900 text-lg text-center font-semibold mb-3">
                    Youtube Video Upload
                </h2>
                <div className="mb-4">
                    <label className="block text-sm font-medium leading-5 text-gray-700">
                        Video title
                    </label>
                    <input className="mt-1 rounded-md shadow-sm w-full form-input" 
                        id="title" 
                        type="text" 
                        placeholder="title"
                        value={video.title}
                        onChange={handleFormChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium leading-5 text-gray-700">
                        Video description
                    </label>
                    <input className="mt-1 rounded-md shadow-sm w-full form-input" 
                        id="description" 
                        type="text" 
                        placeholder="description" 
                        value={video.description}
                        onChange={handleFormChange}
                    />
                </div>
                <div className="mb-4">
                    <input 
                        type="file" 
                        id="file" 
                        className="hidden"
                        onChange={handleFormChange}
                    />
                    <button className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-gray-600 hover:bg-gray-500 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700" 
                        onClick={() => document.getElementById('file')!.click()} 
                        type="button"
                    >
                        Upload file
                    </button>
                </div>
                <button type="button" onClick={handleFormSubmit} className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700">
                    {postVideoButtonContents}
                </button>
            </form>
        </div>
    )
}

export default VideoUpload;