import {createStore,applyMiddleware} from 'redux'
import reducers from './reducers'
import createSaga from 'redux-saga';
import sagas from './sagas'
const sagaMiddleware = createSaga();

const middleWare = applyMiddleware(sagaMiddleware);
let store = createStore(reducers,middleWare);
sagaMiddleware.run(sagas)//只有被store中间件拦截后才能run，否则报错
export default  store