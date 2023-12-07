import Utils from '../../utils/index.js'
import ListFollowersService from '../../services/followers/followers.listFollowers.service.js'

export default async function listFollowers (req, res) {
  try {

    let errors = Utils.validateRequest(req, ({ params }) => {
        params('username').isString().required()
    })

    if (errors) next(errors)

    const { username } = req.params

    const followers = await ListFollowersService({ username })

    res.send(followers)
  } catch (err) {
    res.status(500).send({ message: err.message })
  }
}