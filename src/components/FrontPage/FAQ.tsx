import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function FAQ(props: any){
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        console.log(expanded);
    }, [expanded]);

    return(
        <div className="relative overflow-hidden border-b border-gray-100 select-none">
            <h4 onClick={() => setExpanded(!expanded)} className="flex items-center justify-between px-2 text-lg font-medium text-gray-700 cursor-pointer sm:text-xl md:text-2xl py-7 hover:text-gray-900">
                <span className="">{props.question}</span>
                <svg className="w-6 h-6 mr-2 transition-all duration-200 ease-out transform rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </h4>
            
            <AnimatePresence>
                {expanded &&
                    <motion.div
                        initial={{opacity: 0, y: -16}}
                        animate={{opacity: 1, y: 0}}
                        transition={{ duration: 0.3 }}
                        exit={{ opacity: 0, y: -16, transition:{duration: 0.2}}}
                    >
                        <p className="px-2 pt-0 -mt-2 text-gray-400 transform sm:text-lg py-7">{props.answer}</p>
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    )
}

export default FAQ