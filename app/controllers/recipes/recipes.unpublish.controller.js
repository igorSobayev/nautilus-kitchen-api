import Utils from '../../utils/index.js'
import RecipeUnpublishService from '../../services/recipes/recipes.unpublish.service.js'

export default async function unpublish (req, res, next) {
  let errors = Utils.validateRequest(req, ({ params }) => {
    params('id').isString().required()
  })

  if (errors) next(errors)

  const recipeId = req.params.id
  
  await RecipeUnpublishService({ id: recipeId })

  res.send({ message: 'Recipe unpublished!' })
}