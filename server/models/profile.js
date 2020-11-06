import mongoose, { Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const ProfileSchema = new Schema({
  firstName: { type:String, required: true },
  lastName: { type:String, required: true },
  progress: { type: String, required: false },
  visa: [{ type: ObjectId, ref: 'Visa', default: [] }],
})

ProfileSchema.plugin(uniqueValidator) // unique validator

const Profile = mongoose.model('Profile', ProfileSchema)

export default Profile
