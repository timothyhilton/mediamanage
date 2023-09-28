import Table from "../components/VideoPage/Table"

interface VideoPageProps{
    token: string
}

export default function VideoPage({ token }: VideoPageProps){
    return(
        <div>
            <h1 className="font-bold mt-8 text-2xl md:text-4xl md:mt-[2.5rem] text-center">All of your videos</h1>
            <Table
                token = {token}
            />
        </div>
    )
}