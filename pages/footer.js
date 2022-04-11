
import { FaGoogle,FaFacebookF,FaTwitterF, FaTwitter, FaEnvelope } from "react-icons/fa";


const Footer = () => {
    return ( 
        <div className="container footer">
            <div className="row1">
                <div className="footer-col">
                    <h4>Explore</h4>
                    <ul>
                        <li><a href="../courses/">Courses</a></li>
                        <li><a href="../instrument">Instuments</a></li>
                        <li><a href="#">Events</a></li>
                        
                    </ul>
                </div>
                <div className="footer-col foot-middle">
                    <h4>About</h4>
                    <ul>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Terms</a></li>
                        <li><a href="../contact.js">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-col foot-middle" >
                    <h4>Follow Us</h4>
                    <ul style={{display:'flex'}}>
                        <li style={{padding:'5px'}}><a href="https://www.facebook.com/omihasansakin"><FaFacebookF /></a></li>
                        <li style={{padding:'5px'}}><a href="https://twitter.com/omi7641"><FaTwitter/></a></li>
                        <li style={{padding:'7px'}}><a href="https://mail.google.com/mail/u/0/?tab=rm#inbox"><FaEnvelope /></a></li>
                    </ul>
                </div>
            </div>
        </div>
     );
}

 
export default Footer;