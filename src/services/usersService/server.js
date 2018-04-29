import dbService from '../dbService';
import feathersMongo from 'feathers-mongodb';
import transform from '../../hooks/transform';
import User from '../../models/User';
import hooks from 'feathers-authentication-hooks';
import local from 'feathers-authentication-local';
import keyValidation from '../../hooks/keyValidation';
import { iff, discard } from 'feathers-hooks-common';

// const isValidKey = key = hook => hook.app.service('/api/boardingHouse').find().then(x => x.filter(y => y.key === hook.data.key)).length > 0 ? true : false

const setupUsersService = (db) => {
    return function () {
        const app = this;
        const collectionName = 'users';

        dbService(app, collectionName,
            feathersMongo({
                Model: db.collection(collectionName)
            }))
            .before({
                create: [
                    keyValidation(),
                    local.hooks.hashPassword({
                        passwordField: 'password'
                    }),
                    (hook) => {
                        hook.data.role = 'owner'
                    }
                ],
                find: [
                    hooks.hasRoleOrRestrict({
                        roles: ['admin'],
                        fieldName: 'role'
                    }),
                ],
                get: [
                    hooks.hasRoleOrRestrict({
                        roles: ['admin'],
                        fieldName: 'role'
                    }),
                    // discard('password', 'username')

                ]
            })
            .after({
                find: [transform(User)],
                get: [discard('password', 'username')]
            })
    }
}

export default setupUsersService;