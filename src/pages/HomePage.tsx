import { redirect } from "react-router-dom"
import GoogleAuthButton from "../components/GoogleAuthButton"
import Button from "../components/HomePage/Button"
import VideoUpload from "../components/VideoUpload"
import { TokenProp } from "../models/TokenProp"
import { UserInfo } from "../models/UserInfo"

interface HomePageProps{
    token?: string,
    username?: string
}

function HomePage({ token, username }: HomePageProps){
    return(
        <div className="grid place-items-center">
            <h1 className="font-bold mt-8 text-3xl md:text-5xl md:mt-[7rem] text-center">
                Welcome back, {username}
            </h1>

            <div className="mt-8 md:mt-[5rem]">
                <Button 
                    text="Post video"
                    link="/video"
                    className="md:w-[9rem] w-[80vw]"
                />
            </div>
        </div>
    )   
}

export default HomePage