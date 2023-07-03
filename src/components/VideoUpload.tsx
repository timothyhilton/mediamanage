import { useState } from "react";
import axios from "axios";
import { VideoArg } from "../models/VideoArg";

const apiUrl = import.meta.env.VITE_API_URL;

function VideoUpload(props: any){
    const [videoArgs, setVideoArgs] = useState({} as VideoArg);
    const [video, setVideo] = useState();

    function saveVideo(e: any): void{
        const file = e.target.files[0];
        const vid: VideoArg = {
            title: "video",
            description: "test",
            fileExtension: file.name.split('.').pop(),
            accessToken: ""
        }
        console.log(vid.fileExtension);
        setVideo(file)
        setVideoArgs(vid);
    }

    function uploadVideo(): void{
        axios.get(`${apiUrl}/Can connect to API`)
            .then(response => console.log(response.data));

        const formData = new FormData();
        videoArgs.accessToken = props.accessToken;
        formData.append("videoArgs", JSON.stringify(videoArgs));
        formData.append("file", video!);
        
        if(props.accessToken != null){
            console.log("Posting " + JSON.stringify(formData));
            try {
                axios.post(apiUrl, formData)
                    .then(response => console.log(response));
            } catch (exception){
                console.log(exception);
            }
        } else {
            console.log("Not posting, no access token")
            console.log(props.accessToken);
        }
    }

    return (
        <div>
            <input type="file" onChange={saveVideo} />
            <input type="button" value="upload" onClick={uploadVideo} />
        </div>
    )
}

export default VideoUpload;