import {takeEvery,call,put} from 'redux-saga/effects';

function get(url){
    return fetch(url).then(res=>res.json())
}
function* getData(){
    let res = yield call(get,'/server/data.json')
    console.log(res)
    let n = yield put({
        type:'update',
        payload:res.code
    })
    console.log(n)
}
export default function* rootSaga(){
    yield [takeEvery('updateAsync',getData)]
}