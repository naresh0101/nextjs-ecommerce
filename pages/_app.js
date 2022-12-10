import { useState } from 'react'
import Header from '../components/header'
import AppContext from '../context/AppContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [products, setProducts] = useState([1, 2])

  return <AppContext.Provider
    value={{
      state: {
        products
      },
      setProducts
    }}
  >
    <>
      <Header />
      <Component {...pageProps} />
    </>
  </AppContext.Provider>
}

export default MyApp
