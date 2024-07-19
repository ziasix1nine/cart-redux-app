import { createSlice, nanoid } from "@reduxjs/toolkit"



const initialState = {
    items: [
        {
            id: 1,
            name: 'hello',
            price:1000,
            quantity:0,
        },

    ]
};


const CartItemSlicer = createSlice({


    name:'cart-items',
    initialState,
    reducers:{

         AddItem : (state,action)=>{

            const item = {
                id: action.payload.id,
                name: action.payload.name,
                price:action.payload.price,
                quantity:1,
         }
       // const { id, name, price, quantity } = action.payload;

         state.items.push(item);
        },

        RemoveItem:(state,action)=>{

            state.items= state.items.filter(item=>item.id!==action.payload)
        },

        Increase:(state,action)=>{

            const cartItem = state.items.find((item)=>item.id===action.payload)
            cartItem.quantity = cartItem.quantity+1;


        },

        Dicrease:(state,action)=>{

            const cartItem = state.items.find((item)=>item.id===action.payload)
            cartItem.quantity = cartItem.quantity-1;
        }
    }

});

export const {AddItem,RemoveItem,Increase,Dicrease} = CartItemSlicer.actions;
export default CartItemSlicer.reducer;