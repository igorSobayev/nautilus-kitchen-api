import Utils from '../../utils/index.js'
import ListFollowingRecipesService from '../../services/users/users.listFollowingRecipes.service.js'

export default async function listFollowingRecipes (req, res) {
  try {

    let errors = Utils.validateRequest(req, ({ params }) => {
        params('id').isString().required()
    })

    if (errors) next(errors)

    const { id } = req.params

    const followingRecipes = await ListFollowingRecipesService({ userId: id })

    res.send(followingRecipes)
  } catch (err) {
    res.status(500).send({ message: err.message })
  }
}