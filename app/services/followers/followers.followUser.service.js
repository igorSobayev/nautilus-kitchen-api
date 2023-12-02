import VError from 'verror'

import UserModel from '../../repository/users/user.model.js'
import FollowerModel from '../../repository/followers/follower.model.js'

export default async function followUser ({ userToFollowUsername, userId}) {
    if (!userToFollowUsername) {
        throw VError('Missing parameter userToFollowUsername')
    }

    if (!userId) {
        throw VError('Missing parameter userId')
    }

    const userToFollow = await UserModel.findOne({ username: userToFollowUsername })

    if (!userToFollow) {
        throw VError(`User with username ${userToFollowUsername} not found`)
    }

    const user = await UserModel.findById(userId)

    if (!user) {
        throw VError(`User with ID ${userId} not found`)
    }

    let follower

    follower = await FollowerModel.findOne({ userFollowed: userToFollow._id, user: userId })

    if (!follower) {
        follower = new FollowerModel()

        follower.user = userId
        follower.userFollowed = userToFollow._id
        follower.creationDate = new Date()
    }

    follower.following = true
    follower.followDate = new Date()

    await follower.save()
}