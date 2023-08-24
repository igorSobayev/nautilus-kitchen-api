import RecipeModel from '../../repository/recipes/recipe.model.js'

export default async function create ({ recipe }) {
    const newRecipe = new RecipeModel(recipe)

    await newRecipe.save()
}