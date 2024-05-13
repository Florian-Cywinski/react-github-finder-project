import PropTypes from 'prop-types'
import RepoItem from './RepoItem'

function RepoList({ repos }) {  // repos is an array of all repos from the wanted user
  return (
    <>
      <div className='rounded-lg shadow-lg card bg-base-100'>
        <div className='card-body'>
          <h2 className='text-3xl my-4 font-bold card-title'>Latest Repositories</h2>
            {repos.map((repo) => (
              // <h3 key={repo.id}>{repo.name}</h3>
            <RepoItem key={repo.id} repo={repo} />
          ))}
        </div>
      </div>
    </>
  )
}

RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
}

export default RepoList
