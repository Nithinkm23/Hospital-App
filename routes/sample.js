const express = require("express")
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }))
//fs
const fs = require("fs")
const loc = "./users.json";

fs.readFile(loc, (err, jdata) => {

    const users = JSON.parse(jdata);
    console.log(users);
})
//GET
router.get("/", (req, res) => {
    res.send(users);
});
//POST
var add = {
    "HospitalName": 'Kozhikode Medical College',
    "PatientCount": 450,
    "HospitalLocation": 'Kozhikode'
}
router.post('/add', (req, res) => {
    var addata = JSON.stringify(users);
    addata.push(add)
    var addatanw = JSON.stringify(addata)
    fs.writeFile(loc, addatanw, () => {
        console.log(`New Data Added :${add["HospitalName"]}`);
        res.send(users);
    });


})
//UPDATE
router.put("/update/:ind", (req, res) => {
    const index = req.params.ind;
    const users = JSON.parse(jdata);
    users[index].PatientCount = 555;
    var addatanw = JSON.stringify(users)
    fs.writeFile(loc, addatanw, () => {
        console.log(`Updated patient count : ${users[index]}`);
        console.log(`Updated index : ${index}`);
        res.send("Updated")
    })

})
//DELETE
router.delete("/delete/:ind", (req, res) => {
    const index = req.params.ind;
    const users = JSON.parse(jdata);
    delete users[index];
    var delusers = [];
    var addatanw = JSON.stringify(delusers)
    fs.writeFile(loc, addatanw, () => {
        console.log(`Deleted index : ${index}`);
        res.send("Deleted")
    })

})

module.exports = router;  