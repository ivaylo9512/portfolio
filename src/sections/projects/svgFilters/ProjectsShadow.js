const ProjectsShadow = ({ id }) => {
    return(
        <filter id={id} x='-20%' y='-20%' width='160%' height='160%'>
            <feOffset result='offset' in='SourceAlpha'/>
            <feGaussianBlur result='blur' stdDeviation='1.236'/>
            <feFlood result='flood' floodOpacity='0.97'/>
            <feComposite result='composite' operator='in' in2='blur'/>
            <feBlend result='blend' in='SourceGraphic'/>
        </filter>
    )
}

export default ProjectsShadow
