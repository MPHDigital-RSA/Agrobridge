import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { getItem } from "../utilities/sessionStorage";

//creating a product context
const ProductContext = React.createContext();

// creating a custom hook to access the productContext
export function useProducts() {
    return useContext(ProductContext)
}

export function ProductProvider({ children }) {

    // all products state
    const [products, setProducts] = useState([]);
    const [areProductsLoaded, setAreProductsLoaded] = useState(false);

    // single product state
    const [product, setProduct] = useState([]);
    const [isProductLoaded, setIsProductLoaded] = useState(false);

    // helper FNs 

    // update single product
    function updateProducts() {
        console.log("Product updated")
    }

    // function all products
    function loadProducts() {
        // console.log("loading FN")
        // https://agrobridge-backend.vercel.app/api/products/
        axios.get('/data.json')
            .then(res => {
                // console.log(res.data.data);
                setProducts(res.data);
                setAreProductsLoaded(true);
            }).catch(err => {
                console.log(err);
                setAreProductsLoaded(false);
            })
    }

    // load single product
    function loadSingleProduct(id) {

        // first load all product
        // loadProducts();
        // call items and find one by id using filter
        const singleProduct = products.filter(product => (product._id == id));
        // this is the single product object
        // return singleProduct[0];

        setProduct(singleProduct[0]);

        // axios.get(`https://fakestoreapi.com/products/${id}`)
        //     .then(res => {
        //         // console.log(res.data);
        //         setProduct(res.data);
        //         setIsProductLoaded(true);
        //     }).catch(err => {
        //         console.log(err);
        //         setIsProductLoaded(false);
        //     })
    }

    // delete single product
    function deleteProduct(id) {
        axios.get(`https://fakestoreapi.com/products${id}`)
            .then(res => {
                // console.log(res.data);
                setProducts(res.data);
                setAreProductsLoaded(true);
            }).catch(err => {
                console.log(err);
                setAreProductsLoaded(false);
            })
    }

    // create single product
    function createProduct(product) {
        // successfully recieving the form values here...
        console.log(product)

        const token = getItem("token");

        axios.post(`https://agrobridge-backend.vercel.app/api/products/`, {
            data: product
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => {
                console.log(res.data);
                setProduct(res.data);
                setIsProductLoaded(true);
            }).catch(err => {
                console.log(err);
                setIsProductLoaded(false);
            })
    }

    return (
        <ProductContext.Provider value={{ products, updateProducts, loadProducts, areProductsLoaded, loadSingleProduct, product, isProductLoaded, createProduct, deleteProduct }}>
            {children}
        </ProductContext.Provider>
    )

}