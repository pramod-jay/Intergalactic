//__________Server test(Only for testing purpose)

var connection = require('./../../service/connection');

module.exports = async function test(req, res) {
    return res.json("Backend tested succefully");
}