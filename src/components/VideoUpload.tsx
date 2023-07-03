import { useState } from "react";
import axios from "axios";
import { Video } from "../models/Video";

const apiUrl = import.meta.env.VITE_API_URL;

function VideoUpload(props: any) {
    const [video, setVideo] = useState({} as Video);

    function saveVideo(e: any){
        const file = e.target.files[0];
        const vid: Video = {
            name: file.name,
            description: "test",
            tags: ["testtag1", "testtag2"],
            file: file,
        }
        setVideo(vid);
    }

    async function uploadVideo(): Promise<void>{
        const res = await axios.get(`${apiUrl}test`);
        console.log(res);

        
        if(props.access_token){
            console.log("Posting " + JSON.stringify(video));
            try {
                const response = await axios.post(apiUrl, video, props.access_token);
                console.log(response);
            } catch (exception){
                console.log(exception);
            }
        } else {
            console.log("Not posting, no access token")
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