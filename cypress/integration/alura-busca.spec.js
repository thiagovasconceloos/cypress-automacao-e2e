



describe('Alura busca curso', ()=> {
  

    beforeEach(()=>{

     cy.visit('https://alura.com.br')



    })

   it('Buscar curso de java ',()=>{

    cy.get('#header-barraBusca-form-campoBusca').type("Java")
    cy.get('.header-barraBusca-form-submit').click();
    cy.get('h4.busca-resultado-nome').invoke('text').should('include','Java')


   })








})