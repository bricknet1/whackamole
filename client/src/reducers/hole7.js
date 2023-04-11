const hole7Reducer = (state=[0,0,0], action) => {
  switch(action.type){
    case 'HOLE7UP':
      return state=action.payload;
    case 'HOLE7HIT':
      return state=[state[0],(state[1]-action.payload),state[2]];
    default:
      return state;
  }
};

export default hole7Reducer;