const scoreReducer = (state = 0, action) => {
  switch(action.type){
    case 'SCOREUP':
      return state+action.payload;
    case 'SCORESET':
      return state=action.payload;
    default:
      return state;
  }
}

export default scoreReducer;