import { useState } from "react";
import FavList from "./FavList";
import FavBtnFill from './icons/FavBtnFill'

const Fav = () => {
    
    const [FavListVisible, setFavListVisible] = useState(false)

    const handleFavBtn = () =>{
        setFavListVisible(prevState => !prevState)
    }


    return (
        <div className="fav-container">
            <span className="favBtn" onClick={handleFavBtn}>
                <FavBtnFill size={"26px"}></FavBtnFill>
            </span>
            <div className={`fav-list-container ${FavListVisible ? "show" : ""} `}>
                <FavList></FavList>
            </div>
        </div>
    );
};

export default Fav;
