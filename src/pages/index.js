import Head from 'next/head'
import { ArrowLink } from "@/components/Icons"
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from "../../public/images/profile/ian_mult_hats.png"
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import TransitionEffect from '@/components/TransitionEffect'

export default function Home() {
  const title = "Ian Riera Smolinska | Computer Vision Engineer";
  const description = "Computer Vision Engineer building AI products across 3D reconstruction, tracking, and applied machine learning.";
  const url = "https://ianriera.github.io/";
  const image = "https://ianriera.github.io/images/profile/ian_mult_hats.png";

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
      <main className='flex items-center text-dark w-full min-h-screen
      dark:text-light'>
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image src={profilePic} alt="IanRiera" className='w-full
              h-auto max-w-lg rounded-lg shadow-none transition-shadow duration-300
              ease-in-out hover:shadow-lg hover:shadow-black/30
              md:w-full'
              priority
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw" />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center
            lg:w-full lg:text-center">
              <AnimatedText text="Machine Learning & 3D Computer Vision Engineer."
                className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl
                md:!text-5xl sm:!text-3xl' />
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
              I am a Machine Learning Engineer specialized in 3D Computer Vision, MLOps, and production-grade AI systems. 
              My work spans the full lifecycle of intelligent systems: from dataset generation and perception algorithm design to model deployment and continuous learning in cloud environments.
              I have built and optimized real-time 3D tracking pipelines, implemented object detection and pose estimation systems, and developed GPU-accelerated geometry processing methods—achieving significant runtime improvements in large-scale data pipelines.
              My experience includes point cloud reconstruction, sensor fusion, and multi-modal deep learning, combined with strong expertise in PyTorch-based development.
              Beyond modeling, I focus on operational excellence: containerization, GCloud deployment, experiment tracking (MLflow), data versioning (DVC), and incremental learning strategies for production systems.
              I also contribute across the stack when needed, including ROS-based perception systems and web applications (Vue.js, Django).
              My approach is pragmatic and systems-oriented: design robust pipelines, optimize computational performance, deploy reliably, and iterate continuously.
              </p>
              <div className='flex items-center self-start mt-2 gap-4 lg:self-center lg:flex-col lg:items-center lg:gap-3'>
                <Link href="/cv_ian_riera.pdf" target={"_blank"} rel="noopener noreferrer"
                  className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark
                dark:text-dark dark:bg-light hover:dark:bg-dark
                hover:dark:border-light hover:dark:text-light
                md:p-2 md:px-4 md:text-base'
                  download={true}
                >Resume <ArrowLink className='ml-2' />
                </Link>
                <Link href="mailto:ian.riera.smolinska@gmail.com" target={"_blank"} rel="noopener noreferrer"
                className='text-lg font-medium capitalize text-dark underline
                dark:text-light md:text-base'
                >Contact</Link>
                <Link href="https://IanRiera.github.io/salty-crackers/v1/" target={"_blank"} rel="noopener noreferrer"
                className='text-lg font-medium text-dark underline
                dark:text-light md:text-base'
                >Salty Crackers</Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
