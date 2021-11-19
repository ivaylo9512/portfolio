const Shadow = ({ id, dx = 0.45, dy = 3.549, stdDeviation = 2.646, floodOpacity = 0.35}) => {
    return(
        <filter id={id} x='-20%' y='-20%' width='160%' height='160%'>
            <feOffset result='offset' dx={dx} dy={dy} in='SourceAlpha'></feOffset>
            <feGaussianBlur result='blur' stdDeviation={stdDeviation}></feGaussianBlur>
            <feFlood result='flood' floodOpacity={floodOpacity}></feFlood>
            <feComposite result='composite' operator='in' in2='blur'></feComposite>
            <feBlend result='blend' in='SourceGraphic'></feBlend>
        </filter>
    )
}

export default Shadow