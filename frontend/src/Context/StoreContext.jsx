import { createContext, useState, useEffect } from "react";
import { food_list } from "../assets/assets"; // Assuming this is your food data
import axios from "axios"
// Create the context
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const url="http://localhost:4000"
  const [token,setToken]=useState("");
  //const [food_list,setFoodList]=useState([])

  // Function to add an item to the cart
  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const newCart = { ...prev };
      if (newCart[itemId] > 1) {
        newCart[itemId] -= 1;
      } else {
        delete newCart[itemId];
      }
      return newCart;
    });
  };

  // Function to calculate the total cart amount
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItem[item];
        }
      }
    }
    return totalAmount;
  };
  /*const fetchFoodList=async()=>{
    const response=await axios.get("/api/food/list");
    setFoodList(response.data.data)
  }*/
  useEffect(()=>{
    
      //async function loadData(){
        //await fetchFoodList();
      if(localStorage.getItem("token")){
        setToken(localStorage.getItem("token"));
      }
    
    //loadData();
    
  },[])

  // Context value to provide
  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
