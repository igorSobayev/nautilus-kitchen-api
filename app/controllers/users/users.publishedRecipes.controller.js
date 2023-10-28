import UserPublishedRecipes from '../../services/users/users.publishedRecipes.service.js'
import VError from 'verror'

export default async function publishedRecipes (req, res) {
    
    if (!req.params.id) {
        throw VError('User ID is missing')
    }

    const userId = req.params.id

    const recipes = await UserPublishedRecipes({ userId })
    res.status(200).send(recipes)
}
  