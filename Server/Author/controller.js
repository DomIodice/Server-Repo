const pool = require('../Database/db');
const queries = require('./queries');

const getAuthor = (req, res) => {
    pool.query("SELECT * FROM domenico.author", (error, results) => {
        if(error) throw error;
            res.status(200).json(results.rows);
    });
};

const getAuthorById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getAuthorById, [id], (error, results) => {
        if(error) throw error;
            res.status(200).json(results.rows);
    });
};

const addAuthor = (req, res) => {
    const { name } = req.body;
    console.log(req.body)
    pool.query(queries.checkNameExist, [name], (error, result) => {
        console.log(error)
        if(result.rows.length) {
            res.send('The name of author already exist!');
        }
        pool.query(queries.addAuthor, [name], (error, results) => {
            if (error) throw error;
                res.status(201).send("Author added Successfully!");
            }
        );
    });
};


module.exports = {
    getAuthor,
    addAuthor,
    getAuthorById,
};