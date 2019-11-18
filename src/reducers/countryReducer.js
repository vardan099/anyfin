import {
  GET_COUNTRIES,
  ADD_COUNTRY,
  DELETE_COUNTRY,
  ITEMS_LOADING
} from '../actions/types';

const initialState = {
  countries: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        countries: action.payload,
        loading: false
      };
    case DELETE_COUNTRY:
      return {
        ...state,
        countries: state.items.filter(item => item._id !== action.payload)
      };
    case ADD_COUNTRY:
      return {
        ...state,
        countries: [action.payload, ...state.items]
      };
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
