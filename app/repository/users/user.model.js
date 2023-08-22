import mongoose from 'mongoose'

const User = new mongoose.Schema({
  username: String,
  name: String,
  surname: String,
  email: String,
  password: String,
  role: String,

  recipesNumber: Number,
  credits: Number,
  lastCreditsDate: Date,

  deleted: Boolean,
  deletedDate: Date,
  deletedBy: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  } 
})

export default mongoose.model('User', User)
