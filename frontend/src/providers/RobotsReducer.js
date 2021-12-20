export const intialCartState = { robots: []};
export const REDUCE_STOCK_VOL = 'reduceStock';
export const INCREASE_STOCK_VOL = 'increaseStock';

export const RobotsReducer = (state = intialCartState, action) => {

  switch(action.type) {
    case REDUCE_STOCK_VOL: {
      let findRobotIndex = state.robots.findIndex((cartItem) => cartItem.name === action.item.name);
      if(findRobotIndex!= -1) {
         state.robots[findRobotIndex].stock -= 1;
      }
      break;
    }
    case INCREASE_STOCK_VOL: {
      let findRobotIndex = state.robots.findIndex((cartItem) => cartItem.name === action.item.name);
      if(findRobotIndex!= -1) {
         state.robots[findRobotIndex].stock += 1;
      }
      break;
    }
    default:
      throw new Error();
  }
  return state;
}