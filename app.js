import express from 'express';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import hbs from 'hbs';
import { register } from 'node:module';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT;
//vista
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname,'views','partials'));

app.use(express.static('public'))

//controlador
app.get('/', (request, response) => {        //argumentos de get(ruta, callback o funcion flecha) )
    response.render('home',{
        nombre: 'Oscar',
        titulo: 'Curso de Node'
    });
});

app.get('/elements', (request, response) => {        
    response.sendFile(path.resolve(__dirname,'public/elements.html')) 
});

app.get('/generic.html', (request, response) => {        
    response.render('generic');
});

app.get(/.*/, (request, response) => {          
    response.sendFile(path.resolve(__dirname,'public/404.html'));
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});  //puerto donde va a escuchar el servidor


