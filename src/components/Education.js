import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({ type, time, place, university, universityLink, info }) => {
    const ref = useRef(null);
    return <li
        ref={ref}
        className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center
    justify-between md:w-[80%]">
        <LiIcon reference={ref} />
        <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
        >
            <h3 className="capitalize font-bold text-2xl
            sm:text-xl xs:text-lg">{type}&nbsp;<a href={universityLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary dark:text-primaryDark capitalize"
            >@{university}</a></h3>
            <span className="capitalize font-medium text-dark/75 dark:text-light/75
            xs:text-sm">
                {time} | {place}
            </span>
            <p className="font-medium w-full md:text-sm">
                {info}
            </p>
        </motion.div>
    </li>
}

const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    );
    return (
        <div className="my-32">
            <h2 className="font-bold text-8xl mb-32 w-full text-center
            md:text-6xl xs:text-4xl md:mb-16">
                Education
            </h2>

            <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top
                    md:w-[2px] md:left-[30px] xs:left-[20px]" />
                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2" >
                    <Details
                        type="M.Sc. In Computer Vision"
                        university="Universitat Autònoma de Barcelona — Computer Vision Center (CVC)"
                        time="2020-2021"
                        place="Barcelona, Spain"
                        info="Specialization that provides the foundations of Computer Vision, a technology within the Artificial Intelligence field,
                        that acts as a fundamental component to perform smart tasks in systems such as assisting medical diagnosis and surgery,
                        autonomous car driving, industry quality control, surveillance applications, or improving interfaces for multimedia data access."
                    />
                    <Details
                        type="M.Sc. In Telecommunication Engineering"
                        university="La Salle - Universitat Ramon Llull (URL)"
                        time="2017-2019"
                        place="Barcelona, Spain"
                        info="The master covered the design and communication systems network concepts, hardware and software developments (reaching prototype level),
                        radiofrequency systems, technology project management and business creation."
                    />
                    <Details
                        type="B.Sc. In Telecommunication Engineering"
                        university="Universitat Politècnica de Catalunya (UPC)"
                        time="2011-2017"
                        place="Barcelona, Spain"
                        info="Covered competences in Telecommunication Systems, 
                        Audiovisual Systems, Telematics, and Electronics."
                    />
                </ul>
            </div>
        </div>
    );
}

export default Education;
