import RecipeModel from '../../repository/recipes/recipe.model.js'

export default async function createClean ({ userId }) {
    const newRecipe = new RecipeModel()

    newRecipe.user = userId
    newRecipe.published = false
    newRecipe.onProgress = true

    const createdRecipe = await newRecipe.save()

    return createdRecipe
}