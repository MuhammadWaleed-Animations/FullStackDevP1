import React,{useState} from 'react'
import LandingPage from "./LandingPage/LandingPage"
import Login from "./Login/Login"
import Signup from "./Signup/Signup"
import { Button, Flex } from 'antd';
const App =()=>{
  const [landing,showlanding] = useState(false)
  const [login,showlogin] = useState(true)
  const [signup,showsignup] = useState(false)
  const [usersData,SetData] = useState([{username:"username",password:"password"}])
  console.log(login,signup,landing)
  return <div>

    <h1 style={{color:"dodgerblue"}}>Waleed Pet Store</h1>
    <Flex gap="small" wrap style={{padding:7}}>
    {!login && <Button type="primary" onClick={()=>{
      showlogin(true)
      showsignup(false)
      showlanding(false)
    }}>Login</Button>}
    {!signup && <Button type="primary" onClick={()=>{
      showlogin(false)
      showsignup(true)
      showlanding(false)
    }}>Signup</Button>}
    {/* {!landing && <Button type="primary" onClick={()=>{
      showlogin(false)
      showsignup(false)
      showlanding(true)
    }}>Home</Button>} */}
    </Flex>



    
    {landing && <LandingPage />}
    {login && <Login user ={[usersData,SetData]}  lo = {showlogin} la ={showlanding}/>}
    {signup && <Signup user ={[usersData,SetData]}/>}
    </div>
}

export default App