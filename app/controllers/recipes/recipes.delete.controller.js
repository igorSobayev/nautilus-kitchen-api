import Utils from '../../utils/index.js'
import RecipeDeletehService from '../../services/recipes/recipes.delete.service.js'

export default async function deleteRecipe (req, res, next) {
  let errors = Utils.validateRequest(req, ({ params }) => {
    params('id').isString().required()
  })

  if (errors) next(errors)

  const recipeId = req.params.id
  const userId = req.body.userId
  
  await RecipeDeletehService({ id: recipeId, userId })

  res.send({ message: 'Recipe deleted!' })
}