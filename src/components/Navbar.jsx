import React ,{ Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Navbar extends Component {
    render(){
        return(
            <>
               <nav className="navbar navbar-expand-lg navbar-dark mainColor py-3 ">
               <div className="container">
  <a className="navbar-brand" href="#">Store App</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">

      <li className="nav-item active">
        <NavLink className="nav-link" to="Product">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item text-white ">
          <NavLink to='ListProduct' className="listItem">List</NavLink>
           
      </li>

      <li className="nav-item text-white cart     position-relative">
        <span >{this.props.totalPrice.toFixed(2)}</span>
        <span>Cart <i className="fa fa-shopping-cart"></i> </span>
        
        <span className="badge badge-info p-2 cartBadge "> {this.props.totalQty} </span>
      </li>

      


    </ul>

  </div>
  </div>
</nav>
            </>
        )
    }
}