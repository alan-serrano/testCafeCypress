import { Selector } from 'testcafe';
import { almacenMainLogin, otroLogin } from './login';

fixture `Getting Started`;

test('My first test', async t => {
    await t
        .useRole(almacenMainLogin)
        .navigateTo('http://tugerente.me:3005/pedido')
        // Click botón +pedido
        .click('.button-register')
        // Seleccionar primer cliente
        .click(
            Selector('input')
                .withAttribute('placeholder', 'Escribe el nombre o el nit del cliente')
                .parent()
                .parent()
                .child('span.k-select')
        )
        .click(Selector('.k-popup li.k-item:nth-child(1)'))
        // Click a siguiente
        .click(Selector('form button.nextButton'))
        // Rellenar Producto/Servicio
        .click(Selector('form tbody tr td:nth-child(2) span.k-select'))
        .click(Selector('.k-popup li.k-item:nth-child(1)'))
        // Rellenar Cantidad
        .typeText(Selector('form tbody tr td:nth-child(8) input'), '1')
        // Rellenar Precio
        .typeText(Selector('form tbody tr td:nth-child(9) input'), '1')
        // Click a siguiente
        .click(Selector('form button.nextButton'))
        // Seleccionar primer vendedor
        .click(
            Selector('input')
                .withAttribute('placeholder', 'Escribe el nombre del vendedor')
                .parent()
                .parent()
                .child('span.k-select')
        )
        .click(Selector('.k-popup li.k-item:nth-child(1)'))
        // Click a registrar
        .click(Selector('form button.nextButton'))
        .wait(3000)
    ;
});