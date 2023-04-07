const healthReducer = (state=10, action) => {
  switch(action.type){
    case 'HEALTHUP':
      return state+action.payload;
    case 'HEALTHDOWN':
      return state-action.payload;
    case 'HEALTHSET':
      return state=action.payload;
    default:
      return state;
  }
};

export default healthReducer;