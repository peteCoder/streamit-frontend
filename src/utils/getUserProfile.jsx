export const getUserProfile = () => {
    const user = JSON.parse(localStorage.getItem("user_profile"))
    return user
}


