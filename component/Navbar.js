import Link from "next/link";

const Navbar = () => {
    return (
        <>
        <nav id="nav">
            <ul >
               <li><Link href="/"></Link> Github </li> 
               <li><Link class="links" href="/"> Home </Link></li>
               <li><Link href="/blog"> blog </Link></li>
            </ul>
        </nav>
    </>
    )
}

export default Navbar;