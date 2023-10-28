import RecipeModel from '../../repository/recipes/recipe.model.js'

export default async function allRecipes ({ userId }) {
    const recipes = await RecipeModel.find({ user: userId }).lean()

    return recipes
}