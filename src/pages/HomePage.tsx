import VideoUpload from "../components/VideoUpload"

function HomePage(props: any){
    return(
        <VideoUpload token={props.token} />
    )
}

export default HomePage