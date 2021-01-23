import express, { Application } from 'express';
import { urlencoded, json } from 'body-parser';
import dotenv from 'dotenv';
import fileUpload from 'express-fileupload';
import { initPages } from './pages';
import './shared/database';
import { initAuth } from './shared/auth';
import { errorHandler } from './shared/helpers/errorHandler';

dotenv.config();

const app: Application = express();

app.use(express.static('public'));
app.use(fileUpload({
  abortOnLimit: true,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
}));
app.use(urlencoded({ extended: true }));
app.use(json());

initAuth(app);

app.set('view engine', 'ejs');
initPages(app);

app.use(errorHandler);

const { PORT = 8080 } = process.env;
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}!`);
});
