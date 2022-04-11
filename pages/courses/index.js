import data from '../courseData.json'
import { useContext, useEffect, useState } from "react";
import { myContext } from '../_app';
import Footer from '../footer';
import Course from './course';
import CourseCart from './courseCart';

const Courses = () => {
    const styles ={
        marginTop:'20px',
        width: '40%',
        float: 'left',
        margin: '50px',
        height: '30%',
        padding: '10px',
        
 };

  const {courseState}=useContext(myContext);
  const [course,setCourse]=courseState;
  const [cart,setCart]=useState([]);
  useEffect(()=>{
      setCourse(data);
    //   console.log(data);
  },[])
  const handleAddCourse = (product) => {
     const newCart = [...cart,product];
     setCart(newCart);
  }

    return (
        <>
        <div className="shop-container">  
        <div className="product-container">
                {
                    course.map(course=> <div key={course.id}><Course course={course} handleAddCourse={handleAddCourse}></Course> </div>
                        )
                }   
        </div>
        <div className="cart-container">
               <CourseCart cart={cart}></CourseCart>
        </div>

        </div>
       <Footer></Footer>
       </> 
     );
}
 
export default Courses;