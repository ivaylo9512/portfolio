const Rect = ({ height, width, radius = 10 }) => {
    return(
        <svg className='rect' xmlns='http://www.w3.org/2000/svg' viewBox={`0 0 ${width} ${height}`} xmlnsXlink='http://www.w3.org/1999/xlink' >
            <rect width='100%' height='100%' rx={radius} ry={radius}/>
        </svg>
    )
}

export default Rect