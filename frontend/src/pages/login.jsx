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
        <div className='flex bg-gray border items-center justify-center'>
        <form onSubmit={e} className='flex item-center justify-center h-screen'>
            <input type='email' required placeholder='enter your email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            
            <input type='password' required placeholder='enter your password' value={pass} onChange={(e)=>{setPass(e.target.value)}}/>
            
            <button type='submit' className="text-green-500">Submit</button>
        </form>
      </div>
    )
}

export default App
