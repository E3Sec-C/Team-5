import React, { useState, useEffect } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";

const List = ({url}) => {
   // const url = "http://localhost:4000"; // Ensure the correct protocol
    const [list, setList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchList = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(`${url}/api/food/list`);
            //console.log(response.data);
            if (response.data.success) {
                setList(response.data.data);
            } else {
                toast.error("Failed to fetch the list.");
            }
        } catch (error) {
            console.error(error);
            toast.error("Error fetching data. Please check your server.");
        } finally {
            setIsLoading(false);
        }
    };
    const removeFood = async (foodId) => {
        try {
            console.log("Attempting to remove item with ID:", foodId);
    
            const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
    
            if (response.data.success) {
                toast.success(response.data.message);
                setList((prevList) => prevList.filter((item) => item._id !== foodId));
            } else {
                console.error("API Response Error:", response.data);
                toast.error(response.data.message || "Error removing item.");
            }
        } catch (error) {
            console.error("Error during deletion:", error);
            if (error.response) {
                toast.error(error.response.data.message || "Server error.");
            } else {
                toast.error("Unexpected error occurred.");
            }
        }
    };
    
    

    useEffect(() => {
        fetchList();
    }, []);

    return (
        <div className="list add flex-col">
            <p>All Foods List</p>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div className="list-table">
                    <div className="list-table-format title">
                        <b>Image</b>
                        <b>Name</b>
                        <b>Category</b>
                        <b>Price</b>
                        <b>Action</b>
                    </div>
                    {list.map((item, index) => (
                        <div key={index} className="list-table-format">
                            <img src={`${url}/images/${item.image}`} alt={item.name} />
                            <p>{item.name}</p>
                            <p>{item.category}</p>
                            <p>${item.price}</p>
                            <p onClick={()=>removeFood(item._id)} className="cursor">Delete</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default List;
