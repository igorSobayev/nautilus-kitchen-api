import RecipeModel from '../../repository/recipes/recipe.model.js'
import VError from 'verror'
import UserModel from '../../repository/users/user.model.js'

export default async function updateRecipesNumber ({ userId }) {
    if (!userId) {
        throw VError('Missing parameter userId')
    }

    const user = await UserModel.findById(userId)

    if (!user) {
        throw VError(`User with ID ${userId} not found`)
    }

    const publishedRecipes = await RecipeModel.count({ user: userId, published: true, deleted: false })

    user.recipesNumber = publishedRecipes

    await user.save()
}