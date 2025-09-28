import React,{useCallback, useEffect,useState} from "react";
import ReactDOM, { createRoot } from "react-dom/client";

function PasswordGenerator(){
    const [password,setpassword]=useState("");
    const [length,setlength]=useState(10);
    const[numberinclude,setnumberinclude]=useState(false);
    const[symbolinclude,setsymbolinclude]=useState(false);
    
    const generatepassword=useCallback(()=>{
         let charlist="abcdefghijklmnopqrstuvwxyz";
        if(symbolinclude){
            charlist=charlist+"!@#$%^&*()";
        }
        if(numberinclude){
            charlist=charlist+"1234567890";
        }
        let pass="";
        for(let i=0;i<length;i++)
        {
            pass+=charlist[Math.floor(Math.random()*charlist.length)]
        }
        setpassword(pass);
    },[length,numberinclude,symbolinclude])
   
    useEffect(()=>{
        generatepassword();
    },[length,numberinclude,symbolinclude])


    return(
        <>
        <h1>Password is: {password}</h1>

        <div className="second">
            <input type="range" min={5} max={50} value={length} onChange={(e)=>setlength(e.target.value)}></input>
            <label>Length is : {length}</label>
 
            <input type="checkbox" defaultChecked={numberinclude} onChange={()=>setnumberinclude(!numberinclude)}></input>  
            <label>Number</label>
            <input type="checkbox" defaultChecked={symbolinclude} onChange={()=>setsymbolinclude(!symbolinclude)}></input>  
            <label>Symbol</label>
                
        </div>
        </>
    )
}


createRoot(document.getElementById("root")).render(<PasswordGenerator></PasswordGenerator>);