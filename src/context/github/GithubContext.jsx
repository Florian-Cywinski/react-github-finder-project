import { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer'

const GithubContext = createContext()

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)   // [state, dispatch] is the output from the reducer   // dispatch := Versenden

  return (
    // <GithubContext.Provider value={{users: state.users, user: state.user, loading: state.loading, repos: state.repos, searchUsers, clearUsers, getUser, getUserRepos}}>
    <GithubContext.Provider value={{...state, dispatch}}>  {/* ...state to spread accross all the state values -> see the line above */}
        {children}
    </GithubContext.Provider>
  )
}

export default GithubContext
