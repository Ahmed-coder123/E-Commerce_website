import React ,{ Component } from 'react'
import data from '../store.js';
export default class Product extends Component {
    render(){
        return(
            <>  
            <div className="row text-center mt-5 pt-5">
            {data.map((value,index)=>{
                return(
                    <div key={value.id} className="col-md-4">  
                    <div className="item"   >
                        <img height="320px" src={value.image} className="w-100 img-product" alt="" data-toggle="modal" data-target="#exampleModal"  />
                        <div className="cartTitle" data-toggle="modal" data-target="#exampleModal"   >

                        {/* <!-- Modal --> */}

                        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <div className="row">
            <div className="col-md-6">
                <img src="https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg" className="w-100" alt="" />
            </div>
            <div className="col-md-6">
                    <h4> Product  Description</h4>
                    <h6 className="my-4">{value.title}</h6>
                    <p className="my-4" >Price : {value.price}</p>
            </div>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={() => {
                      this.props.addItem(value)
                    }}  > Add Product </button>
      </div>
    </div>
  </div>
</div>









                            {/*-------------------  */}
                        <h6 className="my-4">{value.title}</h6>
                        <span>${value.price}</span>
                        </div>
                        <button onClick={()=>{
                            this.props.addItem(value)
                        }} className = "btn mainColor text-white d-block w-100 mb-4 button"> <span> Add To Cart</span></button>

                    </div>
                    </div>
                )
            })}
            </div>
                
            </>
        )
    }
}