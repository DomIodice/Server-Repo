const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getArticle);
router.post('/', controller.addArticle);
router.get('/:id', controller.getArticleById);
router.put('/:id', controller.updateArticle);
router.delete('/:id', controller.deleteArticle);


module.exports = router;