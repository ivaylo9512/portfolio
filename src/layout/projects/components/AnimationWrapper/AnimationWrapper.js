import { setVisited, resetVisited } from 'app/slices/animationsSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const AnimationWrapper = ({ SvgAnimation, className }) => {
    const [visitedClass, setVisitedClass] = useState('');
    const dispatch = useDispatch();

    const animate = (e) => {
        setVisitedClass('visited');
        dispatch(setVisited(className + '-visited'));
    }

    const resetAnimation = () => {
        setVisitedClass('');
        dispatch(resetVisited());
    }
    
    return (
        <div data-testid='animation-wrapper' className={`animation-wrapper ${className}`} onMouseEnter={animate}   onMouseLeave={resetAnimation} onTouchStart={animate} onTouchEnd={resetAnimation}>
            <div className={'translate-wrapper'}>
                <SvgAnimation className={`${className}-animation ${visitedClass}`}/>
            </div>
        </div>
    )
}

export default AnimationWrapper