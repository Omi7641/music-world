import * as firebase from 'firebase/app'
import 'firebase/auth'
import firebaseConfig from './firebase.config'
import { GoogleAuthProvider } from "firebase/auth"
import { getAuth, signInWithPopup } from "firebase/auth";
import { useState } from 'react';
import { FacebookAuthProvider } from "firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaGoogle,FaFacebookF } from "react-icons/fa";


firebase.initializeApp(firebaseConfig);


const Google  = () => {
  

   const [user, setUser]= useState({
       isSignedIn: false,
       name:'',
       email:'',
       phone:''
   })


   const fbprovider = new FacebookAuthProvider();
   const handleFbSignIn = () =>{       
       
const auth = getAuth();
signInWithPopup(auth, fbprovider)
  .then((result) => {
      
    
    // The signed-in user info.
    const user = result.user;
     console.log("connect hooo",user)
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;

    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);

    // ...
  });
   }

   const googleProvider = new GoogleAuthProvider();
   const handleGoogleLogIn=()=>{  
      const auth = getAuth();
      signInWithPopup(auth, googleProvider)     
         .then(res =>{
          const{displayName,photoURL,email}=res.user;
          const signInUser ={
              isSignedIn: true,
              name: displayName,
              email: email,
              photo:photoURL
          }
            setUser(signInUser);
          console.log(displayName,photoURL,email);
      })
      .catch(err =>{
          console.log(err);
          console.log(err.message);
      })
  }


    return ( 
        <div >
         <a style={{paddingBottom:'30px',width:'350px',height:'35px'}} className="btn" onClick={handleGoogleLogIn}> <FaGoogle style={{marginRight:'10px',marginBottom:'5px',width:'20px'}} /> Connect With Google</a>
         <br />
         <br />
         <a className="btn" style={{paddingBottom:'30px',width:'350px',height:'35px'}} onClick={handleFbSignIn}> <FaFacebookF style={{marginRight:'10px',marginBottom:'5px',width:'20px'}} />Connect With Facebook</a>
        
            {/* <button onClick={handleGoogleLogIn}>connect with google</button><br /> */}
            {/* <button onClick={handleFbSignIn}>connect with facebook</button> */}
        </div>
     );
}
 
export default Google;