import Utils from '../../utils/index.js'
import ListFollowingService from '../../services/followers/followers.listFollowing.service.js'

export default async function listFollowing (req, res) {
  try {

    let errors = Utils.validateRequest(req, ({ params }) => {
        params('username').isString().required()
    })

    if (errors) next(errors)

    const { username } = req.params

    const following = await ListFollowingService({ username })

    res.send(following)
  } catch (err) {
    res.status(500).send({ message: err.message })
  }
}