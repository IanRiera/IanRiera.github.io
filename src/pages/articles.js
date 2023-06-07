import React, { useRef } from "react";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import article1 from "../../public/images/articles/create loading screen in react js.jpg";
import { motion, useMotionValue } from "framer-motion";

const FramerImage = motion(Image);

const FeaturedArticle = ({ img, title, summary, time, link }) => {
    return (

        <li className="relative col-span-1 w-full p-4 bg-light border 
        border-solid border-dark rounded-2xl">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark
                rounded-br-3xl"/>
            <Link
                href={link}
                target={"_blank"}
                className="w-full inline-block cursor-pointer overflow-hidden rounded-lg
                "
            >
                <FramerImage src={img} alt={title} className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }} />

            </Link>
            <Link href={link} target={"_blank"}>
                <h2 className="capitalize my-2 mt-4 text-2xl font-bold over:underline">{title}</h2>
            </Link>
            <p className="text-sm mb-2">{summary}</p>
            <span className="text-primary font-semibold"
            >{time}</span>
        </li>

    )
}

const Article = ({ title, img, date, link }) => {
    return (
        <motion.li
        initial={{y:200}}
        whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}}
        viewport={{once:true}}
        className="relative col-span-1 w-full p-4 py-6 my-4 bg-light flex items-center 
        border border-solid border-dark rounded-xl justify-between first:mt-0
        border-r-4 border-b-4">
            <MovingImage title={title} img={img} link={link} />
            <span className="text-primary font-semibold pl-4">{date}</span>
        </motion.li>
    )
}

const MovingImage = ({ title, img, link }) => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imageRef = useRef(null);

    function handleMouse(event) {
        imageRef.current.style.display = "inline-block";
        x.set(event.pageX);
        y.set(-10)
    }
    function handleMouseLeave(event) {
        imageRef.current.style.display = "none";
        x.set(0);
        y.set(0)
    }

    return (
        <Link href={link} target={"_blank"}
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
            className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
        >
            <h2 className="capitalize text-xl font-bold over:underline">{title}</h2>
            <FramerImage 
            style={{x:x, y:y}}
            initial={{opacity:0}}
            whileInView={{opacity:1, transition:{duration:0.2}}}
            ref={imageRef} src={img} alt={title} className="z-10 w-96 h-auto hidden absolute rounded-lg" />
        </Link>
    )
}

const articles = () => {
    return (
        <>
            <Head>
                <title>About | Ian Riera</title>
                <meta name="description" content="Ian Riera's personal website" />
            </Head>
            <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
                <Layout className='pt-16'>
                    <AnimatedText text="Words Can Change The World!" className="mb-16" />
                    <ul className="grid grid-cols-2 gap-16">
                        <FeaturedArticle
                            title="Build A Custom Pagination Component In Reactjs From Scratch"
                            time="5 min read"
                            img={article1}
                            link="https://www.codingdeft.com/posts/reactjs-pagination-component/"
                            summary="Learn how to build a custom pagination component in ReactJS from scratch."

                        />
                        <FeaturedArticle
                            title="Build A Custom Pagination Component In Reactjs From Scratch"
                            time="5 min read"
                            img={article1}
                            link="https://www.codingdeft.com/posts/reactjs-pagination-component/"
                            summary="Learn how to build a custom pagination component in ReactJS from scratch."

                        />
                    </ul>
                    <h2 className="font-bold text-4xl text-center mt-32 my-16">All Articles</h2>
                    <ul>
                        <Article
                            title="Build A Custom Pagination Component In Reactjs From Scratch"
                            date="June 7, 2023"
                            link="https://www.codingdeft.com/posts/reactjs-pagination-component/"
                            img={article1}
                        />
                    </ul>
                </Layout>
            </main>
        </>
    );
}

export default articles;