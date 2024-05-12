const alertReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ALERT':
      return action.payload   // payload: { msg, type }
    case 'REMOVE_ALERT':
      return null   // To set it back to its initial value of null
    default:
      return state
  }
}

export default alertReducer
