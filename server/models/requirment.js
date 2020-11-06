import mongoose, { Schema } from 'mongoose'

const RequirmentSchema = new Schema({
  position: { type: Number, required: true },
  type: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now },
  title: { type: String, required: true },
  description: { type: String, required: true },
  note: { type: String, required: false },
  completed: { type: Boolean, required: true },
})

export default mongoose.model('Requirment', RequirmentSchema)
