import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

import AppFrame from '../components/AppFrame'
import CustomersList from '../components/CustomersList'
import CustomersActions from '../components/CustomersActions'

const customers = [
    {   
        'dni': '27000000',
        'name': 'Juan Perez',
        'age': 37
    },
    {
        'dni': '30000000',
        'name': 'Luis Martinez',
        'age': 35
    },
    {
        'dni': '33000000',
        'name': 'Otro',
        'age': 32
    }
]

const CustomersContainer = props => {
    const navigate = useNavigate()

    const onClickHandleAddNew = () => {
        navigate('/customers/new')
    }

    const renderBody = customers => (
        <>
        <CustomersList 
        customers={customers} 
        urlPath={'customer/'} 
        />
        <CustomersActions>
            <button onClick={onClickHandleAddNew} >
                Nuevo Cliente
            </button>
        </CustomersActions>
        </>
    )

  return (
    <div>
        <AppFrame
        header='Listado de Clientes'
        body={
            renderBody(customers)
        }
        />
    </div>
  )
}

CustomersContainer.propTypes = {}

export default CustomersContainer