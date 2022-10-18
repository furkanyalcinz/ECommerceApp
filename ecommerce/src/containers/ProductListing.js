import React, {useEffect} from "react";
import axios from "axios";
import {useSelector, useDispatch} from "react-redux";
import {setProducts} from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";
const ProductListing = () => {
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();
    const fechProduct = async ()=>{
        const response = await axios.get('https://fakestoreapi.com/products').catch((err) => {
            console.log('Err',err);
        });
        dispatch(setProducts(response.data));
    }
    useEffect(()=> {
        fechProduct();
    }, []);
    console.log("Products: " ,products);
    return(
        <div className="ui grid container">
            <ProductComponent />
        </div>
    );
};

export default ProductListing;