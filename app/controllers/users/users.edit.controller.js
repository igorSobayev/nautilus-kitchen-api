import bcrypt from 'bcryptjs'
import User from '../../repository/users/user.model.js'
import config from '../../config/shared.js'
import Utils from './../../utils/index.js'
import UserEditService from './../../services/users/users.edit.service.js'

export default async function edit (req, res) {
  try {
    let errors = Utils.validateRequest(req, ({ query }) => {
      query('name').isString()
      query('surname').isString()
      query('avatar').isString()
      query('description').isString()
    })

    if (errors) next(errors)

    const userData = {
      id: req.body.id,
      name: req.body.name,
      surname: req.body.surname,
      avatar: req.body.avatar,
      description: req.body.description,
    }

    
    await UserEditService({ userId: req.userId, userData })

    res.send({ message: 'User was updated successfully!' })
  } catch (err) {
    res.status(500).send({ message: err.message })
  }
}