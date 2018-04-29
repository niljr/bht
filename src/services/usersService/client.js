const setupUsersService = () => {
    return function (){
        const app = this;
        app.service('/api/users')
        .before({
            
        })
        .after({
            
        })
    }
}

export default setupUsersService;