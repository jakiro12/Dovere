import React,{useState,useEffect} from "react";
import { supabase } from "../../supabeConn/supabase";
const AppCounter=React.createContext()

export const NewStates=({children})=>{
    const[dataPoints,setDataPoints]=useState([])
    const[newChanges,setNewChanges]=useState(false)
    useEffect(()=>{
        const actualPoints=async()=>{
            const{data,error}=await supabase.from('user_score').select('*')
            if(error){
                console.log(error)
            }else{
                setDataPoints(data)
                setNewChanges(false)
            }
        }
        actualPoints()
    },[newChanges])
    const[redeem,setRedeem]=useState({
        redeemDefault:true,
    })
    const[nameUserLogged,setNameUserLogged]=useState('')
    const[activeBtn,setActiveBtn]=useState('home')
    const[openInfo,setOpenInfo]=useState('')
    return(
        <AppCounter.Provider value={{redeem,setRedeem,activeBtn,setActiveBtn,openInfo,setOpenInfo,dataPoints,setNameUserLogged,nameUserLogged,setNewChanges}}>
            {children}
        </AppCounter.Provider>
    )
}

export default AppCounter