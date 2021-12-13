import * as controllerUsers from '../controllers/controllerUsers.js'
import * as middlewaresUsers from '../middlewares/middlewaresUsers.js'
const routesUsers = (app) =>{
    app.get('/login',controllerUsers.viewLogin)
    app.post('/login',middlewaresUsers.authBuyer,controllerUsers.login)
    app.get('/register',controllerUsers.viewRegister)
    app.post('/register',controllerUsers.register)
}

export default routesUsers