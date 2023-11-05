import UserModel from '../../repository/users/user.model.js'
import VError from 'verror'

export default async function publicDetails ({ username }) {
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

    return user
}