import { Link } from "react-router-dom";
//changes visibility of password field when eye icon is clicked
function toggleVisible() {
    const field = document.getElementById("password");
    const eye = document.getElementById("toggleVisible");
    if (field.type === "password") {
        field.type = "text";
        eye.className = "far fa-eye-slash"
    } else {
        field.type = "password";
        eye.className = "far fa-eye";
    }
}

function setMenu(isLoggedIn) {
    const nav = document.getElementById("nav");
    if (isLoggedIn) {
        nav.innerHTML =
        '<ul>' +
            '<li key="4" class="button"><a href="/home">Home</a></li>' +
            '<li key="5" class="button"><a href="/account">Account</a></li>' +
            '<li key="6" class="button"><a href="/wishlist">WishList</a></li>' +
        '</ul>';
    } else {
        nav.innerHTML =
        '<ul>' +
            '<li key="1" class="button"><a href="/">Log In</a></li>' +
            '<li key="2" class="button"><a href="/register">Sign Up</a></li>' +
            '<li key="3" class="button"><a href="/demo">Demo</a></li>' +
        '</ul>';
    }
}

export default toggleVisible;
export {setMenu};