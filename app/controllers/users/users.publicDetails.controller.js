import UserPublicDetailsService from '../../services/users/users.publicDetails.service.js'
import VError from 'verror'

export default async function publicDetails (req, res) {
    
    if (!req.params.username) {
        throw VError('Username is missing')
    }

    const username = req.params.username

    const user = await UserPublicDetailsService({ username })
    res.status(200).send(user)
}
  