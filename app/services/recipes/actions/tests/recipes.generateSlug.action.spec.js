import { expect } from 'chai'
import generateSlugAction from '../recipes.generateSlug.action.js'

describe('Action - generateSlug', () => {
    describe('GIVEN a recipe title', () => {
        it('WHEN recipeTitle is not undefined THEN should generate a slug', () => {
            const recipeTitle = 'Delicious Pasta Recipe'
            const expectedSlug = 'delicious-pasta-recipe'
    
            const result = generateSlugAction({ recipeTitle })
    
            expect(result).to.include(expectedSlug)
        })
    })
})