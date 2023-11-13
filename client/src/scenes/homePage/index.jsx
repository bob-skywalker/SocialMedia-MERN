import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "scenes/navbar";
import UserWidget from "scenes/widgets/UserWidgets";



const HomePage = () => {
    const user = useSelector((state) => state.user);

    return (
        <>
            <Navbar />
            <UserWidget 
                userId={user._id}
                picturePath={user.picturePath}
                />
        </>
    )
}

export default HomePage;