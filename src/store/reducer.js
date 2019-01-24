const initialState = {
  appPersons: []
}

const reducer = (state = initialState, action) =>{
  if(action.type === 'ADD_PERSON'){
    return {
      ...state,
      appPersons: state.appPersons.concat({
        id: Math.random(),
        name: 'Mihai',
        age: Math.floor(Math.random() * 40)
      })
    }
  }
  
  if(action.type === 'DELETE_PERSON'){
    const updatedPersonsArray = state.appPersons.filter(person => person.id !== action.personId);
    return {
      ...state,
      appPersons: updatedPersonsArray
    }
  }

  return state;
}

export default reducer;