var connection = require('../../service/connection');

module.exports = (req, res)=>{
    const values =[
        req.body.rating,
        req.params.humoCode,
        req.params.destID
    ];
    
    const updatequery = `UPDATE destinationrating SET rating = ? WHERE humoCode = ? AND destinationID = ?;`;
    
    const insertquery = `INSERT INTO destinationrating (rating ,humoCode, destinationID ) VALUES (?, ?, ?);`;

    connection.query(insertquery,values,(err, result)=>{
        if(err){
            console.log("Error Update Rating:",err);
            res.status(101).send("Error Update Ratings");
        }else{
            console.log("Ratings inserted",result);
            res.status(300).json({Message:'Ratings saved Succesfully'});
        }
    });
};




