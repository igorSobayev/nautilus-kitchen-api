import mongoose from 'mongoose'

const Follower = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
  userFollowed: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },

  following: {
    type: Boolean,
    default: true,
  },

  creationDate: Date,
  followDate: Date,
  unfollowDate: Date,
}, {
  timestamps: {
    createdAt: 'created',
    updatedAt: 'updated',
  },
})

export default mongoose.model('Follower', Follower)
