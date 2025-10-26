import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { setItem, removeItem } from "../utilities/sessionStorage";

// create the user context.
const UserContext = React.createContext();

// create custom Hooks
export function useUserData() {
    return useContext(UserContext);
}

export function UserProvider({ children }) {

    // message from backend
    const [message, setMessage] = useState("");
    // user data
    const [userData, setUserData] = useState([]);
    // load user information
    function loadUserinfo() {
        // call the API and find the user info

        // axios.get('https://fakestoreapi.com/products')
        //     .then(res => {
        //         // console.log(res.data);
        //         setUserData(res.data);
        //         setIsUserLogged(true);
        //     }).catch(err => {
        //         console.log(err);
        //         setIsUserLogged(false);
        //     })

        // console.log("the route works")
    }

    // create new user
    function createUser(user) {
        axios.post('https://agrobridge-backend.vercel.app/api/auth/signup', user)
            .then(res => {
                // console.log(res.data);
                setUserData(res.data.user);
                setMessage(res.data.message);

                setItem("token", res.data.token);
                console.log(res.data.message);

            }).catch(err => {
                console.log(err);
                setMessage(err.response.data.message);
            })

    }

    // login existing user
    function logingIn(user) {
        axios.post('https://agrobridge-backend.vercel.app/api/auth/login', user)
            .then(res => {
                setUserData(res.data.user);
                setMessage(res.data.message);

                setItem("token", res.data.token);
                console.log(res.data.message);

            }).catch(err => {
                console.log(err)
                setMessage(err.response.data.message);
            })
    }

    // login out the user
    function logingOut() {
        // log the user out when a logout button is clicked!
        removeItem("token");
    }

    return (
        <UserContext.Provider value={{ userData, createUser, logingIn, logingOut, message }}>
            {children}
        </UserContext.Provider>
    )

}