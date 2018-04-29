import feathersMongo from 'feathers-mongodb';
import hooks from 'feathers-authentication-hooks';
import dbService from '../dbService';
import transform from '../../hooks/transform';
import BoardingHouse from '../../models/BoardingHouse';
import generateRandomKey from '../../hooks/generateRandomKey';
import { populate, discard, isNot, iff } from 'feathers-hooks-common';

const setupBoardingHouseService = (db) => {
    return function () {
        const app = this;
        const collectionName = 'boardingHouse'
        const boardingHouseSchema = {
            include: [{
                service: '/api/users',
                nameAs: 'owner',
                childField: 'key',
                parentField: 'key',
            }]
        }
        const hasOwner = () => context => context.result.filter(x => x.owner !== null);

        dbService(app, collectionName, feathersMongo({ Model: db.collection(collectionName) }))
            .before({
                create: [
                    hooks.restrictToRoles({
                        roles: ['admin'],
                        fieldName: 'role'
                    }),
                    generateRandomKey()
                ]
            })
            .after({
                find: [
                    transform(BoardingHouse),
                    populate({ schema: boardingHouseSchema }),
                    // iff(
                    // hasOwner(),
                    // discard('owner.password', 'owner.username', 'owner.key', 'key'))
                    // iff(hasOwner(), discard('owner.password', 'owner.username', 'owner.key', 'key'))
                ],
                get: [
                    transform(BoardingHouse),
                    populate({ schema: boardingHouseSchema }),
                    // iff(hasOwner(), discard('owner.password', 'owner.username', 'owner.key', 'key'))
                    // discard('owner.password', 'owner.username', 'owner.key', 'key')
                ]
            })
    }
}

export default setupBoardingHouseService;