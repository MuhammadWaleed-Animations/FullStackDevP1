import React,{useState, useEffect} from 'react'
import './Login.css'
import { Button, Checkbox, Form, Input } from 'antd';
import { json } from 'react-router-dom'

const Login =(prop)=>{
    const [u,setu] = useState("")
    const [p,setp] = useState("")
    const [error,setError] = useState(false)
    useEffect(
        ()=>{setError(false)},[u,p]
    )
    console.log(prop.user[0])
    return (
        <div>
            <h1>Login Page</h1>
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
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
                >
                <Checkbox>Remember me</Checkbox>
                </Form.Item>


                <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
                >
                <Button type ='primary' onClick={()=>{
                    if(u === "" || p === "")
                    {
                        console.log("kuch likh hi lo")
                    }
                    else if(prop.user[0].findIndex(name=> {return (name.username === u && name.password === p)} ) !== -1 )
                    {
                        console.log("Apna hi admi ha")
                        const credentials = u+"|"+p

                        fetch("api",{method:"POST",
                            headers:{
                                "Content-Type":"application/json"
                            }
                            ,body: JSON.stringify(credentials)
                        }).then(response=>{
                            if(response.ok)
                            {
                                return response.json()
                            }
                            else
                            {
                                return  response.json().then((data)=> {throw new Error(data.message)})
                            }

                        })
                        .catch(error=> console.log("Error occord: ",error))



                        localStorage.setItem("user",credentials)
                        prop.lo(false)
                        prop.la(true)
                    }
                    else
                    {
                        setError(true)
                    }
                }}>Login</Button>
                </Form.Item>
            </Form>
            {error && <h3>shi shi likho !!!!!</h3>}
        </div>
    )
}

export default Login