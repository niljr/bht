import feathers from 'feathers';
import rest from 'feathers-rest';
import hooks from 'feathers-hooks';
import bodyParser from 'body-parser';
import socketio from 'feathers-socketio';
import { MongoClient } from 'mongodb';
import setupAllService from '../services/';
import path from 'path';

const app = feathers();

app.configure(rest())
    .configure(hooks())
    .configure(socketio())
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(feathers.static(path.join(process.cwd(), 'public')))
    ;

const startServer = async () => {
    const db = await MongoClient.connect('mongodb://localhost:27017/bh_system');
    app.configure(setupAllService(db));


    //dev
    // app.service('/api/boardingHouse').remove(null);
    // const bhouse = await app.service('/api/boardingHouse').create({ name: "regoo" });
    // console.log(bhouse);
    // app.service('/api/users').remove(null);
    // const adminUser = await app.service('/api/users').create(
    //     {
    //         key: bhouse.key,
    //         username: 'adminsirego',
    //         password: 'admin',
    //         role: 'admin'
    //     }
    // );
    // console.log(`${adminUser.username} has been created`);
    // // console.log(app.service('/api/users'))

    //prod
    return app;
}

export default startServer;
