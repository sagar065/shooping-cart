import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'
import { useState,useEffect } from 'react';

const Cart = () => {

  const {cart} = useSelector((state)=> state)

  const[totalAmount,setTotalAmount] = useState(0)

  
  useEffect(()=>{
    setTotalAmount(cart.reduce( (acc,curr) => acc + curr.price,0) );
  },[cart])
  
  return(
        
        <div>
            {
              cart.length > 0 ? 
              (
                <div className="flex flex-col w-full gap-5 p-4 md:flex-row items-start ">
                    <div className='w-full md:w-[70%] flex flex-col gap-y-5'>
                        {
                          cart.map((item,index)=>{
                            return(
                              <CartItem key={index} item={item} itemIndex={index}/>
                            )
                          })
                        }
                    </div>

                    <div className='w-full md:w-[30%] flex flex-col justify-between gap-y-5 border-2 border-gray-300 rounded-lg p-5 mih-h-[450px]'>
                       
                       <div className=' flex flex-col gap-y-2'>
                          <div className='uppercase text-green-800 font-semibold text-xl tracking-wider'>
                            Your Cart
                          </div>
                          <div className=' font-bold text-green-800 text-3xl md:text-4xl uppercase tracking-tight'>
                            Summary
                          </div>
                          <p className=' text-gray-700 text-lg font-semibold mt-3'>
                            Total Items:<span className="text-black font-bold">{cart.length}</span>
                          </p>
                       </div>

                       <div className='mt-10'>
                          <p className=' text-gray-700 font-semibold text-lg flex justify-between items-center whitespace-nowrap'>
                            Total Amount:<span className='text-black font-bold'>${totalAmount.toFixed(2)}</span>
                          </p>
                          <button className=' bg-green-700 hover:bg-green-800 transition-colors  duration-300 rounded-lg py-3 w-full text-white font-bold mt-4 text-lg'>
                              CheckOut Now
                          </button>
                       </div>

                    </div>

                </div>   
                    
              ) : 
              (
                <div className=' flex flex-col justify-center items-center gap-y-5 h-[80vh]'>
                  <h1 className='text-gray-700 font-semibold text-xl'> Your Cart is Empty!</h1>
                  <Link to="/">
                        <button className='bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider'>Shop Now</button>
                  </Link>
                
                </div>
              )
            }
        </div>
  ) 
    
};

export default Cart;
