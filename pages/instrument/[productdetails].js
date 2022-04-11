import { useRouter } from "next/router";

const ProductDetails = () => {
    const route = useRouter();
    const Product = route.query.productDetails;
    console.log(Product)
    return ( 
        <div>
             <h5>product details{Product}</h5>  
        </div>
     );
}
 
export default ProductDetails;