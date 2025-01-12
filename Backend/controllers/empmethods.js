const Database = require("./db");

const getcity = async () => {
    try{
        const data =await (await Database).execute("select * from state");

        return({
            succes : true,
            msg : "succes in geting all city",
            data:data[0],
        })
    }
    catch(err){
        return({
            succes : false,
            msg : "error in geting all cities",
            err,
        })
    }
}



module.exports = {getcity}