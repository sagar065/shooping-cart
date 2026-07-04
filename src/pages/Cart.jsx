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
                <div className="flex flex-col md:flex-row justify-between items-start gap-y-10 md:gap-x-10 p-10">
                    <div className='w-full md:w-[70%] flex flex-col gap-y-5'>
                        {
                          cart.map((item,index)=>{
                            return(
                              <CartItem key={index} item={item} itemIndex={index}/>
                            )
                          })
                        }
                    </div>

                    <div className='w-full md:w-[30%] flex flex-col gap-y-5 border-2 border-gray-300 rounded-lg'>
                       
                       <div className=' p-10 w-full flex flex-col gap-y-3'>
                          <div className='uppercase text-green-800 font-semibold text-xl -mb-3'>Your Cart</div>
                          <div className=' font-semibold text-green-800 text-[2.95rem] uppercase'>Summary</div>
                          <p className=' text-gray-700 text-xl font-semibold'>
                            Total Items:<span className="text-black">{cart.length}</span>
                          </p>
                       </div>

                       <div className=' p-10 w-full'>
                          <p className=' text-gray-700 font-semibold text-xl'>
                            Total Amount:<span className='text-black'>${totalAmount.toFixed(2)}</span>
                          </p>
                          <button className=' bg-green-700 rounded-lg px-6 py-5 w-full text-white font-bold mt-3 text-xl'>
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
