import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";



const PhonesCard = () => {
    const [phone,setPhone]=useState("")
    const {id} =useParams()
    const idInt = parseInt(id)
    console.log(idInt);
    const phones =useLoaderData()
    console.log(phones);
    useEffect(()=>{
      
        const findPhone=phones.find(phone=>phone.id == idInt)
        setPhone(findPhone)
    },[id,phones])
    console.log(phone);
    return (
        <div>
         hello
        </div>
    );
};

export default PhonesCard;