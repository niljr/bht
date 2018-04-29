import feathers from 'feathers';
import hooks from 'feathers-hooks';
import feathersSocketio from 'feathers-socketio';
import socketioClient from 'socket.io-client';
import authenticationClient from 'feathers-authentication-client';
import setupAllServices from './services';

const url = `${location.protocol}//${location.host}`;

const client = feathers();


client.configure(feathersSocketio(socketioClient(url)))
  .configure(hooks())
  .configure(authenticationClient({ storage: window.localStorage }))
  .configure(setupAllServices())
  .authenticate();

window.client = client;
export default client;