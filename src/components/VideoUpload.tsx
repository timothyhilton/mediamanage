import { useState } from "react";
import axios from "axios";
import { VideoInfos } from "../models/VideoInfos";
import { Video } from "../models/Video"

const apiUrl = import.meta.env.VITE_API_URL;

function VideoUpload(props: any){
    var videoInfos = {} as VideoInfos;
    var video = {} as Video;

    function saveVideo(e: any): void{
        const file = e.target.files[0];

        videoInfos = {
            title: "video",
            description: "test",
            fileExtension: file.name.split('.').pop(),
            accessToken: "",
        } as VideoInfos;

        video = { 
            videoInfos: videoInfos,
            file: file
        } as Video

        console.log(file);
    }

    async function uploadVideo(): Promise<void>{
        axios.get(`${apiUrl}/Can connect to API`)
            .then(response => console.log(response.data));

        video.videoInfos.accessToken = props.accessToken;
        console.log(JSON.stringify(video.videoInfos));
        let formData = new FormData();
        formData.append("VideoInfos", JSON.stringify(video.videoInfos))
        formData.append("file", video.file)
        
        
        if(props.accessToken != null){
            try {
                const res = await axios.post(apiUrl, formData, { headers: {"Content-Type": "multipart/form-data"}});
                console.log(res);
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