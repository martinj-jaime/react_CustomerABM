import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import { SubmissionError } from 'redux-form'

import { fetchCustomers } from '../actions/fetchCustomers'
import { updateCustomer } from '../actions/updateCustomer'
import { getCustomerByDni } from '../selectors/customers'

import AppFrame from '../components/AppFrame'
import CustomerEdit from '../components/CustomerEdit'
import CustomerData from '../components/CustomerData'


class CustomerContainer extends Component {
    // DUDA  //
    // const params = useParams()

    componentDidMount() {
      // console.log(this.props.customer.name)
      if(!this.props.customer) {
        this.props.fetchCustomers()
      }
    }

    handleSubmit = values => {
      // console.log(JSON.stringify(values))
      const { id } = values
      return this.props.updateCustomer(id, values)
      .then(r => {
        if(r.error && r.payload.error) { // r.error
          throw new SubmissionError(r.payload.error) // r.payload
        }
      })
    }

    handleOnSubmitSuccess = () => {
      this.props.history.goBack()
    }

    handleOnBack = () => {
      this.props.history.goBack()
    }

    handleOnDelete = () => {
      console.log('handleOnDelete')
    }

    renderCustomerControl = (isEdit, isDelete) => {
      if(this.props.customer) {
        const CustomerControl = isEdit ? CustomerEdit : CustomerData;
        return (
          <CustomerControl {...this.props.customer} 
          onSubmit={this.handleSubmit} 
          onSubmitSuccess={this.handleOnSubmitSuccess}
          onBack={this.handleOnBack}
          isDeleteAllow={!!isDelete}
          onDelete={this.handleOnDelete}
          />
        ) 
      }
      return null
    }

   renderBody = () => (
     // rutas anidadas / if else
    <Route path='/customers/:dni/edit' children={
      ({ match: isEdit }) => (
        <Route path='/customers/:dni/del' children={
          ({ match: isDelete }) => (this.renderCustomerControl(isEdit, isDelete))
        } />
      )
    } />
   )

  render() {  
    return (
      <div>
        <AppFrame
        header={`Cliente ${this.props.dni} `}
        body={
          this.renderBody()
        }
        >
        </AppFrame>
      </div>
    )
  }
}

CustomerContainer.propsTypes = {
  dni: PropTypes.string.isRequired,
  customer: PropTypes.array,
  fetchCustomers: PropTypes.func.isRequired,
  updateCustomer: PropTypes.func.isRequired,
}

const mapStateToProps = (state, props) => ({
  customer: getCustomerByDni(state,props)
})

export default withRouter(connect
  (mapStateToProps, { fetchCustomers, updateCustomer })
  (CustomerContainer)
)