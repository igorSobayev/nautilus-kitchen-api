import detailsService from '../../services/recipes/recipes.details.service.js'

export default async function details (req, res) {
    if (!req.params.id) {
        throw VError('Recipe ID is missing')
    }

    const recipeId = req.params.id

    const recipe = await detailsService({ recipeId })

    res.send(recipe)
}