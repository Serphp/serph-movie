import Navbar from "./Navbar";
import Footer from "./Footer";
import { Props } from "next/script";



const Layout = ( {children}: Props ) => {
    return (
        <>
        <Navbar />
        { children }
        <Footer />
        </>
    )
}

export default Layout;