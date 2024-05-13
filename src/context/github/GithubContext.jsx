import { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer'

const GithubContext = createContext()

const GITHUB_URL = import.meta.env.VITE_APP_GITHUB_URL
// const GITHUB_TOKEN = import.meta.env.VITE_APP_GITHUB_TOKEN

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)   // [state, dispatch] is the output from the reducer   // dispatch := Versenden

  // Get search results
  const searchUsers = async (text) => {   // text is the typed in text
    setLoading()

    const params = new URLSearchParams({q: text})   // text is the typed in text

    // const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
    //   headers: {
    //     Authorization: `token ${GITHUB_TOKEN}`
    //   }
    // })
    // Without using a Token
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`)  // params is the typed in text -> the search parameter in the url

    const { items } = await response.json()   // items are the destructured data wanted

    dispatch({    // dispatch := Versenden  - to update the current (old) state (GithubReducer.jsx)
      type: 'GET_USERS',
      payload: items      // items are the destructured data wanted
    })
  }

  // Get single user
  const getUser = async (login) => {   // login is the username
    setLoading()

    // const response = await fetch(`${GITHUB_URL}/users/${login}`, {
    //   headers: {
    //     Authorization: `token ${GITHUB_TOKEN}`
    //   }
    // })
    // Without using a Token
    const response = await fetch(`${GITHUB_URL}/users/${login}`)  // // params is the typed in text

    if (response.status === 404) {
      window.location = '/notfound'
    } else {
      const data = await response.json()   // items are the destructured data wanted

      dispatch({    // dispatch := Versenden  - to update the current (old) state (GithubReducer.jsx)
        type: 'GET_USER',
        payload: data      // Single user that comes from the response
      })      
    }

  }

  // Get user repos
  const getUserRepos = async (login) => {   // login is the username
    setLoading()

    const params = new URLSearchParams({sort: 'created', per_page: 10})   // To just get the 10 latest repos

    // const response = await fetch(`${GITHUB_URL}/users/${login}/repos`, {     // https://api.github.com/users/bradtraversy/repos
    //   headers: {
    //     Authorization: `token ${GITHUB_TOKEN}`
    //   }
    // })
    // Without using a Token
    const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`)  // params are the search parameters

    const data = await response.json()   

    dispatch({    // dispatch := Versenden  - to update the current (old) state (GithubReducer.jsx)
      type: 'GET_REPOS',
      payload: data      
    })
  }

  // Set Loading
  const setLoading = () => dispatch({type: 'SET_LOADING'})

  // Clear Users
  const clearUsers = () => dispatch({    // dispatch := Versenden  - to update the current (old) state (GithubReducer.jsx)
    type: 'CLEAR_USERS',
  })

  return (
    <GithubContext.Provider value={{users: state.users, user: state.user, loading: state.loading, repos: state.repos, searchUsers, clearUsers, getUser, getUserRepos}}>
        {children}
    </GithubContext.Provider>
  )
}

export default GithubContext
