const express = require("express")
const server = express()

server.use(express.json())

let customers = [
    { id: 1, name: "Dev Samurai", site: "http://devsamurai.com.br" },
    { id: 2, name: "Google", site: "http://google.com.br" },
    { id: 3, name: "Uol", site: "http://uol.com.br" }
]

// list all customers
server.get("/customers", (req, res) => {
    return res.json(customers)
})

// show customer
server.get("/customers/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const customer = customers.find(item => item.id === id)
    const status = customer ? 200 : 404;

    return res.status(status).json(customer)
})

// create customer
server.post("/customers", (req, res) => {
    const { name, site } = req.body
    const id = customers[customers.length - 1].id + 1

    const newCustomer = { id, name, site}
    customers.push(newCustomer)

    return res.status(201).json(newCustomer);
})

// update customer
server.put("/customers/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const { name, site } = req.body

    const index = customers.findIndex(item => item.id === id)
    const status = index >= 0 ? 200 : 404

    if(index >= 0) {
        customers[index] = { id: parseInt(id), name, site }
    }

    return res.status(status).json(customers[index])
})

// delete customer
server.delete("/customers/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const index = customers.findIndex(item => item.id === id)
    const status = index >= 0 ? 200 : 404

    if(index >= 0) {
        customers.splice(index, 1)
    }

    return res.status(status).json()
})


server.listen(3000)