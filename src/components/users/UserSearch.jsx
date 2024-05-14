import { useState, useContext } from 'react'  // useContext to have access to the users array to see it's empty or not (to show the clear button if there are users)
import GithubContext from '../../context/github/GithubContext'  // To bring in the context file
import AlertContext from '../../context/alert/AlertContext'
import { searchUsers } from '../../context/github/GithubActions'  // {} because it's not a default export

function UserSearch() {
  const [text, setText] = useState('')

  const { users, dispatch } = useContext(GithubContext)  // To bring in users and searchUsers from GithubContext.jsx (GithubContext.Provider)
  const { setAlert } = useContext(AlertContext)  // To bring in setAlert from AlertContext.jsx

  const handleChange = (e) => setText(e.target.value)   // To save the typed in text

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (text === '') {
      setAlert('Please enter something', 'error')   // setAlert = (msg, type)
    } else {  // Search users
      dispatch({type: 'SET_LOADING'})
      const users = await searchUsers(text)
      dispatch({type: 'GET_USERS', payload: users})

      setText('')   // To set the state of text back to empty
    }
  }

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <div className='relative'>
              <input
                type='text'
                className='w-full pr-40 bg-gray-200 input input-lg text-black'  // input input-lg are daisyUI classes
                placeholder='Search'
                value={text}  // The typed in text
                onChange={handleChange}   // To save the typed in text in text
              />
              <button type='submit' className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'>Go</button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (  // if there is at least one user
        <div>
          <button onClick={() => dispatch({type: 'CLEAR_USERS'})} className='btn btn-ghost btn-lg'>Clear</button>
        </div>
      )}
    </div>
  )
}

export default UserSearch
