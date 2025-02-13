// import {useState} from 'react'
// import Cookies from 'js-cookie'
// import {useHistory, useNavigate} from 'react-router-dom'

// import './index.css'

// const LoginForm = () => {
//   const [username, setUsername] = useState('')
//   const [password, setPassword] = useState('')
//   const [showSubmitError, setShowSubmitError] = useState(false)
//   const [errorMsg, setErrorMsg] = useState('')
  
//   const history = useHistory()
//   const naviagte = useNavigate()

//   const onSubmitSuccess = jwtToken => {
//     Cookies.set('jwt_token', jwtToken, {expires: 30})
//     history.replace('/')
//   }

//   const onSubmitFailure = errorMsg => {
//     setShowSubmitError(true)
//     setErrorMsg(errorMsg)
//   }

//   const submitForm = async event => {
//     event.preventDefault()
//     const userDetails = {username, password}
//     const url = 'https://apis.ccbp.in/login'
//     const options = {
//       method: 'POST',
//       body: JSON.stringify(userDetails),
//     }
//     const response = await fetch(url, options)
//     const data = await response.json()
//     if (response.ok) {
//       onSubmitSuccess(data.jwt_token)
//     } else {
//       onSubmitFailure(data.error_msg)
//     }
//   }

//   const jwtToken = Cookies.get('jwt_token')
//   if (jwtToken !== undefined) {
//     return naviagte('/')
//   }

//   return (
//     <div className="login-form-container">
//       <img
//         src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
//         className="login-website-logo-mobile-img"
//         alt="website logo"
//       />
//       <img
//         src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
//         className="login-img"
//         alt="website login"
//       />
//       <form className="form-container" onSubmit={submitForm}>
//         <img
//           src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
//           className="login-website-logo-desktop-img"
//           alt="website logo"
//         />
//         <div className="input-container">
//           <label className="input-label" htmlFor="username">
//             USERNAME
//           </label>
//           <input
//             type="text"
//             id="username"
//             className="username-input-field"
//             value={username}
//             onChange={e => setUsername(e.target.value)}
//             placeholder="Username"
//           />
//         </div>
//         <div className="input-container">
//           <label className="input-label" htmlFor="password">
//             PASSWORD
//           </label>
//           <input
//             type="password"
//             id="password"
//             className="password-input-field"
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//             placeholder="Password"
//           />
//         </div>
//         <button type="submit" className="login-button">
//           Login
//         </button>
//         {showSubmitError && <p className="error-message">*{errorMsg}</p>}
//       </form>
//     </div>
//   )
// }

// export default LoginForm


import { useState } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

import './index.css'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showSubmitError, setShowSubmitError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  
  const navigate = useNavigate() // Use useNavigate instead of useHistory

  const onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, { expires: 30 })
    navigate('/') // Corrected navigation function
  }

  const onSubmitFailure = errorMsg => {
    setShowSubmitError(true)
    setErrorMsg(errorMsg)
  }

  const submitForm = async event => {
    event.preventDefault()
    const userDetails = { username, password }
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      onSubmitSuccess(data.jwt_token)
    } else {
      onSubmitFailure(data.error_msg)
    }
  }

  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    navigate('/') // Ensure correct redirection
    return null
  }

  return (
    <div className="login-form-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        className="login-website-logo-mobile-img"
        alt="website logo"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
        className="login-img"
        alt="website login"
      />
      <form className="form-container" onSubmit={submitForm}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="login-website-logo-desktop-img"
          alt="website logo"
        />
        <div className="input-container">
          <label className="input-label" htmlFor="username">
            USERNAME
          </label>
          <input
            type="text"
            id="username"
            className="username-input-field"
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="Username"
          />
        </div>
        <div className="input-container">
          <label className="input-label" htmlFor="password">
            PASSWORD
          </label>
          <input
            type="password"
            id="password"
            className="password-input-field"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
        {showSubmitError && <p className="error-message">*{errorMsg}</p>}
      </form>
    </div>
  )
}

export default LoginForm
