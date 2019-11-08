import * as Actions from '../Actions';

const INITIAL_STATE = {
  count: 0
};

export const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Actions.COUNTER_INCREMENT:
      return {
        ...state,
        count: state.count + action.step
      };

    case Actions.COUNTER_DECREMENT:
      return {
        ...state,
        count: state.count - action.step
      };

    default:
      return state;
  }
};
