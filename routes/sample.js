const express = require("express")
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }))
const fs = require("fs")

fs.readFile("users.json", function (err, data) {

    const users = JSON.parse(data);
    console.log(users);
})
router.get("/", (req, res) => {
    res.send(users);
});

module.exports = router;