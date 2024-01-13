import publicDetailsService from '../../services/recipes/recipes.publicDetails.service.js'
import VError from 'verror'

export default async function publicDetails (req, res) {
    if (!req.params.id) {
        throw VError('Recipe ID is missing')
    }

    const recipeId = req.params.id

    const recipe = await publicDetailsService({ recipeId })

    res.send(recipe)
}