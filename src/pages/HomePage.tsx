import GoogleAuthButton from "../components/GoogleAuthButton"
import VideoUpload from "../components/VideoUpload"
import { TokenProp } from "../models/TokenProp"
import { TokenProps } from "../models/TokenProps"

function HomePage({ token }: TokenProp){
    return(
        <>
            <VideoUpload token={token} />
            <GoogleAuthButton token={token} />
        </>
    )
}

export default HomePage