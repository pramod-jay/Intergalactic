const express = require('express');
const router = express.Router();

const testFunction = require('../functions/test/test');
//const humanFunction = require('../functions/human/human'); // Importing the human function
const saveBookingFunction = require('../functions/booking/booking'); // Importing the saveBooking function
//.const addPaymentIdFunction = require('../functions/booking/addPayment');
const ratingFunction = require('../functions/rating/rating');
const getRatingsFunction = require('../functions/rating/getRatings');

// Test route
router.get('/test', (req, res) => {
    testFunction(req, res);
});

//__________Insert date to booking table__________
router.post('/saveBooking/:humoCode', (req, res, next) => {
    saveBookingFunction(req, res);
});

//________Insert ratings__________
router.post('/ratings/:destID/:humoCode', (req, res) => {
    ratingFunction(req,res);
});

//___________Get Ratings____________
router.get('/ratings/:destID', (req, res)=>{
    getRatingsFunction(req, res);
});





module.exports = router;