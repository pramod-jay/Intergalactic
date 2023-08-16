const express = require('express');
const router = express.Router();

const test = require('./../functions/test/test');

//__________Server test__________
router.get('/test', (req, res) => {
    test(req, res);
});

module.exports = router;