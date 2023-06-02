const express = require("express")
const app = new express
const morgan = require("morgan")
const api = require("./routes/sample")
require("dotenv").config()
app.use(morgan("dev")) 
app.use("/api", api)

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`);
})  
