const DotShadow = () => {
    return(
        <filter id='dot-shadow' x='-20%' y='-20%' width='160%' height='160%'>
            <feOffset result='offset' dx='0.45' dy='1.949' in='SourceAlpha'></feOffset>
            <feGaussianBlur result='blur' stdDeviation='4.646'></feGaussianBlur>
            <feFlood result='flood' floodOpacity='0.55'></feFlood>
            <feComposite result='composite' operator='in' in2='blur'></feComposite>
            <feBlend result='blend' in='SourceGraphic'></feBlend>
        </filter>
    )
}

export default DotShadow