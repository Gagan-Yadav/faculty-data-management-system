import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"
import Slide1 from "../Slide/Slide1"
import Slide2 from "../Slide/Slide2"
import Slide3 from "../Slide/Slide3"

import "../Styling/Slider.css"


function Slider(){
    let {count,setCount}=useContext(AuthContext);
    function handleIncrease(){
        setCount(count + 1)
        console.log(count);
      }
      function handleDecrease(){
        setCount(count - 1)
        console.log(count);
      }
    return <>
     <div>
     <button className="prev" onClick={handleDecrease} disabled={count==1}>&#10094;</button>
      <button className="next" onClick={handleIncrease} disabled={count==3}>&#10095;</button>
     </div>

     <div>
              {count==1?(<Slide1/>):count==2?(<Slide2/>):(<Slide3/>)}
     </div>
    </>
}
export default Slider