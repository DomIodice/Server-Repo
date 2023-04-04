const router = require("express").Router();
const { PrismaClient } = require("@prisma/client")

const { author } = new PrismaClient()

router.get('/', async (req, res) => {
    const authors = await author.findMany({
        select: {
            id: true,
            name: true
        }
    });
    res.json(authors)
})

router.post('/', async (req, res) => {
    const { name } = req.body;

    const addAuthor = await author.create({
        data: {
            name: name
        }
    });
    res.json(addAuthor)
})


module.exports = router;


