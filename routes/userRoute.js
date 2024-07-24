const express=require("express")
const user_route=express()
const session=require("express-session")
const config=require('../config/config')


user_route.use(session({
    name: 'userSession',
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized: false,}))
const auth=require('../middleware/auth')


user_route.set("view engine","ejs")
user_route.set('views','./views/users')

const bodyParser= require('body-parser')
user_route.use(bodyParser.json())
user_route.use(bodyParser.urlencoded({extended:true}))

//user_route.use(express.json());
//user_route.use(express.urlencoded({ extended: true }));


const userController=require("../controllers/userController")

// user_route.get('/',auth.isLogout,userController.loginLoad)
// user_route.get('/',userController.loadpage)
// user_route.get('/registration',auth.isLogout,userController.loadRegister)
// user_route.post('/registration',userController.OTP)
// user_route.post('/otpverify',userController.verifyOtp)
// user_route.get("/resendOtp",userController.resendOtp)
// user_route.get('/verifyresendOtp',userController.verifyresendOtp)
// user_route.get('/login',auth.isLogout,userController.loginLoad)
// user_route.post('/login',userController.verifyLogin)
// user_route.get('/home',auth.isLogin,userController.loadHome)
// user_route.post('/home',auth.isLogin,userController.searchTerm)
// user_route.get('/filtered',auth.isLogin,userController.searchCategory)
// user_route.get('/profile',auth.isLogin,userController.loadProfile)
// user_route.get("/loadeditProfile",auth.isLogin,userController.loadeditProfile)
// user_route.post('/loadeditProfile',auth.isLogin,userController.editProfile)
// user_route.get('/loadaddAddress',auth.isLogin,userController.loadaddAddress)
// user_route.post('/loadaddAddress',auth.isLogin,userController.addAddress)
// user_route.get('/loadeditAddress',auth.isLogin,userController.loadeditAddress)
// user_route.post('/loadeditAddress',auth.isLogin,userController.editAddress)
// user_route.get('/dltaddress',auth.isLogin,userController.deleteAddress)
// user_route.get('/loadcart',auth.isLogin,userController.loadcart)
// user_route.get("/quantityDecrease",auth.isLogin,userController.quantityDecrease)
// user_route.get("/quantityIncrease",auth.isLogin,userController.quantityIncrease)
// user_route.post('/productDetails',auth.isLogin,userController.addcart)
// user_route.get("/trash",userController.trash)
// user_route.get("/again",auth.isLogin,userController.again)
// user_route.get("/loadcheckout",auth.isLogin,userController.loadcheckout)
// user_route.patch('/checkoutPage',userController.checkoutPageAddress)
// user_route.get('/orderdetails',userController.loadorderdetails)
// user_route.get("/orderlist",auth.isLogin,userController.orderlist)
// user_route.get("/loadTracking",auth.isLogin,userController.orderTrack)
// user_route.get('/itemstatus',auth.isLogin,userController.itemStatusmanage)
// user_route.get("/loadinvoice",auth.isLogin,userController.loadinvoice)
// user_route.get('/productDetails',auth.isLogin,userController.loadProduct)
// user_route.get("/sortedItems",auth.isLogin,userController.sortItems)
// user_route.get('/transactions',auth.isLogin,userController.loadTransation)
// user_route.get('/logoutpage',auth.isLogin,userController.logout)
// user_route.get('/forget',auth.isLogin,userController.forgetload)
// user_route.get("/thanks",userController.thankupage)

const loginController=require("../controllers/user/userloginController")
const cartController=require("../controllers/user/cartController")
const checkoutContoller=require("../controllers/user/checkoutController")
const furtherController=require("../controllers/user/furthurController")
const orderController=require("../controllers/user/orderController")
const productController=require("../controllers/user/productController")
const profileController=require("../controllers/user/profileController")

//loginController
user_route.get('/',loginController.loadPage)
user_route.get('/registration',auth.isLogout,loginController.loadRegister)
user_route.post('/registration',loginController.OTP)
user_route.post('/otpverify',loginController.verifyOtp)
user_route.get("/resendOtp",loginController.resendOtp)
user_route.get('/verifyresendOtp',loginController.verifyresendOtp)
user_route.get('/login',auth.isLogout,loginController.loginLoad)
user_route.post('/login',loginController.verifyLogin)
user_route.get('/logoutpage',auth.isLogin,loginController.logOut)

//productController
user_route.get('/home',auth.isLogin,productController.loadHome)
user_route.post('/home',auth.isLogin,productController.searchTerm)
user_route.get('/filtered',auth.isLogin,productController.searchCategory)
user_route.get('/productDetails',auth.isLogin,productController.loadProduct)
user_route.get("/sortedItems",auth.isLogin,productController.sortItems)
user_route.get("/again",auth.isLogin,productController.again)

//profileController
user_route.get('/profile',auth.isLogin,profileController.loadProfile)
user_route.get("/loadeditProfile",auth.isLogin,profileController.loadeditProfile)
user_route.post('/loadeditProfile',auth.isLogin,profileController.editProfile)
user_route.get('/loadaddAddress',auth.isLogin,profileController.loadaddAddress)
user_route.post('/loadaddAddress',auth.isLogin,profileController.addAddress)
user_route.get('/loadeditAddress',auth.isLogin,profileController.loadeditAddress)
user_route.post('/loadeditAddress',auth.isLogin,profileController.editAddress)
user_route.get('/dltaddress',auth.isLogin,profileController.deleteAddress)
user_route.get("/orderlist",auth.isLogin,profileController.orderList)

//cartController
user_route.get('/loadcart',auth.isLogin,cartController.loadCart)
user_route.get("/quantityDecrease",auth.isLogin,cartController.quantityDecrease)
user_route.get("/quantityIncrease",auth.isLogin,cartController.quantityIncrease)
user_route.post('/productDetails',auth.isLogin,cartController.addCart)
user_route.get("/trash",cartController.trash)

//checkoutContoller
user_route.get("/loadcheckout",auth.isLogin,checkoutContoller.loadCheckout)
user_route.patch('/checkoutPage',checkoutContoller.checkoutPageAddress)
user_route.get("/thanks",checkoutContoller.thankuPage)
user_route.get("/loadinvoice",auth.isLogin,checkoutContoller.loadInvoice)
user_route.get('/checkoutaddAddress',auth.isLogin,checkoutContoller.loadaddAddress)
user_route.post('/checkoutaddAddress',auth.isLogin,checkoutContoller.addAddress)


//orderController
user_route.get('/orderdetails',orderController.loadOrderdetails)
user_route.get("/loadTracking",auth.isLogin,orderController.orderTrack)
user_route.get('/itemstatus',auth.isLogin,orderController.itemStatusmanage)

//furtherController
user_route.get('/transactions',auth.isLogin,furtherController.loadTransation)
user_route.get('/forget',auth.isLogin,furtherController.forgetLoad)


module.exports=user_route