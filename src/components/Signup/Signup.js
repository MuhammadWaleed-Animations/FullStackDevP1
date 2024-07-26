import React,{useState ,useEffect} from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import './Signup.css'

const Signup =(prop)=>{
    const [u,setu] = useState("")
    const [p,setp] = useState("")
    const [error,setError] = useState(false)
    const [success,setSuccess] = useState(false)
    useEffect(
        ()=>{
            if(u !== "" || p !== "")
            {setError(false)
            setSuccess(false)}
        },[u,p]
    )
    useEffect(
        ()=>{
            if(success === true || error === true)
            {
                setu("")
                setp("")      
            }
        },[success,error]
    )
    console.log(prop.user[0])
    console.log("checking:" ,u,p)
    return (
        <div>
            <h1>SignUp Page</h1>
            <Form
                name="basic"
                labelCol={{
                span: 8,
                }}
                wrapperCol={{
                span: 16,
                }}
                style={{
                maxWidth: 600,
                }}
                initialValues={{
                remember: true,
                }}
                // onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                    required: true,
                    message: 'Please input your username!',
                    },
                ]}
                >
                <input type='text' placeholder='username' value={u} onChange={(e)=>setu(e.target.value)}></input>
                </Form.Item>
                

                <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                    required: true,
                    message: 'Please input your password!',
                    },
                ]}
                >
                <input type='text' placeholder='password' value={p} onChange={(e)=>setp(e.target.value)}></input>
                </Form.Item>

                <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
                >
                <Button type = 'primary' onClick={()=>{
                    if(u === "" || p === "")
                    {
                        console.log("kuch likh hi lo")
                    }
                    else if(prop.user[0].findIndex(name=> name.username === u) === -1)
                    {
                        console.log("Sab sai")
                        
                        prop.user[1]([...prop.user[0],{username:u, password:p}])
                        setSuccess(true)

                    }
                    else
                    {
                        setError(true)
                    }
                }}>signup</Button>
                </Form.Item>
            </Form>
            {error && <h3>Username Already Taken!!!!!!!</h3>}
            {success && <h3>Signin Successful go to Login</h3>}
        </div>
    )
}

export default Signup