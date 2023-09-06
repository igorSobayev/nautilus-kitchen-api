import jwt from 'jsonwebtoken'
import auth from '../config/auth.config.js'
import User from '../repository/users/user.model.js'
import config from '../config/shared.js'

export const verifyToken = (req, res, next) => {
  let token = req.session.token

  if (!token) {
    return res.status(403).send({ message: 'No token provided!' })
  }

  jwt.verify(token, auth.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: 'Unauthorized!',
      })
    }
    req.userId = decoded.id
    next()
  })
}

export const verifyUserAndToken = (req, res, next) => {
  let token = req.session.token

  if (!token) {
    return res.status(403).send({ message: 'No token provided!' })
  }

  jwt.verify(token, auth.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: 'Unauthorized!',
      })
    }
    req.userId = decoded.id

    if (req.userId !== req.params.id) {
      return res.status(401).send({
        message: 'Unauthorized!',
      })
    }

    next()
  })
}


export const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId)

    const adminRole = user.role === config.ROLES.ADMIN

    if (adminRole) {
      next()
    } else {
      res.status(403).send({ message: 'Require Admin Role!' })
    }
  } catch (err) {
    res.status(500).send({ message: err.message })
  }
}

const authJwt = {
  verifyToken,
  isAdmin,
  verifyUserAndToken,
}

export default authJwt
