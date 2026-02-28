import { useRef } from "react";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import article1 from "../../public/images/projects/museum_painting_retrieval.png";
import { motion, useMotionValue } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedArticle = ({ img, title, summary, time, link }) => {
    return (

        <li className="relative col-span-1 w-full p-4 bg-light border 
        border-solid border-dark rounded-2xl dark:bg-dark dark:border-light">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark
                rounded-br-3xl dark:bg-light"/>
            <Link
                href={link}
                target={"_blank"}
                rel="noopener noreferrer"
                className="w-full inline-block cursor-pointer overflow-hidden rounded-lg
                "
            >
                <FramerImage src={img} alt={title} className="w-full h-auto "
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }} 
                    priority
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    50vw"/>

            </Link>
            <Link href={link} target={"_blank"} rel="noopener noreferrer">
                <h2 className="capitalize my-2 mt-4 text-2xl font-bold hover:underline underline-offset-2
                xs:text-lg">{title}</h2>
            </Link>
            <p className="text-sm mb-2">{summary}</p>
            <span className="text-primary font-semibold dark:text-primaryDark"
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
        border-r-4 border-b-4 dark:border-light dark:bg-dark
        sm:flex-col">
            <MovingImage title={title} img={img} link={link} />
            <span className="text-primary font-semibold pl-4 dark:text-primaryDark
            sm:self-start sm:pl-0 xs:text-sm">{date}</span>
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
        <Link href={link} target={"_blank"} rel="noopener noreferrer"
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
            className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
        >
            <h2 className="capitalize text-xl font-bold hover:underline underline-offset-2">{title}</h2>
            <FramerImage 
            style={{x:x, y:y}}
            initial={{opacity:0}}
            whileInView={{opacity:1, transition:{duration:0.2}}}
            ref={imageRef} src={img} alt={title} className="z-10 w-96 h-auto hidden absolute rounded-lg
            md:!hidden" />
        </Link>
    )
}

const Articles = () => {
    const title = "Articles | Ian Riera";
    const description = "Articles and notes on frontend engineering and practical software topics.";
    const url = "https://ianriera.github.io/articles";
    const image = "https://ianriera.github.io/images/projects/museum_painting_retrieval.png";

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="canonical" href={url} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={url} />
                <meta property="og:image" content={image} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={image} />
            </Head>
            <TransitionEffect />
            <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden
            dark:text-light">
                <Layout className='pt-16'>
                    <AnimatedText text="Words Can Change The World!" className="mb-16
                    lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />
                    <ul className="grid grid-cols-2 gap-16
                    lg:gap-8 md:grid-cols-1 md:gap-y-16">
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
};

export default Articles;
