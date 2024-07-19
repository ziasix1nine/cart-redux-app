import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { RemoveItem, Increase,Dicrease } from '../redux/CartItemSlicer'

function ItemList() {

  const cartitems = useSelector(state => state.items)
  const dispatch = useDispatch();

  // const totalCount =  cartitems.reduce((sum,current)=>sum+current.quantity,0)
  // console.log(totalCount)

  return (
    <>
      <div className='container flex justify-center mt-5'>
        <h1>Your Item List</h1>
        <div className='flex justify-center mt-5'>

          <ul>
            {cartitems.map(item => 
              <li>{item.text} 
              <button onClick={() => dispatch(RemoveItem(item.id))} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button> 
              <button onClick={() => dispatch(Increase(item.id))} className='bg-green-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>Increase</button>
              <button onClick={()=>dispatch(Dicrease(item.id))} className='bg-red-700 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>Dicrease</button>
              </li>)}

          </ul>
        </div>
      </div>

    </>
  )
}

export default ItemList