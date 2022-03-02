const express=require('express')
const { requireSignin } = require('../controller/authController')
const { messageValidation} = require('../validation')


const { postmessage, showMessages, deletemessage, messageDetails} = require('../controller/messageController')
const router=express.Router()



router.post('/postmessage',messageValidation, postmessage)
router.get('/messagelist', showMessages)
router.delete('/deletemessage/:id',requireSignin, deletemessage)
router.get('/findmessage/:id', requireSignin, messageDetails)


module.exports=router
