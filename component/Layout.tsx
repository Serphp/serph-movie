import Navbar from "./Navbar";
import Footer from "./Footer";
//import Apim from './Apim'
import Head from 'next/head'
import Image from 'next/image'

import { Props } from "next/script";



const Layout = ( {children}: Props ) => {
    return (
        <main className="container">
        <Head>
        <title> Serph - Movie</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="stylesheet" href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css"></link>
        <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar />
        { children }
        <Footer />
        </main>
    )
}

export default Layout;