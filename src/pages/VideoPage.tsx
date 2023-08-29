import VideoUpload from "../components/VideoUpload";

interface VideoPageProps{
    token: string
}

export default function VideoPage({ token }: VideoPageProps){
    return(
        <div className="ml-10 mt-10 absolute">
            <VideoUpload token={token} />
        </div>
    )
}