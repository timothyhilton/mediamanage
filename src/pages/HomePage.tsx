import GoogleAuthButton from "../components/GoogleAuthButton"
import VideoUpload from "../components/VideoUpload"

function HomePage(props: any){
    return(
        <>
            <VideoUpload token={props.token} />
            <GoogleAuthButton token={props.token} />
        </>
    )
}

export default HomePage