import { useState } from 'react'


function App() {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  function print(){
    console.log("printing inside the print function")
    console.log(email,pass)
  }
  const e = (event) => {
    event.preventDefault()
    console.log(email,pass)
  }
  return (
        <center>
        <div className='bg-gray border'>
        <form onSubmit={e}>
            <input type='email' required placeholder='enter your email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <br></br>
            <input type='password' required placeholder='enter your password' value={pass} onChange={(e)=>{setPass(e.target.value)}}/>
            <br></br>
            <button type='submit' className="text-green-500">Submit</button>
        </form>
      </div></center>
    )
}

export default App
