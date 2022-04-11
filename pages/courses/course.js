import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

const Course = (props) => {
    const {img,course_name,Durations,price,id}= props.course;
    return ( 
        <div className="product">
            <div>
            <img src={img} style={{width: '450px',height: '250px'}} className="card-img-top" alt={course_name} />

            </div>
            <div className="details-part">
                         <h5><Link href={'/courses/'+id}>{course_name}</Link></h5>
                         <p >Durations : {Durations}</p> 
                         <h6>BDT {price}</h6>
                         <button className="button" onClick={()=>props.handleAddCourse(props.course)} > <FaShoppingCart style={{marginRight:'5px',marginBottom:'5px',width:'20px'}}/>Add to cart</button>  
            </div>
        </div>
     );
}
 
export default Course;