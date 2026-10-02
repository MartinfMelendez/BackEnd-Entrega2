import express from "express"
import dotenv from "dotenv"
import env from "./config/env.config.js"
import { getAll, getServiceById, addService, updateService, deleteService } from "./managers/ServiceManager.js"

dotenv.config()
const app = express()
const port = env.PORT

app.use(express.json())


app.get("/api/services", async  (req, res) => {
    const services = await getAll()
    res.status(200).json({ Services: services })
})

app.get("/api/services/:id", async (req, res) => {
    const { id } = req.params
    const service = await getServiceById(id)
    res.status(200).json({ Service: service })
})

app.post("/api/services", async (req, res) => {
    const { name, description, duration, price, category, available } = req.body
    const newService = await addService(name, description, duration, price, category, available)
    res.status(201).json({ NewService: newService })
})

app.put("/api/services/:id", async (req, res) => {
    const { id } = req.params
    const data = req.body
    const updatedService = await updateService(id, data)
    res.status(200).json({ UpdatedService: updatedService })
})

app.delete("/api/services/:id", async (req, res) => {
    const { id } = req.params
    const deleteservice = await deleteService(id)
    res.status(200).json({ DeletedService: deleteservice })
})

app.listen(port, () => {
    console.log(`Server is running - http://localhost:${port}/`)
})