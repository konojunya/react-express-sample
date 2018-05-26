const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.use(express.static("public")) // publicをstaticにする
app.use(bodyParser.json()) // postのpayloadを受け取るための設定

app.get("/", (req, res) => {
  res.sendfile("view/index.html") // view/index.htmlをレンダリング
})

// api
let products = [
  { name: "A本", price: 3000 },
  { name: "B本", price: 1000 },
  { name: "C本", price: 2000 }
]

app.get("/api/products", (req, res) => {
  res.json(products) // 全体を返す本来ならDBから取得
})
app.post("/api/products", (req, res) => {
  products.push({
    name: req.body.name,
    price: req.body.price
  })
  res.sendStatus(201) // 201で返す（201 Created）
})

app.listen(3000)