import RecipeModel from '../../repository/recipes/recipe.model.js'

export default async function wipRecipes ({ userId }) {
    const recipes = await RecipeModel.find({ user: userId, published: false, deleted: false }).lean()

    return recipes
}