const defenseValueReducer = (state = 1, action) => {
  switch(action.type){
    case 'DEFENSEVALUESET':
      return state=action.payload;
    default:
      return state;
  }
}

export default defenseValueReducer;