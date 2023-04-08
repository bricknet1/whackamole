const attackValueReducer = (state = 1, action) => {
  switch(action.type){
    case 'ATTACKVALUESET':
      return state=action.payload;
    default:
      return state;
  }
}

export default attackValueReducer;