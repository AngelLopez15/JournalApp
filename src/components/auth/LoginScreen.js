import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { useDispatch } from 'react-redux'
import { startLoginEmailPassword, startGoogleLogin } from '../../actions/auth'

export const LoginScreen = () => {

  // Hook de Redux para hacer un dispatch
  const dispatch = useDispatch()
  
  const [formValues, handleInputChange, reset] = useForm({
    email:'correo@correo.com',
    password:'123456'
  })

  const {email, password} = formValues

  const handleLogin = (e) =>{
    e.preventDefault()
    dispatch(startLoginEmailPassword(email,password))
  }

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin())
  }

  return (
    <>
      <p className="auth__title">Login</p>
      <form onSubmit={handleLogin}>
        <input 
          type="text"
          placeholder="Email"
          name="email"
          className="auth__input"
          value={email}
          onChange={handleInputChange}
        />
        <input 
          type="password"
          placeholder="password"
          name="password"
          className="auth__input"
          value={password}
          onChange={handleInputChange}
        />

        <button
          type="submit"
          className="btn btn-primary btn-block"
        >
          Ingresar
        </button>
        
        <div className="auth__social-network">
          <p>Entra con cuenta de Google</p>
          <div 
              className="google-btn"
              onClick={handleGoogleLogin}
          >
            <div className="google-icon-wrapper">
                <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
            </div>
            <p className="btn-text">
                <b>Sign in with google</b>
            </p>
          </div>
          <Link to="/auth/register" className="link">Crear una cuenta</Link>
        </div>
      </form>
    </>
  )
}
