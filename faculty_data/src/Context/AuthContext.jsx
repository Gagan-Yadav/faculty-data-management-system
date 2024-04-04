import { createContext, useState } from "react"
import axios from "axios";
export const AuthContext=createContext()
function AuthContextProvider({children}){
       let [count,setCount]=useState(1);
// for manage college
let [incoming, setIncomingData] = useState([]);
let [len, setLen] = useState(0);
  async function manageCollege() {
    try {
      let ans = await axios.get('http://localhost:7000/api/college/college-list');
      setIncomingData(ans.data.data);
      setLen(ans.data.data.length);
    } catch (error) {
      console.log(error);
    }
  }
//end of manage college

//for manage faculty
let [incdata, setIncoming] = useState([]);
let [dataLength, setDataLength] = useState(0);

async function manageFaculty() {
    try {
        let incoming = await axios.get('http://localhost:7000/api/faculty/faculty-list');
        setIncoming(incoming.data.data); 
        setDataLength(incoming.data.data.length );
        console.log(dataLength)
        console.log(incdata);
    } catch (error) {
        console.log(error);
    }
}
//end of manage faculty

//for manage subadmin
 let [answer,setAnswer]=useState([])
    let [range,setRange]=useState(0)
    async function getFacultyList(){
        try {
            let resp=await axios.get('http://localhost:7000/api/sub-admin/sub-admin-list')
            console.log(resp);
            setAnswer(resp.data.data)
            
            setRange(resp.data.data.length)
          
        } catch (error) {
            console.log(error);
        }
    }
//end of manage subadmin
    return <>
       <AuthContext.Provider value={{count,setCount,incoming,manageCollege,incdata,dataLength,manageFaculty,range,setRange,answer,len,getFacultyList,setAnswer,setIncomingData}}>
            {children}
       </AuthContext.Provider>
    </>
}
export default AuthContextProvider