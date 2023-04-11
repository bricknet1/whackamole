const coinsReducer = (state = 0, action) => {
  switch(action.type){
    case 'COINSSET':
      return state=action.payload;
    default:
      return state;
  }
}

export default coinsReducer;