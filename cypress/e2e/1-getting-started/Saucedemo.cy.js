describe('Sauce Demo Sort Items Test', () => {
    beforeEach(() => {
        cy.wait(1000)
      cy.visit('https://www.saucedemo.com/')
      cy.get('[data-test=username]').type('standard_user')
      cy.get('[data-test=password]').type('secret_sauce')
      cy.get('[data-test=login-button]').click()
    })
  
    it('should sort items by Name (A -> Z)', () => {
      cy.get('[data-test=product_sort_container]').select('az')
      cy.get('[data-test=product_sort_container]').should('have.value', 'az')
      cy.get('[data-test=inventory_item_name]').then($items => {
        const itemNames = [...$items].map(item => item.innerText)
        const sortedNames = itemNames.sort()
        expect(itemNames).to.deep.equal(sortedNames)
      })
    })
  
    it('should sort items by Name (Z -> A)', () => {
      cy.get('[data-test=product_sort_container]').select('za')
      cy.get('[data-test=product_sort_container]').should('have.value', 'za')
      cy.get('[data-test=inventory_item_name]').then($items => {
        const itemNames = [...$items].map(item => item.innerText)
        const sortedNames = itemNames.sort().reverse()
        expect(itemNames).to.deep.equal(sortedNames)
      })
    })
  })
  