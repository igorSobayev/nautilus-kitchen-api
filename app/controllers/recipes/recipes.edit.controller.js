import Utils from '../../utils/index.js'
import RecipeEditService from '../../services/recipes/recipes.edit.service.js'

export default async function edit (req, res, next) {
  let errors = Utils.validateRequest(req, ({ query, params }) => {
    query('title').isString()
    query('description').isString()
    query('notes').isString()
    query('avgTime').isString()
    query('difficulty').isNumber()
    query('userId').isString()
    query('versions').isArray()
    query('ingredients').isArray()
    query('steps').isArray()
    query('featuredImg').isString()
    params('id').isString().required()
  })

  if (errors) next(errors)

  const recipeId = req.params.id

  const recipeData = {
    id: recipeId,
    title: req.body.title,
    description: req.body.description,
    notes: req.body.notes,
    avgTime: req.body.avgTime,
    difficulty: req.body.difficulty,
    userId: req.body.userId,
    versions: req.body.versions,
    ingredients: req.body.ingredients,
    steps: req.body.steps,
    featuredImg: req.body.featuredImg
  }
  
  await RecipeEditService({ ...recipeData })

  res.send({ message: 'Recipe was updated successfully!' })
}