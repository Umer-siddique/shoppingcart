import React,{useContext} from 'react'
import CartHeader from './CartHeader';
import Item from './Item';
import { ContextCart } from './Cart';


const CartContext = () => {

    const {item , deleteCart}=useContext(ContextCart);

    if(item.length===0){
        return(
            <>
              <CartHeader />
               <div className="container col-12 cart-section-header">
                    <h2>shopping cart</h2>
                    <p className="fs-5 text-capitalize mt-3 ">You have <span className="fw-bold"> 0 </span> item in shopping cart</p>
                </div>
                
            </>
        )
    }

    return (
        <>

            <CartHeader />

            <section className="cart-section">
                <div className="container col-12 cart-section-header">
                    <h2>shopping cart</h2>
                    <p className="fs-5 text-capitalize mt-3 ">You have <span className="fw-bold"> 7 </span> item in shopping cart</p>
                </div>

                <div className="container cart-items-section">

                    <div className="cart-items">
                        {/* <Scrollbars > */}
                        {
                            item.map((currItem, index) => {
                                return <Item key={currItem.id} {...currItem} />;
                            })
                        }
                        {/* </Scrollbars> */}

                    </div>

                </div>
            </section>

            <div className="container d-flex justify-content-end text-center p-2">
                <div className="total-amount w-25">
                    <h2>card total: <span className='amount'>$2300</span></h2>
                    <button className="checkout-btn" title="Check Out">check out</button>
                    <button className='checkout-btn' style={{background:"red",marginLeft:"1rem"}}
                     title="Delete All Item" onClick={deleteCart}>
                         clear cart
                     </button>
                </div>
            </div>


        </>
    )
}

export default CartContext;
