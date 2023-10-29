import Utils from '../../utils/index.js'
import RecipePublishService from '../../services/recipes/recipes.publish.service.js'

export default async function publish (req, res, next) {
  let errors = Utils.validateRequest(req, ({ params }) => {
    params('id').isString().required()
  })

  if (errors) next(errors)

  const recipeId = req.params.id
  
  await RecipePublishService({ id: recipeId })

  res.send({ message: 'Recipe published!' })
}