"use client";
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from './ui/button';
import { useAppDispatch } from '@/app/store/hooks';
import { addToCart } from '@/app/store/features/cart';
import {FaShoppingCart} from "react-icons/fa"

const AddToCartToast = ({cartItem}:any) => {
    const dispatch = useAppDispatch()
    const notify = () => toast.success('Product Added Successfuly', {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    
        });
  return (
      <>
    <div className='w-fit' onClick={()=>dispatch(addToCart(cartItem))} >
          
          <Button 
          onClick={notify}
          className='group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead mt-2 scroll-m-20 text-xs font-semibold tracking-tight rounded-xl '>
    <FaShoppingCart className="mr-2 h-4 w-4 group-hover:text-myOrange duration-300"/>
    Add to Cart
    </Button>

    </div>
              <ToastContainer
              position="top-left"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              />
              </>
  )
}

export default AddToCartToast