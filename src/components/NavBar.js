import Link from "next/link";
import React from "react";
import Logo from './Logo';
import { useRouter } from "next/router";
import { LinkedInIcon, GithubIcon, GmailIcon, SunIcon, MoonIcon } from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[1px] inline-block bg-dark 
            absolute left-0 bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? "w-full" : "w-0"}
            dark:bg-light`}
            >&nbsp;
            </span>
        </Link>
    );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
    const router = useRouter();
    const handleClick = () => {
        toggle();
        router.push(href);
    };
    return (
        <button className={`${className} relative group
        text-light dark:text-dark my-2`}
            onClick={handleClick}>
            {title}
            <span className={`h-[1px] inline-block bg-light dark:bg-dark 
            absolute left-0 bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? "w-full" : "w-0"}
            dark:bg-light`}
            >&nbsp;
            </span>
        </button>
    );
};
const NavBar = () => {

    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = React.useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    return (
        <header
            className=' w-full font-medium flex items-center
            justify-between dark:text-light
            lg:px-16 md:px-12 sm:px-8
            fixed top-0 left-0 bg-gray-100 py-4 px-8 z-50 md:text-sm dark:bg-dark'>

            <button className="flex-col justify-center items-center hidden lg:flex"
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                onClick={handleClick}>
                <span className={`w-6 h-0.5 bg-dark dark:bg-light transition-all duration-300 rounded-sm 
                ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`w-6 h-0.5 bg-dark dark:bg-light transition-all duration-300 my-0.5 rounded-sm
                ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`w-6 h-0.5 bg-dark dark:bg-light transition-all duration-300 rounded-sm
                ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>

            <div className="w-full flex justify-between items-center lg:hidden">
                <nav>
                    <CustomLink href='/' title="Home" className="mr-4" />
                    <CustomLink href='/about' title="About" className="mx-4" />
                    <CustomLink href='/projects' title="Projects" className="mx-4" />
                    {/* <CustomLink href='/articles' title="Articles" className="ml-4" /> */}
                </nav>

                <nav className="flex items-center justify-center flex-wrap">
                    <button
                        onClick={() => setMode(mode === "light" ? "dark" : "light")}
                        aria-label={mode === "light" ? "Switch to dark mode" : "Switch to light mode"}
                        className={`w-6 mr-3 flex items-center justify-center rounded-full 
            p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
                    >
                        {
                            mode === "dark" ?
                                <SunIcon className={"fill-dark"} />
                                : <MoonIcon className={"fill-dark"} />
                        }

                    </button>
                    <motion.a href='https://es.linkedin.com/in/ianrierasmolinska' target={"_blank"} rel="noopener noreferrer"
                        aria-label="LinkedIn profile"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 mx-3">
                        <LinkedInIcon />
                    </motion.a>
                    <motion.a href='https://github.com/IanRiera' target={"_blank"} rel="noopener noreferrer"
                        aria-label="GitHub profile"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 mx-3">
                        <GithubIcon />
                    </motion.a>
                    <motion.a href='mailto:ian.riera.smolinska@gmail.com' target={"_blank"} rel="noopener noreferrer"
                        aria-label="Send email"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 ml-3">
                        <GmailIcon />
                    </motion.a>


                </nav>
            </div>

            {
                isOpen ?

                    <motion.div
                    id="mobile-menu"
                    initial={{ scale: 0, opacity: 0, x:"-50%", y:"-50%" }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-[min(90vw,28rem)] max-h-[85vh] overflow-y-auto
             flex flex-col justify-between items-center fixed top-1/2 left-1/2
             -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75
             rounded-lg backdrop-blur-md py-10 px-6 sm:py-8">
                        <nav className="flex items-center flex-col justify-center">
                            <CustomMobileLink href='/' title="Home" className="" toggle={handleClick} />
                            <CustomMobileLink href='/about' title="About" className="" toggle={handleClick} />
                            <CustomMobileLink href='/projects' title="Projects" className="" toggle={handleClick} />
                            {/* <CustomMobileLink href='/articles' title="Articles" className="" toggle={handleClick} /> */}
                        </nav>

                        <nav className="flex items-center justify-center flex-wrap mt-2">
                            <button
                                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                                aria-label={mode === "light" ? "Switch to dark mode" : "Switch to light mode"}
                                className={`w-6 mr-3 flex items-center justify-center rounded-full 
            p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
                            >
                                {
                                    mode === "dark" ?
                                        <SunIcon className={"fill-dark"} />
                                        : <MoonIcon className={"fill-dark"} />
                                }

                            </button>
                            <motion.a href='https://es.linkedin.com/in/ianrierasmolinska' target={"_blank"} rel="noopener noreferrer"
                                aria-label="LinkedIn profile"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-6 mx-3 sm:mx-1">
                                <LinkedInIcon />
                            </motion.a>
                            <motion.a href='https://github.com/IanRiera/IanRiera' target={"_blank"} rel="noopener noreferrer"
                                aria-label="GitHub profile"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-6 mx-3 bg-light dark:bg-dark rounded-full sm:mx-1">
                                <GithubIcon />
                            </motion.a>
                            <motion.a href='mailto:ian.riera.smolinska@gmail.com' target={"_blank"} rel="noopener noreferrer"
                                aria-label="Send email"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-6 ml-3 sm:mx-1">
                                <GmailIcon />
                            </motion.a>
                        </nav>
                    </motion.div>
                    : null
            }
            <div className='absolute left-[50%] top-2 translate-x-[-50%] md:scale-50 md:top-1 md:-translate-y-[30%]'>
                <Logo />
            </div>
        </header>
    );
};

export default NavBar;
