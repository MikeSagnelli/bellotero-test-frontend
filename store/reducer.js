import { actionTypes } from './actions';

export const initState = {
  error: false,
  globalData: null,
  testimonialData: null,
  configuratorData: null
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.FAILURE:
      return {
        ...state,
        ...{ error: action.error }
      };

    case actionTypes.GLOBAL_SUCCESS:
      return {
        ...state,
        ...{ globalData: action.data }
      };

    case actionTypes.TESTIMONIAL_SUCCESS:
      return {
        ...state,
        ...{ testimonialData: action.data }
      };

    case actionTypes.CONFIGURATOR_SUCCESS:
      return {
        ...state,
        ...{ configuratorData: action.data }
      };

    default:
      return state;
  }
};

export default reducer;
