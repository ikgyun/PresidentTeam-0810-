import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import user from './user'
import category from './category'
import board from './board'


const reducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        return {
          ...state,
          ...action.payload
        }
      default:
        return state
    }
  },
  user, board, category,
})

export default reducer