const GITHUB_URL = import.meta.env.VITE_APP_GITHUB_URL
// const GITHUB_TOKEN = import.meta.env.VITE_APP_GITHUB_TOKEN

// Get search results
export const searchUsers = async (text) => {   // text is the typed in text - export to be able to call it from the component (UserSearch.jsx)

  const params = new URLSearchParams({q: text})   // text is the typed in text

  // const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
  //   headers: {
  //     Authorization: `token ${GITHUB_TOKEN}`
  //   }
  // })
  // Without using a Token
  const response = await fetch(`${GITHUB_URL}/search/users?${params}`)  // params is the typed in text -> the search parameter in the url

  const { items } = await response.json()   // items are the destructured data wanted

  return items
}

// Get single user
export const getUser = async (login) => {   // login is the username

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
    return data    
  }

}

// Get user repos
export const getUserRepos = async (login) => {   // login is the username

  const params = new URLSearchParams({sort: 'created', per_page: 10})   // To just get the 10 latest repos

  // const response = await fetch(`${GITHUB_URL}/users/${login}/repos`, {     // https://api.github.com/users/bradtraversy/repos
  //   headers: {
  //     Authorization: `token ${GITHUB_TOKEN}`
  //   }
  // })
  // Without using a Token
  const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`)  // params are the search parameters

  const data = await response.json()   
  return data
}
