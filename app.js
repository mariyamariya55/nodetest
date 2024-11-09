const express=require('express')

const router=express()

router.use('/',require('./Router/Userroute'))
router.use('/',require('./Router/Studrou'))


module.exports=router;

