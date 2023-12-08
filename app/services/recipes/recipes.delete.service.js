import RecipeModel from '../../repository/recipes/recipe.model.js'
import VError from 'verror'

import UpdateRecipesNumberUserService from '../users/users.updateRecipesNumber.service.js'

export default async function deleteRecipe ({ id, userId }) {
    if (!id) {
        throw VError('Missing parameter ID')
    }

    if (!userId) {
        throw VError(`Missing parameter userId in the recipe ${id}`)
    }

    const recipe = await RecipeModel.findById({ _id: id })

    recipe.deleted = true
    recipe.deletedDate = new Date()
    recipe.deletedBy = userId

    await recipe.save()

    await UpdateRecipesNumberUserService({ userId: recipe.user })
}