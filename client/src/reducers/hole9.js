const hole9Reducer = (state=[0,0], action) => {
  switch(action.type){
    case 'HOLE9UP':
      return state=action.payload;
    case 'HOLE9HIT':
      return state=[state[0],(state[1]-action.payload)];
    default:
      return state;
  }
};

export default hole9Reducer;