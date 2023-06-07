const express=require('express')
const router=express.Router()
const {register}=require('../controllers/auth')
const { getAllJobs, deleteAllJobs, updateJob, createJob, getJob }=require('../controllers/jobs')


router.route('/').get(getAllJobs).post(createJob)
router.route('/:id').get(getJob).delete(deleteAllJobs).patch(updateJob)
 
router.post('/getAllJobs',createJob)


module.exports=router