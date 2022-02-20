import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'
// import { connect } from 'react-redux'
import { setPropsAsInitial } from '../helpers/setPropsAsInitial'

const CustomerEdit = ({ name, dni, age }) => {
  return (
    <>
        <h2>Edit Client</h2>
        <form action="">
          <div>
            <label htmlFor="name">Nombre</label>
            <Field name='name' component='input' type='text' ></Field>
          </div>
          <div>
            <label htmlFor="dni">DNI</label>
            <Field name='dni' component='input' type='text' ></Field>
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <Field name='age' component='input' type='number' ></Field>
          </div>
          <button type='submit'>Send</button>
        </form>
        <h3>Nombre: {name} / DNI: {dni} / Age: {age} </h3>
    </>
  )
}

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
}

export default setPropsAsInitial(
  reduxForm({ form: 'CustomerEdit' })
  (CustomerEdit)
)
