import axios from 'axios'
const GITHUB_URL = import.meta.env.VITE_APP_GITHUB_URL
// const GITHUB_TOKEN = import.meta.env.VITE_APP_GITHUB_TOKEN

// delete axios.defaults.headers.common["Authorization"]
const github = axios.create({
  baseURL: GITHUB_URL,
  // headers: {
  //   'Content-Type': null
  // }
  // headers: { Authorization: ""}
  // headers: { Authorization: `token ${GITHUB_TOKEN}` },
  // transformRequest: (data, headers) => {
    // Remove all shared headers
    // delete headers.common;
    // or just the auth header
    // delete headers.common['Authorization'];
    // delete headers['Authorization'];
    // }
  })
  // github.defaults.headers.common = {}
  // delete github.defaults.headers.common["Authorization"]
// delete github.defaults.headers.common['Authorization'];

// const awsAxios = axios.create({
//   transformRequest: (data, headers) => {
//       // Remove all shared headers
//       delete headers.common;
//       // or just the auth header
//       delete headers.common.Authorization;
//   }
// });



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
    github.get(`/users/${login}/repos?${params}`),  // repos request
  ])

  return { user: user.data, repos: repos.data }
}

// // Get search results
// export const searchUsers = async (text) => {   // text is the typed in text - export to be able to call it from the component (UserSearch.jsx)

//   const params = new URLSearchParams({q: text})   // text is the typed in text

//   // const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
//   //   headers: {
//   //     Authorization: `token ${GITHUB_TOKEN}`
//   //   }
//   // })
//   // Without using a Token
//   const response = await fetch(`${GITHUB_URL}/search/users?${params}`)  // params is the typed in text -> the search parameter in the url

//   const { items } = await response.json()   // items are the destructured data wanted

//   return items
// }

// // Get single user
// export const getUser = async (login) => {   // login is the username

//   // const response = await fetch(`${GITHUB_URL}/users/${login}`, {
//   //   headers: {
//   //     Authorization: `token ${GITHUB_TOKEN}`
//   //   }
//   // })
//   // Without using a Token
//   const response = await fetch(`${GITHUB_URL}/users/${login}`)  // // params is the typed in text

//   if (response.status === 404) {
//     window.location = '/notfound'
//   } else {
//     const data = await response.json()   // items are the destructured data wanted
//     return data    
//   }

// }

// // Get user repos
// export const getUserRepos = async (login) => {   // login is the username

//   const params = new URLSearchParams({sort: 'created', per_page: 10})   // To just get the 10 latest repos

//   // const response = await fetch(`${GITHUB_URL}/users/${login}/repos`, {     // https://api.github.com/users/bradtraversy/repos
//   //   headers: {
//   //     Authorization: `token ${GITHUB_TOKEN}`
//   //   }
//   // })
//   // Without using a Token
//   const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`)  // params are the search parameters

//   const data = await response.json()   
//   return data
// }
