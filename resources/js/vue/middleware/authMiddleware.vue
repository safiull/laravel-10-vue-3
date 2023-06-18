<script>
const authMiddleware = (to, from, next) => {
    const token = localStorage.getItem('token');
    if (token) {
        next();
        console.log("Okay")
    } else {
        console.log("Okay else")
        next("/login");
    }
};

export default authMiddleware;
</script>
