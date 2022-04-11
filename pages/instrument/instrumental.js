import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

const Instrumental = (props) => {
        // console.log(props.instrument);
       const {about,product_name,img,quantity,price,id} = props.instrument;   
    return ( 
        
        <div className="product">
              
                  <div>
                    <img src={img} style={{width: '400px',height: '250px'}} className="card-img-top" alt={product_name} />
                 </div>

                 <div className="details-part">
                         <h5 ><Link href={'/instrument/'+id}>{product_name}</Link></h5>
                         <p >{about}</p>
                         <p> {quantity} available in stock . So, Hurry Up .</p>
                         <h6>BDT {price}</h6>
                         <button className="button"  onClick={()=>props.handleAddInstrument(props.instrument)} > <FaShoppingCart style={{marginRight:'5px',marginBottom:'5px',width:'20px'}}/>Add to cart</button>  
                    </div>
     
                  
            </div>   
 
     );
}
 
export default Instrumental;