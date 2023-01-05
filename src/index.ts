import express from 'express';
import logger from './utilities/logger';
import routes from './routes/index';

const app = express();
const port = 3000;
app.use(logger);
app.use('/api', routes);
app.listen(port, () => {
  console.log(`Server Started:${port}`);
});

export default app;
