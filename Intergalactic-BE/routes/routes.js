const express = require('express');
const router = express.Router();

const test = require('./../functions/test/test');
const booking = require('./../functions/booking/booking');

//__________Server test__________
router.get('/test', (req, res) => {
    test(req, res);
});

router.get('/test-booking', (req, res)=>{
    booking(req, res);
})


module.exports = router;