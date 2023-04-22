import React,{useState} from "react";

const AppCounter=React.createContext()

export const NewStates=({children})=>{
    
    const[redeem,setRedeem]=useState({
        redeemDefault:true,
    })
    const[activeBtn,setActiveBtn]=useState('home')

    return(
        <AppCounter.Provider value={{redeem,setRedeem,activeBtn,setActiveBtn}}>
            {children}
        </AppCounter.Provider>
    )
}

export default AppCounter