import { useState } from "react";
import { useLocation } from "react-router-dom";

function App() {
    const location = useLocation();
    const [userdata,setUserdata] = useState("")
    function displayData(){
        setUserdata(location.state)
        console.log(userdata)
    }
    return ( 
        <button onClick={displayData}>button</button>
     );
}

export default App