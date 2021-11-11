const Rect = ({ height, width }) => {
    return(
        <svg className="rect" xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${width} ${height}`} xmlnsXlink="http://www.w3.org/1999/xlink" >
            <rect width="100%" height="100%" rx="10" ry="10"/>
        </svg>
    )
}

export default Rect