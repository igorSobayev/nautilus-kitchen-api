import FollowerModel from '../../repository/followers/follower.model.js'
import UserModel from '../../repository/users/user.model.js'
import VError from 'verror'

export default async function publicDetails ({ username, userId }) {

    if (!username) {
        throw VError(`Missing username`)
    }

    const rawUser = await UserModel.findOne({ username }).lean()

    if (!rawUser) {
        throw VError(`User with username ${username} not exist`)
    }

    const user = {
        username: rawUser.username,
        name: rawUser.name,
        surname: rawUser.surname,
        description: rawUser.description,
        avatar: rawUser.avatar,
        recipesNumber: rawUser.recipesNumber,
        avgRating: rawUser.avgRating,
        followers: rawUser.followers,
        creationDate: rawUser.creationDate,
    }

    // To populate info of the user that requested the public data
    if (userId) {
        const follower = await FollowerModel.findOne({ user: userId, userFollowed: rawUser._id, following: true })

        user.isFollowing = follower?.following ? true : false
    }

    return user
}