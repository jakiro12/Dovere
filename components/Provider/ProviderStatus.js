import React,{useState,useEffect} from "react";
import { supabase } from "../../supabeConn/supabase";
const AppCounter=React.createContext()

export const NewStates=({children})=>{
    useEffect(()=>{
        const actualPoints=async()=>{
            const{data,error}=await supabase.from('user_score').select('*')
            if(error){
                console.log(error)
            }else{
                setDataPoints(data)
            }
        }
        actualPoints()
    },[])
    const[redeem,setRedeem]=useState({
        redeemDefault:true,
    })
    const[nameUserLogged,setNameUserLogged]=useState('')
    const[activeBtn,setActiveBtn]=useState('home')
    const[openInfo,setOpenInfo]=useState('')
    const[dataPoints,setDataPoints]=useState([])
    return(
        <AppCounter.Provider value={{redeem,setRedeem,activeBtn,setActiveBtn,openInfo,setOpenInfo,dataPoints,setNameUserLogged,nameUserLogged}}>
            {children}
        </AppCounter.Provider>
    )
}

export default AppCounter