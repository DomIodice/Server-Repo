const pool = require('../Database/db');
const queries = require('./queries');


const getArticle = (req, res) => {
    pool.query("SELECT * FROM domenico.articles", (error, results) => {
        if(error) throw error;
            res.status(200).json(results.rows);
    });
};

const getArticleById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getArticleById, [id], (error, results) => {
        if(error) throw error;
            res.status(200).json(results.rows);
    });
};

const addArticle = (req, res) => {
    const { name, author_id, category_id } = req.body;
    pool.query(queries.checkNameExist, [name], (error, result) => {
        if(result.rows.length) {
            res.send('The name of article already exist!');
        }
        pool.query(queries.addArticle, [name, author_id, category_id], (error, results) => {
            if (error) throw error;
                res.status(201).send("Article added Successfully!");
            }
        );
    });
};

const deleteArticle = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getArticleById, [id], (error, results) =>{
        const noArticleFound = !results.rows.length;
        if(noArticleFound){
           res.send("Article does not exist in the DB!"); 
        }
        pool.query(queries.deleteArticle, [id], (error, results) => {
            if(error) throw error;
            res.status(200).send("Article removed successfully!");
        });
    });
};

const updateArticle = (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;
    pool.query(queries.getArticleById, [id], (error, results) => {
        const noArticleFound = !results.rows.length;
        if(noArticleFound){
            res.send("Article does not exist in the DB!"); 
        }
        pool.query(queries.updateArticle, [name, author_id, category_id], (error, results) => {
            if(error) throw error;
            res.status(200).send("Article updated successfully!");
        });
    });
};



module.exports = {
    getArticle,
    getArticleById,
    addArticle,
    updateArticle,
    deleteArticle,
};