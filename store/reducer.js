import { actionTypes } from './actions';

export const initState = {
  error: false,
  activeRoute: global.activeRoute ? global.activeRoute : 0,
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

    case actionTypes.CHANGE_ROUTE:
      return {
        ...state,
        ...{ activeRoute: action.index }
      };

    default:
      return state;
  }
};

export default reducer;
