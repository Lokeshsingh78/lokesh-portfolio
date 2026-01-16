"use client"

import Image from "next/image";
import { Reveal } from "@/components/utils/Reveal";
import { useAnimation, useInView, motion } from "framer-motion";
import Link from "next/link";
import {JSX, useEffect, useRef, useState} from "react";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { ProjectModal } from "./ProjectModal";
interface Props {
    modalContent: JSX.Element;
    description: string;
    projectLink: string;
    imgSrc: string;
    tech: string[];
    title: string;
    code: string;
}

export const Project = ({
                            modalContent,
                            projectLink,
                            description,
                            imgSrc,
                            title,
                            code,
                            tech,
                        }: Props) => {
    const [hovered, setHovered] = useState(false);

    const [isOpen, setIsOpen] = useState(false);

    const controls = useAnimation();

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [isInView, controls]);

    return (
        <>
            <motion.div
                ref={ref}
                variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={controls}
                transition={{ duration: 0.75 }}

            >
                <div
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    onClick={() => setIsOpen(true)}
                    className="bg-background-light w-full cursor-pointer relative rounded overflow-hidden aspect-video"
                >
                    <Image
                        priority
                        src={imgSrc}
                        alt={`An image of the ${title} project.`}
                        width={1000}
                        height={0}
                        style={{
                            width: hovered ? "90% !important" : "85% !important",
                            rotate: hovered ? "2deg" : "0deg",
                        }}
                        className="w-[85%] h-[90%] md:w-full md:h-auto absolute bottom-[30px] left-1/2 -translate-x-1/2 translate-y-[20%] transition-all duration-300 rounded"
                    />

                </div>
                <div className="my-4">
                    <Reveal width="100%" >
                        <div className="flex items-center gap-3 w-full">

                            <h4 className="font-bold text-lg shrink-0 max-w-[calc(100%-150px)] my-4">{title}</h4>
                            <div className="w-full h-[1px] bg-text opacity-30" />

                            <Link href={code} target="_blank" rel="nofollow" className="opacity-75 hover:opacity-100 transition-all duration-300">
                                <AiFillGithub size="1.8rem" />
                            </Link>

                            <Link href={projectLink} target="_blank" rel="nofollow" className="opacity-75 hover:opacity-100 transition-all duration-300">
                                <AiOutlineExport size="1.8rem" />
                            </Link>
                        </div>
                    </Reveal>
                    <Reveal>
                        <div className="flex flex-wrap gap-6 text-base text-brand my-2">{tech.join(" - ")}</div>
                    </Reveal>
                    <Reveal>
                        <p className="font-extralight">
                            {description} <br />
                            {/* <span onClick={() => setIsOpen(true)} className="inline-block text-base font-[400] text-brand cursor-pointer mt-6 hover:underline transition-all duration-200">Learn more {">"} </span> */}
                        </p>
                    </Reveal>
                </div>
            </motion.div>
            <ProjectModal
                modalContent={modalContent}
                projectLink={projectLink}
                setIsOpen={setIsOpen}
                isOpen={isOpen}
                imgSrc={imgSrc}
                title={title}
                code={code}
                tech={tech}
            />
        </>
    );
};
