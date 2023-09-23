import RecipeModel from '../../repository/recipes/recipe.model.js'
import VError from 'verror'

export default async function edit ({ id, title, description, notes, avgTime, difficulty, versions, ingredients, steps, userId }) {
    if (!id) {
        throw VError('Missing parameter ID')
    }

    if (!userId) {
        throw VError('Missing parameter userId')
    }

    const recipe = await RecipeModel.findById({ _id: id })

    recipe.title = title
    recipe.description = description
    recipe.notes = notes
    recipe.avgTime = avgTime
    recipe.difficulty = difficulty
    recipe.versions = versions
    recipe.ingredients = ingredients
    recipe.steps = steps

    await recipe.save()
}