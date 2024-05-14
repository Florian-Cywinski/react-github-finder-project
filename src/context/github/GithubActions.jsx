import axios from 'axios'
const GITHUB_URL = import.meta.env.VITE_APP_GITHUB_URL
// const GITHUB_TOKEN = import.meta.env.VITE_APP_GITHUB_TOKEN

// delete axios.defaults.headers.common["Authorization"]
const github = axios.create({
  baseURL: GITHUB_URL,
  // headers: { Authorization: `token ${GITHUB_TOKEN}` },
  })

// Get search results
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  })

  const response = await github.get(`/search/users?${params}`)  // To make a GET-Request
  return response.data.items
}

// Get user and repos
export const getUserAndRepos = async (login) => {
  const params = new URLSearchParams({sort: 'created', per_page: 10})   // To just get the 10 latest repos

  const [user, repos] = await Promise.all([         // Promise.all to be able to make two requests (user, repos) at the same time
    // github.get(`/users/${login}`),               // user request
    // github.get(`/users/${login}/repos`),         // repos request
    github.get(`/users/${login}`),                  // user request
    github.get(`/users/${login}/repos?${params}`),  // repos request  (params to get the 10 latest repos)
  ])

  return { user: user.data, repos: repos.data }
}