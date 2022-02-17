import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import logo from "../pages/img/logo.png";

const Navbar = () => {
    return ( 
       <nav>
            <Head>
            <link
                 href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
           </link>
            </Head>
         
          <div className="navu" id="navuu">
               <nav className="navbar navbar-expand-lg navbar-light bg-light">
               <div className="container-fluid">
                 <Image src= {logo}  height={50} width={50} alt="music" />   
               {/* <Link className="navbar-brand" >Music world</Link> */}
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                         <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                    </li>
                    <li className="nav-item">
                         <Link className="nav-link" href="/courses">Courses</Link>
                    </li>
                    <li className="nav-item">
                         <Link className="nav-link" href="/instrument">Instrument</Link>
                    </li>
                    <li className="nav-item">
                         <Link className="nav-link " href="/contact">Contact</Link>
                    </li>

                    <div className="entry"> 
                    <li className="nav-item ">
                         <Link className="nav-link " href="/login">Login</Link>
                    </li>
                     </div>
                    <li className="nav-item signup ">
                         <Link className="nav-link " href="/signup">Sign Up</Link>
                    </li>
                   
                    </ul>
               </div>
               </div>
               </nav>
               </div>     
       </nav>
     );
}
 
export default Navbar;