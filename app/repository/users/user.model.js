import mongoose from 'mongoose'

const User = new mongoose.Schema({
  username: String,
  name: String,
  surname: String,
  email: String,
  password: String,
  role: String,
  description: String,

  recipesNumber: Number,
  credits: Number,
  lastCreditsDate: Date,

  conditionsCheck: Boolean,

  deleted: Boolean,
  deletedDate: Date,
  deletedBy: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  } 
}, {
  timestamps: {
    createdAt: 'created',
    updatedAt: 'updated',
  },
})

export default mongoose.model('User', User)
