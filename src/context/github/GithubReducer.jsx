const githubReducer = (state, action) => {  // state is the current (old) state   // action -> dispatch := Versenden
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,   // To spread all of the current state apart
        users: action.payload,    // payload (in this case) are the fetched data - payload is the convention -> it could also be users in this case (GithubContext.jsx)
        loading: false,
      }
    default:
      return state
  }
}

export default githubReducer
