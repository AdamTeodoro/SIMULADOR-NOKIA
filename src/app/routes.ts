import express from 'express';
import { CodeController } from '../app/controllers/codeController';


export const router = express.Router();

//Configurando Cors
router.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão
    res.header("Access-Control-Allow-Origin", "http://localhost:3000/");
	
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
	
    next();
});

//Recebe os valores separados do front-end e decodifica
router.post('/decode', CodeController.decode);

//Carrega a página home
router.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home/home.html');
});
