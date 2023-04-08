const hole1Reducer = (state=[0,0], action) => {
  switch(action.type){
    case 'HOLE1UP':
      return state=action.payload;
    case 'HOLE1HIT':
      return state=[state[0],(state[1]-action.payload)];
    default:
      return state;
  }
};

export default hole1Reducer;