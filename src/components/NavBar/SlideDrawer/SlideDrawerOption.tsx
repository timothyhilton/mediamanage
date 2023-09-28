import { Link } from "react-router-dom"

interface SlideDrawerOptionProps{
    text: string
    link: string
}

export default function SlideDrawerOption({ text, link }: SlideDrawerOptionProps){
    return(
        <Link to={link}>
            <button 
                className={`flex justify-center px-4 py-2 text-sm font-medium text-black transition duration-150 ease-in-out border border-transparent rounded-md bg-slate-200 hover:bg-slate-300 focus:outline-none focus:border-slate-300 focus:shadow-outline-blue active:bg-slate-400`}
            >
                <div className="flex flex-row gap-x-4 w-fit">
                    <p className="font-semibold whitespace-nowrap self-center">{text}</p>
                </div>
            </button>
        </Link>
    )
}