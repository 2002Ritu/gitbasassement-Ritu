const express = require('express');
const router = express.Router();

const vote=require('../voting/vote')




router.post('/age',vote.votingPerson)




//module.exports = router;

