import { useState } from "react";
import FavList from "./FavList";
import FavBtnStroke from './icons/favBtnStroke'

const Fav = () => {
    
    const [FavListVisible, setFavListVisible] = useState(false)

    const handleFavBtn = () =>{
        setFavListVisible(prevState => !prevState)
    }


    return (
        <div className="fav-container">
            <span className="favBtn" onClick={handleFavBtn}>
                <FavBtnStroke size={"26px"}></FavBtnStroke>
            </span>
            <div className={`fav-list-container ${FavListVisible ? "show" : ""} `}>
                <FavList></FavList>
            </div>
        </div>
    );
};

export default Fav;
