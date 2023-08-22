import mongoose from 'mongoose'

const Recipe = new mongoose.Schema({
  title: String,
  description: String,
  notes: String,
  rating: Number,
  author: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  },

  isCombination: Boolean,
  combination: [
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
})

export default mongoose.model('Recipe', Recipe)
