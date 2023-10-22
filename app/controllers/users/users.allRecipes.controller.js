import UserAllRecipesService from '../../services/users/users.allRecipes.service.js'
import VError from 'verror'

export default async function allRecipes (req, res) {
    
    if (!req.params.id) {
        throw VError('User ID is missing')
    }

    const userId = req.params.id

    const recipes = await UserAllRecipesService({ userId })
    res.status(200).send(recipes)
}
  