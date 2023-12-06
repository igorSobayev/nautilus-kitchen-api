import VError from 'verror'

import UserModel from '../../repository/users/user.model.js'
import FollowerModel from '../../repository/followers/follower.model.js'
import config from '../../config/shared.js'

export default async function listFollowing ({ username }) {
    if (!username) {
        throw VError('Missing parameter username')
    }

    const user = await UserModel.findOne({ username })

    if (!user) {
        throw VError(`User with username ${username} not found`)
    }

    const followingRaw = await FollowerModel.find({ user: user._id }).populate('userFollowed', config.EXCLUDED_USER_FIELDS)

    const following = followingRaw.map(follower => follower.userFollowed)

    return following
}