import authentication, { hooks } from 'feathers-authentication';
import local from 'feathers-authentication-local';
import jwt from 'feathers-authentication-jwt';

const setupService = () => {
    return function() {
        const app = this;

        app.configure(authentication({
            service: '/api/users',
            entity: 'user',
            secret: 'insertAw3s0m3S3cr3t3Here',
            path: '/api/authentication',
            local: {
                usernameField: 'username',
            },
        }))
        .configure(local())
        .configure(jwt())
        .service('/api/authentication').hooks({
            before: {
                create: [hooks.authenticate(['jwt', 'local'])],
                find: [hooks.authenticate('jwt')],
            },
            after: {
    
            }
        });
    }
};

export default setupService;