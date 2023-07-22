import axios from "axios";
import { useState, useEffect } from "react";
import { Video } from "../models/Video"
import GoogleAuth from "../services/GoogleAuth";

const apiUrl = import.meta.env.VITE_API_URL;

function VideoUpload(props: any){
    const [video, setVideo] = useState({
            title: '',
            description: '',
            fileExtension: 'mp4',
            authCode: '',
            file: new File([""], "")
    } as Video )

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
        googleAuth.runWithAuth(postVideo);
    }

    async function postVideo(authCode: string){
        video.authCode = authCode;

        const formData = new FormData();
        formData.append("title", video.title);
        formData.append("description", video.description);
        formData.append("fileExtension", video.fileExtension);
        formData.append("authCode", video.authCode);
        formData.append("file", video.file);

        if(authCode != ""){
            try {
                let config = {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        "Authorization": `Bearer ${props.token}`
                    }
                }
                axios.post(`${apiUrl}/video`, formData, config)
                    .then(res => console.log(res));
            } 
            catch (exception){
                console.log(exception);
            }
        } 
        else {
            console.log("Not posting, no auth code")
            console.log(authCode);
        }
    }

    return (
        <div className="w-full max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={() => handleFormSubmit}>
                <h2 className="block text-gray-900 text-lg text-center font-semibold mb-3">
                    Youtube Video Upload
                </h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Video title
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="title" 
                        type="text" 
                        placeholder="title"
                        value={video.title}
                        onChange={handleFormChange}
                    />
                </div>
                <div className="mb-1">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Video description
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                        id="description" 
                        type="text" 
                        placeholder="description" 
                        value={video.description}
                        onChange={handleFormChange}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Upload file
                    </label>
                    <input 
                        type="file" 
                        id="file" 
                        className="hidden"
                        onChange={handleFormChange}
                    />
                    <button className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                        onClick={() => document.getElementById('file')!.click()} 
                        type="button"
                    >
                        Upload file
                    </button>
                </div>
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleFormSubmit}>
                    Post Video
                </button>
            </form>
        </div>
    )
}

export default VideoUpload;