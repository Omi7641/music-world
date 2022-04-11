import  courseData from "./courseData.json"

const Inventory = () => {

    const handleProducts = () => {
        alert('clicked')
        fetch('http://localhost:4000/addProduct',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(courseData[3])
        })
    }
    return ( 
        <div>
            <button onClick={handleProducts}>add</button>
        </div>
     );
}
 
export default Inventory;