import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'         // <About />
import NotFound from './pages/NotFound'
import { GithubProvider } from './context/github/GithubContext'

function App() {
  return (
    <GithubProvider>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Navbar />
          <main className='container mx-auto px-3 pb-12'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />       {/* if the user is on localhost:3000/about it will be shown everything what is within <About /> */}
              <Route path='/notfound' element={<NotFound />} />
              <Route path='/*' element={<NotFound />} />        {/* /* for the case the user types in a url that doesn't exist */}
            </Routes>
          </main>
          <Footer/>
        </div>
      </Router>
    </GithubProvider>
  )
}

export default App
