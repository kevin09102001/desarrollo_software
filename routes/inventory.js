var raotes =require('express').Router()

const { route } = require('.')
const { router } = require('../app')
const inventory =require('../controllers/inventory.js')

router.post('/newitem', inventoryCtrl.create) 

module.exports=router
