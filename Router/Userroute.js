const Router=require("express");
const router=Router()

const {create,getall,getbyid,update,remove, topstudent} =require('../Controller/Studcon')


router.post('/create',create);
router.get('/getall',getall);
router.get('/getbyid/:id',getbyid);
router.post('/update/:id',update);
router.delete('/remove/:id',remove);
router.get('/topstudent',topstudent)

module.exports = router;