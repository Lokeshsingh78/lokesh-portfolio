"use client"

import {
  AiFillGithub,
  AiFillTwitterSquare
} from "react-icons/ai";
import { SiDevdotto, SiLeetcode } from "react-icons/si";
import Link from "next/link";
import { motion } from "framer-motion";

export const MyLinks = () => {
  return (
    <div className={"links"}>
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Link
          href="https://x.com/Not_LokeshSingh"
          target="_blank"
          rel="nofollow"
        >
          <AiFillTwitterSquare size="1.8rem" />
        </Link>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link
          href="https://github.com/Lokeshsingh78"
          target="_blank"
          rel="nofollow"
        >
          <AiFillGithub size="1.8rem" />
        </Link>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Link
          href="https://dev.to/lokesh_singh"
          target="_blank"
          rel="nofollow"
        >
          <SiDevdotto size="1.6rem" />
        </Link>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Link
          href="https://leetcode.com/u/lokeshsinghtanwar78/"
          target="_blank"
          rel="nofollow"
        >
          <SiLeetcode size="1.6rem" />
        </Link>
      </motion.span>
    </div>
  );
};
