export const actionTypes = {
  FAILURE: 'FAILURE',
  LOAD_GLOBAL: 'LOAD_GLOBAL',
  LOAD_TESTIMONIAL: 'LOAD_TESTIMONIAL',
  LOAD_CONFIGURATOR: 'LOAD_CONFIGURATOR',
  GLOBAL_SUCCESS: 'GLOBAL_SUCCESS',
  TESTIMONIAL_SUCCESS: 'TESTIMONIAL_SUCCESS',
  CONFIGURATOR_SUCCESS: 'CONFIGURATOR_SUCCESS'
};

export const failure = error => ({
  type: actionTypes.FAILURE,
  error
});

export const loadData = actionType => ({
  type: actionType
});

export const loadDataSuccess = (data, actionType) => ({
  type: actionType,
  data
});
