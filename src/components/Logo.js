import Link from "next/link";
import React from "react";
import {motion} from 'framer-motion';

const MotionLink = motion(Link);

const Logo = () => {
    return (
        <div className='flex items-center justify-center mt-2'>
            <MotionLink href='/'
            className="rounded-full w-16 h-16 flex items-center justify-center
            bg-dark text-light border border-solid border-transparent 
            dark:border-light text-2xl font-bold"
            whileHover={{
                // scale: 1.5,
                backgroundColor: ["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
                transition: {duration:1, repeat: Infinity}}}                
            >IRS</MotionLink>
        </div>
    );
}
export default Logo;
