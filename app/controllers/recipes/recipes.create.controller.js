import createService from '../../services/recipes/recipes.create.service.js'
export default async function create (req, res) {
    try {
        if (!req.body.title) {
            return res.status(400).send({ message: 'The title is required' })
        }
    
        const recipe = {
            title: req.body.title,
            description: req.body.description,
            notes: req.body.notes,
            isCombination: Boolean(req.body.isCombination),
            combinations: req.body.combinations
        }
    
        await createService({ recipe })
    
        res.send({ message: 'Recipe created' })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }

}