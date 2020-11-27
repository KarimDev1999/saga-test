import { call, put, takeEvery, } from "redux-saga/effects";
import { setUser } from '../actions/user';
import { fetchUserData } from '../../api/userAPI';

function* getUserData(action) {
    try {
        const data = yield call(fetchUserData);
        yield put(setUser(data.results[0]));

    } catch (e) {
        console.log(e);
    }
}

export default function* userSaga() {
    yield takeEvery('REQUEST_USER_DATA', getUserData);
}