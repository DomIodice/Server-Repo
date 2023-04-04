const router = require("express").Router();
const { PrismaClient } = require("@prisma/client")

const { articles } = new PrismaClient()

router.get('/', async (req, res) => {
    const article = await articles.findMany({
        select: {
            id: true,
            name: true
        }
    });
    res.json(article)
})

router.post('/', async (req, res) => {
    const { name, author_id, category_id } = req.body;

    const addArticle = await articles.create({
        data: {
            name,
            author_id,
            category_id
        }
    });
    res.json(addArticle)
})


module.exports = router;

