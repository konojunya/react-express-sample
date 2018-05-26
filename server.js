const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.use(express.static("public"))
app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.sendfile("view/index.html")
})

// api

let products = [
  { name: "A本", price: 3000 },
  { name: "B本", price: 1000 },
  { name: "C本", price: 2000 }
]

app.get("/api/products", (req, res) => {
  res.json(products)
})
app.post("/api/products", (req, res) => {
  products.push({
    name: req.body.name,
    price: req.body.price
  })
  res.sendStatus(200)
})

app.listen(3000)