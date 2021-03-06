import { takeLatest, delay, call, fork, all, put } from "redux-saga/effects"
import { LOG_IN_REQUEST, LOG_IN_FAILURE, LOG_IN_SUCCESS, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, LOG_OUT_REQUEST, LOG_OUT_FAILURE, LOG_OUT_SUCCESS } from "../reducer/user"
import axios from 'axios';


/////////////////////////////////////////////////////////////////////////////

function signupAPI(data) {
    return axios.put('/user/signup', data)
}

function* signup(action) {
    try {  
        //  const result = yield call(signupAPI, action.data)
        yield delay(1000);
        yield put({
            type : SIGN_UP_SUCCESS,
            data : action.data
        })
        
    } catch(err) {
        console.error(err)
        yield put({
            type : SIGN_UP_FAILURE,
            // error : err.response.data
        })
    }
}

function* watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, signup);
}

/////////////////////////     회원가입    /////////////////////////////////

function loginAPI(data) {
    return axios.get(`/user/login/${data}`)
}

function* login(action) {
    try {  
        //  const result = yield call(loginAPI, action.data)
        yield delay(1000);
        yield put({
            type : LOG_IN_SUCCESS,
            data : action.data
        })
        
    } catch(err) {
        console.error(err)
        yield put({
            type : LOG_IN_FAILURE,
            // error : err.response.data
        })
    }
}

function* watchLogin() {
    yield takeLatest(LOG_IN_REQUEST, login);
}
/////////////////////////     로그인    /////////////////////////////////////


function logoutAPI() {
    return axios.delete('/user/logout')
}

function* logout(action) {
    try {  
        //  const result = yield call(logoutAPI, action.data)
        yield delay(1000);
        yield put({
            type : LOG_OUT_SUCCESS,
            // data : action.data
        })
        
    } catch(err) {
        console.error(err)
        yield put({
            type : LOG_OUT_FAILURE,
            // error : err.response.data
        })
    }
}

function* watchLogout() {
    yield takeLatest(LOG_OUT_REQUEST, logout);
}
/////////////////////////     로그아웃    /////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////
export default function* userSaga() {
    yield all([
        fork(watchLogin),
        fork(watchSignUp),
        fork(watchLogout),
    ])
}