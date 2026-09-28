"use client"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const SideBar = () => {
    const [selected, setSelected] = useState("");

    useEffect(() => {
        const mainEl = document.getElementById("main");
        if (!mainEl) return;

        const handleScroll = () => {
            if (mainEl.scrollTop < 120) {
                setSelected("home");
            } else if (mainEl.scrollHeight - mainEl.scrollTop - mainEl.clientHeight < 120) {
                setSelected("contact");
            }
        };

        mainEl.addEventListener("scroll", handleScroll, { passive: true });
        if (mainEl.scrollTop < 120) {
            setSelected("home");
        }

        const sections = document.querySelectorAll(".section-wrapper");

        const options: IntersectionObserverInit = {
            root: mainEl,
            threshold: 0,
            rootMargin: "-30% 0px -60% 0px",
        };

        const callback = (entries: IntersectionObserverEntry[]) => {
            if (mainEl.scrollTop < 120) {
                setSelected("home");
                return;
            }
            if (mainEl.scrollHeight - mainEl.scrollTop - mainEl.clientHeight < 120) {
                setSelected("contact");
                return;
            }
            entries.forEach((entry) => {
                const target = entry.target as HTMLElement;
                if (entry.isIntersecting && target.id) {
                    setSelected(target.id);
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);
        sections.forEach((section) => observer.observe(section));

        return () => {
            mainEl.removeEventListener("scroll", handleScroll);
            observer.disconnect();
        };
    }, []);

    return (
        <div style={{ background: "var(--background-dark)" }}>
            <motion.nav
                initial={{ x: 70 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
                className="sidebar"
            >
                <span
                    className="logo"
                    onClick={() => {
                        const main = document.getElementById("main");
                        if (main) {
                            main.scrollTo({ top: 0, behavior: "smooth" });
                        }
                        setSelected("home");
                    }}
                >
                    ⌂<span></span>
                </span>
                <motion.a
                    initial={{ x: 70 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    href="#about"
                    onClick={() => setSelected("about")}
                    className={selected === "about" ? "selected" : ""}
                >
                    About
                </motion.a>
                <motion.a
                    initial={{ x: 70 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    href="#projects"
                    onClick={() => setSelected("projects")}
                    className={selected === "projects" ? "selected" : ""}
                >
                    Projects
                </motion.a>
                <motion.a
                    initial={{ x: 70 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    href="#Blogs"
                    onClick={() => setSelected("Blogs")}
                    className={selected === "Blogs" ? "selected" : ""}
                >
                    Blogs
                </motion.a>
                <motion.a
                    initial={{ x: 70 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    href="#contact"
                    onClick={() => setSelected("contact")}
                    className={selected === "contact" ? "selected" : ""}
                >
                    Contact
                </motion.a>
            </motion.nav>
        </div>
    );
};