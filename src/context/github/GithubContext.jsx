import { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer'

const GithubContext = createContext()

const GITHUB_URL = import.meta.env.VITE_APP_GITHUB_URL
const GITHUB_TOKEN = import.meta.env.VITE_APP_GITHUB_TOKEN

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: true
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)   // [state, dispatch] is the output from the reducer   // dispatch := Versenden

  const fetchUsers = async () => {
    // const response = await fetch(`${GITHUB_URL}/users`, {
    //   headers: {
    //     Authorization: `token ${GITHUB_TOKEN}`
    //   }
    // })
    // Without using a Token
    const response = await fetch(`${GITHUB_URL}/users`)

    const data = await response.json()

    dispatch({    // dispatch := Versenden  - to update the current (old) state
      type: 'GET_USERS',
      payload: data
    })
  }

  return (
    <GithubContext.Provider value={{users: state.users, loading: state.loading, fetchUsers}}>
        {children}
    </GithubContext.Provider>
  )
}

export default GithubContext
