interface HamburgerIconProps{
    slideDrawerToggled: boolean,
    setSlideDrawerToggled: React.Dispatch<React.SetStateAction<boolean>>
}

export default function HamburgerIcon({ slideDrawerToggled, setSlideDrawerToggled } : HamburgerIconProps){
    function toggle(){
        setSlideDrawerToggled(!slideDrawerToggled);
    }

    return(
        <div onClick={toggle}>
            <button className="relative group">
                <div className="relative flex overflow-hidden items-center justify-center w-[50px] h-[50px] transform">
                    <div className="flex flex-col justify-between w-[20px] h-[20px] transform">
                        <div className="bg-gray-800 h-[2px] w-6 transform"></div>
                        <div className="bg-gray-800 h-[2px] w-6 rounded"></div>
                        <div className="bg-gray-800 h-[2px] w-6 transform "></div>
                    </div>
                </div>
            </button>
        </div>
    )
}