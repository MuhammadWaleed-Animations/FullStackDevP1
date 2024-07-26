import React, {useState} from 'react'
import Cardd from "./Card/Card.js"
import { Button,Flex, Input } from 'antd';
import "./LandingPage.css"



const LandingPage = ()=>{
    const [pets,setPets] = useState([])
    const [name,setName] = useState("")
    const [type,setType] = useState("")
    const [breed,setBreed] = useState("")
    const [price,setPrice] = useState("")

    console.log(pets);
    const arr = pets.map((item)=>{
        return <Cardd name={item.name} type={item.type} breed={item.breed} price={item.price} dataSetter={setPets} array={pets} />
    })
    return (
        <div >
            {/* <Card name="catto" type="evil" breed="soft" price="unknown" dataSetter={setPets} /> */}
            <div style={{display:"block" , paddingBottom:7}}>
            <Flex vertical gap={12}>
            <Input type="text"placeholder='Name' variant="filled" value={name} onChange={((e)=> setName(e.target.value))} />
            <Input type="text" placeholder='Type' variant="filled" value={type} onChange={((e)=> setType(e.target.value))} />
            <Input type="text" placeholder='Breed' variant="filled" value ={breed} onChange={((e)=> setBreed(e.target.value))} />
            <Input type="text" placeholder='Price' variant="filled" value={price} onChange={((e)=> setPrice(e.target.value))} />

            <Button type="primary"  onClick={()=>{
                if(name != "" && type!="" && breed!="" && price != "")
                {
                    setPets([...pets,{name,type,breed,price}])
                }
                setName("")
                setType("")
                setBreed("")
                setPrice("")
            }
            }>Add pet</Button>
            </Flex>
            </div>
            {arr}
        </div>
    )
    
}

export default LandingPage