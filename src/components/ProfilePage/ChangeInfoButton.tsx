import { useState } from "react";
import { UserInfo } from "../../models/UserInfo";
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";

function ChangeInfoButton({ username, email }: UserInfo){
    const [isOpen, setIsOpen] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data: any) => console.log(data);

    function toggle() {
        setIsOpen(!isOpen);
    }

    console.log(watch("example"));

    return(
        <div>
            <button 
                onClick={toggle}
                className="flex justify-center w-fit px-4 py-2 text-sm font-medium text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-slate-600 hover:bg-slate-500 focus:outline-none focus:border-slate-700 focus:shadow-outline-blue active:bg-slate-700"
            >
                Change account info
            </button>

            <AnimatePresence>
                {isOpen &&
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{ duration: 0.3 }}
                        exit={{ opacity: 0, transition:{duration: 0.2}}}
                    > 
                        <div onClick={toggle} className="p-20 border-4 border-white fixed top-0 left-0 bottom-0 right-0 w-full h-screen bg-white bg-opacity-75"></div>

                        <div className="absolute flex flex-col justify-center pb-10 sm:pb-20 sm:px-6 lg:px-8">
                            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                                <div className="px-4 py-8 bg-white border shadow border-gray-50 sm:rounded-lg sm:px-10">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="">
                                            <label className="block text-sm font-medium leading-5 text-gray-700">
                                                Username
                                            </label>
                                            <div className="mt-1 rounded-md shadow-sm">
                                                <input defaultValue={username} {...register("username")} className="w-full form-input"/>
                                            </div>
                                        </div>

                                        <div className="mt-6">
                                            <label className="block text-sm font-medium leading-5 text-gray-700">
                                                Email
                                            </label>
                                            <div className="mt-1 rounded-md shadow-sm">
                                                <input defaultValue={email} {...register("email")} className="w-full form-input"/>
                                            </div>
                                        </div>

                                        <input type="submit" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    )
}

export default ChangeInfoButton