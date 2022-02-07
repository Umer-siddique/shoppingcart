import React from 'react'

const CartHeader = () => {
    return (
        <>
            <header className="container cart-container">
                <div className="row cart-header">
                    <div className="col-12 col-sm-6 header-c1">
                        <span><i className="fas fa-arrow-left"></i></span>
                        <h3>continue shopping</h3>
                    </div>
                    <div className="col-12 col-sm-6 header-c2">
                        <i className="fas fa-shopping-cart"></i>
                        <p className='shopping-count'>0</p>
                    </div>
                </div>
                <hr />
            </header>
        </>
    )
}

export default CartHeader;
