import { Router } from 'express';

import DeveloperController from './app/controllers/DeveloperController';

const routes = new Router();

routes.get('/', DeveloperController.index);
routes.get('/:id', DeveloperController.index);
routes.post('/', DeveloperController.store);
routes.put('/:id', DeveloperController.update);
routes.delete('/:id', DeveloperController.delete);

export default routes;
