import RecipeModel from '../../repository/recipes/recipe.model.js'
import VError from 'verror'

import UpdateRecipesNumberUserService from '../users/users.updateRecipesNumber.service.js'
import generateSlugAction from './actions/recipes.generateSlug.action.js'

export default async function publish ({ id }) {
    if (!id) {
        throw VError('Missing parameter ID')
    }

    const recipe = await RecipeModel.findById({ _id: id })

    recipe.slug = generateSlugAction({ recipeTitle: recipe.title })
    
    recipe.published = true

    await recipe.save()

    await UpdateRecipesNumberUserService({ userId: recipe.user })
}