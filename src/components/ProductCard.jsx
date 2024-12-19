//import {addToCart} from "../constants/cart";
import {ShopContext} from "../context/cartContext"
import { useContext } from "react"
import { Link } from "react-router-dom";

const ProductCard = (props) => {

  const { addToCart} = useContext(ShopContext);

  return (
    <div className="flex flex-col group max-sm:flex-row gap-4" >
        <div className="relative max-sm:w-[100px]">
            <Link to={`products/${props.data.id}`}
            className="">
                <img src={props.data.img} alt="" 
                    className="max-sm:w-full"/>
            </Link>
            <button className="hidden group-hover:block bg-black text-white w-full 
            p-3 absolute bottom-0 hover:bg-yellow-500 hover:duration-500
            max-sm:block max-sm:right-[-200px] max-sm:text-sm max-sm:w-32"
            onClick={() => addToCart(props.data.id)}>
                Add To Cart
            </button>
        </div>
        
        <div className="flex flex-col items-center mt-5 font-semibold max-sm:items-start
        max-sm:mt-0">
            <Link to={`products/${props.data.id}`} className="text-xl max-sm:text-[16px] text-center hover:text-yellow-500 hover:duration-300">
                {props.data.name}
            </Link>
            <p className="max-sm:mt-5">
                ${props.data.price}
            </p>
        </div>
    </div>
  )
}

export default ProductCard
