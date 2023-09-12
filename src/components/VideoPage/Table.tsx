import axios from "axios"
import { useEffect, useState } from "react"
import VideoRes from "../../models/VideoRes";

const apiUrl = import.meta.env.VITE_API_URL;

function Video( {title, description, videoid}: {title: string, description: string, videoid: string} ){
    return(
        <tr>
            <td>{title}</td>
            <td>{description}</td>
            <td>{videoid}</td>
        </tr>
    )
}

export default function Table( {token}: {token: string} ){
    type videoArray = JSX.Element[];
    const [videos, setVideos] = useState<any>([]);

    let config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }

    useEffect(() => {
        axios.get(`${apiUrl}/video/fetchvideos`, config)
            .then(res => {
                console.log(res.data)

                setVideos(res.data)
            }
        );
    }, [])

    return(
        <table className="table-auto">
            <thead>
                <tr>
                    <th>Video</th>
                    <th>Description</th>
                    <th>Video Id</th>
                </tr>
            </thead>
            <tbody>
                {
                    videos.map((video: VideoRes) => {
                        return(
                            <Video 
                                title = {video.Title}
                                videoid = {video.VideoId}
                                description = {video.Description}
                            />
                        )
                    })
                }
            </tbody>
        </table>
    )
}