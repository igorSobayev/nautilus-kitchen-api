import VError from 'verror'

import UserModel from '../../repository/users/user.model.js'
import FollowerModel from '../../repository/followers/follower.model.js'

export default async function unfollowUser ({ userToUnfollowUsername, userId}) {
    if (!userToUnfollowUsername) {
        throw VError('Missing parameter userToUnfollowUsername')
    }

    if (!userId) {
        throw VError('Missing parameter userId')
    }

    const userToUnfollow = await UserModel.findOne({ username: userToUnfollowUsername })

    if (!userToUnfollow) {
        throw VError(`User with username ${userToUnfollowUsername} not found`)
    }

    const user = await UserModel.findById(userId)

    if (!user) {
        throw VError(`User with ID ${userId} not found`)
    }

    let follower

    follower = await FollowerModel.findOne({ userFollowed: userToUnfollow._id, user: userId })
    
    follower.following = false
    follower.unfollowDate = new Date()

    await follower.save()

    // Update the followed user to know the total followers
    userToUnfollow.followers = userToUnfollow.followers - 1
    await userToUnfollow.save()
}