var pg = require("pg");

const config = {
    database:"database",
    user:"samgibb",
    host:"localhost",
};

const pool = new pg.Pool(config);

const query = {
    name: "getDB",
    text: "select * from dt",
    }

    //query the database
    var accountList = [];

    pool.query(query, (err,res) => {
        if (err) {
            res.status(500).json({"status_code": 500, "status_message": "internal server error"});
        } else {
            //console.log(res)
            for (let i = 0; i < res.rows.length; i++) {
                accountList.push(res.rows[i]);
            }
            //check output
            console.log(accountList);
            
        }
    })



//close connection
pool.end();



