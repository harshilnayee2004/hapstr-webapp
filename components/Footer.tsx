"use client";

import Link from "next/link";
import {
    BsGithub,
    BsInstagram,
    BsTwitterX,
    BsLinkedin,
    BsEnvelopeFill
} from "react-icons/bs";

export default function Footer() {
    return (
        <footer className="w-full bg-[#0a0a0a] text-white py-8 px-4 sm:py-12 sm:px-12 border-t border-white/10">
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
                <p className="text-[13px] sm:text-sm text-white/50 m-0 text-center md:text-left">
                    &copy; {new Date().getFullYear()} Hapstr. All rights reserved.
                </p>
                <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
                    <Link
                        href="mailto:harshilnayee2004@gmail.com"
                        className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/5 text-white/70 transition-all duration-200 hover:bg-white/15 hover:text-white hover:-translate-y-0.5"
                        aria-label="Email"
                    >
                        <BsEnvelopeFill className="text-[17px] sm:text-lg" />
                    </Link>
                    <Link
                        href="https://github.com/harshilnayee2004"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/5 text-white/70 transition-all duration-200 hover:bg-white/15 hover:text-white hover:-translate-y-0.5"
                        aria-label="GitHub"
                    >
                        <BsGithub className="text-[17px] sm:text-lg" />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/harshil-nayee-cse2004/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/5 text-white/70 transition-all duration-200 hover:bg-white/15 hover:text-white hover:-translate-y-0.5"
                        aria-label="LinkedIn"
                    >
                        <BsLinkedin className="text-[17px] sm:text-lg" />
                    </Link>
                    <Link
                        href="https://www.instagram.com/ig.hrshl/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/5 text-white/70 transition-all duration-200 hover:bg-white/15 hover:text-white hover:-translate-y-0.5"
                        aria-label="Instagram"
                    >
                        <BsInstagram className="text-[17px] sm:text-lg" />
                    </Link>
                    {/* Non-clickable extra icons */}
                    <span className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/5 text-white/30 cursor-not-allowed" aria-label="Twitter">
                        <BsTwitterX className="text-[17px] sm:text-lg" />
                    </span>
                </div>
            </div>
        </footer>
    );
}
