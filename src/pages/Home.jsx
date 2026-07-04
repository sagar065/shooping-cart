import { useEffect, useState } from "react";
import Spinner from "../components/Spinner"
import Product from "../components/Product"

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const[loading,setLoading] = useState(false)
  const[productData,setProductData] = useState([])

  async function fetchProductData(){
    setLoading(true)

    try{
      const response = await fetch(API_URL)
      const data = await response.json()
      console.log("print data",data)
      setProductData(data)
    }
    catch(error){
      console.log(error)
      setProductData([])
    }
    setLoading(false)
  }

  useEffect(()=>{
    fetchProductData()
  },[])

  return (
    <div>
        {
          loading ? (<Spinner/>) : 
          (
              productData.length > 0 ? (
                <div className="grid md:grid-cols-3 xssm:grid-cols-2 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
                    {
                      productData.map((item)=>{
                      return(
                        <Product key={item.id} item={item}/>
                      )
                      })
                    }
                </div>
               
              ) : 
              (<div className="flex justify-center items-center">
                <p>No Items Found</p>
              </div>)
          )
        }
    </div>

  )
};

export default Home;
