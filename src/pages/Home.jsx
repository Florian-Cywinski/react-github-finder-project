function Home() {
  return (
    <div>
      <h1 className="text-6xl">Welcome</h1>
      {import.meta.env.VITE_APP_GITHUB_TOKEN}   {/* Just to see if it is possible to output data from the .env file. */}
    </div>
  )
}

export default Home
