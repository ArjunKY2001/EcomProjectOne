const express=require('express')
const admin_route=express()
const session=require('express-session')
const config=require('../config/config')
const multer=require('multer')
admin_route.use(session({
    name: 'adminSession',
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized: false,}))
const adminAuth=require("../middleware/adminAuth")

admin_route.set('view engine','ejs')
admin_route.set('views','./views/admin')


const bodyParser=require("body-parser")
admin_route.use(bodyParser.json())
admin_route.use(bodyParser.urlencoded({extended:true}))



const adminController=require("../controllers/adminController")
const categoryController=require("../controllers/admin/categoryController")
const loginController=require("../controllers/admin/loginController")
const orderController=require('../controllers/admin/orderController')
const productController=require('../controllers/admin/productController')
const userController=require("../controllers/admin/userController")

admin_route.get('/login',adminAuth.isLogout,loginController.loadLogin)
admin_route.post('/login',loginController.verifyLogin)
admin_route.get('/home',adminAuth.isLogin,loginController.loadDashBoard)
admin_route.get('/customersList',adminAuth.isLogin,userController.customers)
admin_route.put('/usertoggle',adminAuth.isLogin,userController.userActive)
admin_route.get('/category',adminAuth.isLogin,categoryController.loadCategory)
admin_route.post('/addCategory',adminAuth.isLogin,categoryController.addCategory)
admin_route.put('/cattoggle',categoryController.catActive)
admin_route.get('/catEdit',adminAuth.isLogin,categoryController.loadEditcat)
admin_route.post('/editcatName',adminAuth.isLogin,categoryController.catUpdate)
admin_route.get('/productlist',productController.loadProduct)
admin_route.get('/loadaddproduct',adminAuth.isLogin,productController.loadAddproduct)
admin_route.get("/loadOrderPage",orderController.loadOrder)
admin_route.put('/ordertoggle',orderController.orderStatus)
admin_route.patch('/orderstatusmng',adminAuth.isLogin,orderController.orderstatusManager)
admin_route.get("/ordrDetails",orderController.orderDetails)
const uploads = multer({ dest: 'uploads/' });
admin_route.post('/upload', uploads.array('images'),productController.uploadImage)
admin_route.post('/loadaddproduct',adminAuth.isLogin,productController.addProduct)
admin_route.get('/productedit',adminAuth.isLogin,productController.editProduct)
admin_route.post('/productedit/:id',adminAuth.isLogin,productController.updateProduct)
admin_route.put("/producttoggle",productController.productActive)
admin_route.get('/logout',adminAuth.isLogin,loginController.logOut)

// admin_route.get('/login',adminAuth.isLogout,adminController.loadLogin)
// admin_route.post('/login',adminController.verifyLogin)
// admin_route.get('/home',adminAuth.isLogin,adminController.loadDashBoard)
// admin_route.get('/customersList',adminAuth.isLogin,adminController.customers)
// admin_route.put('/usertoggle',adminAuth.isLogin,adminController.userActive)
// admin_route.get('/category',adminAuth.isLogin,adminController.loadcategory)
// admin_route.post('/addCategory',adminAuth.isLogin,adminController.addCategory)
// admin_route.put('/cattoggle',adminController.catActive)
// admin_route.get('/catEdit',adminAuth.isLogin,adminController.loadEditcat)
// admin_route.post('/editcatName',adminAuth.isLogin,adminController.catUpdate)
// admin_route.get('/productlist',adminController.loadProduct)
// admin_route.get('/loadaddproduct',adminAuth.isLogin,adminController.loadaddproduct)
// admin_route.get("/loadOrderPage",adminController.loadorder)
// admin_route.put('/ordertoggle',adminController.orderstatus)
// admin_route.patch('/orderstatusmng',adminAuth.isLogin,adminController.orderstatusManager)
// admin_route.get("/ordrDetails",adminController.orderDetails)
// const uploads = multer({ dest: 'uploads/' });
// admin_route.post('/upload', uploads.array('images'),adminController.uploadImage)
// admin_route.post('/loadaddproduct',adminAuth.isLogin,adminController.addproduct)
// admin_route.get('/productedit',adminAuth.isLogin,adminController.editproduct)
// admin_route.post('/productedit/:id',adminAuth.isLogin,adminController.updateproduct)
// admin_route.put("/producttoggle",adminController.productActive)
// admin_route.get('/logout',adminAuth.isLogin,adminController.logout) 

 module.exports=admin_route