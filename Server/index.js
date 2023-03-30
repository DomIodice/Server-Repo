const express = require ('express');
const articleRoutes = require('./Article/routes');
const authorRoutes = require('./Author/routes');
const categoryRoutes = require('./Category/routes');
const app = express();
const port = 3001;
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(express.json());

app.use(bodyParser.json());

app.use(cors());

app.get("/", (req, res) => {
    res.send("hello guys");
});

app.post("/back", (req,res) => {
    res.send('POST request')
})

app.use('/article', articleRoutes);
app.use('/author', authorRoutes);
app.use('/category', categoryRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));