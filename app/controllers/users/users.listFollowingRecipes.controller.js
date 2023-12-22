import Utils from '../../utils/index.js'
import ListFollowingRecipesService from '../../services/users/users.listFollowingRecipes.service.js'

export default async function listFollowingRecipes (req, res) {
  try {

    let errors = Utils.validateRequest(req, ({ params }) => {
        params('username').isString().required()
    })

    if (errors) next(errors)

    const { username } = req.params

    const followingRecipes = await ListFollowingRecipesService({ username })

    res.send(followingRecipes)
  } catch (err) {
    res.status(500).send({ message: err.message })
  }
}