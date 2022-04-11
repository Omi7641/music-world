import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../Component/Navbar'
import styles from '../styles/Home.module.css'
import img from '../pages/img/home.png'
import Courses from './courses'
import Link from 'next/link'
import myData from '../pages/mydata.json'
import { useState } from 'react'
import Footer from './footer'



export default function Home() {

    // const provider = new firebase.auth.GoggleAuthProvider();
     
    

  const datalist = myData.slice(0,3) ;
 const [instrument,setInstrument] = useState (datalist);
console.log("myData: ",myData);
  return (
    <div >
      <section className="container">
         <div className="first-contain">
              <h3>Be a Good musician and</h3>
              <h3>Reach your Dream</h3>
             <a className="btn" href="/courses" > Join Courses </a>         
         </div>
          <div className="second-contain">  
              <Image src={img} alt="img" />    
          </div>               
      </section>
     
       <section style= {{height: '150px'}} className="container">
         <div className="second-section">
             <div >
               <h4>50+</h4>
               <h4>Courses</h4>
             </div>
             <div className="numberOfParticipants">
               <h4>20+</h4>
               <h4>Teachers</h4>
             </div>
             <div className="numberOfParticipants">
               <h4>2000+</h4>
               <h4>Students</h4>
             </div>  
         </div> 
       </section>
       <section className="third-section">
            <div >
                <h3>Our Instrument</h3>
            </div>
            <div style={{marginLeft: '150px',padding:'2px',}}>        
              <div style={{display: 'flex', margin:'10px', padding:'2px',}}>
                    {
                      instrument.map((instrument) => 
                            { return <div key={instrument.id}> 
          
                            <div className="row row-cols-1 row-cols-md-3 g-4 " >
                              <div className="col">
                                <div className="card h-100" >
                                  <img src={instrument.img} className="card-img-top" alt={instrument.product_name}/>
                                  <div className="card-body">
                                    <h5 className="card-title">{instrument.product_name}</h5>
                                    <p className="card-text">{instrument.about}</p>
                                    <p> Quantity : {instrument.quantity}</p>
                                  </div>
                                  <div className="card-footer" style ={{backgroundColor:'pink',color:'red'}}>
                                    <btn style={{padding:'10px',}} className="text-muted">{instrument.price}</btn>
                                  </div>
                                </div>
                              </div>                
                            </div>   
                            </div> })} 
                </div>

              </div>
                     <a href="../instrument" style={{textAlign:'center'}}>See more </a>
       </section>
       <Footer></Footer>
    </div>
  )
}
