import React from 'react'
import { Link } from 'react-router-dom'
import AppFrame from '../components/AppFrame'
import CustomersActions from '../components/CustomersActions'

const HomeContainer = props => {
  // const navigate = useNavigate()
  // == this.props.history.push()

  // const onClickHandler = () => (   
  //   navigate(`/customers`)
  // )

  return (
    <div>
      <AppFrame 
      header='Home'
      body={
        <div>
          Esta es la pantalla Inicial
          <CustomersActions>
            {/* <button onClick={onClickHandler} >Listado de Clientes</button> */}
            <Link to='/customers' >Listado de Clientes</Link>
          </CustomersActions>
        </div>
      }
      >
      </AppFrame>
        {/* <h1>Home</h1>
        <Link to='/customers' >Listado de Clientes</Link> */}
    </div>
  )
}

export default HomeContainer