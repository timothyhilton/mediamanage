import { AnimatePresence, motion } from 'framer-motion';
import SVGArrow from '../../SVGArrow';
import Button from '../../Button';

interface SlideDrawerProps{
    slideDrawerToggled: boolean,
    setSlideDrawerToggled: React.Dispatch<React.SetStateAction<boolean>>
}

export default function SlideDrawer({ slideDrawerToggled, setSlideDrawerToggled } : SlideDrawerProps){
    function onOptionClick(){
        setSlideDrawerToggled(!slideDrawerToggled)
    }

    return(
        <AnimatePresence>
            {slideDrawerToggled &&
                <motion.div
                    initial={{x: -150, opacity: 0}}
                    animate={{x: -40, opacity: 1}}
                    transition={{ duration: 0.2 }}
                    exit={{x: -150, opacity: 0, transition:{duration: 0.1}}}
                    className="bg-slate-50 fixed shadow-lg left-0 top-0 h-full bottom-0 w-full z-10 md:w-[31%] md:min-w-[20rem] md:max-w-[25rem]"
                >
                    <SVGArrow className="fill-grey-700 cursor-pointer w-[2rem] absolute right-0 mt-8 mr-8 rotate-180" onClick={() => setSlideDrawerToggled(!slideDrawerToggled)}/>
                    <hr className="h-[2px] mt-[5.905rem] bg-slate-100 border-0"></hr>
                    <Button 
                        text="Home menu" 
                        link="home"
                        onClick={onOptionClick}
                        textClassName="text-lg"
                        className="mt-10 mx-auto w-[80%]"
                    />
                    <Button 
                        text="Browse all videos" 
                        link="video"
                        onClick={onOptionClick}
                        textClassName="text-lg"
                        className="mt-10 mx-auto w-[80%]"
                    />
                </motion.div>
            }
        </AnimatePresence>
    )
}