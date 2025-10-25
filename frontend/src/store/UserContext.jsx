import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { setItem } from "../utilities/sessionStorage";

// create the user context.
const UserContext = React.createContext();

// create custom Hooks
// load user
export function useUserData() {
    return useContext(UserContext);
}

export function UserProvider({ children }) {

    // user logged state
    const [isUserLogged, setIsUserLogged] = useState(false);

    const [newUser, setNewUser] = useState({});
    const [message, setMessage] = useState("");

    // user Info
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
        axios.post('http://localhost:4000/api/auth/signup', user)
            .then(res => {
                // console.log(res.data);
                setNewUser(res.data.user);
                setMessage(res.data.message);
                setIsUserLogged(true);

                setItem("token", res.data.token);
                console.log(res.data.message)

            }).catch(err => {
                console.log(err);
                setIsUserLogged(false);
            })

    }

    // login existing user
    function logingIn(user) {
        axios.post('http://localhost:4000/api/auth/login', user)
            .then(res => {
                // console.log(res.data);
                setNewUser(res.data.user);
                setMessage(res.data.message);
                setIsUserLogged(true);

                setItem("token", res.data.token);
                console.log(res.data.message)

            }).catch(err => {
                console.log(err.response.data);
                setIsUserLogged(false);
            })
    }

    // login out the user
    function logingOut() {
        // log the user out when a logout button is clicked!
    }

    return (
        <UserContext.Provider value={{ userData, isUserLogged, loadUserinfo, createUser, logingIn, logingOut }}>
            {children}
        </UserContext.Provider>
    )

}