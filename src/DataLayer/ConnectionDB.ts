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
        const uri = `mongodb+srv://AAaP5Fe2sJsUuhjx:h9yIOYGFbMwzKRnx@clusterp2bd.7qro4.mongodb.net/P2BD`;

        return new Promise(async (resolve, reject) => {
            try {
                await moongose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
                resolve(true)
            }catch{
                reject(false)
            }
        })


    }

}