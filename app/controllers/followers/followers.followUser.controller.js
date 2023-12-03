import Utils from './../../utils/index.js'
import FollowUserService from './../../services/followers/followers.followUser.service.js'

export default async function followUser (req, res) {
  try {

    let errors = Utils.validateRequest(req, ({ params }) => {
        params('username').isString().required()
    })

    if (errors) next(errors)

    const { username } = req.params
    const userId = req.body.userId

    await FollowUserService({ userToFollowUsername: username, userId })

    res.send({ message: 'Followed succesfully!' })
  } catch (err) {
    res.status(500).send({ message: err.message })
  }
}