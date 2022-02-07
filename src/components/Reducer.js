const reducer=(state,action)=>{
     
    if(action.type==="DELETE_ITEM"){

        return{
            ...state,
            item : state.item.filter((currElem) => currElem.id !== action.payload)
        }
    }
     
     if(action.type==="DELETE_WHOLE_CART"){
         return{
             ...state , item:[]
         }
     }

    if(action.type == "INCREMENT"){
        let updatedCart = state.item.map((currElem)=>{
             if(currElem.id==action.payload){
                 return {
                     ...currElem , 
                     quantity: currElem.quantity + 1
                    }
             }
             return currElem;
        });

        return {
            ...state, item:updatedCart
        }
    }

      return state;
}

export default reducer;