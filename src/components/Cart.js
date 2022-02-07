import React, { createContext, useReducer } from 'react';
// import Scrollbars from 'react-custom-scrollbars-2';
import CartContext from './CartContext';
import products from './Product';
import reducer from './Reducer';

export const ContextCart = createContext();

const initialState={

    item : products,
    totalAmount:0,
    totalQuantity:0
}


const Cart = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const deleteItem=(id)=>{
        return dispatch({
            type:"DELETE_ITEM",
            payload:id
        })
     }

     const deleteCart=()=>{
         return dispatch({
             type:"DELETE_WHOLE_CART"
         })
     }
        
     const Increment=(id)=>{
         return dispatch({
             type:"INCREMENT",
             Payload: id
         })
     }
    

    return (
        <>
            <ContextCart.Provider value={{...state , deleteItem , deleteCart , Increment}}>
                <CartContext />
            </ContextCart.Provider>
        </>
    )
}

export default Cart;
