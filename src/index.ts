import cors from 'cors';
import bodyParser from 'body-parser';
import * as dotenv from "dotenv";
import Server from "./BussinesLayer/Server";
import DataBase from './DataLayer/ConnectionDB'
import flightsRoutes from "./BussinesLayer/Routes/index";
import compression from 'compression';

dotenv.config();

const server = new Server(Number(process.env.PORT));
server.app.use(cors());
server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());
server.app.use('/airoport',flightsRoutes);
server.app.use(compression());


const database = new DataBase(Number(process.env.DB_PORT) || 0, process.env.DB_USER || '', process.env.DB_PASS || '', process.env.DB_HOST || '');
database.conectarDB()
    .then((conexion: any) => {
        if (conexion == true) {
            console.log('Base de datos iniciada correctamente')
            server.startServer();
        } else {
            console.log('Error al iniciar a la base de datos')
        }
    })
    
    .catch((err: any) => {
        console.log('Error al iniciar a la base de datos')
    })





