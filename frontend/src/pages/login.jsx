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
        <div className='min-h-screen flex items-center justify-center bg-gray-100' >
        <form onSubmit={e} className="w-100 h-auto bg-white p-10  rounded-xl shadow-lg">
            <h1 className="block text-font-bold text-2xl w-full text-center mb-7">LOGIN</h1>
            Name:<input type='text' required placeholder='Enter your name' name='username' onChange={HandleChange}  className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"/>

            E-mail:<input type='email' required placeholder='enter your email' name='email' onChange={HandleChange}  className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            
            Password:<input type='password' required placeholder='enter your password' name='password' onChange={HandleChange}  className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            
            <button type='submit' className="w-40 mx-auto my-5 rounded-lg flex justify-center bg-green-400 hover:bg-green-500 p-3 w-50 cursor-pointer transition">Submit</button>
        </form>
      </div>
    )
}

export default App
