import { useNavigate } from "react-router-dom";
import { registerschema } from "../components/registerschema";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
function Register() {
    const navigate = useNavigate();
    const{register,handleSubmit,formState:{errors}}=useForm({
        resolver:zodResolver(registerschema)
    })
    function onSubmit1(data){
        console.log(data)
        alert("register success")
        navigate("/",{state:data})
    }
    return ( 
        <div className='min-h-screen flex items-center justify-center bg-gray-100'>
        <form onSubmit={handleSubmit(onSubmit1)} className="w-100 h-auto bg-white p-10  rounded-xl shadow-lg">
            <label className="block text-font-bold text-xl w-full text-center mb-7 ">Register</label>
            Name:<input type='text' required placeholder='Enter your name' name='username' {...register("name")} className="w-full border border-gray-300 p-3 rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            <p className="text-red-500 text-sm mb-2">{errors.name?.message}</p>
            E-mail:<input type='email' required placeholder='Enter your mail id' name='email' {...register("email")} className="w-full border border-gray-300 p-3 rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            <p className="text-red-500 text-sm mb-2">{errors.email?.message}</p>
            Password:<input type='password' required placeholder='Enter your password' name='password' {...register("password")} className="w-full border border-gray-300 p-3 rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            <p className="text-red-500 text-sm mb-2">{errors.password?.message}</p>
            Age:<input type='number' required placeholder='Enter your age' name='age' {...register("age")}className="w-full border border-gray-300 p-3 rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            <p className="text-red-500 text-sm mb-2">{errors.age?.message}</p>
            <button type="submit" className="w-40 mx-auto my-5 rounded-lg flex justify-center bg-green-400 hover:bg-green-500 p-3 w-50 cursor-pointer transition">submit</button>
        </form>
      </div>
     );
}

export default Register;