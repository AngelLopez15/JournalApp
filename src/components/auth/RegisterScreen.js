import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import validator from 'validator'

export const RegisterScreen = () => {

  const [formValues, handleInputChange] = useForm({
    name:'Angel',
    email:'correo@correo.com',
    password:'123456',
    password2:'123456'
  })

  const {name, email,password,password2} = formValues

  const handleRegister = (e) => {
    e.preventDefault()
    
    if (isFormValid()){

    }

  } 

  // validando los datos del formulario
  const isFormValid = () =>{
    // validando el nombre, email y contraseña
    if(name.trim().length===0){

    }else if(!validator.isEmail(email)){

    }else if(password.length<5 || password !== password2){

    }


    return true
  }

  return (
    <>
      <p className="auth__title">Register</p>
      <form onSubmit={handleRegister}>

        <div className="auth__alert-error">
          Hola Mundo
        </div>

        <input 
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
        <input 
          type="text"
          placeholder="Email"
          name="email"
          className="auth__input"
          autoComplete="off"
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
        <input 
          type="password"
          placeholder="Confirm passsword"
          name="password2"
          className="auth__input"
          value={password2}
          onChange={handleInputChange}
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
