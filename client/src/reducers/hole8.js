const hole8Reducer = (state=[0,0], action) => {
  switch(action.type){
    case 'HOLE8UP':
      return state=action.payload;
    case 'HOLE8HIT':
      return state=[state[0],(state[1]-action.payload)];
    default:
      return state;
  }
};

export default hole8Reducer;