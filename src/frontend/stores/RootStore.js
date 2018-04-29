class RootStore {
    constructor(client, domainStore){
        this.client = client;
        this.domainStore = domainStore;
    }
}

export default RootStore;