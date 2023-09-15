import Utils from '../../utils/index.js'
import createCleanService from '../../services/recipes/recipes.createClean.service.js'
export default async function create (req, res) {
    let errors = Utils.validateRequest(req, ({ query }) => {
        query('userId').isString()
    })

    if (errors) next(errors)

    const userId = req.body.userId

    const newRecipe = await createCleanService({ userId })

    res.send(newRecipe)
}