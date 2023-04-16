import React,{useState} from "react";

const AppCounter=React.createContext()

export const NewStates=({children})=>{
    const[count,setCount]=useState('hola')
    return(
        <AppCounter.Provider value={{count,setCount}}>
            {children}
        </AppCounter.Provider>
    )
}

export default AppCounter