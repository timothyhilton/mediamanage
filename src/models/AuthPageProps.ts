import { UserInfo } from "./UserInfo";

export interface AuthPageProps{
    setToken: React.Dispatch<React.SetStateAction<string>>;
    setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>;
}