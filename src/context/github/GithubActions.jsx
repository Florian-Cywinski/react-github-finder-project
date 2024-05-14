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
