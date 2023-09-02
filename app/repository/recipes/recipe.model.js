import mongoose from 'mongoose'

const Recipe = new mongoose.Schema({
  title: String,
  description: String,
  notes: String,
  rating: Number,
  avgTime: Number,
  difficulty: String,
  author: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  },

  isCombination: Boolean,
  published: Boolean,
  combinations: [
    {
      _id: mongoose.Types.ObjectId,
      rating: Number,
      description: String,
      notes: String,
      ingredients: [
        {
          ingredient: String,
          icon: String,
        }
      ]
    }
  ],

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
