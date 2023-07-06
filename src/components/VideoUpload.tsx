import axios from "axios";
import { useState, useEffect } from "react";
import { VideoInfos } from "../models/VideoInfos";
import { Video } from "../models/Video"
import "../css/VideoUpload.css"

const apiUrl = import.meta.env.VITE_API_URL;

function VideoUpload(props: any){
    const [title, setTitle] = useState("");
    var videoInfos = {} as VideoInfos;
    var video = {} as Video;

    function saveVideo(e: any): void{
        const file = e.target.files[0];

        videoInfos = {
            title: title,
            description: "test",
            fileExtension: file.name.split('.').pop(),
            authCode: "",
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

        video.videoInfos.authCode = props.authCode;
        console.log(JSON.stringify(video.videoInfos));
        let formData = new FormData();
        formData.append("VideoInfos", JSON.stringify(video.videoInfos))
        formData.append("file", video.file)
        
        if(props.authCode != null){
            try {
                const res = await axios.post(apiUrl, formData, { headers: {"Content-Type": "multipart/form-data"}});
                console.log(res);
            } catch (exception){
                console.log(exception);
            }
        } else {
            console.log("Not posting, no auth code")
            console.log(props.authCode);
        }
    }

    return (
        <div className="videoUploadDiv">
            <div className="videoFormItem">
                <p className="inputLabel">Title</p>
                <input type="text" onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className="videoFormItem">
                <p className="inputLabel">Description</p>
                <input type="text" />
            </div>
            <input className="videoFormItem" type="file" onChange={saveVideo} />
            <input className="videoFormItem" type="button" value="upload" onClick={uploadVideo} />
        </div>
    )
}

export default VideoUpload;