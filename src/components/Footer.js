import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full border-t-2 border-solid border-dark
        font-medium text-lg">
        <div>Footer</div>
            <Layout className="py-8 flex items-center justify-between">
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <div className="flex items-center">
                    Based on the amazing tutorial by <Link href="https://devdreaming.com"
                className="underline undirle-offset-2">CodeBucks</Link>
                </div>
                <Link href="/" target={'_blank'}> Say Hello</Link>
            </Layout>
        </footer>
    )
}

export default Footer;