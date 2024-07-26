import React from 'react';
import {Button,Flex} from 'antd'
import "./Delete.css"


const Delete=(prop)=>{
    return(
        <div style={{zIndex:50, position: "absolute", backgroundColor:"orange", width: 300 , height: 120}}>
            <h2>Do you really want to delete</h2>
            <Button type= "primary" danger style={{marginRight:5 , marginLeft:10}} onClick={()=>{
                prop.setter(false)
                prop.del(true)

            }}>Yes</Button>
            <Button type="default" danger style={{margin:5}} onClick={()=>prop.setter(false)}>No</Button>
        </div>
    )
}
export default Delete
