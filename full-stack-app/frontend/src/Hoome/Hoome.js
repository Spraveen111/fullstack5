import React from "react";
import axios from 'axios';
import { useEffect,useState } from "react";

export default function Home() {
const [vegitables,setVegitables]=useState([]);


useEffect(()=>{
  const fetchVegitableDetails=async()=>{
    try{
      const response=await axios.fetch("http://localhost:3820/")
      setVegitables(response.data)
    }catch(error){
      console.log("error",error)
    }
  };
  fetchVegitableDetails();
},[])

  return <div style={{ color: "white" }}>
  
  <ul>
    {vegitables.map((vegitable)=>(
      <li key={vegitable._id}>{vegitable.VegitableName}</li>
    ))}
  </ul>
  </div>;
}
