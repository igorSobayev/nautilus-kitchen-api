import RecipeModel from '../../repository/recipes/recipe.model.js'

export default async function list () {
    const recipes = await RecipeModel.find().lean().exec()
    
    return recipes
}