// Snippets de código para poder componer el programa

//Usado?: 
  // const middlewares = require('./middlewares');
//--- Explicación: 

// -------------------------------------------------------------------------------------

//Usado?:  
// const bodyParser = require('body-parser');
//--- Explicación:

// -------------------------------------------------------------------------------------

//Usado?: 
// const session = require('express-session');
//--- Explicación:

// -------------------------------------------------------------------------------------

//Usado?: YES
// const express = require('express');
//--- Explicación:
// Requerimos express y creamos variable
// -------------------------------------------------------------------------------------

//Usado?: YES
// const bodyParser = require('body-parser');
//--- Explicación:

// -------------------------------------------------------------------------------------

//Usado?: 
// const session = require('express-session');
//--- Explicación:

// -------------------------------------------------------------------------------------

//Usado?: YES
// const dotenv = require('dotenv');
//--- Explicación:

// -------------------------------------------------------------------------------------

//Usado?: 
// const middlewares = require('./middlewares');
//--- Explicación:

// -------------------------------------------------------------------------------------

//Usado?: 
// const routes = require('./routes');
//--- Explicación:

// -------------------------------------------------------------------------------------

//Usado?: YES
// dotenv.config();
//--- Explicación:

// -------------------------------------------------------------------------------------

//Usado?: YES
// const app = express();
//--- Explicación:

// -------------------------------------------------------------------------------------

//Usado?: YES
// const PORT = 4000;
//--- Explicación:

// -------------------------------------------------------------------------------------

//Usado?: YES
// const dotenv = require('dotenv');
//--- Explicación:

// -------------------------------------------------------------------------------------

//Usado?: YES
// dotenv.config();
//--- Explicación:

// -------------------------------------------------------------------------------------

//Usado?:
// middlewares.setupApp(app);
//--- Explicación: 

// -------------------------------------------------------------------------------------

//Usado?:
// routes.setup(app);
//--- Explicación: 
//Llama a la función setup 
// -------------------------------------------------------------------------------------

//Usado?: YES
// const validarPalabraMiddleware = (req, res, next) => {
//   const palabraCorrecta = process.env.PALABRA_SECRETA || '';

//   if (req.body.palabra === palabraCorrecta) {
//     req.session.palabraSecreta = req.body.palabra;
//     next();
//   } else {
//     res.redirect('/?error=1');
//   }
// };
//--- Explicación: 
// comprueba si la palabra coincide con el secreto

// -------------------------------------------------------------------------------------


//Usado?: YES
// const setup = (app) => {
//   app.get('/', (req, res) => {
//     const mensajeError = req.query.error
//       ? (req.query.error === '1' ? 'Palabra incorrecta, inténtalo de nuevo.' : 'No estás logado.')
//       : '';
//     if (req.session.palabraSecreta) {
//       return res.redirect('/profile');
//     }
//   //Aquí va código dentro
// })}
//--- Explicación: 
//Lanza la ruta principal y maneja los errores de la pallabara recibida y la sesión.

// -------------------------------------------------------------------------------------


//Usado?:
// res.send(`
//   <html>
//     <body>
//       <h1>Página de Inicio</h1>
//       <p>${mensajeError}</p>
//       <form method="post" action="/profile">
//         <label for="palabra">Introduce la palabra:</label>
//         <input type="text" name="palabra" required>
//         <button type="submit">Enviar</button>
//       </form>
//     </body>
//   </html>
// `);
//--- Explicación: 
//Envia contenido HTML en respuesta a una petición

// -------------------------------------------------------------------------------------


// const setupAPP = (app) => {
//   app.use(bodyParser.urlencoded({ extended: true }));
//   app.use(session({
//     secret: 'secretoSuperSecreto',
//     resave: false,
//     saveUninitialized: true,
//   }));
// };

//Usado?: YES
// app.post('/profile', middlewares.validarPalabraMiddleware, (req, res) => {
//   res.send(`
//     <h1>Ruta del Perfil</h1>
//     <form method="post" action="/logout">
//       <button type="submit">Log Out</button>
//     </form>
//   `);
// });
//--- Explicación: 
//Valida la palabra del input y lleva al profile
// -------------------------------------------------------------------------------------

//Usado?:
// app.use(bodyParser.urlencoded({ extended: true }));

//--- Explicación: 

// -------------------------------------------------------------------------------------

//Usado?:
// app.use(session({
//   secret: process.env.PALABRA_SECRETA || 'secretoSuperSecreto',
//   resave: false,
//   saveUninitialized: true,
// }));

//--- Explicación: 
//para validar el inicio de sesión 
// -------------------------------------------------------------------------------------

//Usado?: YES
// app.listen(PORT, () => {
//   console.log(`Servidor en ejecución en http://localhost:${PORT}`);
// });
//--- Explicación: 
//Crea el servidor 
// -------------------------------------------------------------------------------------

//Usado?: YES
// const verificarSesionMiddleware = (req, res, next) => {
//   if (req.session.palabraSecreta) {
//     next();
//   } else {
//     res.redirect('/?error=2');
//   }
// };
//--- Explicación: 
//Verifica la sesion o redirige 
// -------------------------------------------------------------------------------------


//Usado?: YES
// app.get('/profile', middlewares.verificarSesionMiddleware, (req, res) => {
//   res.send(`
//     <h1>Ruta del Perfil (Sesión activa)</h1>
//     <form method="post" action="/logout">
//       <button type="submit">Log Out</button>
//     </form>
//   `);
// });
//--- Explicación: 
//  Define la ruta que lleva al profile si la sesión está iniciada
// -------------------------------------------------------------------------------------


//Usado?: YES
// app.post('/logout', (req, res) => {
//   req.session.destroy((err) => {
//     if (err) {
//       console.error('Error al cerrar sesión:', err);
//     }
//     res.redirect('/');
//   });
// });
//--- Explicación: 
// Define la ruta para realizar el logout de la sesión
// -------------------------------------------------------------------------------------

//Usado?:
// module.exports = {
//   setup,
// };
//--- Explicación:
//exporta función 
// -------------------------------------------------------------------------------------

//Usado?: YES
// module.exports = {
//   validarPalabraMiddleware,
//   verificarSesionMiddleware,
//   setupAPP,
// };
//--- Explicación:
//exporta funciones
// -------------------------------------------------------------------------------------

