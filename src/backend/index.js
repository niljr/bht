import startServer from './startServer';

const runServer = async () => {
    const app = await startServer();
    app.listen(3001, ()=> console.log('Port started at http://localhost:3001'));
}

runServer();