"use client";
import { motion } from "framer-motion";
import { Reveal } from "@/components/utils/Reveal";
import { AiFillMail } from "react-icons/ai";
import Link from "next/link";

export const Contact = () => {
    return (
        <section className="section-wrapper" id="contact">
            <div className="max-w-[700px] m-auto rounded-xl flex flex-col justify-center items-center gap-6">
               <Reveal width="100%">
    <h4 className="font-[900] text-center leading-[1] text-5xl md:text-8xl">
        Contact
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
    </h4>
</Reveal>

                <Reveal width="100%">
                   <p className="text-center font-extralight">
    Got a project in mind or just want to say hi? Drop me an email, or connect with me on{" "}
    <Link
        href="https://www.linkedin.com/in/lokesh-singh-tanwar/"
        target="_blank"
        rel="nofollow"
        className="text-brand hover:underline transition-all duration-200 ease-in-out"
    >
        Linkedin
    </Link>{" "}
    or{" "}
    <Link
        href="https://x.com/Not_LokeshSingh"
        target="_blank"
        rel="nofollow"
        className="text-brand hover:underline transition-all duration-200 ease-in-out"
    >
        X
    </Link>{" "}
    —whatever works best for you.
</p>
                </Reveal>

                <Reveal width="100%">
                    <Link href="mailto:lokeshsinghtanwar78@gmail.com" className="text-brand">
                        <div className="contactEmail hover:scale-95 font-semibold text-text">
                            <AiFillMail size="1.8rem" />
                            <span>Send Email</span>
                        </div>
                    </Link>
                </Reveal>
            </div>
        </section>
    );
};
