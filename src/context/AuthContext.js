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
      .post('http://91.144.20.117:6001/api/login', params)
      .then(async response => {
        localStorage.setItem('accessToken', response.data?.data?.authorization.token);
        localStorage.setItem('userData', JSON.stringify(response.data?.data?.user));
         const returnUrl = router.query.returnUrl
         setUser(response.data?.data?.user)
         const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'
         router.replace(redirectURL)
<<<<<<< HEAD
=======
         console.log(response)
>>>>>>> 4a81c8b5a9fd5b9d8b7beafb87cc015fd480857c
         toast.success(`${response.data.message} `, {
           position: "top-left",
           style: {
             backgroundColor: "green",
             width: "500px",
           },
         });
      })
       .catch(err => {
<<<<<<< HEAD
         toast.error(`${err?.response?.status === 401 ? "Unauthorized":err?.message}  `, {
=======
        console.log(err);
         toast.error(`${err.response.status === 401 ? "Unauthorized":err.message}  `, {
>>>>>>> 4a81c8b5a9fd5b9d8b7beafb87cc015fd480857c
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
