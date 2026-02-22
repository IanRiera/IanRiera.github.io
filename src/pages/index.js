import Head from 'next/head'
import { Inter } from 'next/font/google'
import { ArrowLink } from "@/components/Icons"
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from "../../public/images/profile/ian_mult_hats.png"
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import TransitionEffect from '@/components/TransitionEffect'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Ian Riera Smolinska</title>
        <meta name="description" content="Ian Riera personal website" />

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
              <AnimatedText text="A Computer Vision Engineer With Multiple Hats."
                className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl
                md:!text-5xl sm:!text-3xl' />
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
              I am a versatile Computer Vision Engineer with a passion for exploring the endless possibilities of artificial intelligence.
              Equipped with a diverse range of knowledge and skills, I thrive on tackling complex challenges across various domains.
              From developing advanced algorithms to creating interactive visual applications, I embrace the multidimensional nature of computer vision.
              Join me on this exciting journey as we dive into the limitless potential of cutting-edge technologies and their real-world applications.
              </p>
              <div className='flex items-center self-start mt-2 gap-4 lg:self-center lg:flex-col lg:items-center lg:gap-3'>
                <Link href="/cv_ian_riera.pdf" target={"_blank"}
                  className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark
                dark:text-dark dark:bg-light hover:dark:bg-dark
                hover:dark:border-light hover:dark:text-light
                md:p-2 md:px-4 md:text-base'
                  download={true}
                >Resume <ArrowLink className='ml-2' />
                </Link>
                <Link href="mailto:ian.riera.smolinska@gmail.com" target={"_blank"}
                className='text-lg font-medium capitalize text-dark underline
                dark:text-light md:text-base'
                >Contact</Link>
                <Link href="https://IanRiera.github.io/salty-crackers/v1/" target={"_blank"}
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
