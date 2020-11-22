import moongose from 'mongoose';

export default class DataBase {

    private port: number;
    private user: string;
    private password: string;
    private hostDB: string;

    constructor(port: number, user: string, password: string, hostDB: string) {
        this.port = port;
        this.user = user;
        this.password = password;
        this.hostDB = hostDB;
    }

    conectarDB() {
        const uri = `mongodb://${this.user}:${this.password}@${this.hostDB}:${this.port}/Big_Data`;

        return new Promise(async (resolve, reject) => {
            try {
                await moongose.connect('mongodb://localhost:27017/Big_Data', { useNewUrlParser: true, useUnifiedTopology: true })
                resolve(true)
            }catch{
                reject(false)
            }
        })


    }

}