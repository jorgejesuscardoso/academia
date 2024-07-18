import express = require('express');
import dotenv = require('dotenv');
import cors = require('cors');
import 'express-async-errors';
import path = require('path');
import routes from './routes';

dotenv.config();

class App {
    private app: express.Express;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    private config(): void {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use('/publicacaos/img', express.static('uploads/publicacao'));
        this.app.use('/eventos/img', express.static('uploads/evento'));
        this.app.use('/lembretes/img', express.static('uploads/lembrete'));
    }

    private routes(): void {
        this.app.use(routes);
        this.app.get('/', (req, res) => {
            res.status(200).json('Hello World!');
        });
    }

    public start(PORT: string | number): void {
        this.app.listen(PORT, () => {
            console.log(`O servidor está rodando na porta: ${PORT}`);
        });
    }
}

export default App;
