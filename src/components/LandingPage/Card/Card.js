import React,{useState} from 'react'
import { Button,Card, Space } from 'antd';
import Delete from "./Delete/Delete"
import "./Card.css"
import Modify from './Modify/Modify';

const Cardd =(prop)=>
{
    const [showDel,setDel] = useState(false);
    const [confirmDel,setConDel] = useState(false);
    const [showModi,setModi] = useState(false);
    console.log("Show Del",showDel);
    console.log("confirm",confirmDel);
    if(confirmDel === true)
    {
        const arr = prop.array.filter((item)=>{
            if(item.name !== prop.name && item.type !== prop.type && item.breed !== prop.breed && item.price !== prop.price)
            {
                return true;
            }
        })
        prop.dataSetter([...arr])
        setConDel(false)
    }
    const t = "Name: " + prop.name
    return (
    <div>
         <Space direction="vertical" style={{paddingBottom:8}} size={16}>
        <Card
        title= {t}
        
        style={{
            width: 300,
            backgroundColor:"DodgerBlue",
        }}
        >
        {/* <h3>Name: {prop.name}</h3> */}
        <h3>Type: {prop.type}</h3>
        <h3>Breed: {prop.breed}</h3>
        <h3>Price: {prop.price}</h3>
        
        <Button type="dashed" style={{marginRight:5}} onClick={()=>{
            setDel(false);
            setModi(!showModi);
            }}>Modify</Button>


        <Button type="dashed" style={{marginRight:5}} onClick={()=>{
            setDel(!showDel);
            setModi(false);
            }}>Delete</Button>
        </Card>
        </Space>
        {showDel && <Delete setter = {setDel} del={setConDel}/>}
        {showModi && <Modify sProp={prop} setM ={setModi}/>}

        
    </div>)
}


export default Cardd