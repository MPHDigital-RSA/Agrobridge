import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
const ProductContext = React.createContext();
const ProductUpdateContext = React.createContext();
const ProductsLoadingStateContext = React.createContext();
const ProductsLoadingContext = React.createContext();

// creating a custom hook to access the productContext
export function useProducts() {
    return useContext(ProductContext)
}
// load products
export function useLoadProducts() {
    return useContext(ProductsLoadingContext)
}
// update products
export function useProductsUpdate() {
    return useContext(ProductUpdateContext)
}
// load products
export function useProductsLoadingState() {
    return useContext(ProductsLoadingStateContext)
}

export function ProductProvider({ children }) {

    // my products data
    const [products, setProducts] = useState([])
    const [areProductsLoaded, setAreProductsLoaded] = useState(false);

    // function
    function updateProducts() {
        console.log("yes the state works")
    }

    // function
    function loadProducts() {
        // console.log("loading FN")
        axios.get('/data.json')
            .then(res => {
                // console.log(res.data);
                setProducts(res.data);
                setAreProductsLoaded(true);
            }).catch(err => {
                console.log(err);
                setAreProductsLoaded(false);
            })
    }

    return (
        <ProductContext.Provider value={products}>
            <ProductUpdateContext.Provider value={updateProducts}>
                <ProductsLoadingContext value={loadProducts}>
                    <ProductsLoadingStateContext value={areProductsLoaded}>
                        {children}
                    </ProductsLoadingStateContext>
                </ProductsLoadingContext>
            </ProductUpdateContext.Provider>
        </ProductContext.Provider>
    )

}