import { useState } from "react";
import Modal from 'react-modal';
import UploadModal from "./UploadModal";

export default function UploadButton({ token }: { token: string}){
    const [isModalOpen, setisModalOpen] = useState(false);

    function toggleModal() {
        setisModalOpen(!isModalOpen);
    }

    return(
        <div>
            <button className="cursor-pointer" onClick={toggleModal}>
                <svg className="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.71 6.71 11 5.41V17a1 1 0 0 0 2 0V5.41l1.29 1.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-3-3a1 1 0 0 0-1.42 0l-3 3a1 1 0 0 0 1.42 1.42ZM18 9h-2a1 1 0 0 0 0 2h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h2a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3Z"/></svg>
            </button>

            <Modal
                isOpen={isModalOpen}
                onRequestClose={toggleModal}
                contentLabel="Uploading a video"
                className={"sm:w-full flex flex-col mt-[5rem] md:mt-0 sm:mx-auto sm:max-w-md md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2"}
            >
                <UploadModal token={token}/>
            </Modal>
        </div>
    )
}