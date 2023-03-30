const getAuthor = "SELECT * FROM domenico.author";
const getAuthorById = `SELECT * FROM domenico.author WHERE id = $1`;
const checkNameExist = `SELECT s FROM domenico.author s WHERE s.name = $1`;
const addAuthor = 'INSERT INTO domenico.author (name) VALUES ($1)';


module.exports = {
    getAuthor,
    getAuthorById,
    checkNameExist,
    addAuthor,
};