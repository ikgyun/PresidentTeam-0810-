
const initialState = {
  type: 'all',
  search: null,
  keyword: null,
  rows: 20,
  page: 1,
  pageblock: [],
  endpage: null,
  list: [],
}



const SHOW_LIST_REQUEST = 'SHOW_LIST_REQUEST'
const SHOW_LIST_SUCCESS = 'SHOW_LIST_SUCCESS'
const SHOW_LIST_ERROR = 'SHOW_LIST_ERROR'

export const ShowListAction = (data) => {
  return async (dispatch) => {
    dispatch(ShowListRequest());
    try {
      const result = data;
      console.log(data);
      result.success === true
        ? dispatch(ShowListSuccess(result))
        : dispatch(ShowListError())
    } catch (e) {
      dispatch(ShowListError())
    }
  }
}


export const ShowListRequest = () => {
  return {
    type: SHOW_LIST_REQUEST,
  }
}
export const ShowListSuccess = (data) => {
  return {
    type: SHOW_LIST_SUCCESS,
    data: data,
  }
}
export const ShowListError = () => {
  return {
    type: SHOW_LIST_ERROR,
  }
}


const reducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {

    case SHOW_LIST_REQUEST:
      return {
        ...state,
        loadding: true,

      }
    case SHOW_LIST_SUCCESS:
      console.log(action.data)
      return {
        ...state,
        list: [...action.data.results],
        page: action.data.page,
        pageblock: action.data.pageblock,
        endpage: action.data.totalPage,
        loadding: false,
      }
    case SHOW_LIST_ERROR:
      return {
        ...state,
        loadding: false,
      }
    default:
      return state
  }
}

export default reducer
