import { useState } from "react";
import axios from "axios";
import { Video } from "../models/Video";
import { VideoRequest } from "../models/VideoRequest";

const apiUrl = import.meta.env.VITE_API_URL;

function VideoUpload(props: any){
    const [video, setVideo] = useState({} as Video);

    function saveVideo(e: any): void{
        const file = e.target.files[0];
        const vid: Video = {
            title: "video",
            description: "test",
            tags: ["testtag1", "testtag2"],
            fileExtension: file.name.split('.').pop(),
            file: file,
        }
        console.log(vid.fileExtension);
        setVideo(vid);
    }

    function uploadVideo(): void{
        axios.get(`${apiUrl}/Can connect to API`)
            .then(response => console.log(response.data));

        

        if(props.accessToken != null){
            console.log("Posting " + JSON.stringify(video));
            try {
                axios.post(apiUrl, { video: video, accessToken: props.accessToken } as VideoRequest)
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