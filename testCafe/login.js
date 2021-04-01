import { Role, Selector } from 'testcafe';
const urlLogin = 'http://auth.tugerente.me:3000/login'

export const almacenMainLogin = createRole('almacen@gmail.com', 'mufasa123' );

function createRole(user, pass) {
    return Role(urlLogin, async t => {
        await t
            .typeText(await Selector('.pui-form__input').withAttribute('type', 'email'), user)
            .typeText(await Selector('.pui-form__input').withAttribute('type', 'password'), pass)
            .click(Selector('.buttonTugerente').withAttribute('type', 'submit'))
    }, { preserveUrl: true })
}
