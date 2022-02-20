import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import { getCustomerByDni } from '../selectors/customers'

import AppFrame from '../components/AppFrame'
import CustomerEdit from '../components/CustomerEdit'
import CustomerData from '../components/CustomerData'

class CustomerContainer extends Component {
    // DUDA  //
    // const params = useParams()

    handleSubmit = values => {
      console.log(JSON.stringify(values))
    }

   renderBody = () => (
     <Route path='/customers/:dni/edit' children={
      ({ match }) => {
        const CustomerControl = match ? CustomerEdit : CustomerData;
        return (<CustomerControl {...this.props.customer} onSubmit={this.handleSubmit} />) 
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
          this.renderBody(this.props.dni,this.props.customer.name)
        }
        >
        </AppFrame>
      </div>
    )
  }
}

CustomerContainer.propsTypes = {
  dni: PropTypes.string.isRequired,
  customer: PropTypes.array.isRequired
}

const mapStateToProps = (state, props) => ({
  customer: getCustomerByDni(state,props)
})

export default connect(mapStateToProps)(CustomerContainer)