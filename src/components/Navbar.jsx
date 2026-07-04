import { MdShoppingCart } from "react-icons/md";
import { NavLink } from "react-router-dom"
import image from "../assets/logo.png"
import { useSelector } from "react-redux";
const Navbar = () => {

    const {cart} = useSelector((state) => state)
  
    return(
        <div className=" bg-slate-900">
            
            <nav className=" flex justify-between items-center h-20 max-w-6xl mx-auto">
                
                <NavLink to="/">
                  <div className="ml-5">
                    <img src={image} alt="Logo" className=" h-8 w-15 md:h-12 md:w-30"/>
                  </div>    
                </NavLink>
                
                <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
                    <NavLink to="/">
                        <p>Home</p>
                    </NavLink>

                    <NavLink to="/cart">
                       <div className=" relative">
                           <MdShoppingCart className="text-2xl"/>
                           {
                            cart.length > 0 &&
                            <span className=" absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">{cart.length}</span>
                           }    
                       </div>
                    </NavLink>    
                </div>
            
            </nav>
        </div>
  ) 
      
};

export default Navbar;
