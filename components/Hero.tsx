"use client"

import { motion } from "framer-motion";
import { Reveal } from "@/components/utils/Reveal";
import { useState, useEffect } from "react";

export const Hero = () => {
    const titles = [
        "Full-Stack (MERN) Developer",
        "Android App Developer",
        "Technical Content Writer",
        "3D Artist (Blender)"
    ];
    
    const [titleIndex, setTitleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    
    useEffect(() => {
        const currentTitle = titles[titleIndex];
        const typeSpeed = isDeleting ? 60 : 100;
        
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < currentTitle.length) {
                    setDisplayText(currentTitle.slice(0, displayText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 1500);
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(currentTitle.slice(0, displayText.length - 1));
                } else {
                    setIsDeleting(false);
                    setTitleIndex((prev) => (prev + 1) % titles.length);
                }
            }
        }, typeSpeed);
        
        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, titleIndex, titles]);

    return (
        <section id="home" className={`section-wrapper hero`}>
            <div className="heroGrid">
                <div className="copyWrapp">
                    <Reveal>
                        <h1 className="title" style={{ fontSize: "3.5em" }}>
                            Hi, I&apos;m LOKESH SINGH TANWAR
                            <motion.span
                                style={{
                                    display: "inline-block",
                                    transformOrigin: "bottom",
                                }}
                                animate={{
                                    scaleY: [1, 1.2, 1],
                                    color: ["#000", "#fc8c03", "#000"],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                }}
                            >
                                .
                            </motion.span>
                        </h1>
                    </Reveal>

                    <Reveal>
                        <h2 className="subTitle">
                            I&apos;m a <span className={"highlight"}>
                                {displayText}
                                <motion.span
                                    animate={{ opacity: [1, 0] }}
                                    transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                                    style={{ display: "inline-block" }}
                                >
                                    |
                                </motion.span>
                            </span>
                        </h2>
                    </Reveal>

                    <Reveal>
                        <p className="aboutCopy">
                            I love building applications, learning new technologies, and improving my skills through real-world projects. This portfolio highlights my journey, the tools I work with, and what I’m currently building. Always open to new challenges ~ <br />let’s connect.
                        </p>
                    </Reveal>

                    <Reveal>
                        <button
                            onClick={() => document.getElementById("contact")?.scrollIntoView()}
                            className="outline-0 border-0 cursor-pointer py-3 px-6 bg-brand text-white text-base font-semibold rounded-sm relative z-20 overflow-hidden
                            transition-all duration-150 hover:bg-opacity-90 hover:scale-95"
                        >
                            Contact me
                        </button>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};
