const router = require("express").Router();
const { PrismaClient } = require("@prisma/client")

const { category } = new PrismaClient()

router.get('/', async (req, res) => {
    const categories = await category.findMany({
        select: {
            id: true,
            name: true
        }
    });
    res.json(categories)
})


module.exports = router;
