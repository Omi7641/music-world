
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context";
import myData from '../mydata.json'
import InstrumentDetails from "./instrumentDetails";


// export const getStaticProps = async () => {
//      const res= await fetch ('https://jsonplaceholder.typicode.com/users');
//      const data = await res.json();
 
//      return {
//          props : {ninja : data}
//      }
//  }
// const data= myData;

// export const getStaticProps = async () => {
//      const res= await fetch (myData);
//      const data = await res.json();
 
//      return {
//          data
//      }
//  }
 

const Instrument = ( ) => {
//  const { instrument = [] } = data;
//  console.log( 'data',data);
 const styles ={
        marginTop:'20px',
     //    border: '1px solid blue',
        width: '40%',
     //    borderRadius: '30px',
        float: 'left',
        margin: '50px',
        height: '30%',
        padding: '10px',
        
 };
 
const [instrument,setInstrument]=useContext(UserContext);

// const data = myData ;
//  const [instrument,setInstrument] =useState (data);
// console.log("myData: ",myData);

    return ( 
         <>
      <h1 style={{textAlign: 'center',marginTop:'20px'}}>Buy Instrument</h1> 
   
      <div>
         
           {
             instrument.map((instrument) => 
                  { return <div key={instrument.id}> 
 
              <div >
                    <div className="col" >
                    <div className="card h-100"  style={styles}>
                         
                         <img src={instrument.img} width={500} height={200} className="card-img-top" alt={instrument.product_name} />
                         <div className="card-body">
                         <h5 className="card-title">{instrument.product_name}</h5>
                         <p className="card-text">{instrument.about}</p>
                         <p> Quantity : {instrument.quantity}</p>
                        
                         </div>
                         <div className="card-footer" style ={{backgroundColor:'pink',color:'red'}}>
                         <btn style={{padding:'160px',}} className="text-muted">{instrument.price}</btn>
                       
                         </div>
                    </div>
                    </div>
                    
            </div> 
    </div> })
} 
      </div>
           
               <div>
                    
               </div> 
        </> 
     ); 
    
}
 
export default Instrument;
