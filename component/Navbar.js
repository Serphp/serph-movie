import Link from "next/link";

const Navbar = () => {
    return (
        <>
        <nav>
            <ul>
            <li><strong>Serp - Movie</strong></li>
            </ul>
            <ul >
               <li><Link href="/"></Link> Github </li> 
               <li><Link class="links" href="/"> Home </Link></li>
               <li><Link href="/Movies"> Movies </Link></li>
            </ul>
        </nav>
    </>
    )
}

export default Navbar;