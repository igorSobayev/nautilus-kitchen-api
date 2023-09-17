import RecipeModel from '../../repository/recipes/recipe.model.js'
import VError from 'verror'

export default async function details ({ recipeId }) {
    
    if (!recipeId) {
        throw VError('Recipe ID is missing')
    }

    const recipe = await RecipeModel.findById(recipeId).lean()

    if (!recipe) {
        throw VError(`Recipe with ID ${recipeId} not found`)
    }

    return recipe
}