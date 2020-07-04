import produce from 'immer'

////////////////////////////////////////////////////////////////////////////

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

////////////////////////////////////////////////////////////////////////////

const initialState = {
    signUpLoading: false,
    signUpDone: false,
    signUpError: null,

    loginLoading: false, //로그아웃 동일
    loginDone: false, // 로그아웃 동일
    loginError: null, // 로그아웃 동일

    signUpInfo: [],
    me : {},
}


const reducer = (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case SIGN_UP_REQUEST:
                draft.signUpLoading = true;
                draft.signUpError = null;
                draft.signUpDone = false;
                break;

            case SIGN_UP_SUCCESS:
                draft.signUpLoading = false;
                draft.signUpDone = true;
                draft.signUpInfo.push(action.data);
                break;


            case SIGN_UP_SUCCESS:
                draft.signUpLoading = false;
                draft.signUpDone = true;
                draft.signUpError = action.error;
                break;

            //회원가입

            case LOG_IN_REQUEST:
                draft.loginLoading = true;
                draft.loginError = null;
                draft.loginDone = false;
                break;

            case LOG_IN_SUCCESS:
                draft.loginLoading = false;
                draft.loginDone = true;
                draft.me = action.data
                break;


            case LOG_IN_SUCCESS:
                draft.loginLoading = false;
                draft.loginDone = true;
                draft.loginError = action.error;
                break;

            //로그인

            case LOG_OUT_REQUEST:
                draft.loginLoading = true;
                draft.loginError = null;
                draft.loginDone = false;
                break;

            case LOG_OUT_SUCCESS:
                draft.loginLoading = false;
                draft.loginDone = true;
                draft.me = {};
                break;


            case LOG_OUT_SUCCESS:
                draft.loginLoading = false;
                draft.loginDone = true;
                draft.loginError = action.error;
                break;

            //로그인
        }
    })
}

export default reducer;