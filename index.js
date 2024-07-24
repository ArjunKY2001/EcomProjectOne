const mongoose=require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/user_manager")
const nocache=require('nocache')

const express=require("express")
const app=express()
//const path=require('path')

// const auth = require('./middleware/auth')
// app.get("/",auth)
app.use(nocache())
const userRoute=require('./routes/userRoute')
app.use('/user',userRoute)

const adminRoute=require('./routes/adminRoute')
app.use('/admin',adminRoute)

// const auth=require("./middleware/auth")
// app.use("/",auth)

// const adminAuth=require('./middleware/adminAuth')
// app.use("/i",adminAuth)

//app.use(express.static('../public'))
// app.use(express.static(path.join(__dirname,'public')), (err) => {
//     if (err) {
//         console.error('Error serving static files:', err);
//     }
// })

app.use('/static',express.static('public'))
app.use('/userAssets',express.static('public/userAssets'))
// 
app.use(express.static('uploads'))

app.listen(3000,function(){
    console.log("server is running...");
})