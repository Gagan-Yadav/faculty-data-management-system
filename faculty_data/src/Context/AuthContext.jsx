import { createContext, useState } from "react"

export const AuthContext=createContext()
function AuthContextProvider({children}){
       let [count,setCount]=useState(1);
    return <>
       <AuthContext.Provider value={{count,setCount}}>
            {children}
       </AuthContext.Provider>
    </>
}
export default AuthContextProvider