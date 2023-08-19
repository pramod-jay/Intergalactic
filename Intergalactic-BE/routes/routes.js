const express = require('express');
const router = express.Router();

const testFunction = require('../functions/test/test');
//const humanFunction = require('../functions/human/human'); // Importing the human function
const saveBookingFunction = require('../functions/booking/booking'); // Importing the saveBooking function
//.const addPaymentIdFunction = require('../functions/booking/addPayment');

// Test route
router.get('/test', (req, res) => {
    testFunction(req, res);
});

/*// Human route
router.get('/human/:humoCode', (req, res) => {
    humanFunction(req, res, humanCode, req.params.humoCode); // Calling humanFunction with the humanCode parameter
});

// Save booking route
router.post('/saveBooking/:humoCode', (req, res) => {
    saveBookingFunction(req, res, req.params.humoCode);
});

//add payment id route
router.put('/saveBooking/:humoCode', (req, res) =>{
    addPaymentIdFunction(req, res, req.params.humoCode);
});*/

//__________Insert date to booking table__________
router.post('/saveBooking/:humoCode', (req, res, next) => {
    saveBookingFunction(req, res);
})





module.exports = router;