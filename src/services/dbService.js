function dbService(app, collectionName, service){
    app.use(`/api/${collectionName}`, service);
    return app.service(`/api/${collectionName}`)
}

export default dbService;