const express = require("express")
const { dirname } = require("path")
const app = express()
const path = require("path")
const PORT = 3600

app.get("/productos", (req,res) => {
    res.sendFile(path.join(__dirname, "index.html"))
    console.log(__dirname)
})


app.listen(PORT, () => console.log("estoy en el puerto ", PORT))



