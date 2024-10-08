import UserModel from '../../repository/users/user.model.js'

export default async function edit ({ userId, userData }) {
    const user = await UserModel.findOne({ _id: userId })

    user.name = userData.name
    user.surname = userData.surname
    user.avatar = userData.avatar
    user.description = userData.description

    await user.save()
}