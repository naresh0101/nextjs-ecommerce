import { useState } from 'react'
import Header from '../components/header'
import AppContext from '../context/AppContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [blogs, setBlogs] = useState([1, 2])

  return <AppContext.Provider
    value={{
      state: {
        blogs
      },
      setBlogs
    }}
  >
    <>
      <Header />
      <Component {...pageProps} />
    </>
  </AppContext.Provider>
}

export default MyApp
