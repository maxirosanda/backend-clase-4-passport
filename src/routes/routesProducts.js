import * as controllerProducts from '../controllers/controllerProducts.js'
import * as middlewaresUsers from '../middlewares/middlewaresUsers.js'

const routesProducts = (app) => {
    app.get('/productos',middlewaresUsers.authBuyer ,controllerProducts.viewProducts)
    app.get('/editproductos',middlewaresUsers.authSeller,controllerProducts.view)
    app.post('/editproductos',middlewaresUsers.authSeller,controllerProducts.create)
    app.delete('/editproductos',middlewaresUsers.authSeller,controllerProducts.del)
    app.put('/editproductos',middlewaresUsers.authSeller,controllerProducts.update)
}
export default routesProducts