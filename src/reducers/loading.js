import { Map as map } from 'immutable';
import { IS_LOAGIND } from '../actions-types/index';

const initialState = map({
  active: false,
})

function isLoading(state = initialState, action) {
  switch (action.type) {
    case IS_LOAGIND:
      return state.set('active', action.payload.value)
    default:
      return state
  }
}

export default isLoading;
