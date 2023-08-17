import GoogleAuthButton from "../components/GoogleAuthButton"
import VideoUpload from "../components/VideoUpload"
import { TokenProp } from "../models/TokenProp"

function HomePage({ token }: TokenProp){
    return(
        <>
            <VideoUpload token={token} />
        </>
    )
}

export default HomePage