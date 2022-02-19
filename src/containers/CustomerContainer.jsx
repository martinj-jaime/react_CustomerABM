import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
// import { useParams } from 'react-router-dom'
import { getCustomerByDni } from '../selectors/customers'

import AppFrame from '../components/AppFrame'

class CustomerContainer extends Component {
    // DUDA  //
    // const params = useParams()

  render() {  
    return (
      <div>
        <AppFrame
        header={`Cliente ${this.props.dni} `}
        body={
          <>
            <p>Datos del Cliente</p>
            <p> {this.props.customer.name} </p>
          </>
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