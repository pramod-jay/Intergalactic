var connection = require('../../service/connection');

module.exports = async function shipDetails(req, res){
    
    const query1 = "SELECT t.travelID, s.shipType, s.shipName, s.shipPrice, t.departureTime, s.shipCapacity, t.duration FROM intergalactic.ship s JOIN intergalactic.travel t ON s.shipID=t.shipID WHERE t.departureDate=(?) AND s.shipType = (?);";

    const values1 = [req.query.depDate, req.query.shipType];

    console.log(req.query.depDate);
    console.log(req.query.shipType);
    console.log(values1);

    try{
        const response = await queryAsync(query1, values1);
        return res.json(response);

    }catch(err){
        console.log(err);
        return res.json(100);
    }
};

// Helper function to wrap connection.query in a promise
function queryAsync(query, values) {
    return new Promise((resolve, reject) => {
        connection.query(query, values, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}