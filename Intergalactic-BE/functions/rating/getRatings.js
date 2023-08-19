var connection = require('../../service/connection');

module.exports = (req, res)=>{
    const values =[
        req.params.destID
    ];
    
    const getquery = `SELECT AVG(rating) AS averageRating FROM destinationrating WHERE destinationID = ? GROUP BY destinationID;`;

    connection.query(getquery,values,(err, result)=>{
        if(err){
            console.log("Error Update Rating:",err);
            res.status(202).send("Error Get Ratings");
        }else{
            console.log("Ratings:",result);
            res.status(400).json(result);
        }
    });
};