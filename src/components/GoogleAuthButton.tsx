import axios from "axios";
import GoogleAuth from "../services/GoogleAuth";
import { TokenProps } from "../models/TokenProps";
import { TokenProp } from "../models/TokenProp";

const apiUrl = import.meta.env.VITE_API_URL;

function GoogleAuthButton({ token }: TokenProp){
    const googleAuth = new GoogleAuth();

    function handleButton(){
        googleAuth.runWithAuth(sendGoogleAuthToBackend)
    }

    function sendGoogleAuthToBackend(authCode: string){
        console.log(authCode);
        console.log(token);

        let config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }

        try {
            axios.post(`${apiUrl}/auth/gauthcode`, authCode, config)
                .then(res => console.log(res));
        } 
        catch (exception){ console.log(exception); }
    }

    return (
        <>
            <button onClick={handleButton} className="flex justify-center w-fit px-4 py-2 text-sm font-medium text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-yellow-600 hover:bg-yellow-500 focus:outline-none focus:border-yellow-700 focus:shadow-outline-blue active:bg-yellow-700">
                Connect Google Account
            </button>
        </>
    )
}

export default GoogleAuthButton