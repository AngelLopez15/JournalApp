import React from 'react'
import { Link } from 'react-router-dom'

export const LoginScreen = () => {
  return (
    <>
      <p className="auth__title">Login</p>
      <form>
        <input 
          type="text"
          placeholder="Email"
          name="email"
          className="auth__input"
        />
        <input 
          type="password"
          placeholder="password"
          name="password"
          className="auth__input"
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
