import RecipeModel from '../../repository/recipes/recipe.model.js'

export default async function details ({ userId }) {
    const recipes = await RecipeModel.find({ user: userId, published: true, deleted: false }).lean()

    return recipes
}