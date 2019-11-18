import axios from 'axios';
import { GET_COUNTRIES, DELETE_COUNTRY, ITEMS_LOADING } from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getCountriesByName = (name) => (dispatch, getState) => {
  dispatch(setItemsLoading());
  axios
    .get(`/api/countries/${name}`,tokenConfig(getState))
    .then(res =>
      dispatch({
        type: GET_COUNTRIES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteItem = id => (dispatch, getState) => {
  axios
    .delete(`/api/countries/${id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: DELETE_COUNTRY,
        payload: id
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};
