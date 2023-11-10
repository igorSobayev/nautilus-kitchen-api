import UserPublicRecipes from '../../services/users/users.publicRecipes.service.js'
import VError from 'verror'

export default async function publicRecipes (req, res) {
    
    if (!req.params.username) {
        throw VError('Username is missing')
    }

    const username = req.params.username

    const recipes = await UserPublicRecipes({ username })
    res.status(200).send(recipes)
}
  