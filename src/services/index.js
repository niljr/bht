import boardingHouseService from './boardingHouseService/server';
import usersService from './usersService/server';
import authService from './auth';

const setupAllService = (db) => {
    return function(){
        const app = this;
        app
        .configure(authService())
        .configure(boardingHouseService(db))
        .configure(usersService(db));
    }
}

export default setupAllService;