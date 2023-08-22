import mongoose, { mongo } from 'mongoose'

const FavoriteRecipe = new mongoose.Schema({
  title: String,
  rating: Number,
  isFavorite: Boolean,
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  },
  recipe: {
    type: mongoose.Types.ObjectId,
    ref: 'Recipe',
  },

  deleted: Boolean,
  deletedDate: Date,
  deletedBy:  {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
})

export default mongoose.model('FavoriteRecipe', FavoriteRecipe)
