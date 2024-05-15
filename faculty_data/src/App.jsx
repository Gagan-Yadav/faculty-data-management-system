import RoutesComp from "./AllRoutes/Routes"
import Slider from "./Components/Slider"
import Navbar from "./Navbar/Navbar"
import RingLoader from "react-spinners/HashLoader";
import { useState,useEffect, } from "react";




function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate loading delay with setTimeout
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the delay time as needed
  }, []);
  return (
    <>
       <div>
    <div>
    
      {loading ? <div style={{display:"flex",justifyContent:"center",alignItems:"center",background:"black",height:"100vh"}}>     <RingLoader
        color={"white"}
        loading={loading}
        size={60}
        aria-label="Loading Spinner"
        data-testid="loader"
        speedMultiplier="0.9"
      /></div> : <RoutesComp /> }
 
    
    </div>
   
       </div>
    </>
  )
}

export default App
