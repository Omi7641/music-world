import Link from "next/link";

const InstrumentCart = (props) => {
    const cart = props.cart
     const totalPrice = cart.reduce((total, prd)=>(total + parseFloat(prd.price)),0)
      let shipping = 0;
       if(totalPrice >50000)
       {
            shipping =200; 
       } 
       else if(totalPrice >25000)
       {
            shipping =500
       }
       else if(totalPrice >0){
            shipping = 700
       }

     return ( 
        <div>      
             <h5 style={{color: 'rgb(102, 18, 18)'}}>Order summary </h5>
             <p>Items Ordered : {props.cart.length}</p>
             <p> <small>Shipping Cost : {shipping}</small> </p>
             <p>total price : {totalPrice + shipping}</p>
             <button className="button">Order review</button>
             
        </div>
     );
}
 
export default InstrumentCart;