import { useState } from 'react'
import './login.css'
import { useLocation, useNavigate } from 'react-router-dom'

function App() {
  {/*const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")*/}
  const navigate = useNavigate()
  const location = useLocation()
  const[formdata,setFormdata]=useState({
    username:"",
    email:"",
    password:""
  })
  const registerdata = location.state
  function HandleChange(e){
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    })
  }
  const e = (event) => {
    event.preventDefault()
    if(registerdata.email === formdata.email && registerdata.password === formdata.password){
      console.log("login page")
      console.log(formdata)
      console.log(registerdata)
      alert("login successfull")
      navigate('/dashboard',{state:formdata})
  }
    else{
      console.log("Not a valid credential")
  }
  }
  return (
        <div className='flex bg-gray border'>
        <form onSubmit={e}>
            <input type='text' required placeholder='Enter your name' name='username' onChange={HandleChange}/>

            <input type='email' required placeholder='enter your email' name='email' onChange={HandleChange}/>
            
            <input type='password' required placeholder='enter your password' name='password' onChange={HandleChange}/>
            
            <button type='submit' className="text-green-500">Submit</button>
        </form>
      </div>
    )
}

export default App
