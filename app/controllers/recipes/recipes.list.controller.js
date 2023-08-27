import listService from '../../services/recipes/recipes.list.service.js'
export default async function list (req, res) {
    try {

        const recipes = await listService()
    
        res.send(recipes)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }

}