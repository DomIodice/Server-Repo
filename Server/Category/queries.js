const getCategory = "SELECT * FROM domenico.category";
const checkNameExist = `SELECT s FROM domenico.category s WHERE s.name = $1`;

module.exports = {
    getCategory,
    checkNameExist,
};