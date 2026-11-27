import { Link, Outlet } from "react-router-dom";
function Adminlayout() {
    return (   
        <div>
            <h1>this is admin page</h1>
            <nav>
                <Link to={"dashboard"}>Admindashboard</Link>
                <Link to={"settings"}>Adminsettings</Link>
                <Link to={"userdetails"}>Adminuserdetails</Link>
            </nav>
            <Outlet/>
        </div>
     );
}

export default Adminlayout;