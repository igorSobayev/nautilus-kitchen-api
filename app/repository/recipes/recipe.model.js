import mongoose from 'mongoose'

const Recipe = new mongoose.Schema({
  title: String,
  description: String,
  notes: String,
  rating: Number,
  avgTime: String,
  difficulty: Number,
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  },

  isCombination: Boolean,
  published: Boolean,
  onProgress: Boolean, // default true
  combinations: [
    {
      _id: mongoose.Types.ObjectId,
      rating: Number,
      description: String,
      avgTime: String,
      difficulty: Number,
      notes: String,
      ingredients: [
        {
          ingredient: String,
          quantity: String,
        }
      ]
    }
  ],

  featuredImg: String,
  media: [String],

  deleted: Boolean,
  deletedDate: Date,
  deletedBy:  {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
}, {
  timestamps: {
    createdAt: 'created',
    updatedAt: 'updated',
  },
})

export default mongoose.model('Recipe', Recipe)
