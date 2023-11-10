import RecipeModel from '../../repository/recipes/recipe.model.js'
import VError from 'verror'
import UserModel from '../../repository/users/user.model.js'

export default async function publicRecipes ({ username }) {
    
    if (!username) {
        throw VError('Username is missing')
    }

    const user = await UserModel.findOne({ username })

    if (!user) {
        throw VError(`User with username ${username} not found`)
    }

    const recipes = await RecipeModel.find({ user: user._id, published: true, deleted: false }).lean()

    return recipes
}