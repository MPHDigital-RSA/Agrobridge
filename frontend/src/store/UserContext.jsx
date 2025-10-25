import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

const UserContext = React.createContext();
const UserLoggedStateContext = React.createContext();

// create custom Hooks

// load user
export function useLoadUserData() {
    return useContext(UserContext);
}

// load user
export function useLoggedStateOfUser() {
    return useContext(UserLoggedStateContext);
}

export function UserProvider({ children }) {

    // user logged state
    const [isUserLogged, setIsUserLogged] = useState(false);

    // user Info
    const [userData, setUserData] = useState([]);

    // load user information
    function loadUserinfo() {
        // call the API and find the user info

        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                // console.log(res.data);
                setUserData(res.data);
                setIsUserLogged(true);
            }).catch(err => {
                console.log(err);
                setIsUserLogged(false);
            })
    }

    useEffect(() => {
        loadUserinfo()
    }, [])

    return (
        <UserContext.Provider value={userData}>
            <UserLoggedStateContext value={isUserLogged}>
                {children}
            </UserLoggedStateContext>
        </UserContext.Provider>
    )

}