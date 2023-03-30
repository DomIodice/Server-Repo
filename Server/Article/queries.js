const getArticle = " SELECT * FROM domenico.articles";
const getArticleById = `SELECT * FROM domenico.articles WHERE id = $1`;
const checkNameExist = `SELECT s FROM domenico.articles s WHERE s.name = $1`;
const addArticle = 'INSERT INTO domenico.articles (name, author_id, category_id) VALUES ($1, $2, $3)';
const updateArticle = 'UPDATE domenico.articles SET name = $1 WHERE id = $2';
const deleteArticle = 'DELETE FROM domenico.articles WHERE id =$1';


module.exports = {
    getArticle,
    getArticleById,
    addArticle,
    checkNameExist,
    updateArticle,
    deleteArticle,
};