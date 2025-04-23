const Rect = ({ height, width, radius = 10, toggleHeight, isToggle }) => {
    return(
        <svg className='rect' xmlns='http://www.w3.org/2000/svg' viewBox={`0 0 ${width} ${isToggle == undefined ? height : isToggle ? height : toggleHeight}`} xmlnsXlink='http://www.w3.org/1999/xlink' >
            <rect width='100%' height='100%' rx={radius} ry={radius}> 
           {isToggle ?
                <animate attributeName="height" from={isToggle ? height : toggleHeight} to={isToggle ? toggleHeight : height} repeatDur="0.5s" fill="freeze"/>
                :
                <animate attributeName="height" from={isToggle ? height : toggleHeight} to={isToggle ? toggleHeight : height} repeatDur="0.5s" fill="freeze"/>
           }
            </rect>
            </svg>
    )
}

export default Rect