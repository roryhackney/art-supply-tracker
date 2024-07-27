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

export default toggleVisible;