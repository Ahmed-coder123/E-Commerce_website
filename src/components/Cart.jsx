import React, { Component } from 'react'

export default class Cart extends Component {
    render() {
     
        return (
            <>
                <div >
                    <h2 className=" cartItems my-5 py-2 "> Cart Items</h2>
                    {this.props.cartItems.length === 0 ? <h4>Cart Is Empty</h4> : ''}
                    {this.props.cartItems.map((value, index) => {
                        return (
                            <div key={value.id}>
                                <div className="cartItem overflow-hidden text-center">
                                    <div className="cartImg float-left">
                                        <img src={value.image} className="w-100 px-1" alt="" />
                                    </div>
                                    <div className="cartAction float-left ml-2 ">
                                        <h6 > {value.title} </h6>
                                        <p className="price">$ {value.price} </p>
                                        <button className="btn btn-info" onClick={() => {
                                            this.props.addItem(value)
                                        }}>+</button>
                                        <span className="px-3">{value.qty}   </span>
                                        <button className="btn btn-danger"  onClick={() => {
                                            this.props.removeItem(value)
                                        }}>-</button>
                                        <button className="btn btn-danger ml-2"  onClick={() => {
                                            this.props.deleteItem(value)
                                        }}> <i className="fa fa-trash"></i></button>
                                    </div>

                                </div>
                                <hr />
                            </div>
                        )
                    })}
                </div>
            </>
        )
    }
}