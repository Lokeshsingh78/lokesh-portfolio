"use client"

import {JSX, useEffect} from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import Image from "next/image";
interface Props {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    title: string;
    imgSrc: string;
    code: string;
    projectLink: string;
    tech: string[];
    modalContent: JSX.Element;
}

export const ProjectModal = ({
                                 modalContent,
                                 projectLink,
                                 setIsOpen,
                                 imgSrc,
                                 isOpen,
                                 title,
                                 code,
                                 tech,
                             }: Props) => {
    useEffect(() => {
        const body = document.querySelector("body");

        if (isOpen) {
            body!.style.overflowY = "hidden";
        } else {
            body!.style.overflowY = "scroll";
        }
    }, [isOpen]);


    const content = (
        <div className="cursor-pointer fixed top-0 left-0 right-0 bottom-0 z-[10000] py-12 px-6 bg-bg-opaque backdrop-blur-md overflow-y-scroll flex justify-center" onClick={() => setIsOpen(false)}>
            <button className="bg-none border-none text-text text-4xl absolute top-6 right-6 cursor-pointer">
                <MdClose />
            </button>

            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                onClick={(e) => e.stopPropagation()}
                className="cursor-auto w-full max-w-[800px] h-fit rounded-xl overflow-hidden bg-background-light shadow-lg"
            >
                <Image
                    priority
                    src={imgSrc}
                    alt={`An image of the ${title} project.`}
                    width={500}
                    height={400}
                    className="w-full"
                />
              
                <div className='p-6 mt-2'>
                    <h4 className="text-4xl font-bold">{title}</h4>
                    <div className="flex flex-wrap gap-3 text-lg text-brand my-1">{tech.join(" - ")}</div>

                    <div className="flex flex-col gap-3 text-base mt-6">{modalContent}</div>

                    <div className="mt-6">
                        <p className="font-bold text-xl ">
                            Project Links<span className="text-brand">.</span>
                        </p>
                        <div className="flex items-center gap-6 mt-2">
                            <Link target="_blank" rel="nofollow" href={code} className="flex items-center gap-1 text-brand text-base hover:underline transition-all duration-150">
                                <AiFillGithub /> source code
                            </Link>
                            <Link target="_blank" rel="nofollow" href={projectLink} className="flex items-center gap-1 text-brand text-base hover:underline transition-all duration-150">
                                <AiOutlineExport /> live project
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );

    if (!isOpen) return <></>;

    return ReactDOM.createPortal(content, document.body);
};
