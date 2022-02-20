import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'
// import { connect } from 'react-redux'
import { setPropsAsInitial } from '../helpers/setPropsAsInitial'
import CustomersActions from './CustomersActions'

// field validation (have priority)
const isRequired = (value) => (
  !value && 'este es un campo requerido'
)

const isNumber = value => (
  isNaN(Number(value)) && 'El campo debe ser un numero'
)

const validate = values => {
  // global validation
  const error = {}

  if(!values.name) {
    error.name = 'El campo nombre es requerido'
  }
  if(!values.dni) {
    error.dni = 'El campo dni es requerido'
  }

  return error
}

const MyField = ({ input, meta, type, label, name }) => (
  <div>
    <label htmlFor={name} > {label} </label>
    <input {...input} type={!type ? 'text' : type} ></input>
      {
        meta.touched && meta.error && <span> {meta.error} </span>
      }
  </div>
)

const CustomerEdit = ({ name, dni, age, handleSubmit, submitting }) => {
  return (
    <>
        <h2>Edit Client</h2>
        <form onSubmit={handleSubmit} >
          <Field name='name' label='Name' component={MyField} 
            type='text' validate={isRequired} ></Field>
          <Field name='dni' label='Dni' component={MyField}  
            type='text' validate={[isRequired, isNumber]} ></Field>         
          <Field name='age' label='Age' component={MyField}  
            type='number' validate={isNumber} ></Field>         
          <CustomersActions>
            <button type='submit' disabled={submitting} >Aceptar</button>
          </CustomersActions>
        </form>
        {/* <h3>Nombre: {name} / DNI: {dni} / Age: {age} </h3> */}
    </>
  )
}

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
}

export default setPropsAsInitial(
  reduxForm({ form: 'CustomerEdit', validate })
  (CustomerEdit)
)
