var connection = require('../../service/connection');
const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();

module.exports= async function success_booking(req,res){
    const query1 ='SELECT passport.passport_ID, human.HumoCode FROM human INNER JOIN passport ON human.HumoCode = passport.humo_code WHERE human.HumoCode = ?;';
    const values1=[
        req.params.humoCode, 
    ];

    const query2 = `INSERT INTO booking (numOfPassengers, intergalcticPassportNum, HumoCode) VALUES (?, ?, ?);`;


    const query3 = `INSERT INTO payment (paymentDate, paymentMethod, amount) VALUES(? ,? ,?) ;`;
    const value3 = [
        req.body.paymentDate,
        req.body.paymentMethod,
        req.body.amount
    ];

    const query4 = `UPDATE booking SET paymentID=? WHERE humoCode=?`;

    const query5 = "INSERT INTO travel (departureDate, departureTime, duration, destinationID, shipID) VALUES (?, ?, ?, ?, ?);";
    const value5 = [
        req.body.departureDate, 
        req.body.departureTime, 
        req.body.duration, 
        req.body.destinationID, 
        req.body.shipID
    ];

    const query6 = `UPDATE booking SET travelID = ? WHERE humoCode=?`


    try{
        await queryAsync("START TRANSACTION");

        let response = await queryAsync(query1, values1);

        const passport_ID = response[0].passport_ID;

        const values2 =[
            req.body.numOfPassengers, 
            passport_ID, 
            req.params.humoCode
        ];
        await queryAsync(query2, values2);

        response = await queryAsync(query3, value3);
        const paymentID = response.insertId;
        const values4 = [
            paymentID,
            req.params.humoCode
        ];
        await queryAsync(query4, values4)

        response = await queryAsync(query5, value5);
        const travelID = response.insertId;
        const values6 = [
            travelID,
            req.params.humoCode
        ];

        await queryAsync(query6,values6);

        await queryAsync("COMMIT");

        return res.json(200);
    }catch(err){
        await queryAsync("ROLLBACK");
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