import VideoUpload from "../components/VideoUpload";
import Table from "../components/VideoPage/Table"

interface VideoPageProps{
    token: string
}

export default function VideoPage({ token }: VideoPageProps){

    return(
        <div>
            <Table
                token = {token}
            />
            <VideoUpload token = {token} />
        </div>
    )
}