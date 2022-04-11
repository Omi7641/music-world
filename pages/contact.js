import Footer from "./footer";
import emailjs from '@emailjs/browser';
import { useState } from "react";

const Result =()=>{
    return (
        <p>Your message was successfully sent . I will contact you soon.</p>
    )     
}

const Contact = () => {
   const [result,setResult] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_e10e8yk', 'template_4kgz6qo', e.target, 'user_zLDhXudZzPVJWbBTYCrkE')
          .then((result) => {
              console.log(result,"done");
          }, (error) => {
              console.log(error.text);
          });
          alert("done")
          e.target.reset();
         setResult(true);
      };
      setTimeout(()=>{
          setResult(false);
      },5000);
    return ( 
        <div>
            <section className="container">
                  <h1 style={{marginLeft: '420px',padding:"10px"}}>Contact us</h1>
                <form action="" onSubmit={sendEmail}>
                  <div>
                  <label>Fullname</label>
                  <input type="text" name="fullName" placeholder="Fullname" required />
                  <label>Email</label>
                  <input type="text" name="email" placeholder="Email" required />
                  <label>Type your message ..</label>
                  <textarea name="message" placeholder="Type your message" required />
                  <input type="button" value="send" />
                   <div > { result? <Result /> : null}</div> 
                  </div>
               </form>
               
            </section>
            <Footer></Footer>
        </div>
     );
}
 
export default Contact;