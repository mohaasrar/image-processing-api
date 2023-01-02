import express from 'express';


const routes: express.Router = express.Router();



routes.get(
  '/',
  (request: express.Request, response: express.Response): void => {
   
    response.send(
      '<h1>Welcome to Image Processing API</h1>'
    );
  }
);

export default routes;
