import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    return <li 
    ref={ref}
    className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center
    justify-between md:w-[80%]">
        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className="capitalize font-bold text-2xl
            sm:text-xl xs:text-lg">{position}&nbsp;<a href={companyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary dark:text-primaryDark capitalize"
            >@{company}</a></h3>
            <span className="capitalize font-medium text-dark/75 dark:text-light/75
            xs:text-sm">
                {time} | {address}
            </span>
            <p className="font-medium w-full md:text-sm">
                {work}
            </p>
        </motion.div>
    </li>
}

const Experience = () => {
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
                Experience
            </h2>

            <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top
                    md:w-[2px] md:left-[30px] xs:left-[20px]"/>
                    <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2" >
                    <Details
                        position="Machine Learning Engineer"
                        company="coatingAI"
                        companyLink="https://coatingai.com"
                        time="April 2025 - Present"
                        address="(remote) Barcelona, Spain"
                        work="I am involved in the continuous development and refinement of proprietary deep learning models, 
                        primarily using PyTorch. My responsibilities include dataset generation, experiment tracking, 
                        and systematic evaluation of training metrics to guide model improvements. 
                        From an operational perspective, I containerize models and supporting frameworks,
                        deploy them as services and jobs on GCloud, and maintain reproducible workflows using tools such as MLflow and DVC." 
                    />
                    <Details
                        position="Computer Vision Engineer"
                        company="coatingAI"
                        companyLink="https://coatingai.com"
                        time="May 2022 - April 2025"
                        address="(remote) Barcelona, Spain"
                        work="I am actively involved in the development of a cutting-edge 3D reconstruction
                        pipeline, comprising camera drivers, recording tools, and advanced techniques for 
                        point cloud reconstruction, denoising, matching, and meshing. 
                        Additionally, I am helping with the frontend development of the company&apos;s application portfolio." 
                    />

                    <Details
                        position="Computer Vision Engineer"
                        company="Beamagine"
                        companyLink="https://beamagine.com/"
                        time="May 2021 - May 2022"
                        address="Terrassa, Spain"
                        work="As a Computer Vision Engineer at Beamagine&apos;s Perception Research Team, 
                        I played a key role in the development of cutting-edge solutions for pedestrian detection in point clouds,
                        and multimodal images. Additionally, contributed to the development of point cloud visualization and annotation
                        tools using Qt Creator and OpenGL."
                    />

                    <Details
                        position="Junior Project Manager"
                        company="ITnow"
                        companyLink="https://www.itnow.es/"
                        time="Jul. 2019 - Aug. 2020"
                        address="Barcelona, Spain"
                        work="During my time as a Junior Project Manager at ITnow&apos;s Backends and Cloud Support teams,
                        I contributed to the successful execution of various projects. I was part of the team responsible for key aspects
                        of the architecture and backend operations, including CPU and memory capacity planning, alert monitoring and continuity planning.
                        In the Cloud Support team, within an Agile squad, we provided technical support for migrating
                        applications from local servers to the cloud."
                    />
                    <Details
                        position="Internship"
                        company="Barcelona City Council"
                        companyLink="https://ajuntament.barcelona.cat/imi/en"
                        time="Mar. 2018 - Jul. 2018"
                        address="Barcelona, Spain"
                        work="During my internship in Systems and Operations, I executed a proof of concept
                        for an NLP-based chatbot. This project involved implementing natural language processing techniques
                        to develop an intelligent chatbot capable of understanding and responding to user queries. "
                    />
                    <Details
                        position="Internship"
                        company="EY"
                        companyLink="https://www.ey.com/en_us"
                        time="Oct. 2017 - Feb. 2018"
                        address="Barcelona, Spain"
                        work="During my internship at EY, I focused on IT security risk assessment and data access control in 
                        the IT Security Risk FSO team."
                    />
                </ul>
            </div>
        </div>
    );
}

export default Experience;
