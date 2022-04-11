const CourseCart = (props) => {
    const cart = props.cart;
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
            <h5>order summary</h5>
            <p>Items Ordered : {cart.length}</p>
            <p> <small>Shipping Cost : {shipping}</small> </p>
             <p>total price : {totalPrice + shipping}</p>
        </div>
     );
}
 
export default CourseCart;