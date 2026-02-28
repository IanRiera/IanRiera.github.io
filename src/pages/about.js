import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import profilePic from "../../public/images/profile/ian_digital_artwork.png";
import Image from "next/image";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";


const About = () => {
    const title = "About | Ian Riera";
    const description = "Background, experience, and education of Ian Riera, a Computer Vision Engineer focused on practical AI solutions.";
    const url = "https://ianriera.github.io/about";
    const image = "https://ianriera.github.io/images/profile/ian_digital_artwork.png";

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
            <main className="pt-12 flex w-full flex-col items-center justify-center dark:text-light
            ">
                <Layout className="pt-16">
                    <AnimatedText text="Exploring the Potential of AI and Computer Vision! " className="mb-16
                    lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />
                    <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                        <div className="col-span-4 flex flex-col items-start justify-stretch
                        md:order-2 md:col-span-8 leading-loose">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75
                            dark:text-light/75">Biography</h2>
                            <p className="font-medium">
                                Hello world, I am Ian. I am a Telecommunications engineer with a strong specialization in Computer Vision and Machine Learning.
                            </p>
                            <p className="my-4 font-medium">
                                I am currently working at <a href="https://coatingai.com/" className="underline hover:text-blue-800">CoatingAI AG</a>, a startup that aims to leverage the power of artificial intelligence
                                to automate coating processes and boost efficiency.
                                My main role includes developing software tools for machine learning solutions,
                                both as standalone applications and packages of the company&apos;s full software pipeline.
                                My responsibilities span the full pipeline: GPU-accelerated dataset generation,
                                development and refinement of in-house deep learning models,
                                evaluation and visualization of training metrics,
                                and deployment of containerized services on GCloud.
                            </p>
                            <p className="font-medium">
                                Whether it is for work or for fun, I love to explore new technologies and learn new skills.
                                From data science to web development, I am always looking for new challenges to tackle. Currently, paying
                                attention to the latest trends in AI, exploring the potential of these tools and how to exploit them in practical applications.
                            </p>
                        </div>

                        <div className="col-span-4 relative h-max rounded-2xl border-2 border-solid border-dark
                    bg-light p-8 dark:bg-dark dark:border-light md:order-1 md:col-span-8">
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark
                            dark:bg-light"></div>
                            <Image src={profilePic} alt="IanRiera" className='w-full h-auto rounded-xl'
                                priority
                                sizes="(max-width: 768px) 100vw,
                                          (max-width: 1200px) 50vw,
                                          50vw" />
                        </div>
                    </div>
                    <Skills />
                    <Experience />
                    <Education />
                </Layout>
            </main>
        </>

    )
};

export default About;
