import { useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import toast  from "react-hot-toast";
import { remove } from "../redux/slices/cartSlice"



const CartItem = ({item,itemIndex}) => {

const disPatch = useDispatch()

function removeFromCart(){
  disPatch(remove(item.id))
  toast.success("Item Remove From Cart")
}
  return (
      
          <div className=" flex flex-col md:flex-row justify-between items-center gap-y-5 md:gap-x-10 p-5 border-2 border-gray-300 rounded-lg">
               
              <div className=" w-full md:w-[25%]">
                <img src={item.image} alt={item.title} 
                  className="w-full h-auto max-h-[160px] object-contain max-auto"
                />
              </div>

              <div className=" w-full md:w-[75%] flex flex-col gap-y-3">
                  <h1 className=" font-semibold text-lg md:text-xl text-gray-700">{item.title}</h1>
                  <p className="mt-3 md:mt-7 text-gray-600">{item.description.split(" ").slice(0,15).join(" ") + "..."}</p>
                  
                  <div className=" flex justify-between items-center mt-5">
                      <p className=" text-green-600 font-bold text-xl">${item.price}</p>
                      <div onClick={removeFromCart} className=" h-11 w-11 rounded-full bg-red-300 flex justify-center items-center hover:bg-red-500 transition-all duration-300 cursor-pointer">
                        <MdDelete />
                      </div>
                  </div>
              </div>



          </div>

      
  )
};

export default CartItem;
