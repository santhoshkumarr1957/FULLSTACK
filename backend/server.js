const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())
app.get("/api/get",(req,res)=>{
    res.status(200).json({
        succuss: true,
        message: "ok succuss"
    })
})
app.listen(5001,()=>{
    console.log("server is running on port 5001")
    console .log("succuss")
})