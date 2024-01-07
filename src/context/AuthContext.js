// ** React Imports
import { createContext, useEffect, useState } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Axios
import axios from 'axios'

// ** Config
import authConfig from 'src/configs/auth'

import toast from 'react-hot-toast';

// ** Defaults
const defaultProvider = {
  user: null,
  loading: false,
  setUser: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve()
}
const AuthContext = createContext(defaultProvider)

const AuthProvider = ({ children }) => {
  // ** States
  const [user, setUser] = useState(defaultProvider.user)
  const [loading, setLoading] = useState(defaultProvider.loading)

  // ** Hooks
  const router = useRouter()
  useEffect(() => {
    const initAuth = async () => {
      const storedToken = localStorage.getItem('accessToken')
      setUser(JSON.parse(localStorage.getItem('userData')))

      setLoading(false)
    }
    initAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const handleLogin = (params, errorCallback) => {
    axios
      .post('http://192.168.2.138:800/api/login', params)
      .then(async response => {
        localStorage.setItem('accessToken', response.data.data.data.token)
        localStorage.setItem('userData', JSON.stringify(response.data.data.data.user))

        const returnUrl = router.query.returnUrl
        setUser(response.data.data.data.user)

        const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'
        router.replace(redirectURL)
        toast.success(`${response.data.message} `, {
          position: "top-left",
          style: {
            backgroundColor: "green",
            width: "500px",
          },
        });
      })
      .catch(err => {
        toast.error(`${err.response.data.message} , ${err.response.data.data} `, {
          position: "top-left",
          style: {
            backgroundColor: "#e20d29",
            width: "500px",
          },
        });
      })
  }

  const handleLogout = () => {
    setUser(null)
    window.localStorage.removeItem('userData')
    window.localStorage.removeItem(authConfig.storageTokenKeyName)
    router.push('/login')
  }

  const values = {
    user,
    loading,
    setUser,
    setLoading,
    login: handleLogin,
    logout: handleLogout
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
