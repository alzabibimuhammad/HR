// ** React Imports
import { createContext, useEffect, useState } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Axios
import axios from 'axios'

// ** Config
import authConfig from 'src/configs/auth'

import toast from 'react-hot-toast';
import { width } from '@mui/system';

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
      const storedToken = localStorage?.getItem('accessToken')
      setUser(JSON.parse(localStorage?.getItem('userData')))

      setLoading(false)
    }
    initAuth()

  }, [])


  const handleLogin = (params, errorCallback) => {
    axios
      .post(process.env.NEXT_PUBLIC_BASE_URL+'/api/login', params)
      .then(async response => {
        localStorage.setItem('accessToken', response.data?.data?.authorization.token);
        localStorage.setItem('userData', JSON.stringify(response.data?.data?.user));
        localStorage.setItem('userInfo', JSON.stringify(response.data?.data?.user_info));
         const returnUrl = router.query.returnUrl
         setUser(response.data.data?.user)
         const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'
         router.replace(redirectURL)
         toast.success(`${response.data.message} `, {

           duration: 10000,
           className: "full-width-toast",
         });

      })
       .catch(err => {

        toast.custom(<div style={{backgroundColor:'#fff',width:'100%',  display:"flex", justifyContent:'end'}}>Hello World</div>);
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
