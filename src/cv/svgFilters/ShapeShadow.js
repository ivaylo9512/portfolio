const ShapeShadow = () => {
    return(
        <filter id="shape-shadow" x="-20%" y="-20%" width="160%" height="160%">
            <feOffset result="offset" dx="0.45" dy="1.949" in="SourceAlpha"></feOffset>
            <feGaussianBlur result="blur" stdDeviation="2.646"></feGaussianBlur>
            <feFlood result="flood" flood-opacity="0.35"></feFlood>
            <feComposite result="composite" operator="in" in2="blur"></feComposite>
            <feBlend result="blend" in="SourceGraphic"></feBlend>
        </filter>
    )
}

export default ShapeShadow