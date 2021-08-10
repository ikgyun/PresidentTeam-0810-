const initialState = {
  loadding: false,
  IsLogin: false,
  userid: null,
  nickname: null,
}



const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST'
const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR'
const USER_LOGOUT = 'USER_LOGOUT'

export const UserLoginAction = (data) => {
  return async (dispatch) => {
    dispatch(UserLoginRequest());
    try {
      const result = data;
      console.log(result)
      result.isUser === true
        ? dispatch(UserLoginSuccess(result))
        : dispatch(UserLoginError())
    } catch (e) {
      dispatch(UserLoginError())
    }
  }
}

export const UserLoginRequest = () => {
  return {
    type: USER_LOGIN_REQUEST,

  }
}
export const UserLoginSuccess = (data) => {
  return {
    type: USER_LOGIN_SUCCESS,
    data: data,

  }
}
export const UserLoginError = () => {
  return {
    type: USER_LOGIN_ERROR,

  }
}


export const UserLogoutAction = () => {
  return {
    type: USER_LOGOUT,
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case USER_LOGIN_REQUEST:
      return {
        ...state,
        loadding: true,

      }
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        IsLogin: true,
        userid: action.data.userid,
        nickname: action.data.nickname,
        loadding: false,
      }
    case USER_LOGIN_ERROR:
      return {
        ...state,
        loadding: false,
      }
    case USER_LOGOUT:
      return {
        ...state,
        IsLogin: false,
        userid:null,
        nickname:null,
      }
    default:
      return state
  }
}

export default reducer
