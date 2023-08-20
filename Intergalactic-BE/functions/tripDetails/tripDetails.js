var connection = require('../../service/connection');

module.exports = async function tripDetails(req, res){
    const query1 = "SELECT destinationName FROM intergalactic.destination;";

    const query2 = "SELECT earthTerminalName FROM intergalactic.earth_terminals;";

    const DepDestinations = [];

    const ArrDestinations = [];

    const returnData = [];

    try{
        let response = await queryAsync(query1);

        if(response != 0){
            for(const element of response){
                DepDestinations.push(element.destinationName);
            }
        }else{
            DepDestinations.push("Not found");
        }

        response = await queryAsync(query2);

        if(response != 0){
            for(const element of response){
                ArrDestinations.push(element.earthTerminalName);
            }
        }else{
            ArrDestinations.push("Not found");
        }
        returnData.push(DepDestinations, ArrDestinations);
        return res.json(returnData);

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