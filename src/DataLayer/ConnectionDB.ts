import moongose from 'mongoose';

export default class DataBase {

    private connectDB:string;

    constructor(connectDB: string) {
        this.connectDB = connectDB;
    }

    conectarDB() {
        const uri = this.connectDB;

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