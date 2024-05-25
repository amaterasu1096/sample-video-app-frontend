import { createConsumer } from '@rails/actioncable';

const CableApp = {};
const token = localStorage.getItem('token');
CableApp.cable = createConsumer(`${process.env.REACT_APP_WEBSOCKET_URL}?token=${token}`);

export default CableApp;
