import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'
import { Prompt } from 'react-router-dom'
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

const toNumber = value => ( value && Number(value) )

class CustomerEdit extends Component { 

  componentDidMount() {
    if(this.txt) {
      this.txt.focus()
    }
  }

  renderMyField = ({ input, meta, type, label, name, withFocus }) => {
    const controls = { ...input, value: input['value'] || '' }
    
    return (
      <div>
        <label htmlFor={name} > {label} </label>
        <input 
          {...controls} 
          type={!type ? 'text' : type} 
          ref={withFocus && (txt => this.txt = txt)}
        />
        {
          meta.touched && meta.error && <span> {meta.error} </span>
        }
      </div>
    )
  }

  render() {
    const { handleSubmit, submitting, 
    onBack, pristine, submitSucceed } = this.props 
    return (
    <>
        <h2>Edit Client</h2>
        {/* <input type="text" ref={txt => this.txt = txt} /> */}
        <form onSubmit={handleSubmit} >
          <Field 
            name='name' label='Name' component={this.renderMyField} 
            type='text' validate={isRequired} withFocus // withFocus = true
          >
          </Field>
          <Field 
            name='dni' label='Dni' component={this.renderMyField}  
            type='text' validate={[isRequired, isNumber]} 
          >
          </Field>         
          <Field 
            name='age' label='Age' component={this.renderMyField}  
            type='number' validate={isNumber} parse={toNumber} 
          >
          </Field>         
          <CustomersActions>
            <button type='submit' disabled={submitting || pristine} >
              Aceptar
            </button>
            <button onClick={onBack} type='button' disabled={submitting} >
              Cancelar
            </button>
          </CustomersActions>
          <Prompt
          when={!pristine && !submitSucceed}
          message='Se perderan los datos si continua'
          ></Prompt>
        </form>
        {/* <h3>Nombre: {name} / DNI: {dni} / Age: {age} </h3> */}
    </>
    )
  }
}

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired
}

export default setPropsAsInitial(
  reduxForm({ form: 'CustomerEdit', validate })
  (CustomerEdit)
)
