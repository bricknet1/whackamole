const hole6Reducer = (state=[0,0,0], action) => {
  switch(action.type){
    case 'HOLE6UP':
      return state=action.payload;
    case 'HOLE6HIT':
      return state=[state[0],(state[1]-action.payload),state[2]];
    default:
      return state;
  }
};

export default hole6Reducer;