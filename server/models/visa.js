import mongoose, { Schema } from 'mongoose'

const VisaSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now },
  posts: [{ type: ObjectId, ref: 'Post', default: [] }],
  requirements: [{ type: ObjectId, ref: 'Requirment', default: [] }],
})

const Visa = mongoose.model('Visa', VisaSchema)

export default Visa
