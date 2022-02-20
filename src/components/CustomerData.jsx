import React from 'react'
import PropTypes from 'prop-types'

import { CUSTOMER_VIEW } from '../constants/permissions'
import { accessControl } from '../helpers/accessControl'

import CustomersActions from './CustomersActions'


const CustomerData = ({ id, name, dni, age, onBack, isDeleteAllow, onDelete }) => {
  return (
    <>
        <div className="customer-data">
            <h2>Datos del cliente</h2>
            <div>
                <strong>Nombre <i>{name}</i></strong>
            </div>
            <div>
                <strong>DNI <i>{dni}</i></strong>
            </div>
            <div>
                <strong>Edad <i>{age}</i></strong>
            </div>
            <CustomersActions>
                <button onClick={onBack} type='button' >Back</button>
                {
                    isDeleteAllow && 
                    <button type='button' onClick={() => onDelete(id)} >Eliminar</button>
                }
            </CustomersActions>
        </div>
    </>
  )
}

CustomerData.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired,
    isDeleteAllow: PropTypes.bool,
    onDelete: PropTypes.func,
}

export default accessControl([CUSTOMER_VIEW])(CustomerData)