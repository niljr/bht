import BoardingHouse from '../../models/BoardingHouse';
import transform from '../../hooks/transform';
const setupBoardingHouseService = () => {
    return function () {
        const app = this;
        app.service('/api/boardingHouse')
            .before({

            })
            .after({
                find: [transform(BoardingHouse)]
            })
    }
}

export default setupBoardingHouseService;
