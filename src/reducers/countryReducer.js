import {
  ADD_COUNTRY,
  DELETE_COUNTRY
} from '../actions/types';

const initialState = {
  countries: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_COUNTRY:
      return {
        ...state,
        countries: [action.payload, ...state.items]
      };
    case DELETE_COUNTRY:
      return {
        ...state,
        countries: state.countries.filter(item => item._id !== action.payload)
      };
    default:
      return state;
  }
}
