import axios from "axios";
import GoogleAuth from "../services/GoogleAuth";

const apiUrl = import.meta.env.VITE_API_URL;

function GoogleAuthButton(props: any){
    const googleAuth = new GoogleAuth();

    function handleButton(){
        googleAuth.runWithAuth(sendGoogleAuthToBackend)
    }

    function sendGoogleAuthToBackend(authCode: string){
        console.log(authCode);
        console.log(props.token);

        let config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${props.token}`
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
            <button onClick={handleButton}>
                google auth
            </button>
        </>
    )
}

export default GoogleAuthButton