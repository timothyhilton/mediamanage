import { MouseEventHandler } from "react";
import { Link } from "react-router-dom";

interface ButtonProps{
    text: string
    link: string
    onClick?: MouseEventHandler<HTMLButtonElement>
    className?: string
}

function SVGComp(props: any){
    return(
        <svg
            fill="#000000"
            viewBox="0 0 15 15"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M8.29289 2.29289C8.68342 1.90237 9.31658 1.90237 9.70711 2.29289L14.2071 6.79289C14.5976 7.18342 14.5976 7.81658 14.2071 8.20711L9.70711 12.7071C9.31658 13.0976 8.68342 13.0976 8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L11 8.5H1.5C0.947715 8.5 0.5 8.05228 0.5 7.5C0.5 6.94772 0.947715 6.5 1.5 6.5H11L8.29289 3.70711C7.90237 3.31658 7.90237 2.68342 8.29289 2.29289Z" />
        </svg>
    )
}

export default function Button({ text, link, onClick, className }: ButtonProps){
    return(
        <Link to={link}>
            <button 
                onClick={onClick}
                className={`${className} flex justify-center px-4 py-2 text-sm font-medium text-black transition duration-150 ease-in-out border border-transparent rounded-md bg-slate-200 hover:bg-slate-300 focus:outline-none focus:border-slate-300 focus:shadow-outline-blue active:bg-slate-400`}
            >
                <div className="flex flex-row gap-x-4 w-fit">
                    <p className="font-semibold whitespace-nowrap self-center">{text}</p>
                    <SVGComp className="w-[1.5rem]" />
                </div>
            </button>
        </Link>
    );
}