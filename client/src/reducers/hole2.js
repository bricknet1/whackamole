const hole2Reducer = (state=[0,0], action) => {
  switch(action.type){
    case 'HOLE2UP':
      return state=action.payload;
    case 'HOLE2HIT':
      return state=[state[0],(state[1]-action.payload)];
    default:
      return state;
  }
};

export default hole2Reducer;