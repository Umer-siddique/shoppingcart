import React, { useContext } from 'react'
import { ContextCart } from './Cart';

const Item = ({id,title,description,price,imgsrc,quantity}) => {

    const {deleteItem,Increment}=useContext(ContextCart);

    return (
        <>

            <div className="row Data-Container">
                <div className="col-12 col-sm-6">

                    <div className="row h-100
                                 d-flex justify-content-center align-item-center">

                        <div className="col-12 col-sm-12 col-md-6 img-div ">
                            <img src={imgsrc}
                                alt="mobile-img" className="image-fluid" />
                        </div>

                        <div className="col-12 col-sm-12 col-md-6
                                     d-flex flex-column justify-content-center title-div">
                            <h3>{title}</h3>
                            <h5>{description}</h5>
                        </div>

                    </div>
                </div>
                <div className="col-12 col-sm-6">
                    <div className="row h-100 count-icons-div
                                  d-flex justify-content-center align-items-center">
                        <div className="col-12 col-sm-10 col-md-4 p-2 d-flex justify-content-center align-items-center">
                            <i className="fas fa-minus" title="Decrease Quantity"></i>
                            <input type="text" className="input-field" placeholder={quantity}/>
                            <i className="fas fa-plus"
                             title="Increase Quantity"
                             onClick={()=>Increment(id)} 
                             >   
                             </i>
                        </div>
                        <div className="col-12 col-sm-10 col-md-4 p-2 d-flex justify-content-center">
                            <h4>${price} </h4>
                        </div>
                        <div className="col-12 col-sm-10 col-md-4 p-2 d-flex justify-content-center align-items-center">
                            <i className="fas fa-trash delete-icon"
                             title="Delete Product"
                             onClick={()=> deleteItem(id)}>
                            
                            </i>
                        </div>
                    </div>
                </div>
            </div>
            <hr />

        </>
    )
}

export default Item;
