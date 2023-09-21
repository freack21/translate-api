const express = require("express");
const app = express();
const translate = require("@saipulanuar/google-translate-api");

const port = 4000;

app.use(express.json());

app.get("/", (req, res) => {
    const { text, to, from } = req.query;
    translate(text, { from: from || "en", to: to || "id" })
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ err });
        });
});

app.listen(port, () => console.log("start at http://localhost:" + port));
