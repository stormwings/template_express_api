import mongoose, { Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const UserSchema = new Schema({
  firstName: { type:String, required: true },
  lastName: { type:String, required: true },
  email: { type: String, required: true, unique: true, index: true }, // unique validator
  password: { type: String, required:true }
})

UserSchema.plugin(uniqueValidator) // unique validator

const User = mongoose.model('User', UserSchema)

export default User
