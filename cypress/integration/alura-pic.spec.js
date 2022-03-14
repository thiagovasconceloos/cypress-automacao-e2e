describe('Login e registro de usuarios alura pic', () => {

    beforeEach(() => {
      cy.visit('https://alura-fotos.herokuapp.com')

     })

    it('verifica mensagens validacao', () => {


        cy.contains('a', 'Register now').click();
        cy.contains('button','Register').click();
        cy.contains('ap-vmessage', 'Email is required').should('be.visible')
        cy.contains('button','Register').click();
        cy.contains('ap-vmessage', 'Full name is required').should('be.visible')
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible')
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible')



    })


    
    it('verifica mensagem de e-mail invalido', () => {


        cy.contains('a', 'Register now').click();
        cy.contains('button','Register').click();
        cy.get('input[formcontrolname="email"]').type("Thiago")

        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible')
       



    })


    it('verifica mensagem de senha invalida', () => {


        cy.contains('a', 'Register now').click();
        cy.contains('button','Register').click();
        cy.get('input[formcontrolname="password"]').type("123")
        cy.get('input[formcontrolname="email"]').focus()
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible')
       



    })


    it('verifica mensagem de nome invalido', () => {


        cy.contains('a', 'Register now').click();
        cy.contains('button','Register').click();
        cy.get('input[formcontrolname="fullName"]').type("t")
        cy.get('input[formcontrolname="email"]').focus()
        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible')
       



    })

    it('verifica mensagem de usuario existente', () => {


        cy.contains('a', 'Register now').click();
        cy.contains('button','Register').click();
        cy.get('input[formcontrolname="userName"]').type("flavio")
        cy.get('input[formcontrolname="email"]').focus()
        cy.contains('ap-vmessage', 'Username already taken').should('be.visible')
       



    })




})