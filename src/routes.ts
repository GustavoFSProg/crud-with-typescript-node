import Router from 'express'
import controller from '../src/controllers/UserController'

const routes = Router()

routes.get('/', controller.getAll)
routes.post('/register', controller.register)
routes.put('/update/:id', controller.update)
routes.delete('/delete/:id', controller.deleteUm)

export default routes
