import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
<nav>
    <div className="logo">
        <Image src='/Montreal.jpg' width={128} height={77}/>
        <h1>List</h1>
    </div>
    <Link href="/" >Home</Link>
    <Link href="/about" > About</Link>
    <Link href="/ninjas">List</Link>
</nav>


      );
}
 
export default Navbar;

