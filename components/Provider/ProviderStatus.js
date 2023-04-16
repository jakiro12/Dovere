import React,{useState} from "react";

const AppCounter=React.createContext()

export const NewStates=({children})=>{
    
    const[redeem,setRedeem]=useState({
        redeemDefault:true,
    })

    return(
        <AppCounter.Provider value={{redeem,setRedeem}}>
            {children}
        </AppCounter.Provider>
    )
}

export default AppCounter