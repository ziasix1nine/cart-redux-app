import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddItem } from '../redux/CartItemSlicer';
function AddCartItem() {

  const [inputValue,setinputValue] = useState('');
  const dispatch = useDispatch();


 const handleAddToCart=()=>{

  if(inputValue){
    dispatch(AddItem(inputValue));
    setinputValue('')
  }


 }

  return (
    <>
    <div className='flex justify-center mt-5 gap-10'>
 
      <input class="block bg-gray-100 mb-2 text-sm font-medium text-gray-900 dark:text-white" value={inputValue} onChange={(e)=>setinputValue(e.target.value)}></input>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleAddToCart}> Add to cart</button>
   
     </div>
     </>
   



  )
}

export default AddCartItem