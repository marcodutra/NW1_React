import express from 'express';
const routes = express.Router();

routes.get('/', (request, response) => {
    return response.json({Message : 'Hello Word'});
});

export default routes;
