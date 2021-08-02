
import React, { Component } from 'react'
import Cart from './components/Cart';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Product from './components/product';
import Navbar from './components/Navbar';
import ListProduct from './components/ListProduct';

export default class App extends Component {
  state = { cartItems: [] };

   componentDidMount() {
      let data = JSON.parse(localStorage.getItem('data'))

      if (data != null){
        this.setState({ cartItems : data })
      }
   }

  addToLocalStorage = (data) => {
    localStorage.setItem("data" , JSON.stringify(data))
  }

  addItem = (item) => {
    let exist = this.state.cartItems.find((elm) => elm.id === item.id)

    if (exist) {
      let cart = this.state.cartItems.map((elm) => elm.id === item.id ? { ...exist, qty: exist.qty + 1 } : elm)
      this.setState({ cartItems: cart })
      this.addToLocalStorage(cart);

    } else {
      let cart = [...this.state.cartItems, { ...item, qty: 1 }];

      this.setState({ cartItems: cart })
      this.addToLocalStorage(cart);
    }


  }

  removeItem = (item) => {
    let exist = this.state.cartItems.find((elm) => elm.id === item.id)

    if (exist.qty > 1) {
      let cart = this.state.cartItems.map((elm) => elm.id === item.id ? { ...exist, qty: exist.qty - 1 } : elm)
      this.setState({ cartItems: cart })
      this.addToLocalStorage(cart);
    } else {
      this.deleteItem (item)
 

    }

  }

  deleteItem=(item)=>{
    let cart = this.state.cartItems.filter((elm) => elm.id !== item.id  )
    this.setState({ cartItems: cart })
    this.addToLocalStorage(cart);
  }

  render() {
      let totalQty = this.state.cartItems.reduce(( x , y ) => x + y.qty , 0  )
      let totalPrice = this.state.cartItems.reduce(( x , y ) => x + y.price * y.qty  , 0  )
    return (
      <>

      <Navbar  totalQty = {totalQty} totalPrice = {totalPrice} />
      <Switch>
      <Route  path="/ListProduct" render ={ (props) => <ListProduct {...props}  cartItems={this.state.cartItems}
       addItem={this.addItem} removeItem={this.removeItem}  deleteItem={this.deleteItem} /> }/>
       <div className="container">
         
      <Route  path="/Product"  render = {(props) => <Product {...props} addItem={this.addItem} cartItems={this.state.cartItems} /> } />
      </div>
      <Redirect from="/" exact to="/product" />
          
      

      </Switch>

      {/* <Navbar  totalQty = {totalQty} totalPrice = {totalPrice} />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-9">
              <Product addItem={this.addItem} />
            </div>
            <div className="col-md-3">
              <Cart cartItems={this.state.cartItems} addItem={this.addItem} removeItem={this.removeItem}  deleteItem={this.deleteItem} />
            </div>
          </div>
        </div> */}



      </>
    )
  }
}
