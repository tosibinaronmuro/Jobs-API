const express=require('express')
const router=express.Router()
const {register}=require('../controllers/auth')
const { getAllJobs, deleteAllJobs, updateJob, createJob, getJob,getMyJobs}=require('../controllers/jobs')


router.route('/').get(getAllJobs).post(createJob)
router.route('/myJobs').get(getMyJobs)
router.route('/:id').get(getJob).delete(deleteAllJobs).patch(updateJob)



module.exports=router