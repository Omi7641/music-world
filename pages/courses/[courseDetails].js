import { useRouter } from "next/router";
import Courses from "./";
import  courseData from "../courseData.json";
import Course from "./course";
import { useContext } from "react/cjs/react.production.min";
import { myContext } from "../_app";

const CourseDetails = () => {
    const route = useRouter();
    const {courseDetails }= route.query;
    console.log(courseDetails)

    // const {courseState}=useContext(myContext);
    // const [course,setCourse]=courseState;

    //   const courses = courseData.find(pd=> pd.id === courseDetails)
    //  console.log(courses)
    return ( 
        <div>
            <h2>details {courseDetails}</h2>
            <h5>
               {/* ddd{courses} */}
            </h5>
        </div>
     );
}
 
export default CourseDetails;