const githubReducer = (state, action) => {  // state is the current (old) state   // action -> dispatch := Versenden
  switch (action.type) {  // Here are all posible actions (e.g. GET_USERS) which are called at different points (GithubContext.jsx)
    case 'GET_USERS':
      return {
        ...state,   // To spread all of the current state apart
        users: action.payload,    // payload (in this case) are the fetched data - payload is the convention -> it could also be users in this case (GithubContext.jsx)
        loading: false,
      }
    case 'GET_USER_AND_REPOS':
      return {
        ...state,   // To spread all of the current state apart
        user: action.payload.user,    // payload (in this case) are the fetched data - payload is the convention -> it could also be user in this case (User.jsx)
        repos: action.payload.repos,    // payload (in this case) are the fetched data - payload is the convention -> it could also be repos in this case (User.jsx)
        loading: false,
      }
    case 'CLEAR_USERS':
      return {
        ...state,   // To spread all of the current state apart
        users: [],    // To set users to an empty array
      }  
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      }
    default:
      return state
  }
}

export default githubReducer
