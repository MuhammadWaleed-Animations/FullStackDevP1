import React, { useState } from 'react'
import { Button,Flex, Input } from 'antd'
import "./Modify.css"
const Modify = (prop) => {

    const [name, setName] = useState(prop.sProp.name)
    const [type, setType] = useState(prop.sProp.type)
    const [breed, setBreed] = useState(prop.sProp.breed)
    const [price, setPrice] = useState(prop.sProp.price)


    return (
        <div  style={{ zIndex: 50, position: "absolute", backgroundColor: "yellow", padding:10}}>
             <Flex vertical gap={12}>
            <Input  type="text" placeholder='Name'  value={name} onChange={((e) => setName(e.target.value))} />
            <Input type="text" placeholder='Type'  value={type} onChange={((e) => setType(e.target.value))} />
            <Input type="text" placeholder='Breed'  value={breed} onChange={((e) => setBreed(e.target.value))} />
            <Input type="text" placeholder='Price'  value={price} onChange={((e) => setPrice(e.target.value))} />
            <Button type="dashed" onClick={() => {
               const array = prop.sProp.array.map((pet)=>{
                console.log(pet)
                if(prop.sProp.name == pet.name && prop.sProp.type == pet.type && prop.sProp.breed == pet.breed && prop.sProp.price == pet.price)
                {
                    let hehe={name:"",type:"",breed:"",price:""}
                    hehe.name = name
                    hehe.type = type
                    hehe.breed = breed
                    hehe.price = price
                    return hehe
                }
                else
                {
                    return pet
                }
               })
               console.log(array);
               prop.sProp.dataSetter(array)
               prop.setM(false)
            }
            }>Modify</Button>
            </Flex>
        </div>
    )
}

export default Modify