const express = require("express")
require("dotenv").config()
const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    console.log("You are on the homepage")
    res.send({
        message: "hi pascale"
    })
})

app.listen(PORT, () => {
    console.log("Server is running on " + process.env.PORT)
})