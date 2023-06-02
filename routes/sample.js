const express = require("express")
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }))
//fs
const fs = require("fs")

fs.readFile("users.json", function (err, data) {

    const users = JSON.parse(data);
    console.log(users);
})
//GET
router.get("/", (req, res) => {
    res.send(users);
});
//POST
router.post('/add', (req, res) => {
    console.log(req.body)
    users.push(`{
        HospitalName: 'Kozhikode Medical College',
        PatientCount: 450,
        HospitalLocation: 'Kozhikode'
      }`);
    res.send(users);
})
//UPDATE
router.put("/update/:ind", (req, res) => {
    const index = req.params.ind;
    console.log(`Updated index : ${index}`);
    res.send("Updated")
})
//DELETE
router.delete("/delete/:ind", (req, res) => {
    const index = req.params.ind;
    console.log(`Deleted index : ${index}`);
    res.send("Deleted")
})

module.exports = router;