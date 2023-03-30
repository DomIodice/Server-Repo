const pool = require('../Database/db');
const queries = require('./queries');

const getCategory = (req, res) => {
    pool.query("SELECT * FROM domenico.category", (error, results) => {
        if(error) throw error;
            res.status(200).json(results.rows);
    });
};

module.exports = {
    getCategory,
};