"use client"

import {MyLinks} from "@/components/nav/components/MyLinks";
import { AiFillSun, AiFillMoon} from "react-icons/ai";
import { useTheme } from "@/components/utils/ThemeContext";
import { motion } from "framer-motion";

export const Header = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="heading">
            <div className="flex items-center gap-4">
                 <motion.button
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.0 }}
                    onClick={toggleTheme}
                    
                > 
                    <span className="opacity-50 relative z-20 hover:text-brand hover:opacity-100 transition-all duration-100">
                        {theme === 'dark' ? <AiFillSun size="1.8rem" /> : <AiFillMoon size="1.8rem" />}
                    </span>
                    
                </motion.button>

                <MyLinks />
                
            </div>
        </header>
    );
};
