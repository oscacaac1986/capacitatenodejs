const {MongoClient,ObjectId} = require('mongodb');
const {config} =require('../server');

const USER =encodeURIComponent(config.dbUser);
const PASSWORD= encodeURIComponent(config.dbpassword);
const DB_NAME= config.dbName;
const DB_PORT=config.dbPort;

const MONGO_URI=`mongodb://admin:12345@localhost:27017/?authMechanism=DEFAULT&authSource=video&retryWrites=true&w=majority`;


class MongoLib{
    constructor(){
        this.client=new MongoClient(MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true});
        this.dbName=DB_NAME;
    }

    connect(){
        if (!MongoLib.connection) {
            MongoLib.connect = new Promise((resolve,reject)=>{
                this.client.connect(err=>{
                    if (err) {
                        reject(err)
                    }

                    console.log('Conected succesfully to mongo');
                    resolve(this.client.db(this.dbName))
                })
            })
        }

        return MongoLib.connection;
    }
    
}