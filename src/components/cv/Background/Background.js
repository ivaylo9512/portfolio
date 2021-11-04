import X from "../icons/X.js";
import './Background.css';
import Circles from "./Circles/Circles.js";
import SvgFilters from "./SvgFilters.js";

const Background = () => {
    return(
        <div className="background">
            <SvgFilters />
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