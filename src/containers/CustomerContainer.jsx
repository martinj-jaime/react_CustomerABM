import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'

import { fetchCustomers } from '../actions/fetchCustomers'
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
      console.log(JSON.stringify(values))
    }

    handleOnBack = () => {
      console.log('algo')
      this.props.history.goBack()
    }


   renderBody = () => (
     <Route path='/customers/:dni/edit' children={
      ({ match }) => {
        if(this.props.customer) {
          const CustomerControl = match ? CustomerEdit : CustomerData;
          return (
            <CustomerControl {...this.props.customer} 
            onSubmit={this.handleSubmit} 
            onBack={this.handleOnBack}
            />
          ) 
        }
        return null
      }
     } 
     />
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
  customer: PropTypes.array.isRequired,
  fetchCustomers: PropTypes.func.isRequired
}

const mapStateToProps = (state, props) => ({
  customer: getCustomerByDni(state,props)
})

export default withRouter(connect
  (mapStateToProps, { fetchCustomers })
  (CustomerContainer)
)