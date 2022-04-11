
// firebase.intialize(firebaseConfig);
// import * as firebase from 'firebase/app'
// import 'firebase/auth'
// import firebaseConfig from './firebase.config'
// import { GoogleAuthProvider } from "firebase/auth"
// import { getAuth, signInWithPopup } from "firebase/auth";
// import { useState } from 'react';
// import { FacebookAuthProvider } from "firebase/auth";

import Footer from "./footer";
import Google from "./google";



// firebase.initializeApp(firebaseConfig);

 const Login = () => {
  

//    const [user, setUser]= useState({
//        isSignedIn: false,
//        name:'',
//        email:'',
//        phone:''
//    })


//    const fbprovider = new FacebookAuthProvider();
//    const handleFbSignIn = () =>{       
       
// const auth = getAuth();
// signInWithPopup(auth, fbprovider)
//   .then((result) => {
      
    
//     // The signed-in user info.
//     const user = result.user;
//      console.log("connect hooo",user)
//     // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//     const credential = FacebookAuthProvider.credentialFromResult(result);
//     const accessToken = credential.accessToken;

//     // ...
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(errorMessage)
//     // The email of the user's account used.
//     const email = error.email;
//     // The AuthCredential type that was used.
//     const credential = FacebookAuthProvider.credentialFromError(error);

//     // ...
//   });
//    }


//    const fbProvider = new FacebookAuthProvider();
//    const handleFbSignIn = () => {
//     const auth = getAuth();
//     signInWithPopup(auth, fbProvider)
//       .then((result) => {
//         // The signed-in user info.
//         const user = result.user;
//         console.log("connect facebook",user);
    
//         // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//         const credential = FacebookAuthProvider.credentialFromResult(result);
//         const accessToken = credential.accessToken;
    
//         // ...
//       })
//       .catch((error) => {
//         // Handle Errors here.
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // The email of the user's account used.
//         const email = error.email;
//         // The AuthCredential type that was used.
//         const credential = FacebookAuthProvider.credentialFromError(error);
//         console.log(errorMessage);
    
//         // ...
//       });
    
//    }

    // const googleProvider = new GoogleAuthProvider();
    //  const handleGoogleLogIn=()=>{  
    //     const auth = getAuth();
    //     signInWithPopup(auth, googleProvider)     
    //        .then(res =>{
    //         const{displayName,photoURL,email}=res.user;
    //         const signInUser ={
    //             isSignedIn: true,
    //             name: displayName,
    //             email: email,
    //             photo:photoURL
    //         }
    //           setUser(signInUser);
    //         console.log(displayName,photoURL,email);
    //     })
    //     .catch(err =>{
    //         console.log(err);
    //         console.log(err.message);
    //     })
    // }

    const handleSubmit = () =>{

    }
   
    return ( 
        
        <div className="container" >
            <h1 style={{marginLeft:'450px',padding:'10px'}}>login</h1>
            <div >
                 
                <div >
               <form onSubmit={handleSubmit}  >
                <label>Email</label>
                <input type="email" placeholder="Email"/>
                <label>Password</label>
                <input type="password" placeholder="password"/>
                <input type="button" value="Submit"/>
            </form>
            </div>
         
            <div style={{marginLeft:'330px',paddingLeft:'20px',marginTop:'20px',marginBottom:'10px'}}>
               
                <Google ></Google>
            </div>
            </div>
           
            {/* 
            <div>
                <button onClick={handleGoogleLogIn}>connect with google</button>
                <button onClick={handleFbSignIn}>connect with facebook</button>
            </div> */}
            
            <p style={{marginLeft:'380px',marginTop:"50px",fontSize:"18px"}}>Not have an account? <a href="/signup">Sign Up Here</a> </p>
             <Footer></Footer>
        </div>
     );
}
 
export default Login;