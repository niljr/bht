import setupUsersService from '../services/usersService/client';
import setupBoardingHouseService from '../services/boardingHouseService/client';

const setupAllServices = () => {
    return function(){
        const app = this;
        app.configure(setupUsersService())
        .configure(setupBoardingHouseService());
    }
}

export default setupAllServices;