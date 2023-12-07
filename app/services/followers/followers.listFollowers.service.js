import VError from 'verror'

import UserModel from '../../repository/users/user.model.js'
import FollowerModel from '../../repository/followers/follower.model.js'
import config from '../../config/shared.js'

export default async function listFollowers ({ username }) {
    if (!username) {
        throw VError('Missing parameter username')
    }

    const user = await UserModel.findOne({ username })

    if (!user) {
        throw VError(`User with username ${username} not found`)
    }

    const followersRaw = await FollowerModel.find({ userFollowed: user._id, following: true }).populate('user', config.EXCLUDED_USER_FIELDS)

    const followers = followersRaw.map(follower => follower.user)

    return followers
}