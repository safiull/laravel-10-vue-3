const authMiddleware = (to, from, next) => {
    const token = localStorage.getItem("token");
    if (!token && to.path !== "/login") {
        // Token is missing and not on the login page, redirect to login
        next("/login");
    } else if (token && to.path === "/login") {
        // Token exists and on the login page, redirect to dashboard or desired route
        next("/dashboard"); // Replace '/dashboard' with your desired route
    } else {
        // Continue with the navigation
        next();
    }
};

export default authMiddleware;
