import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "scenes/navbar";

const HomePage = () => {
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/")
        }
    }, [user, navigate]);

    return (
        <>
            <Navbar />
            <div>Homepage</div>
        </>
    )
}

export default HomePage;