import UserWipRecipesService from '../../services/users/users.wipRecipes.service.js'
import VError from 'verror'

export default async function wipRecipes (req, res) {
    
    if (!req.params.id) {
        throw VError('User ID is missing')
    }

    const userId = req.params.id

    const recipes = await UserWipRecipesService({ userId })
    res.status(200).send(recipes)
}
  