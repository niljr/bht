import { action, computed, observable, runInAction } from 'mobx';

class UsersStore {
    constructor(client) {
        this.client = client;
        this.loginUser();
    }

    @observable _userCredentials = {
        username: '',
        password: ''
    };

    @observable _regUser = {
        firstName: '',
        middleName: '',
        lastName: '',
        username: '',
        password: '',
        contactNumber: '',
        emailAddress: '',
        key: ''
    }

    @observable _user = undefined;

    async validateToken(token) {
        const payload = await this.client.passport.verifyJWT(token);
        const user = await this.client.service('/api/users').get(payload.userId);
        return user;
    }

    @action
    handleSignin = async () => {
        try {
            console.log(this._userCredentials)
            const result = await this.client.authenticate(Object.assign({}, this._userCredentials, { strategy: 'local' }));
            const user = await this.validateToken(result.accessToken);
            runInAction(() => {
                this._user = user;
            });
        } catch (e) {
        }
    }

    @action
    onChange = (e, value) => {
        this._regUser[e.target.name] = value;
    }

    @action
    onSigninChange = (e, value) => {
        this._userCredentials[e.target.name] = value;
    }

    @action
    loginUser = async () => {
        try {
            const result = await this.client.passport.getJWT();
            const user = await this.validateToken(`${result}`);
            runInAction(() => {
                this._user = user;
            });
        } catch (e) {
        }
    }

    @action
    handleSignout = async () => {
        try {
            await this.client.logout();
            runInAction(() => {
                this._user = {
                    username: '',
                    password: ''
                };
            });
        } catch (err) {
        }
    }

    @action
    registerUser = async () => {
        try {
            const reg = await this.client.service('/api/users').create(this.regUser);
            runInAction(() => {
                console.log(reg.firstName + " has been created");
            })
            this._regUser = {
                firstName: '',
                middleName: '',
                lastName: '',
                username: '',
                password: '',
                contactNumber: '',
                emailAddress: '',
                key: ''
            }
        } catch (e) {

        }
    }

    @computed
    get regUser() {
        return this._regUser;
    }

    @computed
    get loggedInUser() {
        return this._user;
    }

}

export default UsersStore;