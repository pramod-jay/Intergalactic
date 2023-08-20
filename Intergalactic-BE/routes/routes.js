const express = require('express');
const router = express.Router();

const testFunction = require('../functions/test/test');
//const humanFunction = require('../functions/human/human'); // Importing the human function
const saveBookingFunction = require('../functions/booking/booking'); // Importing the saveBooking function
//.const addPaymentIdFunction = require('../functions/booking/addPayment');
const ratingFunction = require('../functions/rating/rating');
const getRatingsFunction = require('../functions/rating/getRatings');
const getTripDetails = require('./../functions/tripDetails/tripDetails');
const getShipDetails = require('./../functions/shipDetails/shipDetails');

// Test route
router.get('/test', (req, res) => {
    testFunction(req, res);
});

//__________Insert date to booking table__________
router.post('/saveBooking', (req, res) => {
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

//___________Get Trip Details____________
router.get('/getTripDetails', (req, res)=>{
    getTripDetails(req, res);
});

//___________Get Ship Details____________
router.get('/getShipDetails', (req, res)=>{
    getShipDetails(req, res);
})




module.exports = router;