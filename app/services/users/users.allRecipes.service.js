import RecipeModel from '../../repository/recipes/recipe.model.js'

export default async function details ({ userId }) {
    const recipes = await RecipeModel.find({ user: userId }).lean()

    return recipes
}