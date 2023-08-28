import GoogleAuthButton from "../components/GoogleAuthButton"
import VideoUpload from "../components/VideoUpload"
import { TokenProp } from "../models/TokenProp"

function HomePage({ token }: TokenProp){
    return(
        <div className="mt-20 grid grid-cols-3 grid-rows-1 gap-10 place-items-center">
            <VideoUpload token={token} />
        </div>
    )   
}

export default HomePage