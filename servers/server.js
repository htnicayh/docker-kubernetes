import express from 'express'
import morgan from 'morgan'
import mongoose from 'mongoose'
import cors from 'cors'

import { jobSchema } from './models/jobs.js'

const app = express()
const PORT = process.env.PORT || 5000


app.use(morgan('combined'))
app.use(express.json())
app.use(express.urlencoded({
    extended: true,
    limit: '50mb'
}))

app.use(cors())

app.get('/', async (req, res) => {
    const jobs = await jobSchema.find()
    res.json(jobs)
})

app.post('/', async (req, res) => {
    const data = req.body
    const newJobs = await jobSchema.create({ description: data.description })
    await newJobs.save()
    res.json(newJobs)
})

app.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const response = await jobSchema.remove({ _id: id })
        res.json(response)
    } catch (error) {
        console.log(error)
    }
})

mongoose.connect(`mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@mongoose:27017/docker?authSource=admin`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (error) => {
    if (error) {
        console.log('FAILURE TO CONNECT MONGODB - ', error)
    } else {
        console.log('CONNECT SUCCESS !!!')
        app.listen(PORT, () => {
            console.log(`App listening at PORT ${PORT}`)
        })
    }
})