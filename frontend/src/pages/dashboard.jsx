import { useState } from "react";
import { useLocation } from "react-router-dom";

function App() {
    const location = useLocation();
    const [userdata,setUserdata] = useState("")
    function displayData(){
        setUserdata(location.state)
        console.log(userdata)
    }
    const checkendpoint =async () =>{
        const response = await API.get("/api/get")
        console.log(response.data)
    }
    const [count,setCount] = useState(0)
    useEffect(()=>{
    setLogindata(location.state)
    console.log(logindata)
    }, )
    return ( 
        <button onClick={()=>setCount(count+1)}>submit</button>
     );
}

export default App