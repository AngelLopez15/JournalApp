import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
  return (
    <>
      <p className="auth__title">Register</p>
      <form>
        <input 
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input"
          autoComplete="off"
        />
        <input 
          type="text"
          placeholder="Email"
          name="email"
          className="auth__input"
          autoComplete="off"
        />
        <input 
          type="password"
          placeholder="password"
          name="password"
          className="auth__input"
        />
        <input 
          type="password"
          placeholder="Confirm passsword"
          name="password2"
          className="auth__input"
        />
        <button
          type="submit"
          className="btn btn-primary btn-block"
        >
          Registrar
        </button>
        
        <Link
          to="/auth/login"
          className="link"
        >
          Ya estoy registrado
        </Link>
      </form>
    </>
  )
}
