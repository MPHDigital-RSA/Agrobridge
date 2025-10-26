
// for storing the token 
export function setItem(key, value) {
    try {
        window.sessionStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
        console.log(err);
    }
}

// for getting the token
export function getItem(key) {
    try {
        const item = window.sessionStorage.getItem(key);
        return item ? JSON.parse(item) : undefined;
    } catch (err) {
        console.log(err);
    }
}

// for loging out
export function removeItem(key) {
    try {
        window.sessionStorage.removeItem(key);
    } catch (error) {
        console.log(err);
    }
}

export function isUserLogged() {

    // if there is a token in the local storage the user is logged otherwise its not

    if (getItem("token")) {
        return true
    } else {
        return false
    }

}