import axios from "axios"
import { useEffect, useState } from "react"
import VideoRes from "../../models/VideoRes";
import { Link } from "react-router-dom";

const apiUrl = import.meta.env.VITE_API_URL;

function VideoRow( {title, description, videoid}: {title: string, description: string, videoid: string} ){
    return(
        <tr>
            <td className="px-6 py-4 max-w-[13rem] font-medium">
                <div className="max-h-[7rem] overflow-auto">
                    {title}
                </div>
            </td>
            <td className="px-6 py-4 max-w-[40rem]">
                <div className="max-h-[7rem] overflow-auto">
                    {description}
                </div>
            </td>
            <td className="px-6 py-4 ">{videoid}</td>
            <td className="px-6 py-4">
                <Link to={`https://www.youtube.com/watch?v=${videoid}`} target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="24" height="24"><path d="M40 10a2 2 0 0 0 0 4h7.172L30.586 30.586a2 2 0 1 0 2.828 2.828L50 16.828V24a2 2 0 0 0 4 0V12a2 2 0 0 0-2-2H40zm-22 2c-3.309 0-6 2.691-6 6v28c0 3.309 2.691 6 6 6h28c3.309 0 6-2.691 6-6V34a2 2 0 0 0-4 0v12c0 1.103-.897 2-2 2H18c-1.103 0-2-.897-2-2V18c0-1.103.897-2 2-2h12a2 2 0 0 0 0-4H18z"/></svg>
                </Link>
            </td>
        </tr>
    )
}

export default function Table( {token}: {token: string} ){
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
        <div className="flex flex-col bg-white rounded-xl shadow-md m-auto max-h-[25rem] mt-3 md:mt-5 lg:mr-[8rem] lg:ml-[8rem] text-xs md:text-base">
            <div className="overflow-x-auto md:p-4">
                <div className="p-1.5 min-w-full inline-block align-middle">
                    <table className="min-w-full divide-y divide-gray-200 ">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 text-left">Name</th>
                                <th className="px-6 py-3 text-left">Description</th>
                                <th className="px-6 py-3 text-left">Video Id</th>
                                <th className="px-6 py-3 text-left">Link</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {
                                videos.map((video: VideoRes) => {
                                    return(
                                        <VideoRow 
                                            title = {video.Title}
                                            videoid = {video.VideoId}
                                            description = {video.Description}
                                        />
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}