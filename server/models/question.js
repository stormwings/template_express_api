import mongoose, { Schema } from 'mongoose'

const { ObjectId } = Schema.Types

const QuestionSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // tipo de datos del "id" de mongo
  answers: [{ type: ObjectId, ref: 'Answer', default: [] }]
})

const Question = mongoose.model('Question', QuestionSchema)

export default Question
