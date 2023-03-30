const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getAuthor);
router.post('/', controller.addAuthor);
router.get('/:id', controller.getAuthorById);


module.exports = router;


