
const express=require('express');
const { createEmployer, getAllEmployer, updatedEmployer, getsingleEmployer, deletedEmployer,patchEmployer } = require('../controllers/employersController.js');
const router=express.Router();

const bodyParser = require("body-parser");
router.use(bodyParser.json());

router.get('/employer',getAllEmployer);

router.get('/employer/:Employer_id',getsingleEmployer);

router.post('/employer', createEmployer);

router.put('/employer/:Employer_id',updatedEmployer);

router.delete('/employer/:Employer_id',deletedEmployer);

router.patch('/employer/:Employer_id',patchEmployer)

module.exports=bodyParser
module.exports=router

