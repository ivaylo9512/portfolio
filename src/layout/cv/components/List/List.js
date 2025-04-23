import Ribon from '@cv/components/Ribon/Ribon';
import ListSvg from '@svgIcons/ListSvg';
import './List.scss';
import { useEffect, useRef, useState } from 'react';
import useResize from 'AppRoot/hooks/useResize';

const List = ({ ribon, children, className }) => {
    const overflow = useRef();
    const {dimensions} = useResize();
    const [height, setHeight] = useState();
    const [toggle, setToggle] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isInitial, setIsInitial] = useState(true);

    useEffect(() => {
        overflow.current.style.maxHeight = "unset";
        overflow.current.style.opacity = "0";
        overflow.current.style.transition = "all 0s";

        setTimeout(() => {
            setHeight(overflow.current.offsetHeight * 1.1);
            overflow.current.style.maxHeight = !toggle ? overflow.current.offsetHeight + "px" : 0;
            overflow.current.style.padding = !toggle ? "1% 5%" : "0% 5%";
            overflow.current.style.opacity = 1;
            overflow.current.style.transition = "all 2s";
        }, 10);
    },[dimensions]);
    
    useEffect(() => {
        if(!isInitial){
            if(!isAnimating){
                overflow.current.style.maxHeight = !toggle ? height + "px" : 0;
                overflow.current.style.padding = !toggle ? "1% 5%" : "0% 5%";

                setIsAnimating(true);

                setTimeout(() => {
                    setIsAnimating(false);
                }, 2000);
            }
        }
    }, [toggle]);

    useEffect(() => {
        setIsAnimating(true);
        setToggle(true);
        setTimeout(() => {
            overflow.current.style.maxHeight = 0 + "px";
            overflow.current.style.padding = "0% 5%";

            setTimeout(() => {
                setIsAnimating(false);
                setIsInitial(false);
            }, 2000);
        }, 4000);
    }, [])

    const toggleHeight = () => {
        if(!isAnimating){
            setToggle(toggle => setToggle(!toggle));
        }
    }

    return(
        <div className={'list ' + className }> 
            <div onClick={toggleHeight}>
                <Ribon ribon={ribon}>
                    <ListSvg />
                </Ribon>
            </div>
            <div className="overflow" ref={overflow}>
                {children}
            </div>
        </div>
    )
}

export default List