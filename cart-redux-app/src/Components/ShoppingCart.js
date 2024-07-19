import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddItem } from '../redux/CartItemSlicer';

function ShoppingCart() {

const Devices =
    [{
        "id": "01J31FPWXHWJME59VZCG3V8A20",
        "product_name": "BenQ-Siemens E81",
        "product_price": 1233,
        "product_image": "http://dummyimage.com/100x100.png/cc0000/ffffff"
      }, {
        "id": "01J31FPWXJM4C8EZXG0RE0R7XZ",
        "product_name": "HTC Wildfire",
        "product_price": 1008,
        "product_image": "http://dummyimage.com/100x100.png/dddddd/000000"
      }, {
        "id": "01J31FPWXKC9TX35FTJ5P9PVSC",
        "product_name": "Maxwest Astro X55",
        "product_price": 688,
        "product_image": "http://dummyimage.com/100x100.png/ff4444/ffffff"
      }, {
        "id": "01J31FPWXMQ0VS5M4Y7CXS3NGG",
        "product_name": "Maxwest Gravity 5 LTE",
        "product_price": 1209,
        "product_image": "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
      }, {
        "id": "01J31FPWXNBWMW7BJ2MRNN7VRJ",
        "product_name": "alcatel OT-903",
        "product_price": 1027,
        "product_image": "http://dummyimage.com/100x100.png/dddddd/000000"
      }, {
        "id": "01J31FPWXN7APKD0E7EXPYR9X9",
        "product_name": "Samsung Acclaim",
        "product_price": 1354,
        "product_image": "http://dummyimage.com/100x100.png/ff4444/ffffff"
      }, {
        "id": "01J31FPWXPFAZG6FCD108G1BEC",
        "product_name": "Micromax A109 Canvas XL2",
        "product_price": 868,
        "product_image": "http://dummyimage.com/100x100.png/ff4444/ffffff"
      }, {
        "id": "01J31FPWXQDV5FC81QP02QYWW7",
        "product_name": "Icemobile Rock Mini",
        "product_price": 1323,
        "product_image": "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
      }, {
        "id": "01J31FPWXQXJ8TS5D22TMN6RN5",
        "product_name": "i-mobile TV 530",
        "product_price": 1055,
        "product_image": "http://dummyimage.com/100x100.png/cc0000/ffffff"
      }, {
        "id": "01J31FPWXRZX0K9JM6JY1G282C",
        "product_name": "Bird S768",
        "product_price": 708,
        "product_image": "http://dummyimage.com/100x100.png/ff4444/ffffff"
      }];


      const dispatch = useDispatch();



  return (
    <>
      <div className='flex justify-center mt-20 w-full overflow-x-auto '>
  <div className='flex gap-5 ml-10'>
    {Devices.map((item) => (
      <div key={item.id} className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 min-w-[250px]">
        <a href="#">
          <img className="p-8 rounded-t-lg" src={item.product_image} alt="product image" />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{item.product_name}</h5>
          </a>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">{item.product_price}</span>
            <button  href="#" onClick={()=>dispatch(AddItem({
  id: item.id,
  name: item.product_name,
  price: item.product_price,
  quantity: 1  // You can initialize quantity here or handle it in the reducer
}))} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">ADD TO CART</button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

    </>
  )
}

export default ShoppingCart