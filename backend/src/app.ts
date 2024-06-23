import express = require('express');
import dotenv = require('dotenv');
import cors = require('cors');
import 'express-async-errors';
import routes from './routes';

dotenv.config();

class App {
    private app: express.Express;
    
    constructor() {
        this.app = express();
        this.app.use(express.json());
        this.app.use(cors());
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
