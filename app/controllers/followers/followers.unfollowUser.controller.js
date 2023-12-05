import Utils from '../../utils/index.js'
import UnfollowUserService from '../../services/followers/followers.unfollowUser.service.js'

export default async function unfollowUser (req, res) {
  try {

    let errors = Utils.validateRequest(req, ({ params }) => {
        params('username').isString().required()
    })

    if (errors) next(errors)

    const { username } = req.params
    const userId = req.body.userId

    await UnfollowUserService({ userToUnfollowUsername: username, userId })

    res.send({ message: 'Unfollowed succesfully!' })
  } catch (err) {
    res.status(500).send({ message: err.message })
  }
}