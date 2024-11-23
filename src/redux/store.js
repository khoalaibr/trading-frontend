import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Importar como un miembro nombrado
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
