const hole5Reducer = (state=[0,0], action) => {
  switch(action.type){
    case 'HOLE5UP':
      return state=action.payload;
    case 'HOLE5HIT':
      return state=[state[0],(state[1]-action.payload)];
    default:
      return state;
  }
};

export default hole5Reducer;