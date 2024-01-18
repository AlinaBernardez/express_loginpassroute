const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const routes = require('./routes');
const session = require('express-session');
const middlewares = require('./middlewares');
const bodyParser = require('body-parser');

middlewares.setupAPP(app);
routes.setup(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: process.env.PALABRA_SECRETA || 'secretoSuperSecreto',
    resave: false,
    saveUninitialized: true,
}));

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});