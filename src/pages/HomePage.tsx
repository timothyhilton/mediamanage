import Button from "../components/Button"

interface HomePageProps{
    token?: string,
    username?: string
}

function HomePage({ token, username }: HomePageProps){
    return(
        <div className="grid place-items-center">
            <h1 className="font-bold mt-8 text-3xl md:text-5xl md:mt-[5.5rem] text-center">
                Welcome back, {username}
            </h1>

            <div className="mt-8 md:mt-[5rem]">
                <Button 
                    text="Video Dashboard"
                    link="/video"
                    className="md:w-[11.3rem] w-[80vw]"
                    arrow={true}
                />
            </div>
        </div>
    )   
}

export default HomePage