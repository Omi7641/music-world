import Google from "./google";

const SignUp = () => {
    return ( 
        <div className="container">
            <div style={{textAlign: 'center', padding:"20px"}}>
                <h1>
                Create Account
                </h1>
            </div>
            <div >
                <div  style={{width: '500px'}}>
                    <form className="sign-up">
                <label>Name</label>
                <input type="text" placeholder="Enter your name" required/>
                <label>Email</label>
                <input type="email" placeholder="Enter your Email"  required/>
                <label>Number</label>
                <input type="number" placeholder="Enter your Number" required/>
                <label>Password</label>
                <input type="Password" placeholder="Enter your password" required />
                <label>Confirm Password</label>
                <input type="password" placeholder="Confirm password" required />
                <input type="button" value="Submit" />
                 </form>
                </div>
                  
                    <div style={{marginLeft:'330px',paddingLeft:'20px',marginTop:'30px',marginBottom:'10px'}}>
                            <Google></Google>
                    </div>
            
            </div>
          
            <div style={{marginLeft:'330px',marginTop:"20px",fontSize:"20px"}}>
                <p>By clicking the sign up button,you agree to our <br /> 
                <a href="" > Terms and Conditions </a> and <a href="">Policy privacy</a> </p>
            
                <p style={{marginLeft:'30px'}}>Already have an account ? <a href="/login">Login here</a></p>
            </div>
          
       
       
        </div>
     );
}
 
export default SignUp;