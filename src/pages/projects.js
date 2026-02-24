import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import scene_understanding from "../../public/images/projects/scene_understanding.png";
import scene_reconstruction from "../../public/images/projects/3D_reconstruction_urban_scenes.png";
import multi_tracking from "../../public/images/projects/reid_gif_lite.gif";
import image_classification from "../../public/images/projects/image_classification.png";
import painting_retrieval from "../../public/images/projects/museum_painting_retrieval.png";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className="w-full flex items-center justify-between relative rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl
        p-12 dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 sm:col-span-12 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark
            rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
            ></div>
            <Link href={link} target={"_blank"} rel="noopener noreferrer"
                className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
            >
                <FramerImage src={img} alt={title} className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    50vw" />
            </Link>

            <div className="w-1/2 flex flex-col items-start justify-between
            pl-6 lg:w-full lg:pl-0 lg:pt-6">
                <span className="text-primary dark:text-primaryDark font-medium text-xl
                xs:text-base"
                >{type}</span>
                <Link href={link} target={"_blank"} rel="noopener noreferrer" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-sm">{title}</h2>
                </Link>
                <p className="my-2 font-medium text-dark dark:text-light
                sm:text-sm">{summary}</p>
                <div className="mt-2 flex items-center">
                    <Link href={github} target={"_blank"} rel="noopener noreferrer" className="w-10"> <GithubIcon /></Link>
                    <Link href={link} target={"_blank"} rel="noopener noreferrer"
                        className="ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg 
                    font-semibold sm:px-4 sm:text-base"
                    >Read More</Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({ title, type, img, summary, link, github }) => {
    return (
        <article
            className=" w-full flex flex-col items-center justify-center
        rounded-2xl border border-solid border-dark bg-light dark:bg-dark dark:border-light shadow-2xl
        p-6 relative xs:p-4">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
            rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"></div>
            <Link href={link} target={"_blank"} rel="noopener noreferrer"
                className="w-full cursor-pointer overflow-hidden rounded-lg"
            >
                <FramerImage src={img} alt={title} className="w-full h-auto" 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }} />
            </Link>
            <div className="w-full flex flex-col items-start justify-between
            mt-4">
                <span className="text-primary dark:text-primaryDark font-medium text-xl
                lg:text-lg md:text-base"
                >{type}</span>
                <Link href={link} target={"_blank"} rel="noopener noreferrer" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
                </Link>
                <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
                <div className="w-full mt-2 flex items-center justify-between">
                    <Link href={link} target={"_blank"} rel="noopener noreferrer"
                        className="underline text-lg 
                    font-semibold md:text-base"
                    >Read More</Link>
                    <Link href={github} target={"_blank"} rel="noopener noreferrer" className="w-8 md:w-6"> <GithubIcon />{" "}</Link>
                </div>
            </div>
        </article>
    )
}
const projects = () => {
    return (
        <>
            <Head>
                <title>Projects | Ian Riera</title>
                <meta name="description" content="Ian Riera personal website" />
            </Head>
            <TransitionEffect />
            <main className="pt-12 w-full mb-16 flex flex-col items-center justify-center
            dark:text-light">
                <Layout className="w-full mb-16 flex flex-col items-center justify-center">
                    <AnimatedText text="Unleash the Power of Computer Vision!" className="mb-16
                    lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />

                    <div className="grid w-full grid-cols-12 gap-24 gap-y-32
                    xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                        <div className="col-span-12">
                            <FeaturedProject
                                title="Video Surveillance for Road Traffic Monitoring"
                                img={multi_tracking}
                                summary="Traffic monitoring solution to the third track of the AI-City Challenge.
                                The goal of this challenge is to track vehicles across multiple cameras placed in
                                multiple intersections spread out over a city. The project first focuses in solving
                                multi-tracking in a single camera, using faster r-cnn for object detection and the kalman filter
                                for tracking. Then the solutions is extended to multiple cameras using siamese networks and metric learning."
                                link="https://arxiv.org/abs/2105.04908"
                                github="https://github.com/IanRiera/MCV-M6-Video-Traffic-Monitoring"
                                type=""
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="Scene Understanding for Autonomous Driving"
                                img={scene_understanding}
                                summary="Study of the behaviour of different configurations of
                                RetinaNet, Faster R-CNN and Mask R-CNN, using the Detectron2
                                framework. The evaluation is done both qualitatively and quantitatively
                                on KITTI-MOTS, MOTSChallenge, Cityscapes and out of context datasets."
                                link="https://arxiv.org/abs/2105.04905"
                                github="https://github.com/IanRiera/MCV-M5-Object-Detection-and-Segmentation"
                                type=""
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="3D Reconstruction of Urban Scenes"
                                img={scene_reconstruction}
                                summary="Study of the behaviour of different configurations of RetinaNet, Faster R-CNN and Mask R-CNN,
                                using the Detectron2 framework. The evaluation is done both qualitatively and quantitatively on
                                KITTI-MOTS, MOTSChallenge, Cityscapes and out of context datasets."
                                link="/3D-reconstruction-urban-scenes.pdf"
                                github="https://github.com/IanRiera/MCV-M4-3D-Vision"
                                type=""
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="Image Classification with Classic and Deep Learning Techniques"
                                img={image_classification}
                                summary="Image classifier using both classic computer vision techniques, such as Bag
                                of Visual Words classifier using SVM and logistic regression, and deep learning
                                techniques, such as MLPs and InceptionV3. Finally we designed our own CNN: TinyNet."
                                link="https://arxiv.org/abs/2105.04895"
                                github="https://github.com/IanRiera/MCV-M3-Machine-Learning-for-Computer-Vision"
                                type=""
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="Museum Painting Retrieval"
                                img={painting_retrieval}
                                summary="Query by example CBIR system for finding paintings matches in a museum
                                database using color, texture, text and feature descriptors. The datasets used
                                present different distortions in the images: background, noise, overlapping
                                text boxes, color corruption and rotation."
                                link="https://arxiv.org/abs/2105.04891"
                                github="https://github.com/IanRiera/MCV-M1-Museum-Painting-Retrieval"
                                type=""
                            />
                        </div>
                    </div>

                </Layout>
            </main>

        </>
    )
}

export default projects
