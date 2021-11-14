import { getTransform, setTransform, resetTransform } from "app/slices/animationsSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const AnimationWrapper = ({ transalteAmount, SvgAnimation, className }) => {
    const [visited, setVisited] = useState('');
    const dispatch = useDispatch();
    const transform = useSelector(getTransform);

    const animate = (e) => {
        setVisited('visited');
        dispatch(setTransform(transalteAmount))
    }

    const resetAnimation = () => {
        setVisited('');
        dispatch(resetTransform());
    }
    
    return (
        <div onMouseEnter={animate} onMouseLeave={resetAnimation} onTouchStart={animate} onTouchEnd={resetAnimation} className={`${className}-animation-wrapper ${visited}`}>
            <div className={'translate-wrapper'} style={{ transform }}>
                <SvgAnimation className={`${className}-animation ${visited}`}/>
            </div>
        </div>
    )
}

export default AnimationWrapper