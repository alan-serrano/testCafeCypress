import { almacenLogin } from '../support/roles';

describe('Página de Ventas', () => {

    before(() => {
        // runs once before all tests in the block
            cy.login(almacenLogin)
    
            // now that we're logged in, we can visit
            // any kind of restricted route!
            // our auth cookie should be present
            cy.getCookie('LobbyCookie').should('exist')
    })


    it('Crear un pedido', function () {
        cy.visit('/pedido')

        // Click botón +pedido
        cy.get('.button-register').click()

        // Seleccionar primer cliente
        cy.get('[placeholder="Escribe el nombre o el nit del cliente"]')
            .parent()
            .parent()
            .children('span.k-select')
            .click()
        ;
        cy.get('.k-popup li.k-item:nth-child(1)').click()

        // Click a siguiente
        cy.get('form button.nextButton').click()

        // Rellenar Producto/Servicio
        cy.get('form tbody tr td:nth-child(2) span.k-select').click()
        cy.get('.k-popup li.k-item:nth-child(1)').click()

        // Rellenar Cantidad
        cy.get('form tbody tr td:nth-child(8) input').first().type('1')
        // Rellenar Precio
        cy.get('form tbody tr td:nth-child(9) input').first().type('1')
        // Click a siguiente
        cy.get('form button.nextButton').click()
        // Seleccionar primer vendedor
        cy.get('[placeholder="Escribe el nombre del vendedor"]')
            .parent()
            .parent()
            .children('span.k-select')
            .click()
        ;

        cy.get('.k-popup li.k-item:nth-child(1)').click()
        // Click a registrar
        cy.get('form button.nextButton').click()
    })
})