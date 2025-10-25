import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

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
        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                // console.log(res.data);
                setProducts(res.data);
                setAreProductsLoaded(true);
            }).catch(err => {
                console.log(err);
                setAreProductsLoaded(false);
            })
    }

    // load single product
    function loadSingleProduct(id) {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => {
                // console.log(res.data);
                setProduct(res.data);
                setIsProductLoaded(true);
            }).catch(err => {
                console.log(err);
                setIsProductLoaded(false);
            })
    }

    // delete single product
    function deleteProduct(id) {

    }

    // create single product
    function createProduct(product) {

    }

    return (
        <ProductContext.Provider value={{ products, updateProducts, loadProducts, areProductsLoaded, loadSingleProduct, product, isProductLoaded }}>
            {children}
        </ProductContext.Provider>
    )

}