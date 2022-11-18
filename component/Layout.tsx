import Navbar from "./Navbar";
import Footer from "./Footer";
import Movie from "./Movie";
import Apim from './Apim'

import { Props } from "next/script";



const Layout = ( {children}: Props ) => {
    return (
        <>
        <Navbar />
        <Movie />
        { children }
        <Apim />
        <Footer />
        </>
    )
}

export default Layout;