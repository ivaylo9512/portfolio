const Circle = ({ viewBox = '47 47'}) => {
    return(
        <svg className="circle" viewBox={`0 0 ${viewBox}`} xmlns="http://www.w3.org/2000/svg">
            <circle r="50%" cx="50%" cy="50%"></circle>
        </svg>
    )
}
export default Circle
