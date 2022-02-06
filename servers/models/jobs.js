import mongoose from 'mongoose'

const jobs = new mongoose.Schema({
    description: String
})

export const jobSchema = mongoose.model('jobs', jobs)