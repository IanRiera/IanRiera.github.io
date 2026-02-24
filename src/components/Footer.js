import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full border-t-2 border-solid border-dark
        font-medium text-sm dark:text-light dark:border-light
        sm:text-xs sm:leading-4">
            <Layout className="py-8 flex items-center justify-between
            lg:flex-col lg:py-6">
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <div className="flex items-center lg:py-2">
                Built with&nbsp;<Link href="https://nextjs.org/"
                className="underline underline-offset-2"
                target="_blank"
                rel="noopener noreferrer"
                >Next.js</Link>&nbsp;and Tailwind CSS.
                </div>
            </Layout>
        </footer>
    )
}

export default Footer;
