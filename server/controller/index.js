const db = require('../database');

exports.getOrders = (req, res) => {
    const { status } = req.params;
   
    db.query(`SELECT project_name from forecast WHERE status = ${status}`, (err, results) => {
        if (err) console.log(err);
        console.log(results);
        res.json(results);
    })
}


exports.getOrderDetails = (req, res) => {
    const { project_name } = req.params;
   
    db.query(`SELECT * from project_master WHERE project_name = ${project_name}`, (err, results) => {
        if (err) console.log(err);
        console.log(results);
        res.json(results);
    })
}
