import GoogleAuthButton from "../components/GoogleAuthButton"
import { TokenProp } from "../models/TokenProp"
import { UserInfo } from "../models/UserInfo"

function ProfilePage({username, email, token }: any){ //todo: make this not "any"
    return(
        <div className="m-10 space-y-6">
            <h1 className="text-3xl font-bold">
                Account Settings
            </h1>

            <div className="h-1 w-[15rem] border-t border-gray-300"></div>

            <div className="mt-6 space-y-4">
                <p className="text-xl font-semibold leading-5">
                    Account Info
                </p>

                <div className="h-1 w-[7.4rem] border-t border-gray-300"></div>

                <div>
                    <p className="text-lg font-semibold">
                        Username:
                    </p>
                    <p className="text-lg">
                        {username}
                    </p>
                </div>
                <div>
                    <p className="text-lg font-semibold">
                        Email:
                    </p>
                    <p className="text-lg">
                        {email}
                    </p>
                </div>

                <p className="text-xl font-semibold leading-5">
                    Service Linking
                </p>

                <div className="h-1 w-[8.5rem] border-t border-gray-300"></div>

                <GoogleAuthButton token={token}/>
            </div>
        </div>
    )
}

export default ProfilePage