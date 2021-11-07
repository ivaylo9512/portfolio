import X from "cv/icons/X.js";
import './Background.css';
import Circles from "../Circles/Circles.js";

const Background = () => {
    return(
        <div className="background">
            <Circles />
            <div className="letters">
                <X/>
                <X/>
                <X/>
            </div>
        </div>
    )
}

export default Background