
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context";
import Footer from "../footer";
import myData from '../mydata.json'
import { myContext } from "../_app";
import Instrumental from "./instrumental";
import InstrumentDetails from "./instrumental";
import InstrumentCart from "./instrumentCart";

const Instrument = ( ) => {

 const data = myData ;

 const {instrumentState}=useContext(myContext);
 const [instrument,setInstrument]=instrumentState;
 const [cart,setCart]=useState([]);

 useEffect(()=>{
     setInstrument(data);
 },[])

 
 const handleAddInstrument = (product) => {
   const newCart = [...cart,product];
   setCart(newCart);
 }
    return ( 
      <>
         <div className="shop-container">  
           <div className="product-container">
         
           {
             instrument.map(instrument => 
                     <div key={instrument.id}><Instrumental handleAddInstrument={handleAddInstrument}  instrument={instrument}></Instrumental>  
            </div> )          
}
            </div>   
 
                   <div className='cart-container'>
                       <InstrumentCart cart={cart}></InstrumentCart>
                  </div>  
         
        </div> 
        <Footer></Footer>
        </>
     ); 
    
}
 
export default Instrument;
