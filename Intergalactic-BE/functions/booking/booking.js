var connection = require('../../service/connection');

module.exports= async function success_booking(req,res){
    const query = "INSERT INTO `intergalactic`.`booking` ( `numOfPassengers`, `intergalcticPassportNum`, `humoCode`, `travelID`) VALUES ( (?), (?), (?), (?));";

    const values = [req.body.passengers, req.body.passportNum, req.body.humoCode, req.body.travelID];

    try{
        await queryAsync(query, values);
        return res.json(200);
    }catch(err){
        console.log(err);
        return res.json(100);
    }
}

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