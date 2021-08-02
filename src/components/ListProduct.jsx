import React, { Component } from 'react'

export default class ListProduct extends Component {
  render() {
    return (
      <>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Image</th>
              <th scope="col">Qty</th>
              <th scope="col">Remove</th>

            </tr>
          </thead>
          <tbody>

            {this.props.cartItems.length === 0 ? <h4>Cart Is Empty</h4> : ''}
            {this.props.cartItems.map((value, index) => {
              return (
              
                  <tr key={value.id}>
                    <th scope="row">{value.id}</th>
                    <td   >{value.title}</td>
                    <td>${value.price}</td>
                    <td className="overflow-hidden"> <img src={value.image} className=" img-box" alt="" /></td>
                    <td> <span onClick={() => {
                      this.props.addItem(value)
                    }} > <i class="fa fa-plus fa-2x btn-icon"></i> </span>
                      <span>{value.qty}</span>
                      <span onClick={() => {
                        this.props.removeItem(value)
                      }}> <i class="fa fa-minus fa-2x btn-icon"></i> </span>

                    </td>
                    <td> <span onClick={() => {
                      this.props.deleteItem(value)
                    }}> <i class="fa fa-trash fa-2x"></i> </span></td>
                  </tr>
              
              )
            })}




          </tbody>
        </table>
      </>
    )
  }
}



