const timeReducer = (state=60, action) => {
  switch(action.type){
    case 'CLOCKUP':
      return state+action.payload;
    case 'CLOCKDOWN':
      return state-action.payload;
    case 'CLOCKSET':
      return state=action.payload;
    default:
      return state;
  }
};

export default timeReducer;