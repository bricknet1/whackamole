const defenseValueReducer = (state = 0, action) => {
  switch(action.type){
    case 'DEFENSEVALUESET':
      return state=action.payload;
    default:
      return state;
  }
}

export default defenseValueReducer;